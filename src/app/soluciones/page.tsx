import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Dumo construye operaciones para adquirir y convertir clientes mediante marketing, gestión comercial y activación.",
};

const capabilities = [
  {
    name: "Adquisición",
    text: "Encontramos personas potencialmente interesadas.",
  },
  {
    name: "Generación de oportunidades",
    text: "Creamos campañas y gestionamos diferentes fuentes de prospectos.",
  },
  {
    name: "Gestión comercial",
    text: "Organizamos y distribuimos oportunidades entre asesores.",
  },
  {
    name: "Conversión",
    text: "Nuestros equipos comerciales asesoran, gestionan objeciones y llevan el proceso hacia la contratación.",
  },
  {
    name: "Activación",
    text: "El objetivo final es conseguir el resultado comercial esperado.",
  },
];

const industries = [
  "Telecomunicaciones",
  "Internet hogar",
  "Servicios financieros",
  "Seguros",
  "Educación",
  "Servicios digitales",
  "Suscripciones",
];

export default function SolucionesPage() {
  return (
    <main>
      <section className="shell pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="label">Soluciones</p>
        <h1 className="display mt-6 max-w-[14ch] text-[44px] sm:text-[68px] lg:text-[80px]">
          Construimos operaciones para adquirir y convertir clientes.
        </h1>
      </section>

      <section className="shell pb-24 sm:pb-32">
        {capabilities.map((item, index) => (
          <Reveal key={item.name}>
            <article
              className={`grid gap-4 py-10 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:items-baseline ${
                index === 0 ? "" : "border-t border-line"
              }`}
            >
              <h2 className="heading text-[28px] sm:text-[34px]">{item.name}</h2>
              <p className="max-w-[46ch] text-[17px] leading-8 text-ink-muted">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="shell pb-24 sm:pb-32">
        <Reveal>
          <h2 className="heading max-w-[16ch] text-[32px] sm:text-[44px]">
            Un modelo que puede vender más que telecomunicaciones.
          </h2>
          <ul className="mt-12 columns-1 gap-x-16 sm:columns-2">
            {industries.map((industry) => (
              <li key={industry} className="mb-3 text-[20px] tracking-[-0.03em]">
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="shell pb-28">
        <Button href="/contacto">Hablar con Dumo</Button>
      </section>
    </main>
  );
}
