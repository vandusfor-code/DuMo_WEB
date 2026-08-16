import { Reveal } from "@/components/ui/Reveal";
import { Showcase } from "@/components/product/Showcase";

export function HomeProduct() {
  return (
    <section id="producto" className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="heading max-w-[14ch] text-[36px] sm:text-[52px]">
          Tu operación, vista desde una sola pantalla.
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="mt-12">
        <Showcase />
      </Reveal>
    </section>
  );
}
