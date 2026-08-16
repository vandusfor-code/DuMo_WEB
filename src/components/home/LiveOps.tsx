"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const events = [
  ["10:41", "Lead asignado a CM"],
  ["10:42", "Conversación iniciada"],
  ["10:44", "Oferta enviada"],
  ["10:47", "Venta registrada"],
];

export function HomeLiveOps() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setVisible((value) => (value % events.length) + 1);
    }, 1600);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const shown = reduceMotion ? events.length : visible;

  return (
    <section id="operacion" className="shell py-24 sm:py-32">
      <Reveal>
        <h2 className="heading max-w-[12ch] text-[36px] sm:text-[52px]">
          Mira tu operación mientras sucede.
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="mt-12">
        <div className="panel p-5 sm:p-6">
          <div className="flex items-center gap-2 text-[12px] tracking-[0.16em] text-lime uppercase">
            <span className="live-dot" />
            Live
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Asesores", "24"],
              ["Leads activos", "1.284"],
              ["Conversaciones", "326"],
              ["Ventas hoy", "27"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[24px] tracking-[-0.04em]">{value}</p>
                <p className="text-[12px] text-muted">{label}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {events.slice(0, shown).map(([time, event]) => (
              <li key={event} className="flex gap-4 text-[14px]">
                <span className="text-muted">{time}</span>
                <span>{event}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[12px] text-muted">Representación de la plataforma</p>
        </div>
      </Reveal>
    </section>
  );
}
