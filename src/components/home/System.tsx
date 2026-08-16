import { Reveal } from "@/components/ui/Reveal";

const nodes = [
  { label: "Campañas", x: "8%", y: "12%" },
  { label: "Leads", x: "72%", y: "8%" },
  { label: "WhatsApp", x: "4%", y: "48%" },
  { label: "IA", x: "78%", y: "42%" },
  { label: "Asesores", x: "10%", y: "78%" },
  { label: "Ventas", x: "70%", y: "76%" },
];

export function HomeSystem() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="heading max-w-[12ch] text-[36px] sm:text-[52px]">
          Todo conectado. Todo visible.
        </h2>
        <p className="mt-5 max-w-[46ch] text-[17px] leading-8 text-muted">
          DuMo convierte una operación fragmentada en un sistema comercial
          conectado, medible y automatizado.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="relative mt-16 min-h-[380px] rounded-2xl border border-line bg-surface sm:min-h-[460px]">
        <svg className="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1000 460" fill="none" aria-hidden="true">
          <path
            d="M180 80 C 280 90 380 180 500 210 C 620 240 700 90 820 80"
            stroke="#C8F54A"
            strokeOpacity="0.35"
            strokeWidth="1.4"
          />
          <path
            d="M160 230 C 280 250 400 220 500 210 C 620 200 740 230 840 220"
            stroke="#C8F54A"
            strokeOpacity="0.22"
            strokeWidth="1.2"
          />
          <path
            d="M180 380 C 300 320 400 250 500 210 C 620 170 720 320 820 370"
            stroke="#C8F54A"
            strokeOpacity="0.22"
            strokeWidth="1.2"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[28px] font-medium tracking-[-0.04em] sm:text-[36px]">
            Du<span className="text-lime">M</span>o
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 p-6 lg:hidden">
          {nodes.map((node) => (
            <p key={node.label} className="text-[14px] text-muted">
              {node.label}
            </p>
          ))}
        </div>
        <div className="hidden lg:block">
          {nodes.map((node) => (
            <p
              key={node.label}
              className="absolute text-[13px] text-muted"
              style={{ left: node.x, top: node.y }}
            >
              {node.label}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
