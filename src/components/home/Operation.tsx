import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { name: "Campaña", side: "left" },
  { name: "Prospectos", side: "right" },
  { name: "Operación Dumo", side: "left" },
  { name: "Asesores", side: "right" },
  { name: "Venta", side: "left" },
  { name: "Activación", side: "right" },
] as const;

export function HomeOperation() {
  return (
    <section className="shell py-20 sm:py-28">
      <Reveal>
        <h2 className="display max-w-[12ch] text-[40px] sm:text-[64px] lg:text-[76px]">
          Una operación comercial completa.
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="relative mx-auto mt-16 max-w-[720px] sm:mt-20">
        <div className="absolute top-3 bottom-3 left-4 w-px bg-ink/12 md:left-1/2" />
        <ol>
          {stages.map((stage, index) => {
            const last = index === stages.length - 1;
            return (
              <li
                key={stage.name}
                className={`relative py-6 md:grid md:grid-cols-2 ${
                  stage.side === "right" ? "md:text-right" : ""
                }`}
              >
                <span
                  className={`absolute top-8 left-[13px] h-2 w-2 rounded-full md:left-1/2 md:-ml-1 ${
                    last ? "bg-brand" : "bg-ink"
                  }`}
                />
                <p
                  className={`heading pl-10 text-[28px] sm:text-[36px] md:pl-0 ${
                    stage.side === "left" ? "md:pr-14" : "md:col-start-2 md:pl-14"
                  }`}
                >
                  {stage.name}
                </p>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </section>
  );
}
