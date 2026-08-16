import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-6 py-12 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-12">
        <div>
          <Logo />
          <p className="mt-3 max-w-[24ch] text-[14px] text-ink-muted">
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
      <div className="border-t border-line">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-5 sm:px-8 lg:px-12">
          <p className="text-[13px] text-ink-muted">
            © 2026 Dumo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
