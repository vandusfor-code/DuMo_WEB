"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PATH =
  "M1320 70 C1120 130 1260 250 980 300 C700 350 1100 500 820 560 C540 620 920 740 430 820";

const events = [
  { label: "Oportunidad", x: "88%", y: "6%" },
  { label: "Campaña", x: "66%", y: "28%" },
  { label: "Prospecto", x: "48%", y: "38%" },
  { label: "Asesor", x: "70%", y: "54%" },
  { label: "Oferta", x: "42%", y: "66%" },
  { label: "Venta", x: "58%", y: "78%" },
  { label: "Cliente", x: "26%", y: "90%" },
];

export function HeroTrajectory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { y }}
      className="pointer-events-none absolute inset-0 hidden lg:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          id="dumo-hero-path"
          d={PATH}
          stroke="#0D0F12"
          strokeWidth="1.25"
          strokeOpacity="0.28"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <circle r="4.5" fill="#5B5CE2">
          {!reduceMotion ? (
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
              <mpath href="#dumo-hero-path" />
            </animateMotion>
          ) : null}
        </circle>
      </svg>
      {events.map((event) => (
        <span
          key={event.label}
          className={`absolute text-[12px] tracking-[0.16em] uppercase ${
            event.label === "Cliente" || event.label === "Oportunidad"
              ? "font-medium text-ink"
              : "text-ink-muted"
          }`}
          style={{ left: event.x, top: event.y }}
        >
          {event.label}
        </span>
      ))}
    </motion.div>
  );
}

export function MobileTrajectory() {
  const steps = ["Oportunidad", "Campaña", "Prospecto", "Asesor", "Oferta", "Venta", "Cliente"];

  return (
    <div className="relative mt-14 pl-5 lg:hidden" aria-hidden="true">
      <div className="absolute top-1 bottom-1 left-[3px] w-px bg-ink/20" />
      <ol className="space-y-4">
        {steps.map((step, index) => {
          const end = index === 0 || index === steps.length - 1;
          return (
            <li key={step} className="relative">
              <span
                className={`absolute top-1.5 -left-[19px] h-1.5 w-1.5 rounded-full ${
                  end ? "bg-brand" : "bg-ink/50"
                }`}
              />
              <p
                className={`text-[12px] tracking-[0.16em] uppercase ${
                  end ? "text-ink" : "text-ink-muted"
                }`}
              >
                {step}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
