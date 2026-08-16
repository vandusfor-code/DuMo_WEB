import { Reveal } from "@/components/ui/Reveal";

export function HomeIntelligence() {
  return (
    <section id="ia" className="shell grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-2">
      <Reveal>
        <h2 className="heading max-w-[14ch] text-[36px] sm:text-[52px]">
          La IA entiende la conversación antes que tú.
        </h2>
        <p className="mt-5 max-w-[42ch] text-[17px] leading-8 text-muted">
          DuMo analiza cada interacción para detectar intención, prioridad,
          sentimiento y oportunidades de conversión.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="panel grid overflow-hidden sm:grid-cols-2">
          <div className="border-b border-line p-5 sm:border-r sm:border-b-0">
            <p className="label">Conversación</p>
            <p className="mt-5 text-[14px] leading-7 text-muted">
              Necesito entender si el servicio aplica para mi caso.
            </p>
            <p className="mt-3 text-[14px] leading-7">
              Revisamos elegibilidad y presentamos la oferta.
            </p>
          </div>
          <div className="p-5">
            <p className="label">AI Analysis</p>
            <ul className="mt-5 space-y-3 text-[14px]">
              <Row label="Intención" value="Alta" />
              <Row label="Probabilidad" value="82%" />
              <Row label="Sentimiento" value="Positivo" />
              <Row label="Prioridad" value="Alta" />
              <Row label="Siguiente acción" value="Contactar ahora" />
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-4">
      <span className="text-muted">{label}</span>
      <span className="text-lime">{value}</span>
    </li>
  );
}
