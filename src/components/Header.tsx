"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled || open ? "bg-canvas/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Dumo, ir al inicio">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] transition-colors duration-200",
                pathname === link.href ? "text-ink" : "text-ink-muted hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="hidden text-[13px] font-medium tracking-[-0.02em] text-brand lg:inline"
        >
          Hablar con Dumo
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="bg-canvas px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl tracking-[-0.03em]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="text-xl tracking-[-0.03em] text-brand"
              onClick={() => setOpen(false)}
            >
              Hablar con Dumo
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
