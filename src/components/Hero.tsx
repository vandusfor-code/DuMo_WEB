import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Ecosystem } from "@/components/visuals/Ecosystem";

export function Hero() {
  return (
    <section id="inicio" className="pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      <Container>
        <p className="text-[12px] font-medium tracking-[0.22em] text-ink-muted uppercase">
          Adquisición · Conversión · Activación
        </p>

        <div className="mt-8 grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-20">
          <h1 className="display max-w-[11ch] text-[52px] sm:text-[76px] lg:text-[92px] xl:text-[104px]">
            Convertimos oportunidades en clientes.
          </h1>
          <Ecosystem />
        </div>

        <div className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-end">
          <p className="max-w-[46ch] text-[17px] leading-8 text-ink-muted sm:text-[18px]">
            Dumo combina adquisición de clientes, tecnología y equipos
            comerciales especializados para ayudar a las empresas a convertir
            oportunidades en ventas reales.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
            <Button href="#contacto">Hablar con Dumo</Button>
            <Button href="#como-funciona" variant="secondary">
              Conocer cómo funciona
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
