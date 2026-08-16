import { Button } from "@/components/ui/Button";
import { HeroTrajectory, MobileTrajectory } from "@/components/visuals/HeroTrajectory";

export function HomeHero() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden pb-16 pt-6 lg:min-h-[92svh]">
      <HeroTrajectory />
      <div className="shell relative z-10 flex min-h-[calc(88svh-72px)] flex-col">
        <p className="label">Adquisición · Conversión · Activación</p>
        <h1 className="display mt-8 max-w-[11ch] text-[56px] sm:text-[80px] lg:text-[96px] xl:text-[104px]">
          Convertimos oportunidades
          <br />
          en clientes.
        </h1>
        <MobileTrajectory />
        <div className="mt-auto flex max-w-[760px] flex-col gap-8 pt-14 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[42ch] text-[16px] leading-7 text-ink-muted">
            Dumo combina adquisición de clientes, tecnología y equipos
            comerciales especializados para ayudar a las empresas a convertir
            oportunidades en ventas reales.
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contacto">Hablar con Dumo</Button>
            <Button href="/soluciones" variant="secondary">
              Cómo trabajamos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
