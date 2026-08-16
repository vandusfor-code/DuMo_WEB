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
        scrolled ? "bg-canvas/88 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-14">
        <a href="#inicio" aria-label="Dumo, ir al inicio">
          <Logo />
        </a>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
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
          className="hidden text-[13px] font-medium tracking-[-0.02em] text-brand lg:inline"
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
      {open ? (
        <div id="mobile-nav" className="bg-canvas px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl tracking-[-0.03em]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="text-xl tracking-[-0.03em] text-brand"
              onClick={() => setOpen(false)}
            >
              Hablar con Dumo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
