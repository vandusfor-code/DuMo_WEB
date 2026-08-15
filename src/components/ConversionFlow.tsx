"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { id: "01", label: "Prospecto" },
  { id: "02", label: "Contacto" },
  { id: "03", label: "Calificación" },
  { id: "04", label: "Asesoría" },
  { id: "05", label: "Oferta" },
  { id: "06", label: "Contratación" },
  { id: "07", label: "Activación" },
];

export function ConversionFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="como-funciona" className="border-t border-line bg-canvas-muted py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Flujo comercial
          </p>
          <h2 className="mt-4 max-w-[16ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
            De la oportunidad a la activación.
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-7 text-ink-muted">
            Cada prospecto tiene una oportunidad. Nosotros nos encargamos de
            convertirla, etapa por etapa, hasta la activación.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative rounded-2xl border border-line bg-white p-5 sm:p-8">
            <div className="hidden lg:block">
              <div className="relative grid grid-cols-7 gap-3">
                <div className="absolute top-[27px] right-8 left-8 h-px bg-line" />
                {!reduceMotion ? (
                  <motion.div
                    className="absolute top-[23px] h-2.5 w-2.5 rounded-full bg-brand"
                    animate={{ left: ["6%", "90%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                ) : null}
                {stages.map((stage) => (
                  <div key={stage.id} className="relative text-center">
                    <div className="mx-auto mb-4 h-3.5 w-3.5 rounded-full border-2 border-brand bg-white" />
                    <p className="text-[11px] text-ink-muted">{stage.id}</p>
                    <p className="mt-1 text-sm font-medium text-ink">{stage.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <ol className="space-y-4 lg:hidden">
              {stages.map((stage, index) => (
                <li key={stage.id} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-brand bg-white" />
                    {index < stages.length - 1 ? (
                      <span className="mt-1 h-8 w-px bg-line" />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-[11px] text-ink-muted">{stage.id}</p>
                    <p className="text-sm font-medium text-ink">{stage.label}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-[12px] text-ink-muted">
              Representación del proceso comercial. El movimiento ilustra el avance de una oportunidad.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
