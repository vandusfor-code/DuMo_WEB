"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/site";

export function Header() {
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
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-line/80 bg-bg/75 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="shell grid h-16 grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="DuMo, ir al inicio" className="justify-self-start">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center justify-end gap-4 lg:flex">
          <Link
            href="/acceso"
            className="text-[13px] text-muted transition-colors duration-200 hover:text-ink"
          >
            Iniciar sesión
          </Link>
          <Button href="/contacto">Solicitar demo</Button>
        </div>
        <button
          type="button"
          className="justify-self-end text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bg px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/acceso" className="text-lg text-muted" onClick={() => setOpen(false)}>
              Iniciar sesión
            </Link>
            <Button href="/contacto" className="mt-2" onClick={() => setOpen(false)}>
              Solicitar demo
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
