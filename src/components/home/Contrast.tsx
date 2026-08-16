import { Reveal } from "@/components/ui/Reveal";

const crm = ["Contactos", "Tareas", "Notas", "Pipeline"];
const dumo = [
  "Leads",
  "Conversaciones",
  "IA",
  "Automatización",
  "Asesores",
  "Ventas",
  "Operación",
];

export function HomeContrast() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="heading max-w-[10ch] text-[36px] sm:text-[52px]">
          No es otro CRM.
        </h2>
        <p className="mt-5 max-w-[42ch] text-[17px] leading-8 text-muted">
          DuMo está diseñado alrededor de la operación comercial, no únicamente
          alrededor de los contactos.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="label">CRM tradicional</p>
          <ul className="mt-5 space-y-2">
            {crm.map((item) => (
              <li key={item} className="text-[20px] text-muted">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="label text-lime">DuMo</p>
          <ul className="mt-5 space-y-2">
            {dumo.map((item) => (
              <li key={item} className="text-[20px]">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
