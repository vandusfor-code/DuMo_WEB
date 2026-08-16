import { Button } from "@/components/ui/Button";
import { HeroDashboard } from "@/components/product/HeroDashboard";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(200,245,74,0.08),transparent_60%)]" />
      <div className="shell relative grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted uppercase">
            <span className="live-dot" />
            Commercial Operating System
          </p>
          <h1 className="display mt-6 max-w-[12ch] text-[52px] sm:text-[72px] lg:text-[84px]">
            La infraestructura detrás de cada venta.
          </h1>
          <p className="mt-6 max-w-[42ch] text-[17px] leading-8 text-muted">
            DuMo conecta leads, conversaciones, IA, asesores, automatizaciones y
            ventas en una sola operación comercial.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contacto">Solicitar demo</Button>
            <Button href="/#producto" variant="secondary">
              Explorar plataforma →
            </Button>
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Diseñado para operaciones comerciales que necesitan crecer sin perder control.
          </p>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}
