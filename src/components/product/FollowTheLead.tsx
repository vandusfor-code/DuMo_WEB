"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { cn } from "@/lib/cn";

const verbs = [
  "Entra",
  "Lo entiende",
  "Lo asigna",
  "Conversa",
  "Detecta",
  "Oferta",
  "Venta",
] as const;

const statuses = [
  "Nuevo",
  "Analizando",
  "Asignado",
  "En conversación",
  "Alta intención",
  "Oferta enviada",
  "Activado",
] as const;

export function FollowTheLead() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [stage, setStage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setStage(Math.min(6, Math.max(0, Math.floor(value * 6.999))));
  });

  const current = stage;

  return (
    <section id="follow" ref={ref} className="relative h-[720vh]">
      <div className="sticky top-16 flex h-[calc(100svh-64px)] items-center py-3">
        <div className="shell grid h-full max-h-[820px] w-full items-stretch gap-6 lg:grid-cols-[160px_minmax(0,1fr)]">
          <div className="hidden self-center lg:block">
            <p className="label">Follow the lead</p>
            <p className="mt-5 text-[32px] tracking-[-0.045em]">{verbs[current]}</p>
            <p className="mt-3 text-[13px] text-muted">A. Restrepo</p>
          </div>
          <DuMoFrame stage={current} />
        </div>
      </div>
    </section>
  );
}

function DuMoFrame({ stage }: { stage: number }) {
  const nav = ["Leads", "Convers.", "IA", "Asesores", "Pipeline"];
  const activeNav = stage <= 1 ? 0 : stage === 2 ? 3 : stage <= 4 ? 1 : stage === 5 ? 4 : 0;

  return (
    <div className="dumo-frame flex min-h-0 flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <p className="text-[13px] font-medium">
          Du<span className="text-lime">M</span>o
        </p>
        <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.16em] text-lime uppercase">
          <span className="live-dot" />
          Live
        </span>
      </div>
      <div className="grid min-h-0 flex-1 lg:grid-cols-[132px_minmax(0,1fr)]">
        <aside className="hidden border-r border-line p-2 lg:block">
          {nav.map((item, index) => (
            <p
              key={item}
              className={cn(
                "rounded-lg px-2.5 py-2 text-[12px]",
                index === activeNav ? "bg-surface-2 text-ink" : "text-muted",
              )}
            >
              {item}
            </p>
          ))}
        </aside>
        <div className="flex min-h-0 flex-col p-4 sm:p-5">
          <LeadHeader stage={stage} />
          <div className="mt-4 min-h-0 flex-1 overflow-hidden">
            <StageBody stage={stage} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadHeader({ stage }: { stage: number }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Lead</p>
        <p className="mt-1 text-[22px] tracking-[-0.03em] sm:text-[26px]">A. Restrepo</p>
        <p className="mt-1 text-[12px] text-muted">Meta Ads · Portabilidad · 10:41</p>
      </div>
      <span
        className={cn(
          "rounded-full px-2.5 py-1 text-[11px]",
          stage === 6 ? "bg-lime text-bg" : "text-lime",
        )}
      >
        {statuses[stage]}
      </span>
    </div>
  );
}

function StageBody({ stage }: { stage: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      key={stage}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {stage === 0 ? <Enter /> : null}
      {stage === 1 ? <Understand /> : null}
      {stage === 2 ? <Assign /> : null}
      {stage === 3 ? <Talk /> : null}
      {stage === 4 ? <Signal /> : null}
      {stage === 5 ? <Offer /> : null}
      {stage === 6 ? <Won /> : null}
    </motion.div>
  );
}

function Enter() {
  return (
    <div>
      <p className="text-[12px] text-lime">New lead</p>
      <svg viewBox="0 0 320 56" className="mt-6 h-12 w-full" fill="none" aria-hidden="true">
        <path
          d="M0 40 C40 38 70 12 120 16 C170 20 190 44 240 28 C280 16 300 10 320 8"
          stroke="#C8F54A"
          strokeWidth="1.4"
          className="curve-flow"
        />
      </svg>
      <div className="mt-6 grid grid-cols-2 gap-4 text-[13px] sm:grid-cols-4">
        <Field label="Origen" value="Meta Ads" />
        <Field label="Interés" value="Portabilidad" />
        <Field label="Estado" value="Nuevo" />
        <Field label="Hora" value="10:41" />
      </div>
    </div>
  );
}

