import { AnimatedRobot } from "@/components/AnimatedRobot"
import { ChatPanel } from "@/components/ChatPanel"
import { Dock } from "@/components/Dock"
import { OSOverlay } from "@/components/OSOverlay"

const SERVICES: Array<{ title: string; desc: string; tag: string; link?: string }> = [
  { title: "ОСАГО", desc: "Обязательное страхование гражданской ответственности", tag: "Обязательно", link: "https://vk.com/away.php?to=https%3A%2F%2Fagentpolis.ru%2Fwidgets%2Fv2%2F91f41fdd0994634289a88e2f4b7f76b8534813ed%3Fmode%3Dreferral%26hasOsagoB2C%3D1&utf=1" },
  { title: "КАСКО", desc: "Комплексная защита автомобиля от угона и повреждений", tag: "Популярно" },
  { title: "Страхование здоровья", desc: "ДМС и страхование от несчастных случаев", tag: "Забота" },
  { title: "Страхование недвижимости", desc: "Защита квартиры, дома и имущества", tag: "Надёжность" },
  { title: "Страхование путешествий", desc: "Полис для поездок за рубеж и по России", tag: "Путешествия" },
  { title: "Страхование бизнеса", desc: "Защита коммерческой собственности и ответственности", tag: "Бизнес" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero — фиксированная высота */}
      <div className="h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Фоновое изображение */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://cdn.poehali.dev/projects/cf220c47-df54-4f13-a18e-b9e12a8daf0d/bucket/3adb55d6-4352-417e-b279-f67db44ba35f.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Полупрозрачный оверлей для читаемости */}
        <div className="absolute inset-0 bg-white/40" />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 max-w-lg w-full">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <AnimatedRobot />
            <h1 className="text-4xl font-black text-center">Ваш надёжный<br/>страховой агент</h1>
          </div>
          <ChatPanel />
        </div>

        <div className="relative z-10 pb-4">
          <Dock />
        </div>
      </div>

      {/* Раздел услуг на главной */}
      <div className="bg-[#FAFAFA] px-6 py-16 relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "8px 8px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-black mb-2 border-b-[3px] border-black pb-3">Услуги</h2>
          <p className="text-gray-600 font-medium mb-8">Подберу оптимальный вариант под ваши задачи и бюджет</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <div className="h-24 bg-gradient-to-br from-[#FF2E63] to-[#FF6B9D] border-b-[3px] border-black flex items-center justify-center">
                  <span className="text-white font-black text-2xl">{s.title.split(" ")[0]}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-black mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">{s.desc}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold bg-[#FF2E63] text-white px-2 py-1 border-[2px] border-black">
                      {s.tag}
                    </span>
                    {s.link && (
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black bg-black text-white px-3 py-1 border-[2px] border-black hover:bg-[#FF2E63] transition-colors"
                      >
                        Оформить →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="tel:+79061503233"
              className="inline-block bg-[#FF2E63] text-white px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg"
            >
              Получить консультацию — +7 (906) 150-32-33
            </a>
          </div>
        </div>
      </div>

      {/* OS Overlay */}
      <OSOverlay />
    </>
  )
}