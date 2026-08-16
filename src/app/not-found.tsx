import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-6 sm:px-14">
      <Logo />
      <h1 className="display mt-20 max-w-[10ch] text-[56px] sm:text-[80px]">
        Esta página no existe.
      </h1>
      <p className="mt-8 max-w-md text-[16px] leading-7 text-ink-muted">
        Vuelve al inicio.
      </p>
      <Button href="/" className="mt-10 w-fit">
        Ir al inicio
      </Button>
    </main>
  );
}