function Understand() {
  return (
    <div>
      <p className="text-[12px] text-muted">DuMo AI</p>
      <p className="mt-2 text-[18px] tracking-[-0.03em]">Analyzing lead…</p>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-[13px]">
        <Field label="Intent" value="High" accent />
        <Field label="Priority" value="High" accent />
        <Field label="Purchase probability" value="82%" accent />
        <Field label="Recommended action" value="Contact now" />
      </div>
    </div>
  );
}

function Assign() {
  return (
    <div>
      <p className="text-[12px] text-muted">Assignment</p>
      <p className="mt-3 text-[20px] tracking-[-0.03em]">
        A. Restrepo → Camila Martínez
      </p>
      <p className="mt-2 inline-flex items-center gap-2 text-[13px] text-lime">
        <span className="live-dot" />
        Online · 10:42
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 text-[13px] sm:grid-cols-4">
        <Field label="Leads activos" value="24" />
        <Field label="Conversaciones" value="8" />
        <Field label="Ofertas" value="3" />
        <Field label="Ventas" value="2" />
      </div>
    </div>
  );
}

function Talk() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-[12px] text-muted">
        <span>WhatsApp · Camila Martínez</span>
        <span>10:43 · Online</span>
      </div>
      <div className="space-y-3">
        <p className="max-w-[90%] rounded-2xl bg-surface-2 px-3 py-2 text-[14px] leading-6 text-muted">
          Hola, quiero saber qué oferta tienen para portabilidad.
        </p>
        <p className="ml-auto max-w-[90%] rounded-2xl bg-bg-2 px-3 py-2 text-[14px] leading-6">
          Claro. Te ayudo a revisar las opciones disponibles para tu número.
        </p>
      </div>
    </div>
  );
}

function Signal() {
  return (
    <div className="relative">
      <div className="space-y-3 opacity-70">
        <p className="max-w-[90%] rounded-2xl bg-surface-2 px-3 py-2 text-[14px] text-muted">
          Sí, me interesa si puedo conservar el número.
        </p>
        <p className="ml-auto max-w-[90%] rounded-2xl bg-bg-2 px-3 py-2 text-[14px]">
          Perfecto. Te dejo las condiciones y el plan que aplica.
        </p>
      </div>
      <div className="mt-5 border-t border-line pt-4">
        <p className="text-[11px] tracking-[0.16em] text-lime uppercase">AI signal</p>
        <p className="mt-2 text-[18px] tracking-[-0.03em]">High purchase intent</p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          <span className="text-muted">
            Intent <span className="text-lime">94%</span>
          </span>
          <span className="text-muted">
            Sentiment <span className="text-ink">Positive</span>
          </span>
          <span className="text-muted">
            Next <span className="text-ink">Send offer</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Offer() {
  return (
    <div>
      <p className="text-[12px] text-lime">Offer sent</p>
      <p className="mt-3 text-[20px] tracking-[-0.03em]">Portabilidad</p>
      <div className="mt-5 grid grid-cols-2 gap-4 text-[13px]">
        <Field label="Condiciones" value="Según campaña" />
        <Field label="Estado" value="Awaiting confirmation" />
      </div>
    </div>
  );
}

function Won() {
  return (
    <div>
      <p className="text-[12px] text-lime">Sale won</p>
      <p className="mt-2 text-[28px] tracking-[-0.04em]">Activado</p>
      <p className="mt-1 text-[14px] text-muted">A. Restrepo · Portabilidad</p>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <p className="text-[12px] text-muted">Ventas hoy</p>
          <p className="text-[28px] tracking-[-0.04em]">
            26 <span className="text-lime">→ 27</span>
          </p>
        </div>
        <div>
          <p className="text-[12px] text-muted">Conversion</p>
          <p className="text-[28px] tracking-[-0.04em]">
            8.2% <span className="text-lime">→ 8.4%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="text-muted">{label}</p>
      <p className={accent ? "text-lime" : "text-ink"}>{value}</p>
    </div>
  );
}
