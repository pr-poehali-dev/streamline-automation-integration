export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Обо мне</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Профессиональный страховой агент</h3>
          <p className="text-lg leading-relaxed mb-4">
            Помогаю клиентам надёжно защитить автомобиль, здоровье и недвижимость. Подбираю оптимальные
            страховые пакеты с учётом ваших потребностей и бюджета — без лишних переплат.
          </p>
          <p className="text-lg leading-relaxed">
            Работаю с ведущими страховыми компаниями России, поэтому всегда нахожу выгодные условия
            для каждого клиента. Быстро оформляю документы и помогаю при урегулировании убытков.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Мои преимущества</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Индивидуальный подход",
              "Помощь с документами",
              "Выгодные условия",
              "Быстрое урегулирование",
              "ОСАГО",
              "КАСКО",
              "Страхование здоровья",
              "Страхование недвижимости",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
