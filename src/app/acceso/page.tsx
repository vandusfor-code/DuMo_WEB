import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Acceso",
};

export default function AccesoPage() {
  return (
    <main className="shell flex min-h-[70svh] flex-col justify-center py-20">
      <h1 className="display max-w-[12ch] text-[44px] sm:text-[64px]">
        El acceso se asigna por operación.
      </h1>
      <p className="mt-6 max-w-[40ch] text-[16px] leading-7 text-muted">
        DuMo no es un registro abierto. Si ya formas parte de una operación,
        el acceso lo define el equipo. Si quieres ver la plataforma, solicita
        una demo.
      </p>
      <Button href="/contacto" className="mt-10 w-fit">
        Solicitar demo
      </Button>
    </main>
  );
}
