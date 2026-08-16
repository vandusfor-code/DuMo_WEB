import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="shell pb-10">
      <div className="flex flex-col gap-8 pt-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-[14px] text-ink-muted">
            Adquisición y conversión comercial.
          </p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-7 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mt-12 text-[13px] text-ink-muted">
        © 2026 Dumo. Todos los derechos reservados.
      </p>
    </footer>
  );
}
