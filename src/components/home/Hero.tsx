import { Button } from "@/components/ui/Button";
import { HeroDashboard } from "@/components/product/HeroDashboard";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-10 sm:pt-16">
      <div className="shell">
        <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted uppercase">
          <span className="live-dot" />
          Commercial operating system
        </p>
        <h1 className="display mt-6 max-w-[13ch] text-[52px] sm:text-[76px] lg:text-[88px]">
          La infraestructura detrás de cada venta.
        </h1>
        <p className="mt-6 max-w-[40ch] text-[17px] leading-8 text-muted">
          DuMo conecta adquisición, conversaciones, inteligencia artificial y
          equipos comerciales en una sola operación.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/contacto">Solicitar demo</Button>
          <Button href="/#follow" variant="ghost">
            Ver cómo funciona →
          </Button>
        </div>
        <div className="mt-12 lg:mt-16">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
