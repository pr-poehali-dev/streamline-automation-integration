export function MiniAppWritings() {
  const contacts = [
    {
      title: "Телефон",
      value: "+7 (906) 150-32-33",
      hint: "Звонки и SMS",
    },
    {
      title: "WhatsApp",
      value: "+7 (906) 150-32-33",
      hint: "Пишите в любое время",
    },
    {
      title: "Telegram",
      value: "+7 (906) 150-32-33",
      hint: "Быстрые ответы",
    },
    {
      title: "Max",
      value: "+7 (906) 150-32-33",
      hint: "Также доступен здесь",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Контакты</h2>

      <div className="space-y-4">
        {contacts.map((c, i) => (
          <div
            key={i}
            className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-xl font-black">{c.title}</h3>
              <span className="text-sm font-bold bg-[#FF2E63] text-white px-2 py-1 border-[2px] border-black">
                {c.hint}
              </span>
            </div>
            <p className="text-2xl font-black mt-2">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="tel:+79061503233"
          className="inline-block bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg"
        >
          Позвонить сейчас
        </a>
      </div>
    </div>
  )
}
