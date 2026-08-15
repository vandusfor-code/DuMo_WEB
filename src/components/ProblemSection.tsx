import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  "Lead",
  "Contacto",
  "Calificación",
  "Asesoría",
  "Oferta",
  "Conversión",
  "Activación",
];

export function ProblemSection() {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            El problema
          </p>
          <h2 className="mt-4 max-w-[16ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
            Conseguir un cliente es más que conseguir un lead.
          </h2>
          <p className="mt-5 max-w-[58ch] text-base leading-7 text-ink-muted">
            Generar un prospecto no garantiza una venta. El verdadero valor está
            en lo que ocurre después de que llega el prospecto: el contacto, la
            calificación, la asesoría y la activación.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            <div className="grid grid-cols-2 lg:grid-cols-7">
              {steps.map((step, index) => {
                const afterLead = index > 0;
                return (
                  <div
                    key={step}
                    className={`relative px-4 py-5 ${
                      afterLead ? "bg-white" : "bg-canvas-muted"
                    } ${index < steps.length - 1 ? "border-b border-line lg:border-b-0 lg:border-r" : ""} ${
                      index % 2 === 0 ? "border-r border-line lg:border-r" : ""
                    }`}
                  >
                    <p className="text-[11px] text-ink-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink">{step}</p>
                    {index === 0 ? (
                      <p className="mt-2 text-[11px] text-ink-muted">El punto de partida</p>
                    ) : null}
                    {index === steps.length - 1 ? (
                      <p className="mt-2 text-[11px] text-brand">El objetivo</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="border-t border-line bg-canvas px-5 py-4">
              <p className="text-sm text-ink">
                El verdadero valor está en lo que ocurre después de que llega el prospecto.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
