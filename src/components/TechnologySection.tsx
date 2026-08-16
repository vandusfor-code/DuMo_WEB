import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  "Centralizar prospectos",
  "Distribuir oportunidades",
  "Gestionar asesores",
  "Organizar conversaciones",
  "Controlar estados",
  "Realizar seguimiento",
  "Gestionar campañas",
  "Controlar resultados",
];

const log = [
  ["Prospecto recibido", "Entra a la operación"],
  ["Oportunidad asignada", "Pasa a un asesor"],
  ["Conversación en curso", "Se califica la necesidad"],
  ["Oferta presentada", "Se abre la decisión"],
  ["Servicio activado", "Existe un cliente"],
];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <h2 className="display max-w-[12ch] text-[40px] sm:text-[52px]">
              Tecnología para operar cada oportunidad.
            </h2>
            <p className="mt-7 max-w-[40ch] text-[17px] leading-8 text-ink-muted">
              Dumo utiliza tecnología propia para organizar la operación
              comercial. No es el producto. Es la infraestructura que sostiene
              el proceso.
            </p>
            <ul className="mt-10 space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="text-[15px] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[12px] tracking-[0.16em] text-ink-muted uppercase">
              Representación del flujo operativo
            </p>
            <div className="mt-6">
              <ol>
                {log.map(([event, meaning], index) => (
                  <li
                    key={event}
                    className={`grid gap-1 py-5 sm:grid-cols-[1fr_1fr] sm:items-baseline ${
                      index === 0 ? "pt-0" : "border-t border-line"
                    }`}
                  >
                    <p className="text-[16px] tracking-[-0.02em] text-ink">{event}</p>
                    <p className="text-[14px] text-ink-muted">{meaning}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
