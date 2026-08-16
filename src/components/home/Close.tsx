import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function HomeClose() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-20 320 C 220 280 340 80 620 120 C 860 154 980 260 1240 90"
          stroke="#C8F54A"
          strokeWidth="1.4"
          strokeOpacity="0.45"
        />
      </svg>
      <div className="shell relative">
        <Reveal>
          <h2 className="display max-w-[14ch] text-[44px] sm:text-[64px] lg:text-[76px]">
            Convierte tu operación comercial en un sistema.
          </h2>
          <p className="mt-6 max-w-[40ch] text-[17px] leading-8 text-muted">
            Centraliza, automatiza y escala cada etapa de tu proceso comercial
            con DuMo.
          </p>
          <Button href="/contacto" className="mt-10">
            Solicitar una demo
          </Button>
          <p className="mt-5 text-[13px] text-muted">Descubre cómo funciona DuMo.</p>
        </Reveal>
      </div>
    </section>
  );
}
