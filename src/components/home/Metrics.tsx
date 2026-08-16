import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  ["2.483", "Leads activos"],
  ["326", "Conversaciones"],
  ["82%", "Intención alta"],
  ["27", "Ventas hoy"],
];

export function HomeMetrics() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={label}>
              <p className="display text-[48px] text-lime sm:text-[56px]">{value}</p>
              <p className="label mt-3">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[12px] text-muted">Representación de la plataforma</p>
      </Reveal>
    </section>
  );
}
