import { Reveal } from "@/components/ui/Reveal";

export function CampaignsSection() {
  return (
    <section id="campanas" className="px-6 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-ink-muted uppercase">
            Operaciones actuales
          </p>
        </Reveal>
        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="display text-[72px] sm:text-[96px] lg:text-[110px]">WOM</h2>
            <p className="mt-2 text-[18px] tracking-[0.28em] text-ink-muted uppercase">
              Móvil
            </p>
            <p className="mt-8 max-w-[28ch] text-[16px] leading-7 text-ink-muted">
              Adquisición y portabilidad.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-[72px] sm:text-[96px] lg:text-[110px]">CLARO</h2>
            <p className="mt-2 text-[18px] tracking-[0.28em] text-ink-muted uppercase">
              Móvil
            </p>
            <p className="mt-8 max-w-[28ch] text-[16px] leading-7 text-ink-muted">
              Próxima incorporación.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
