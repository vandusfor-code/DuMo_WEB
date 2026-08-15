"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StatusBadge } from "@/components/ui/StatusBadge";

const pipeline = [
  { label: "Nuevo", count: "04", active: false },
  { label: "Contactado", count: "07", active: false },
  { label: "Calificado", count: "05", active: true },
  { label: "Oferta", count: "03", active: false },
  { label: "Venta", count: "02", active: false },
  { label: "Activado", count: "01", active: false },
];

const prospects = [
  { name: "A. Restrepo", origin: "Campaña", campaign: "Movilidad", advisor: "CM", status: "En gestión", tone: "progress" as const },
  { name: "L. Morales", origin: "Base", campaign: "Portabilidad", advisor: "DR", status: "Oferta presentada", tone: "offer" as const },
  { name: "C. Suárez", origin: "Campaña", campaign: "Movilidad", advisor: "LV", status: "Venta en proceso", tone: "sale" as const },
  { name: "M. Peña", origin: "Referido", campaign: "Movilidad", advisor: "CM", status: "Cliente activado", tone: "success" as const },
];

const activity = [
  { title: "Nuevo prospecto", detail: "Ingresó a la operación" },
  { title: "Asignado a asesor", detail: "Distribuido a CM" },
  { title: "Oferta presentada", detail: "Condiciones enviadas" },
  { title: "Cliente activado", detail: "Servicio contratado" },
];

export function OperationsCanvas() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-3 top-10 hidden xl:block">
        <Annotation>Nuevo prospecto</Annotation>
      </div>
      <div className="pointer-events-none absolute -right-4 top-36 hidden xl:block">
        <Annotation>En gestión</Annotation>
      </div>
      <div className="pointer-events-none absolute bottom-16 -left-2 hidden xl:block">
        <Annotation>Cliente activado</Annotation>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-28px_rgba(15,23,42,0.28)]">
        <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
          <div>
            <p className="text-[13px] font-medium text-ink">Dumo · Operación comercial</p>
            <p className="text-[11px] text-ink-muted">Representación demostrativa</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            En operación
          </span>
        </div>

        <div className="border-b border-line bg-canvas px-4 py-3 sm:px-5">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
            Pipeline
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {pipeline.map((stage, index) => (
              <motion.div
                key={stage.label}
                className={`min-w-[92px] rounded-lg border px-2.5 py-2 ${
                  stage.active
                    ? "border-brand/30 bg-indigo-50"
                    : "border-line bg-white"
                }`}
                animate={
                  reduceMotion || !stage.active
                    ? undefined
                    : { boxShadow: ["0 0 0 0 rgba(79,70,229,0)", "0 0 0 4px rgba(79,70,229,0.08)", "0 0 0 0 rgba(79,70,229,0)"] }
                }
                transition={{ duration: 2.4, repeat: Infinity }}
              >
                <p className="text-[10px] text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-[12px] font-medium text-ink">{stage.label}</p>
                <p className="text-[11px] text-ink-muted">{stage.count}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_210px]">
          <div className="min-w-0">
            <div className="hidden grid-cols-[1.1fr_0.7fr_0.9fr_0.6fr_1fr] gap-2 border-b border-line px-5 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-muted sm:grid">
              <span>Prospecto</span>
              <span>Origen</span>
              <span>Campaña</span>
              <span>Asesor</span>
              <span>Estado</span>
            </div>
            {prospects.map((row, index) => (
              <motion.div
                key={row.name}
                className="grid grid-cols-1 items-center gap-2 border-b border-line px-4 py-3 last:border-b-0 sm:grid-cols-[1.1fr_0.7fr_0.9fr_0.6fr_1fr] sm:px-5"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 * index, duration: 0.35 }}
              >
                <p className="text-[13px] font-medium text-ink">{row.name}</p>
                <p className="hidden text-[12px] text-ink-muted sm:block">{row.origin}</p>
                <p className="hidden text-[12px] text-ink-muted sm:block">{row.campaign}</p>
                <p className="hidden text-[12px] text-ink-muted sm:block">{row.advisor}</p>
                <StatusBadge tone={row.tone}>{row.status}</StatusBadge>
              </motion.div>
            ))}
          </div>

          <aside className="hidden border-l border-line bg-canvas/70 p-4 lg:block">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Actividad
            </p>
            <ul className="space-y-3">
              {activity.map((item) => (
                <li key={item.title} className="border-b border-line/80 pb-3 last:border-b-0 last:pb-0">
                  <p className="text-[12px] font-medium text-ink">{item.title}</p>
                  <p className="text-[11px] text-ink-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Annotation({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-ink shadow-sm">
      {children}
    </span>
  );
}
