import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Dumo es un equipo comercial respaldado por tecnología y procesos de adquisición para convertir oportunidades en clientes.",
};

export default function NosotrosPage() {
  return (
    <main>
      <section className="shell pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="label">Nosotros</p>
        <h1 className="display mt-6 max-w-[14ch] text-[44px] sm:text-[68px] lg:text-[80px]">
          Una operación comercial construida para convertir.
        </h1>
        <p className="mt-8 max-w-[44ch] text-[17px] leading-8 text-ink-muted">
          Dumo es un equipo organizado de profesionales comerciales respaldado
          por tecnología y procesos de adquisición.
        </p>
      </section>

      <section className="shell grid gap-16 pb-24 sm:pb-32 lg:grid-cols-2">
        <Reveal>
          <p className="label">Visión</p>
          <p className="heading mt-4 text-[28px] sm:text-[36px]">
            Convertir oportunidades en clientes, no en conversaciones.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="label">Modelo</p>
          <p className="mt-4 max-w-[40ch] text-[17px] leading-8 text-ink-muted">
            Marketing para atraer. Tecnología para organizar. Personas para
            convertir. Activación como objetivo.
          </p>
        </Reveal>
        <Reveal>
          <p className="label">Equipo</p>
          <p className="mt-4 max-w-[40ch] text-[17px] leading-8 text-ink-muted">
            Asesores especializados por campaña. Reciben oportunidades, sostienen
            la conversación y acompañan hasta la contratación.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="label">Cultura comercial</p>
          <p className="mt-4 max-w-[40ch] text-[17px] leading-8 text-ink-muted">
            El resultado no es el lead. El resultado es el cliente activado.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-28">
        <Button href="/contacto">Hablar con Dumo</Button>
      </section>
    </main>
  );
}
