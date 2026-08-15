import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const companyProvides = [
  "Producto o servicio",
  "Condiciones comerciales",
  "Criterios de elegibilidad",
  "Proceso de contratación",
  "Bases de datos, cuando aplique",
];

const dumoProvides = [
  "Estrategia",
  "Marketing",
  "Generación de prospectos",
  "Tecnología",
  "Asesores",
  "Gestión comercial",
  "Seguimiento",
  "Conversión",
  "Gestión hasta activación",
];

export function OperatingModel() {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Modelo de trabajo
          </p>
          <h2 className="mt-4 max-w-[18ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
            Tú defines el producto. Nosotros construimos la operación comercial.
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-7 text-ink-muted">
            Tú tienes el producto. Nosotros conseguimos al cliente.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <div className="grid overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-2">
            <div className="border-b border-line p-6 sm:p-8 md:border-r md:border-b-0">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                La empresa proporciona
              </p>
              <ul className="mt-6 space-y-3">
                {companyProvides.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-canvas p-6 sm:p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-brand">
                Dumo aporta
              </p>
              <ul className="mt-6 space-y-3">
                {dumoProvides.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
