import { Button } from "@/components/ui/Button";
import { HeroTrajectory, MobileTrajectory } from "@/components/visuals/HeroTrajectory";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden px-6 pt-8 pb-16 sm:px-8 lg:px-14"
    >
      <HeroTrajectory />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-[1440px] flex-col">
        <p className="text-[11px] font-medium tracking-[0.28em] text-ink-muted uppercase">
          Adquisición · Conversión · Activación
        </p>
        <h1 className="display mt-8 max-w-[9ch] text-[64px] sm:mt-12 sm:text-[88px] lg:text-[104px] xl:text-[110px]">
          Convertimos
          <br />
          oportunidades
          <br />
          en clientes.
        </h1>
        <MobileTrajectory />
        <div className="mt-auto flex max-w-[720px] flex-col gap-8 pt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <p className="max-w-[42ch] text-[16px] leading-7 text-ink-muted sm:text-[17px]">
            Dumo combina adquisición de clientes, tecnología y equipos
            comerciales especializados para ayudar a las empresas a convertir
            oportunidades en ventas reales.
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contacto">Hablar con Dumo</Button>
            <Button href="#como-funciona" variant="secondary">
              Conocer cómo funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
