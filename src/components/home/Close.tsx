import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function HomeClose() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="display max-w-[9ch] text-[52px] sm:text-[80px] lg:text-[92px]">
          ¿Qué quieres vender?
        </h2>
        <p className="mt-8 max-w-[36ch] text-[17px] leading-8 text-ink-muted">
          Cuéntanos qué producto tienes, a quién quieres llegar y qué resultado
          buscas.
        </p>
        <Button href="/contacto" className="mt-10">
          Hablar con Dumo
        </Button>
      </Reveal>
    </section>
  );
}
