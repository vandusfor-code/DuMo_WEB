import { Reveal } from "@/components/ui/Reveal";

export function TechnologySection() {
  return (
    <section id="tecnologia" className="px-6 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <h2 className="display max-w-[13ch] text-[40px] sm:text-[58px] lg:text-[72px]">
            Tecnología que sostiene la operación.
          </h2>
          <p className="mt-8 max-w-[46ch] text-[17px] leading-8 text-ink-muted">
            Organiza prospectos, distribuye oportunidades, gestiona asesores,
            controla estados y sigue cada etapa. No es el producto. Es la
            infraestructura.
          </p>
        </Reveal>

        <div className="relative mt-20 grid gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5 lg:pt-10">
            <p className="text-[12px] tracking-[0.2em] text-ink-muted uppercase">
              Prospecto
            </p>
            <p className="mt-4 text-[28px] tracking-[-0.035em]">A. Restrepo</p>
            <p className="mt-2 text-[15px] text-ink-muted">Entra a la operación</p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-4 lg:col-start-8">
            <p className="text-[12px] tracking-[0.2em] text-ink-muted uppercase">
              Asignación
            </p>
            <p className="mt-4 text-[28px] tracking-[-0.035em]">CM</p>
            <p className="mt-2 text-[15px] text-ink-muted">La oportunidad cambia de manos</p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-3">
            <p className="text-[12px] tracking-[0.2em] text-ink-muted uppercase">
              Conversación
            </p>
            <p className="mt-5 max-w-[36ch] text-[18px] leading-8 text-ink-muted">
              Necesito entender si el servicio aplica.
            </p>
            <p className="mt-4 max-w-[36ch] text-[18px] leading-8 text-ink">
              Revisamos elegibilidad y presentamos la oferta.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="text-[12px] tracking-[0.2em] text-ink-muted uppercase">
              Actividad
            </p>
            <p className="mt-4 text-[22px] tracking-[-0.03em]">Oferta presentada</p>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9 lg:text-right">
            <p className="text-[12px] tracking-[0.2em] text-brand uppercase">Venta</p>
            <p className="mt-4 text-[28px] tracking-[-0.035em]">Servicio activado</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
