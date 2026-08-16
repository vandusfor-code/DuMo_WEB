import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  "Telecomunicaciones",
  "Internet hogar",
  "Servicios financieros",
  "Seguros",
  "Educación",
  "Servicios digitales",
  "Suscripciones",
];

export function IndustriesSection() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <h2 className="display max-w-[14ch] text-[36px] sm:text-[48px] lg:text-[52px]">
              Un modelo comercial que puede adaptarse a distintas industrias.
            </h2>
            <p className="mt-7 max-w-[38ch] text-[17px] leading-8 text-ink-muted">
              El modelo no depende de un operador ni de una categoría. Se
              aplica donde exista un producto y la necesidad de conseguir
              clientes.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <ul>
              {industries.map((industry, index) => (
                <li
                  key={industry}
                  className={`py-4 text-[22px] tracking-[-0.03em] sm:text-[26px] ${
                    index === 0 ? "" : "border-t border-line"
                  }`}
                >
                  {industry}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
