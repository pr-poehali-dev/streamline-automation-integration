export function MiniAppArt() {
  const services: Array<{ title: string; desc: string; tag: string; link?: string }> = [
    { title: "ОСАГО", desc: "Обязательное страхование гражданской ответственности", tag: "Обязательно", link: "https://vk.com/away.php?to=https%3A%2F%2Fagentpolis.ru%2Fwidgets%2Fv2%2F91f41fdd0994634289a88e2f4b7f76b8534813ed%3Fmode%3Dreferral%26hasOsagoB2C%3D1&utf=1" },
    { title: "КАСКО", desc: "Комплексная защита автомобиля от угона и повреждений", tag: "Популярно" },
    { title: "Страхование здоровья", desc: "ДМС и страхование от несчастных случаев", tag: "Забота" },
    { title: "Страхование недвижимости", desc: "Защита квартиры, дома и имущества", tag: "Надёжность" },
    { title: "Страхование путешествий", desc: "Полис для поездок за рубеж и по России", tag: "Для путешественников" },
    { title: "Страхование бизнеса", desc: "Защита коммерческой собственности и ответственности", tag: "Для бизнеса" },
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Услуги</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className="aspect-square bg-gradient-to-br from-[#FF2E63] to-[#FF6B9D] border-b-[3px] border-black flex items-center justify-center">
              <span className="text-white font-black text-2xl">{s.title.split(" ")[0]}</span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-black">{s.title}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">{s.desc}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block text-xs font-bold bg-[#FF2E63] text-white px-2 py-1 border-[2px] border-black">
                  {s.tag}
                </span>
                {s.link && (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-black bg-black text-white px-3 py-1 border-[2px] border-black hover:bg-[#FF2E63] transition-colors"
                  >
                    Оформить →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="tel:+79061503233"
          className="inline-block bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg"
        >
          Получить консультацию
        </a>
      </div>
    </div>
  )
}