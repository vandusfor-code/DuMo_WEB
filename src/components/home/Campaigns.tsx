import { Reveal } from "@/components/ui/Reveal";

export function HomeCampaigns() {
  return (
    <section className="shell py-20 sm:py-28">
      <Reveal>
        <p className="label">Operaciones actuales</p>
      </Reveal>
      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="display text-[64px] sm:text-[88px]">WOM</h2>
          <p className="label mt-2">Móvil</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display text-[64px] sm:text-[88px]">CLARO</h2>
          <p className="label mt-2">Móvil</p>
        </Reveal>
      </div>
    </section>
  );
}
