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
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto grid w-full max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
        <Reveal>
          <h2 className="display max-w-[13ch] text-[36px] sm:text-[52px] lg:text-[60px]">
            Un modelo que puede vender más que telecomunicaciones.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <ul>
            {industries.map((industry) => (
              <li key={industry}>
                <div className="industry-row text-[26px] tracking-[-0.03em] sm:text-[34px]">
                  <span>{industry}</span>
                  <span className="mark" />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
