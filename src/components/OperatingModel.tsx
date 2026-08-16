import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const company = [
  "Producto o servicio",
  "Condiciones comerciales",
  "Criterios de elegibilidad",
  "Proceso de contratación",
  "Bases de datos, cuando corresponda",
];

const dumo = [
  "Estrategia",
  "Marketing",
  "Generación de prospectos",
  "Tecnología",
  "Asesores",
  "Seguimiento",
  "Conversión",
  "Activación",
];

export function OperatingModel() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="display max-w-[16ch] text-[40px] sm:text-[56px] lg:text-[64px]">
            Tú tienes el producto. Nosotros construimos el camino hacia el cliente.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-16 grid gap-12 md:grid-cols-2 md:gap-0">
          <div className="md:pr-16">
            <p className="text-[13px] tracking-[0.18em] text-ink-muted uppercase">
              La empresa aporta
            </p>
            <ul className="mt-6 space-y-3">
              {company.map((item) => (
                <li key={item} className="text-[17px] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-line pt-12 md:border-t-0 md:border-l md:pt-0 md:pl-16">
            <p className="text-[13px] tracking-[0.18em] text-ink-muted uppercase">
              Dumo aporta
            </p>
            <ul className="mt-6 space-y-3">
              {dumo.map((item) => (
                <li key={item} className="text-[17px] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
