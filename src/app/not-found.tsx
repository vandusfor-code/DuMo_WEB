import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-6 sm:px-12">
      <Logo />
      <h1 className="display mt-16 max-w-[12ch] text-[48px] sm:text-[64px]">
        Esta página no existe.
      </h1>
      <p className="mt-6 max-w-md text-[16px] leading-7 text-ink-muted">
        Vuelve al inicio para conocer cómo Dumo convierte oportunidades en clientes.
      </p>
      <Button href="/" className="mt-10 w-fit">
        Ir al inicio
      </Button>
    </main>
  );
}
