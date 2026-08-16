import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { id: "01", name: "Captura", note: "La oportunidad entra." },
  { id: "02", name: "Entiende", note: "La IA lee el contexto." },
  { id: "03", name: "Asigna", note: "El asesor correcto la recibe." },
  { id: "04", name: "Conversa", note: "La operación se mueve." },
  { id: "05", name: "Convierte", note: "La oferta se cierra." },
  { id: "06", name: "Activa", note: "Existe un cliente." },
];

export function HomeHowItWorks() {
  return (
    <section id="como-funciona" className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="heading max-w-[10ch] text-[36px] sm:text-[52px]">
          Cómo funciona.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((stage) => (
          <Reveal key={stage.id}>
            <p className="text-[12px] text-lime">{stage.id}</p>
            <p className="mt-3 text-[24px] tracking-[-0.03em]">{stage.name}</p>
            <p className="mt-2 text-[14px] text-muted">{stage.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
