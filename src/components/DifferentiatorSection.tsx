import { Reveal } from "@/components/ui/Reveal";

export function DifferentiatorSection() {
  return (
    <section className="bg-ink text-canvas">
      <div className="mx-auto flex min-h-[90svh] w-full max-w-[1440px] flex-col justify-center px-6 py-28 sm:px-8 lg:px-14">
        <Reveal>
          <p className="display max-w-[10ch] text-[48px] text-white/40 sm:text-[72px] lg:text-[88px]">
            No entregamos simplemente leads.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-16 sm:mt-24">
          <p className="display max-w-[11ch] text-[52px] sm:text-[80px] lg:text-[100px]">
            Construimos operaciones comerciales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
