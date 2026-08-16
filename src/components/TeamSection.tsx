import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const roster = [
  { mark: "CM", action: "Conversación" },
  { mark: "DR", action: "Seguimiento" },
  { mark: "LV", action: "Oferta" },
  { mark: "JP", action: "Activación" },
];

export function TeamSection() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="display max-w-[13ch] text-[40px] sm:text-[58px] lg:text-[68px]">
            La tecnología organiza. Las personas convierten.
          </h2>
          <p className="mt-8 max-w-[46ch] text-[17px] leading-8 text-ink-muted">
            Dumo cuenta con asesores comerciales especializados. Reciben
            oportunidades, sostienen la conversación y acompañan hasta la
            contratación.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-16 sm:mt-20">
          <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-4">
            {roster.map((advisor) => (
              <div key={advisor.mark} className="relative">
                <p className="text-[13px] tracking-[0.16em] text-ink-muted">
                  {advisor.mark}
                </p>
                <div className="mt-4 mb-4 h-px w-full bg-line" />
                <p className="text-[18px] tracking-[-0.02em] text-ink">{advisor.action}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-[42ch] text-[14px] leading-7 text-ink-muted">
            Representación conceptual del equipo en operación: asignación,
            conversación y avance hacia el cliente.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
