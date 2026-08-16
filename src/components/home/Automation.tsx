"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const steps = [
  "Nuevo lead",
  "IA analiza",
  "Lead calificado",
  "Asignación automática",
  "Asesor recibe alerta",
  "Conversación",
  "Oferta",
  "Venta",
];

export function HomeAutomation() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setActive((value) => (value + 1) % steps.length), 1200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="heading max-w-[10ch] text-[36px] sm:text-[52px]">
          Menos tareas. Más ventas.
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="relative mt-12">
        <div className="absolute top-3 bottom-3 left-[5px] w-px bg-line" />
        <ol>
          {steps.map((step, index) => (
            <li key={step} className="relative py-3 pl-8">
              <span
                className={cn(
                  "absolute top-5 left-[2px] h-2 w-2 rounded-full transition-colors duration-300",
                  index === active ? "bg-lime" : index < active ? "bg-ink" : "bg-line",
                )}
              />
              <p className={cn("text-[20px] tracking-[-0.03em]", index === active ? "text-ink" : "text-muted")}>
                {step}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
