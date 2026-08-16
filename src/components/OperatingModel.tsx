import { Reveal } from "@/components/ui/Reveal";

const company = ["Producto", "Condiciones", "Elegibilidad", "Proceso"];
const dumo = ["Marketing", "Tecnología", "Asesores", "Conversión", "Activación"];
const client = ["Contratación", "Activación"];

export function OperatingModel() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <h2 className="display max-w-[14ch] text-[40px] sm:text-[60px] lg:text-[72px]">
            Tú tienes el producto. Nosotros construimos el camino hacia el cliente.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="relative mt-20 sm:mt-28">
          <div className="absolute top-[18px] right-[16%] left-[16%] hidden h-px bg-ink/15 lg:block" />
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-10">
            <Node title="Empresa" items={company} />
            <Node title="Dumo" items={dumo} accent />
            <Node title="Cliente" items={client} end />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Node({
  title,
  items,
  accent,
  end,
}: {
  title: string;
  items: string[];
  accent?: boolean;
  end?: boolean;
}) {
  return (
    <div className="relative">
      <span
        className={`mb-6 block h-2.5 w-2.5 rounded-full ${
          end || accent ? "bg-brand" : "bg-ink"
        }`}
      />
      <p className="text-[13px] tracking-[0.22em] text-ink-muted uppercase">{title}</p>
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-[20px] tracking-[-0.03em] sm:text-[24px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
