import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessDemo } from "@/components/visuals/ProcessDemo";
import { ProductSurface } from "@/components/visuals/ProductSurface";

export const metadata: Metadata = {
  title: "Tecnología",
  description:
    "Dumo utiliza tecnología propia para organizar prospectos, asesores, conversaciones y cada etapa de la operación comercial.",
};

const systems = [
  "Prospectos",
  "Campañas",
  "Asesores",
  "Conversaciones",
  "Estados",
  "Seguimiento",
  "Ventas",
  "Activaciones",
];

export default function TecnologiaPage() {
  return (
    <main>
      <section className="shell pt-16 pb-16 sm:pt-24">
        <p className="label">Tecnología</p>
        <h1 className="display mt-6 max-w-[12ch] text-[44px] sm:text-[68px] lg:text-[80px]">
          Tecnología para operar cada oportunidad.
        </h1>
        <p className="mt-8 max-w-[46ch] text-[17px] leading-8 text-ink-muted">
          Dumo utiliza tecnología propia para organizar la operación. No es el
          producto. Es la infraestructura que sostiene el proceso.
        </p>
      </section>

      <section className="shell pb-20">
        <ul className="grid grid-cols-2 gap-y-3 sm:grid-cols-4">
          {systems.map((item) => (
            <li key={item} className="text-[16px] text-ink-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pb-24 sm:pb-32">
        <Reveal>
          <ProcessDemo />
        </Reveal>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <Reveal>
            <ProductSurface />
          </Reveal>
        </div>
      </section>

      <section className="shell pb-28">
        <p className="heading max-w-[16ch] text-[28px] sm:text-[36px]">
          La tecnología organiza. Las personas convierten.
        </p>
        <Button href="/contacto" className="mt-10">
          Hablar con Dumo
        </Button>
      </section>
    </main>
  );
}
