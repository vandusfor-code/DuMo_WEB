import { Reveal } from "@/components/ui/Reveal";

export function HomeLeads() {
  return (
    <section className="shell grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-2">
      <Reveal>
        <h2 className="heading max-w-[14ch] text-[36px] sm:text-[48px]">
          Cada lead tiene una historia. DuMo la convierte en contexto.
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="panel p-5">
          <p className="text-[18px] font-medium">Juan Pérez</p>
          <div className="mt-5 grid grid-cols-2 gap-4 text-[13px]">
            <Meta label="Canal" value="WhatsApp" />
            <Meta label="Origen" value="Campaña" />
            <Meta label="Asesor" value="CM" />
            <Meta label="Estado" value="Calificado" accent />
            <Meta label="Última interacción" value="Hace 4 min" />
            <Meta label="Probabilidad" value="82%" accent />
          </div>
          <div className="mt-6 border-t border-line pt-4">
            <p className="label">Próxima mejor acción</p>
            <p className="mt-2 text-[15px]">Contactar ahora.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Meta({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="text-muted">{label}</p>
      <p className={accent ? "text-lime" : "text-ink"}>{value}</p>
    </div>
  );
}
