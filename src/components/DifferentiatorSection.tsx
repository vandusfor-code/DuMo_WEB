import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const sequence = [
  { title: "Lead", note: "No es suficiente." },
  { title: "Conversación", note: "Todavía no." },
  { title: "Oferta", note: "Aún no termina." },
  { title: "Venta", note: "Aquí empieza el resultado." },
  { title: "Activación", note: "Ese es el objetivo." },
];

export function DifferentiatorSection() {
  return (
    <section className="border-t border-line bg-[#0F172A] py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-slate-400">
            El diferencial
          </p>
          <h2 className="mt-4 max-w-[16ch] text-[34px] leading-[1.1] font-semibold tracking-[-0.04em] sm:text-[52px]">
            No buscamos conversaciones. Buscamos conversiones.
          </h2>
          <p className="mt-6 max-w-[46ch] text-base leading-7 text-slate-300">
            Un lead no es el resultado final. Es el comienzo del proceso comercial.
          </p>
        </Reveal>

        <div className="mt-14 space-y-0">
          {sequence.map((item, index) => {
            const last = index === sequence.length - 1;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  className={`grid items-baseline gap-2 border-t border-white/10 py-6 sm:grid-cols-[200px_1fr] ${
                    last ? "border-b" : ""
                  }`}
                >
                  <p
                    className={`text-2xl font-semibold tracking-[-0.03em] sm:text-3xl ${
                      last ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className={`text-lg sm:text-xl ${last ? "text-indigo-300" : "text-slate-400"}`}>
                    {item.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
