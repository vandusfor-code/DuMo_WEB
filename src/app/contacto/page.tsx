import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Si tienes un producto o servicio que quieres llevar a más personas, queremos conocerlo.",
};

export default function ContactoPage() {
  return (
    <main>
      <section className="shell grid gap-16 pt-16 pb-28 sm:pt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="label">Contacto</p>
          <h1 className="display mt-6 max-w-[10ch] text-[48px] sm:text-[72px] lg:text-[84px]">
            Hablemos de clientes.
          </h1>
          <p className="mt-8 max-w-[36ch] text-[17px] leading-8 text-ink-muted">
            Si tienes un producto o servicio que quieres llevar a más personas,
            queremos conocerlo.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
