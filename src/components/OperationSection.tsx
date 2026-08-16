import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { name: "Campaña", side: "left" },
  { name: "Prospectos", side: "right" },
  { name: "Operación", side: "left" },
  { name: "Asesores", side: "right" },
  { name: "Venta", side: "left" },
  { name: "Activación", side: "right" },
] as const;

export function OperationSection() {
  return (
    <section id="como-funciona" className="px-6 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <h2 className="display max-w-[12ch] text-[42px] sm:text-[64px] lg:text-[80px]">
            De la campaña a la activación.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="relative mx-auto mt-20 max-w-[760px] sm:mt-28">
          <div className="absolute top-3 bottom-3 left-4 w-px bg-ink/15 md:left-1/2" />
          <ol>
            {stages.map((stage, index) => {
              const last = index === stages.length - 1;
              return (
                <li
                  key={stage.name}
                  className={`relative py-7 md:grid md:grid-cols-2 ${
                    stage.side === "right" ? "md:text-right" : ""
                  }`}
                >
                  <span
                    className={`absolute top-9 left-[13px] h-2 w-2 rounded-full md:left-1/2 md:-ml-1 ${
                      last ? "bg-brand" : "bg-ink"
                    }`}
                  />
                  <p
                    className={`pl-10 text-[32px] tracking-[-0.04em] sm:text-[44px] md:pl-0 ${
                      stage.side === "left" ? "md:pr-16" : "md:col-start-2 md:pl-16"
                    } ${last ? "text-ink" : "text-graphite"}`}
                  >
                    {stage.name}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
