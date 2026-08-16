import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const groups = [
  {
    title: "Producto",
    links: [
      { href: "/#producto", label: "Plataforma" },
      { href: "/#ia", label: "IA" },
      { href: "/#como-funciona", label: "Automatización" },
      { href: "/#operacion", label: "Operación" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/nosotros", label: "Nosotros" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacidad", label: "Privacidad" },
      { href: "/terminos", label: "Términos" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-[28ch] text-[14px] text-muted">
            Commercial Operating System.
          </p>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <p className="label">{group.title}</p>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="shell border-t border-line py-5">
        <p className="text-[13px] text-muted">© 2026 DuMo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
