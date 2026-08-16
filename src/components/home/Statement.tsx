import { Reveal } from "@/components/ui/Reveal";

export function HomeStatement() {
  return (
    <section className="shell py-20 sm:py-28">
      <Reveal>
        <h2 className="display max-w-[14ch] text-[40px] sm:text-[64px] lg:text-[76px]">
          Tú tienes el producto. Nosotros construimos el camino hacia el cliente.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
        <Reveal>
          <p className="label">Marketing</p>
          <p className="heading mt-3 text-[32px] sm:text-[36px]">Atrae.</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="label">Tecnología</p>
          <p className="heading mt-3 text-[32px] sm:text-[36px]">Organiza.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label">Personas</p>
          <p className="heading mt-3 text-[32px] sm:text-[36px]">Convierten.</p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="label text-brand">Resultado</p>
          <p className="heading mt-3 text-[32px] sm:text-[36px]">Cliente.</p>
        </Reveal>
      </div>
    </section>
  );
}
