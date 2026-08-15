import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";

const advisors = [
  { initials: "CM", name: "Asesor CM", focus: "Movilidad", state: "En conversación" },
  { initials: "DR", name: "Asesor DR", focus: "Portabilidad", state: "Seguimiento" },
  { initials: "LV", name: "Asesor LV", focus: "Movilidad", state: "Oferta" },
  { initials: "JP", name: "Asesor JP", focus: "Activación", state: "Disponible" },
];

const assignments = [
  { prospect: "Prospecto 184", advisor: "CM" },
  { prospect: "Prospecto 187", advisor: "DR" },
  { prospect: "Prospecto 191", advisor: "LV" },
];

export function TeamSection() {
  return (
    <section className="border-t border-line bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
              Equipo comercial
            </p>
            <h2 className="mt-4 max-w-[16ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
              Tecnología para organizar. Personas para convertir.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-muted">
              La tecnología permite gestionar la operación. Nuestro equipo
              comercial convierte la oportunidad en una conversación real.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Los asesores se especializan por campaña, reciben prospectos
              distribuidos y dan seguimiento hasta la contratación.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-line bg-canvas p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-medium text-ink">Asesores conectados</p>
                <StatusBadge tone="success">En operación</StatusBadge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {advisors.map((advisor) => (
                  <div
                    key={advisor.initials}
                    className="rounded-xl border border-line bg-white p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-[12px] font-semibold text-brand">
                        {advisor.initials}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">{advisor.name}</p>
                        <p className="text-[12px] text-ink-muted">{advisor.focus}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-[12px] text-ink-muted">{advisor.state}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-line pt-4">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                  Distribución
                </p>
                <ul className="space-y-2">
                  {assignments.map((item) => (
                    <li
                      key={item.prospect}
                      className="flex items-center justify-between text-[13px]"
                    >
                      <span className="text-ink">{item.prospect}</span>
                      <span className="text-ink-muted">→ {item.advisor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
