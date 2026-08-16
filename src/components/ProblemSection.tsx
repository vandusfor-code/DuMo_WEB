import { Reveal } from "@/components/ui/Reveal";

const path = ["Interés", "Contacto", "Asesoría", "Oferta", "Conversión", "Activación"];

export function ProblemSection() {
  return (
    <section className="px-6 pt-28 pb-10 sm:px-8 sm:pt-40 lg:px-14 lg:pt-48">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-ink-muted uppercase">
            El problema
          </p>
          <h2 className="display mt-8 max-w-[10ch] text-[56px] sm:text-[80px] lg:text-[96px]">
            Un lead no es un cliente.
          </h2>
          <p className="mt-8 text-[20px] tracking-[-0.02em] text-ink-muted sm:text-[24px]">
            Es solamente el comienzo.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-20 sm:mt-28">
          <div className="relative">
            <div className="absolute top-[7px] right-0 left-0 hidden h-px bg-ink/15 md:block" />
            <ol className="flex flex-col gap-5 md:flex-row md:justify-between">
              {path.map((step, index) => {
                const last = index === path.length - 1;
                return (
                  <li key={step} className="relative">
                    <span
                      className={`mb-4 hidden h-2 w-2 rounded-full md:block ${
                        last ? "bg-brand" : "bg-ink"
                      }`}
                    />
                    <p
                      className={`text-[13px] tracking-[0.18em] uppercase ${
                        last ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {step}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
