import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="shell flex min-h-[70svh] flex-col justify-center py-20">
      <h1 className="display max-w-[10ch] text-[48px] sm:text-[72px]">
        Esta página no existe.
      </h1>
      <p className="mt-6 text-[16px] text-ink-muted">Vuelve al inicio.</p>
      <Button href="/" className="mt-10 w-fit">
        Ir al inicio
      </Button>
    </main>
  );
}
