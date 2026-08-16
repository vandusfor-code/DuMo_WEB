import { Reveal } from "@/components/ui/Reveal";

const tools = ["Meta Ads", "WhatsApp", "Excel", "CRM", "Telefonía", "Asesores", "Reportes"];
const flow = ["Leads", "IA", "CRM", "Asesores", "Ventas"];

export function HomeProblem() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="heading max-w-[16ch] text-[36px] sm:text-[52px]">
          Tu operación no debería vivir en siete herramientas.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="label">Antes</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="rounded-lg border border-line px-3 py-2 text-[13px] text-muted"
                style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="label">Con DuMo</p>
          <div className="mt-6">
            {flow.map((item, index) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <span className={`h-1.5 w-1.5 rounded-full ${index === flow.length - 1 ? "bg-lime" : "bg-ink"}`} />
                <p className="text-[20px] tracking-[-0.03em]">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
