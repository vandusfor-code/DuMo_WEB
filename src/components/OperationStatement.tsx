import { Reveal } from "@/components/ui/Reveal";

export function OperationStatement() {
  return (
    <section className="flex min-h-[85svh] items-center px-6 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <h2 className="display max-w-[11ch] text-[52px] sm:text-[80px] lg:text-[100px] xl:text-[110px]">
            Entre una oportunidad y un cliente existe una operación.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
