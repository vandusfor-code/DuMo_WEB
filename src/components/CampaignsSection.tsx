import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const operations = [
  {
    name: "WOM Móvil",
    detail: "Campañas comerciales de adquisición y portabilidad móvil.",
  },
  {
    name: "Claro Móvil",
    detail: "Nueva operación comercial próxima a incorporarse.",
  },
];

export function CampaignsSection() {
  return (
    <section id="campanas" className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-[13px] tracking-[0.18em] text-ink-muted uppercase">
            Operaciones actuales
          </p>
          <h2 className="display mt-5 max-w-[14ch] text-[36px] sm:text-[48px]">
            Operaciones comerciales actuales.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0">
          {operations.map((operation) => (
            <Reveal key={operation.name}>
              <article className="grid gap-3 border-t border-line py-10 md:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] md:items-baseline">
                <h3 className="text-[32px] tracking-[-0.04em] sm:text-[40px]">
                  {operation.name}
                </h3>
                <p className="max-w-[42ch] text-[16px] leading-7 text-ink-muted">
                  {operation.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
