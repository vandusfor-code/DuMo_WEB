import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacidad" };

export default function PrivacidadPage() {
  return (
    <main className="shell py-20">
      <h1 className="heading text-[40px]">Privacidad</h1>
      <p className="mt-6 max-w-[52ch] text-[16px] leading-7 text-muted">
        Esta página se completará cuando exista la política de privacidad
        corporativa definitiva. Los datos del formulario de demo se utilizan
        únicamente para contactar a la empresa interesada.
      </p>
    </main>
  );
}
