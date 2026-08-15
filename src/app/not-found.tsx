import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Logo />
      <h1 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-ink">
        Esta página no existe.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-ink-muted">
        Vuelve al inicio para conocer cómo Dumo convierte oportunidades en clientes.
      </p>
      <Button href="/" className="mt-8">
        Ir al inicio
      </Button>
    </main>
  );
}
