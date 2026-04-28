import json
import os

def handler(event: dict, context) -> dict:
    """Приём и получение заявок от клиентов страхового агента"""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    import psycopg2
    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()

    if event.get("httpMethod") == "POST":
        body = json.loads(event.get("body") or "{}")
        name = (body.get("name") or "").strip()
        phone = (body.get("phone") or "").strip()
        service = (body.get("service") or "").strip()

        if not name or not phone or not service:
            cur.close()
            conn.close()
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Заполните все поля"})}

        cur.execute(
            "INSERT INTO leads (name, phone, service) VALUES (%s, %s, %s) RETURNING id",
            (name, phone, service)
        )
        lead_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"ok": True, "id": lead_id})}

    if event.get("httpMethod") == "GET":
        cur.execute("SELECT id, name, phone, service, created_at FROM leads ORDER BY created_at DESC")
        rows = cur.fetchall()
        cur.close()
        conn.close()
        leads = [{"id": r[0], "name": r[1], "phone": r[2], "service": r[3], "created_at": str(r[4])} for r in rows]
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"leads": leads})}

    return {"statusCode": 405, "headers": headers, "body": ""}
