import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  { name: "Telecomunicaciones", note: "Adquisición y portabilidad de servicios." },
  { name: "Internet y hogar", note: "Servicios para el hogar de alto volumen." },
  { name: "Servicios financieros", note: "Productos que requieren asesoría y cierre." },
  { name: "Seguros", note: "Conversación consultiva hasta la contratación." },
  { name: "Suscripciones", note: "Captación y activación recurrente." },
  { name: "Servicios digitales", note: "Ofertas que necesitan explicación y conversión." },
  { name: "Educación", note: "Programas que se venden con acompañamiento." },
  { name: "Otros servicios", note: "Cualquier oferta de alto volumen comercial." },
];

export function IndustriesSection() {
  return (
    <section className="border-t border-line bg-canvas-muted py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Para quién es Dumo
          </p>
          <h2 className="mt-4 max-w-[20ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
            Si tienes un producto que vender, podemos ayudarte a encontrar a quién vendérselo.
          </h2>
          <p className="mt-5 max-w-[56ch] text-base leading-7 text-ink-muted">
            El modelo se aplica a sectores que necesitan adquisición y
            conversión. No afirmamos experiencia específica donde aún no la
            tenemos; mostramos dónde el modelo puede operar.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className={`grid gap-2 px-5 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline ${
                  index < industries.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <p className="text-sm font-medium text-ink">{industry.name}</p>
                <p className="text-sm text-ink-muted">{industry.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
