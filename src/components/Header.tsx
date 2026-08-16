"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled ? "bg-canvas/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1320px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <a href="#inicio" aria-label="Dumo, ir al inicio">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden text-[13px] font-medium tracking-[-0.02em] text-ink underline-offset-4 hover:underline lg:inline"
        >
          Hablar con Dumo
        </a>

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

      <div className={cn("hairline h-px w-full", scrolled ? "opacity-100" : "opacity-0")} />

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-canvas px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="text-lg text-ink" onClick={() => setOpen(false)}>
              Hablar con Dumo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
