import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function DifferentiatorSection() {
  return (
    <section className="bg-ink text-canvas">
      <Container className="py-24 sm:py-32 lg:py-40">
        <Reveal>
          <p className="max-w-[16ch] text-[28px] leading-[1.15] tracking-[-0.035em] text-white/55 sm:text-[36px]">
            No entregamos simplemente leads.
          </p>
          <p className="display mt-6 max-w-[12ch] text-[48px] text-canvas sm:text-[72px] lg:text-[88px]">
            Construimos operaciones comerciales.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
