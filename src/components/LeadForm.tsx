import { useState } from "react"
import Icon from "@/components/ui/icon"

const SERVICES = ["ОСАГО", "КАСКО", "Страхование здоровья", "Страхование недвижимости", "Страхование путешествий", "Страхование бизнеса"]
const API_URL = "https://functions.poehali.dev/e9a88630-ed08-4e52-8d9e-91c3e81199d9"

export function LeadForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service }),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus("success")
        setName("")
        setPhone("")
        setService("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-10 text-center">
        <div className="bg-[#FF2E63] w-16 h-16 border-[3px] border-black flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCheck" size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-black mb-2">Заявка принята!</h3>
        <p className="text-gray-600 font-medium">Свяжусь с вами в ближайшее время для консультации.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-bold underline text-gray-500 hover:text-black"
        >
          Оставить ещё заявку
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8">
      <h3 className="text-2xl font-black mb-1">Оставить заявку</h3>
      <p className="text-gray-600 font-medium mb-6 text-sm">Перезвоню и подберу лучший вариант бесплатно</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-black mb-1">Ваше имя</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Иван Иванов"
            required
            className="w-full p-3 border-[3px] border-black font-medium text-sm focus:outline-none bg-[#FAFAFA]"
          />
        </div>

        <div>
          <label className="block text-sm font-black mb-1">Телефон</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+7 (___) ___-__-__"
            required
            className="w-full p-3 border-[3px] border-black font-medium text-sm focus:outline-none bg-[#FAFAFA]"
          />
        </div>

        <div>
          <label className="block text-sm font-black mb-1">Тип страхования</label>
          <select
            value={service}
            onChange={e => setService(e.target.value)}
            required
            className="w-full p-3 border-[3px] border-black font-medium text-sm focus:outline-none bg-[#FAFAFA] cursor-pointer"
          >
            <option value="">Выберите услугу...</option>
            {SERVICES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {status === "error" && (
          <p className="text-[#FF2E63] text-sm font-bold">Ошибка отправки. Попробуйте ещё раз.</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#FF2E63] text-white py-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg disabled:opacity-60"
        >
          {status === "loading" ? "Отправляю..." : "Получить консультацию →"}
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
    </form>
  )
}
