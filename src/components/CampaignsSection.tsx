import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const operations = [
  {
    name: "WOM Móvil",
    status: "Operación actual",
    description:
      "Campañas comerciales orientadas a adquisición y portabilidad móvil.",
  },
  {
    name: "Claro Móvil",
    status: "Próxima incorporación",
    description:
      "Nueva operación comercial próxima a incorporarse al portafolio de campañas.",
  },
];

export function CampaignsSection() {
  return (
    <section id="campanas" className="border-t border-line py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Campañas actuales
          </p>
          <h2 className="mt-4 max-w-[18ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
            Operaciones comerciales que ya gestionamos.
          </h2>
          <p className="mt-5 max-w-[54ch] text-base leading-7 text-ink-muted">
            Estas son las operaciones con las que trabajamos hoy. El modelo de
            Dumo está diseñado para crecer hacia otras categorías sin cambiar de
            identidad.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {operations.map((operation, index) => (
            <Reveal key={operation.name} delay={index * 0.06}>
              <article className="rounded-2xl border border-line bg-white p-6">
                <p className="text-[12px] text-ink-muted">{operation.status}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {operation.name}
                </h3>
                <p className="mt-3 max-w-[40ch] text-sm leading-6 text-ink-muted">
                  {operation.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
