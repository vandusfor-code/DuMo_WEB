import { Reveal } from "@/components/ui/Reveal";

export function DumoSystem() {
  return (
    <section id="soluciones" className="px-6 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <h2 className="display max-w-[12ch] text-[42px] sm:text-[64px] lg:text-[76px]">
            Nosotros operamos ese proceso.
          </h2>
          <p className="mt-8 max-w-[40ch] text-[18px] leading-8 text-ink-muted">
            Tu producto necesita clientes. Nosotros construimos el camino.
          </p>
        </Reveal>

        <div className="relative mt-24 min-h-[420px] sm:mt-32 lg:min-h-[520px]">
          <div className="absolute top-[18%] right-[8%] left-[8%] hidden h-px bg-ink/12 lg:block" />
          <div className="absolute top-[18%] bottom-[22%] left-1/2 hidden w-px bg-ink/12 lg:block" />

          <Reveal className="lg:absolute lg:top-0 lg:left-0">
            <p className="text-[12px] tracking-[0.22em] text-ink-muted uppercase">
              Marketing
            </p>
            <p className="mt-3 text-[40px] tracking-[-0.045em] sm:text-[52px]">Atrae.</p>
          </Reveal>

          <Reveal delay={0.06} className="mt-14 lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:text-right">
            <p className="text-[12px] tracking-[0.22em] text-ink-muted uppercase">
              Tecnología
            </p>
            <p className="mt-3 text-[40px] tracking-[-0.045em] sm:text-[52px]">
              Organiza.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 lg:absolute lg:top-[42%] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:text-center">
            <p className="text-[12px] tracking-[0.22em] text-ink-muted uppercase">
              Personas
            </p>
            <p className="mt-3 text-[40px] tracking-[-0.045em] sm:text-[52px]">
              Convierten.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-20 lg:absolute lg:right-[12%] lg:bottom-0 lg:mt-0">
            <p className="text-[12px] tracking-[0.22em] text-brand uppercase">
              Resultado
            </p>
            <p className="mt-3 text-[48px] tracking-[-0.05em] sm:text-[64px]">Cliente.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
