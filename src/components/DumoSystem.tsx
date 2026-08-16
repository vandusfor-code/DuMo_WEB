import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const forces = [
  { name: "Marketing", verb: "Atrae." },
  { name: "Tecnología", verb: "Organiza." },
  { name: "Personas", verb: "Convierten." },
];

export function DumoSystem() {
  return (
    <section id="soluciones" className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-[20ch]">
            <h2 className="display text-[40px] sm:text-[54px] lg:text-[60px]">
              Nosotros operamos el camino entre la oportunidad y el cliente.
            </h2>
          </div>
          <p className="mt-8 max-w-[48ch] text-[17px] leading-8 text-ink-muted">
            Dumo combina marketing, tecnología y equipos comerciales
            especializados para construir operaciones capaces de atraer,
            gestionar y convertir oportunidades.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-20">
          <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-3 md:gap-8">
            {forces.map((force) => (
              <div key={force.name}>
                <p className="text-[13px] tracking-[0.18em] text-ink-muted uppercase">
                  {force.name}
                </p>
                <p className="mt-4 text-[34px] leading-none font-medium tracking-[-0.04em] sm:text-[40px]">
                  {force.verb}
                </p>
              </div>
            ))}
          </div>
          <div className="relative mt-16 border-t border-line pt-12">
            <div className="absolute -top-px left-0 hidden h-px w-24 bg-brand md:block" />
            <p className="text-[13px] tracking-[0.18em] text-ink-muted uppercase">
              Resultado
            </p>
            <p className="mt-4 text-[48px] leading-none font-medium tracking-[-0.045em] sm:text-[64px]">
              Cliente.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
