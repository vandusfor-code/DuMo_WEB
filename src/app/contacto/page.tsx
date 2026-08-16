import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Solicitar demo",
  description: "Solicita una demo de DuMo y conversemos sobre tu operación comercial.",
};

export default function ContactoPage() {
  return (
    <main className="shell grid gap-16 py-20 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="label">Demo</p>
        <h1 className="display mt-5 max-w-[10ch] text-[48px] sm:text-[68px]">
          Solicitar una demo.
        </h1>
        <p className="mt-6 max-w-[36ch] text-[16px] leading-7 text-muted">
          Cuéntanos qué operación quieres construir. Te mostramos DuMo sobre tu
          proceso comercial.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
