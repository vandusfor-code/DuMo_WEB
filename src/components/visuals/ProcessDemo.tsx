"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const stages = [
  "Prospecto entra",
  "La plataforma lo recibe",
  "Se asigna",
  "El asesor conversa",
  "Se presenta la oferta",
  "La oportunidad avanza",
  "Venta",
  "Activación",
];

export function ProcessDemo() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % stages.length);
    }, 1400);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="relative">
      <p className="caption mb-8">Representación del proceso. Datos demostrativos.</p>
      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[5px] w-px bg-ink/12" />
        <ol>
          {stages.map((stage, index) => {
            const current = index === active;
            const passed = index < active;
            const last = index === stages.length - 1;
            return (
              <li key={stage} className="relative py-4 pl-8">
                <span
                  className={cn(
                    "absolute top-6 left-[2px] h-2 w-2 rounded-full transition-colors duration-300",
                    current ? "bg-brand" : last && passed ? "bg-success" : passed ? "bg-ink" : "bg-line",
                  )}
                />
                <p
                  className={cn(
                    "text-[22px] tracking-[-0.03em] transition-colors duration-300 sm:text-[28px]",
                    current ? "text-ink" : "text-ink-muted",
                  )}
                >
                  {stage}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
