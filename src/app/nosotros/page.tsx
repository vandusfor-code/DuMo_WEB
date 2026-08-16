import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "DuMo construye la infraestructura de operaciones comerciales.",
};

export default function NosotrosPage() {
  return (
    <main className="shell py-20">
      <p className="label">Empresa</p>
      <h1 className="display mt-5 max-w-[14ch] text-[44px] sm:text-[68px]">
        Una operación comercial construida como sistema.
      </h1>
      <p className="mt-6 max-w-[46ch] text-[17px] leading-8 text-muted">
        DuMo combina adquisición, tecnología y equipos comerciales para
        convertir oportunidades en clientes. La plataforma organiza. Las
        personas convierten.
      </p>
      <Button href="/contacto" className="mt-10">
        Solicitar demo
      </Button>
    </main>
  );
}
