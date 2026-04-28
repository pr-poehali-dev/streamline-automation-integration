import { AnimatedRobot } from "@/components/AnimatedRobot"
import { ChatPanel } from "@/components/ChatPanel"
import { Dock } from "@/components/Dock"
import { OSOverlay } from "@/components/OSOverlay"
import { LeadForm } from "@/components/LeadForm"
import Icon from "@/components/ui/icon"

const SERVICES: Array<{ title: string; desc: string; icon: string; link?: string }> = [
  { title: "ОСАГО", desc: "Обязательный полис — оформлю быстро и выгодно", icon: "FileCheck", link: "https://vk.com/away.php?to=https%3A%2F%2Fagentpolis.ru%2Fwidgets%2Fv2%2F91f41fdd0994634289a88e2f4b7f76b8534813ed%3Fmode%3Dreferral%26hasOsagoB2C%3D1&utf=1" },
  { title: "КАСКО", desc: "Полная защита авто от угона и повреждений", icon: "Car" },
  { title: "Здоровье", desc: "ДМС и страхование от несчастных случаев", icon: "HeartPulse" },
  { title: "Недвижимость", desc: "Квартира, дом, дача — от пожара и залива", icon: "Home" },
  { title: "Путешествия", desc: "Полис для поездок по России и за рубеж", icon: "Plane" },
  { title: "Бизнес", desc: "Защита коммерческой собственности и ответственности", icon: "Briefcase" },
]

const ADVANTAGES = [
  { icon: "UserCheck", title: "Индивидуальный подход", desc: "Подбираю страховку под ваши задачи и бюджет" },
  { icon: "Zap", title: "Быстрое оформление", desc: "Полис за 15 минут — без очередей и лишних бумаг" },
  { icon: "ShieldCheck", title: "Надёжные компании", desc: "Работаю только с ведущими страховщиками России" },
  { icon: "Headphones", title: "Поддержка при убытках", desc: "Помогу на всех этапах — от звонка до выплаты" },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://cdn.poehali.dev/projects/cf220c47-df54-4f13-a18e-b9e12a8daf0d/files/2f2f795f-e18a-45cb-b08c-25bb364b181c.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/40" />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 max-w-lg w-full">
          <div className="flex flex-col items-center space-y-3 mb-6">
            <AnimatedRobot />
            <h1 className="text-4xl font-black text-center leading-tight">Ваш надёжный<br/>страховой агент</h1>
            <p className="text-center text-gray-700 font-medium text-lg">Подберу лучший полис — быстро, выгодно, без хлопот</p>
          </div>

          {/* Быстрые CTA */}
          <div className="flex gap-3 mb-6 flex-wrap justify-center">
            <a
              href="tel:+79061503233"
              className="flex items-center gap-2 bg-[#16a34a] text-white px-5 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-sm"
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
            <a
              href="https://max.ru/+79061503233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-5 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-sm"
            >
              <Icon name="MessageCircle" size={16} />
              Max
            </a>
            <a
              href="https://t.me/+79061503233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-5 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-sm"
            >
              <Icon name="Send" size={16} />
              Telegram
            </a>
          </div>

          <ChatPanel />
        </div>

        <div className="relative z-10 pb-4">
          <Dock />
        </div>
      </div>

      {/* ПРЕИМУЩЕСТВА */}
      <div className="bg-[#16a34a] px-6 py-12 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-5 flex flex-col items-start gap-2">
                <div className="bg-[#16a34a] p-2 border-[2px] border-black">
                  <Icon name={a.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-black text-sm leading-tight">{a.title}</h3>
                <p className="text-xs text-gray-600 leading-snug">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* УСЛУГИ */}
      <div className="bg-[#FAFAFA] px-6 py-16 relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-black border-b-[3px] border-black pb-3 mb-2">Все виды страхования</h2>
            <p className="text-gray-600 font-medium">Найду оптимальные условия в ведущих страховых компаниях</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all p-6 flex flex-col gap-3"
              >
                <div className="bg-[#16a34a] w-12 h-12 border-[3px] border-black flex items-center justify-center flex-shrink-0">
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-700">{s.desc}</p>
                </div>
                {s.link ? (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-[#16a34a] text-white text-sm font-black px-4 py-2 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center"
                  >
                    Оформить онлайн →
                  </a>
                ) : (
                  <a
                    href="tel:+79061503233"
                    className="mt-auto inline-block bg-black text-white text-sm font-black px-4 py-2 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center"
                  >
                    Узнать стоимость →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ФОРМА ЗАЯВКИ */}
      <div className="bg-[#FAFAFA] px-6 py-16 border-t-[3px] border-black">
        <div className="max-w-xl mx-auto">
          <LeadForm />
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="bg-black px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3">Не знаете, что выбрать?</h2>
          <p className="text-gray-400 font-medium mb-8 text-lg">Позвоните или напишите — бесплатно проконсультирую и подберу лучший вариант за 15 минут</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+79061503233"
              className="flex items-center gap-2 bg-[#16a34a] text-white px-7 py-4 border-[3px] border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg"
            >
              <Icon name="Phone" size={20} />
              +7 (906) 150-32-33
            </a>
            <a
              href="https://max.ru/+79061503233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-7 py-4 border-[3px] border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg"
            >
              <Icon name="MessageCircle" size={20} />
              Max
            </a>
          </div>
        </div>
      </div>

      {/* ФУТЕР */}
      <div className="bg-[#111] px-6 py-6 text-center">
        <p className="text-gray-500 text-sm font-medium">Страховой агент · +7 (906) 150-32-33 · WhatsApp / Telegram / Max</p>
      </div>

      <OSOverlay />
    </>
  )
}