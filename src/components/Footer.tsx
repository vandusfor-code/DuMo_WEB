import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-6 pb-10 sm:px-8 lg:px-14">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-[14px] text-ink-muted">
            Adquisición y conversión comercial.
          </p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-7 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 w-full max-w-[1440px]">
        <p className="text-[13px] text-ink-muted">
          © 2026 Dumo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
