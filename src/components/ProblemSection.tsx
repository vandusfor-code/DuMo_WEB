import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const path = [
  "Interés",
  "Contacto",
  "Calificación",
  "Asesoría",
  "Oferta",
  "Conversión",
  "Activación",
];

export function ProblemSection() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h2 className="display max-w-[14ch] text-[40px] sm:text-[56px] lg:text-[64px]">
              Conseguir un lead no significa conseguir un cliente.
            </h2>
            <p className="max-w-[38ch] text-[17px] leading-8 text-ink-muted">
              Un prospecto es solamente el comienzo. Entre el interés y la
              activación existe todo un proceso comercial.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-16 sm:mt-20">
          <div className="relative">
            <div className="absolute top-2 right-0 left-0 hidden h-px bg-line md:block" />
            <span className="travel-x absolute top-[5px] hidden h-2 w-2 rounded-full bg-ink md:block" />
            <ol className="grid gap-6 md:grid-cols-7 md:gap-3">
              {path.map((step, index) => {
                const last = index === path.length - 1;
                return (
                  <li key={step}>
                    <span
                      className={`mb-4 hidden h-1.5 w-1.5 rounded-full md:block ${
                        last ? "bg-brand" : "bg-ink"
                      }`}
                    />
                    <p
                      className={`text-[15px] tracking-[-0.02em] ${
                        last ? "font-medium text-ink" : "text-ink-muted"
                      }`}
                    >
                      {step}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
