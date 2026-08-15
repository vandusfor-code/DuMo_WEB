import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OperationsCanvas } from "@/components/visuals/OperationsCanvas";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <div>
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
              Adquisición y conversión comercial
            </p>
            <h1 className="max-w-[12ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.04em] text-ink sm:text-[56px] lg:text-[64px]">
              Convertimos oportunidades en clientes.
            </h1>
            <p className="mt-6 max-w-[42ch] text-[17px] leading-7 text-ink-muted">
              Dumo combina adquisición de clientes, tecnología y equipos
              comerciales especializados para ayudar a las empresas a convertir
              oportunidades en ventas reales.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contacto" className="h-11 px-5">
                Hablar con Dumo
              </Button>
              <Button href="#como-funciona" variant="secondary" className="h-11 px-5">
                Conocer cómo funciona
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-8 text-[13px] text-ink-muted">
              Marketing para atraer. Tecnología para gestionar. Personas para convertir.
            </p>
          </div>

          <div className="lg:translate-x-4">
            <OperationsCanvas />
          </div>
        </div>
      </Container>
    </section>
  );
}
