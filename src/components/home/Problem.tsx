import { Reveal } from "@/components/ui/Reveal";

const path = ["Interés", "Contacto", "Asesoría", "Oferta", "Conversión", "Activación"];

export function HomeProblem() {
  return (
    <section className="shell py-20 sm:py-28">
      <Reveal>
        <p className="label">El problema</p>
        <h2 className="display mt-6 max-w-[10ch] text-[48px] sm:text-[72px] lg:text-[84px]">
          Un lead no es un cliente.
        </h2>
        <p className="mt-6 text-[20px] tracking-[-0.02em] text-ink-muted">
          Es solamente el comienzo.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="relative mt-16">
        <div className="absolute top-[7px] right-0 left-0 hidden h-px bg-ink/12 md:block" />
        <ol className="flex flex-col gap-4 md:flex-row md:justify-between">
          {path.map((step, index) => {
            const last = index === path.length - 1;
            return (
              <li key={step} className="relative">
                <span
                  className={`mb-4 hidden h-2 w-2 rounded-full md:block ${
                    last ? "bg-brand" : "bg-ink"
                  }`}
                />
                <p className={`label ${last ? "text-ink" : ""}`}>{step}</p>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </section>
  );
}
