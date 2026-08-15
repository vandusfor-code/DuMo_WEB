import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PlatformVisual } from "@/components/visuals/PlatformVisual";

const connections = [
  "Prospectos",
  "Asesores",
  "Conversaciones",
  "Estados",
  "Seguimientos",
  "Campañas",
  "Ventas",
  "Operación",
];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="border-t border-line py-20 sm:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
              Tecnología
            </p>
            <h2 className="mt-4 max-w-[14ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
              Tecnología para convertir cada oportunidad.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-muted">
              Contamos con una plataforma propia para organizar la operación
              comercial. Centraliza lo que entra, lo que se gestiona y lo que se
              convierte.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
              {connections.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <PlatformVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
