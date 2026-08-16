import type { Metadata } from "next";

export const metadata: Metadata = { title: "Términos" };

export default function TerminosPage() {
  return (
    <main className="shell py-20">
      <h1 className="heading text-[40px]">Términos</h1>
      <p className="mt-6 max-w-[52ch] text-[16px] leading-7 text-muted">
        Esta página se completará cuando existan los términos de uso
        corporativos definitivos.
      </p>
    </main>
  );
}
