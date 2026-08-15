import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <Logo />
          <p className="mt-3 max-w-[28ch] text-sm text-ink-muted">
            Adquisición y conversión comercial.
          </p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1120px] px-5 py-5 sm:px-6 lg:px-8">
          <p className="text-[13px] text-ink-muted">
            © 2026 Dumo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
