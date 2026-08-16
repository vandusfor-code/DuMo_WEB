"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const feed = [
  "Lead asignado",
  "Oferta enviada",
  "Venta registrada",
  "Conversación iniciada",
];

export function HeroDashboard() {
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setTick((value) => value + 1), 2200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="dumo-frame relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-10 h-40 w-40 rounded-full bg-lime/10 blur-3xl" />
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-[13px] font-medium">DuMo</p>
        <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] text-lime uppercase">
          <span className="live-dot" />
          Live
        </span>
      </div>
      <div className="grid md:grid-cols-[168px_1fr]">
        <aside className="hidden border-r border-line p-3 md:block">
          {["Dashboard", "Leads", "Campañas", "Convers.", "Asesores", "IA", "Reportes"].map(
            (item, index) => (
              <p
                key={item}
                className={`rounded-lg px-3 py-2 text-[13px] ${
                  index === 0 ? "bg-surface-2 text-ink" : "text-muted"
                }`}
              >
                {item}
              </p>
            ),
          )}
        </aside>
        <div className="p-4 sm:p-5">
          <p className="text-[13px] text-muted">Buenos días</p>
          <p className="mt-1 text-[15px] font-medium">Rendimiento de la operación</p>
          <p className="mt-1 text-[11px] text-muted">Representación de la plataforma</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["2.483", "Leads"],
              ["326", "Chats"],
              ["27", "Ventas"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-[22px] tracking-[-0.04em] text-lime sm:text-[26px]">{value}</p>
                <p className="text-[11px] text-muted">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-line bg-bg-2 p-3">
            <p className="text-[12px] text-muted">Conversión</p>
            <svg viewBox="0 0 280 72" className="mt-2 h-16 w-full" fill="none">
              <path
                d="M0 58 C28 54 40 40 62 42 C88 44 96 22 124 24 C150 26 158 48 186 36 C214 24 228 18 280 10"
                stroke="#C8F54A"
                strokeWidth="1.6"
                className="curve-draw"
              />
            </svg>
          </div>
          <div className="mt-5">
            <p className="text-[12px] text-muted">Actividad en tiempo real</p>
            <ul className="mt-2 space-y-1.5">
              {feed.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 text-[13px] ${
                    index === tick % feed.length ? "text-ink" : "text-muted"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
