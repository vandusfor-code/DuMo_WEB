import { Reveal } from "@/components/ui/Reveal";

const nodes = [
  { mark: "CM", action: "Conversación", x: "8%", y: "12%" },
  { mark: "DR", action: "Seguimiento", x: "62%", y: "8%" },
  { mark: "LV", action: "Oferta", x: "18%", y: "58%" },
  { mark: "JP", action: "Activación", x: "70%", y: "62%" },
];

export function TeamSection() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <h2 className="display max-w-[12ch] text-[42px] sm:text-[64px] lg:text-[80px]">
            La tecnología organiza. Las personas convierten.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="relative mt-16 min-h-[420px] sm:mt-24 lg:min-h-[520px]">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1000 520"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M140 90 C 280 70 420 180 500 240 C 580 300 620 80 720 70"
              stroke="#0D0F12"
              strokeOpacity="0.16"
              strokeWidth="1.2"
            />
            <path
              d="M500 240 C 360 300 280 360 220 360"
              stroke="#0D0F12"
              strokeOpacity="0.16"
              strokeWidth="1.2"
            />
            <path
              d="M500 240 C 640 320 700 380 780 390"
              stroke="#0D0F12"
              strokeOpacity="0.16"
              strokeWidth="1.2"
            />
            <circle cx="500" cy="240" r="4" fill="#5B5CE2" />
          </svg>

          <div className="grid gap-12 sm:grid-cols-2 lg:hidden">
            {nodes.map((node) => (
              <div key={node.mark}>
                <p className="text-[13px] tracking-[0.2em] text-ink-muted">{node.mark}</p>
                <p className="mt-2 text-[28px] tracking-[-0.035em]">{node.action}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            {nodes.map((node) => (
              <div
                key={node.mark}
                className="absolute"
                style={{ left: node.x, top: node.y }}
              >
                <p className="text-[13px] tracking-[0.2em] text-ink-muted">{node.mark}</p>
                <p className="mt-2 text-[32px] tracking-[-0.04em]">{node.action}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
