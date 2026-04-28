export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Преимущества</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Почему выбирают меня</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#16a34a] pl-4">
              <h4 className="text-xl font-bold">Индивидуальный подход</h4>
              <p className="mt-2">
                Анализирую ваши потребности и бюджет, чтобы предложить именно тот страховой пакет,
                который подходит вам — без навязывания лишних опций.
              </p>
            </div>

            <div className="border-l-[4px] border-[#16a34a] pl-4">
              <h4 className="text-xl font-bold">Помощь в оформлении документов</h4>
              <p className="mt-2">
                Беру на себя всю бумажную работу: помогаю собрать документы, оформить полис
                и разобраться со всеми формальностями.
              </p>
            </div>

            <div className="border-l-[4px] border-[#16a34a] pl-4">
              <h4 className="text-xl font-bold">Выгодные условия от ведущих компаний</h4>
              <p className="mt-2">
                Сотрудничаю с топовыми страховщиками России — сравниваю предложения и выбираю
                лучшее соотношение цены и качества для вас.
              </p>
            </div>

            <div className="border-l-[4px] border-[#16a34a] pl-4">
              <h4 className="text-xl font-bold">Быстрое урегулирование убытков</h4>
              <p className="mt-2">
                При наступлении страхового случая поддерживаю на всех этапах — от уведомления
                страховой до получения выплаты.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Как я работаю</h3>

          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">1. Консультация</h4>
              <p>Обсуждаем ваши цели и бюджет — бесплатно и без обязательств.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">2. Подбор вариантов</h4>
              <p>Сравниваю предложения нескольких компаний и показываю лучшие варианты.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">3. Оформление и поддержка</h4>
              <p>Помогаю с документами и остаюсь на связи на весь срок действия полиса.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}