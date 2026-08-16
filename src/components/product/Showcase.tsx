"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const tabs = ["Overview", "Leads", "Conversaciones", "Pipeline", "Asesores"] as const;

export function Showcase() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");

  return (
    <div className="panel overflow-hidden">
      <div className="flex gap-1 overflow-x-auto border-b border-line px-3 py-2">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-[13px] transition-colors duration-200",
              tab === item ? "bg-surface-2 text-ink" : "text-muted hover:text-ink",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="p-5">
        {tab === "Overview" ? <Overview /> : null}
        {tab === "Leads" ? <LeadsView /> : null}
        {tab === "Conversaciones" ? <InboxView /> : null}
        {tab === "Pipeline" ? <PipelineView /> : null}
        {tab === "Asesores" ? <AdvisorsView /> : null}
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        ["Leads activos", "2.483"],
        ["Conversaciones", "326"],
        ["Ventas", "27"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-xl border border-line bg-bg-2 p-4">
          <p className="text-[12px] text-muted">{label}</p>
          <p className="mt-2 text-[28px] tracking-[-0.04em] text-lime">{value}</p>
        </div>
      ))}
    </div>
  );
}

function LeadsView() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-[13px]">
        <thead className="text-muted">
          <tr>
            {["Lead", "Canal", "Origen", "Asesor", "Estado"].map((col) => (
              <th key={col} className="pb-3 font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-line">
            <td className="py-3">Juan Pérez</td>
            <td>WhatsApp</td>
            <td>Campaña</td>
            <td>CM</td>
            <td className="text-lime">Calificado</td>
          </tr>
          <tr className="border-t border-line">
            <td className="py-3">Laura Díaz</td>
            <td>Web</td>
            <td>Base</td>
            <td>DR</td>
            <td>Oferta</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function InboxView() {
  return (
    <div className="space-y-3">
      {[
        ["Juan Pérez", "¿El servicio aplica para mi caso?", "4 min"],
        ["Laura Díaz", "Quiero revisar la oferta", "12 min"],
      ].map(([name, message, time]) => (
        <div key={name} className="flex items-center justify-between gap-4 rounded-xl border border-line bg-bg-2 px-4 py-3">
          <div>
            <p className="text-[14px]">{name}</p>
            <p className="text-[13px] text-muted">{message}</p>
          </div>
          <p className="text-[12px] text-muted">{time}</p>
        </div>
      ))}
    </div>
  );
}

function PipelineView() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {["Nuevo", "Contactado", "Oferta", "Venta", "Activado"].map((stage, index) => (
        <div key={stage} className="rounded-xl border border-line bg-bg-2 p-3">
          <p className="text-[12px] text-muted">{stage}</p>
          <p className={`mt-2 text-[20px] ${index === 4 ? "text-lime" : "text-ink"}`}>
            {["48", "36", "21", "9", "7"][index]}
          </p>
        </div>
      ))}
    </div>
  );
}

function AdvisorsView() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        ["CM", "Conversación"],
        ["DR", "Seguimiento"],
        ["LV", "Oferta"],
        ["JP", "Activación"],
      ].map(([mark, state]) => (
        <div key={mark} className="flex items-center justify-between rounded-xl border border-line bg-bg-2 px-4 py-3">
          <p>{mark}</p>
          <p className="text-[13px] text-muted">{state}</p>
        </div>
      ))}
    </div>
  );
}
