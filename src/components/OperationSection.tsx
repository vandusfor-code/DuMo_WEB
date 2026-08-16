import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { name: "Campaña", note: "La demanda se origina." },
  { name: "Prospectos", note: "La oportunidad entra." },
  { name: "Plataforma", note: "La operación se organiza." },
  { name: "Asesores", note: "La conversación ocurre." },
  { name: "Ventas", note: "La decisión se cierra." },
  { name: "Activaciones", note: "El cliente existe." },
];

export function OperationSection() {
  return (
    <section id="como-funciona" className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-[13px] tracking-[0.18em] text-ink-muted uppercase">
            El modelo
          </p>
          <h2 className="display mt-5 max-w-[12ch] text-[40px] sm:text-[56px]">
            De la campaña a la activación.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="relative mt-16 sm:mt-20">
          <div className="absolute top-3 bottom-3 left-[5px] hidden w-px bg-line md:block" />
          <span className="travel-y absolute left-[2px] hidden h-2 w-2 rounded-full bg-ink md:block" />
          <ol>
            {stages.map((stage, index) => {
              const last = index === stages.length - 1;
              return (
                <li
                  key={stage.name}
                  className={`grid items-baseline gap-2 py-6 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:gap-12 ${
                    index === 0 ? "pt-0" : "border-t border-line"
                  }`}
                >
                  <p
                    className={`text-[28px] tracking-[-0.04em] sm:text-[36px] ${
                      last ? "font-medium text-ink" : "text-ink"
                    }`}
                  >
                    {stage.name}
                  </p>
                  <p className="text-[16px] text-ink-muted sm:text-[18px]">{stage.note}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
