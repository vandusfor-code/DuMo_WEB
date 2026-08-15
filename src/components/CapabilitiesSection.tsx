import { ArrowUpRight, Check, MessageSquare, Radio, Rows3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function CapabilitiesSection() {
  return (
    <section id="soluciones" className="border-t border-line py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Qué hacemos
          </p>
          <h2 className="mt-4 max-w-[18ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
            Del prospecto a la activación.
          </h2>
          <p className="mt-5 max-w-[54ch] text-base leading-7 text-ink-muted">
            No entregamos simplemente leads. Construimos operaciones comerciales
            que atraen, gestionan, convierten y activan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="h-full overflow-hidden rounded-2xl border border-line bg-white">
              <div className="grid h-full md:grid-cols-[1fr_0.9fr]">
                <div className="p-6 sm:p-7">
                  <p className="text-[12px] text-ink-muted">01</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                    Generamos demanda
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    Diseñamos y ejecutamos campañas para encontrar personas
                    potencialmente interesadas en los productos y servicios de
                    nuestros aliados.
                  </p>
                </div>
                <div className="border-t border-line bg-canvas p-5 md:border-t-0 md:border-l">
                  <div className="space-y-2.5">
                    {["Interés detectado", "Campaña en curso", "Prospecto recibido"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-lg border border-line bg-white px-3 py-2.5"
                        >
                          <div className="flex items-center gap-2">
                            <Radio className="h-3.5 w-3.5 text-brand" />
                            <span className="text-[13px] text-ink">{item}</span>
                          </div>
                          <span className="text-[11px] text-ink-muted">
                            0{index + 1}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-canvas-muted p-6 sm:p-7">
              <p className="text-[12px] text-ink-muted">02</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                Gestionamos oportunidades
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">
                Centralizamos los prospectos y organizamos su distribución,
                seguimiento y gestión comercial.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {["Entrada", "Asignación", "Seguimiento"].map((label) => (
                  <div key={label} className="rounded-lg border border-line bg-white px-2 py-3 text-center">
                    <Rows3 className="mx-auto h-3.5 w-3.5 text-ink-muted" />
                    <p className="mt-2 text-[11px] font-medium text-ink">{label}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.04} className="lg:col-span-5">
            <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 sm:p-7">
              <div>
                <p className="text-[12px] text-ink-muted">03</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                  Convertimos
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  Nuestro equipo comercial contacta, asesora, resuelve objeciones
                  y acompaña al prospecto durante el proceso de decisión.
                </p>
              </div>
              <div className="mt-6 rounded-xl border border-line bg-canvas p-4">
                <div className="mb-3 flex items-center gap-2 text-[12px] text-ink-muted">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Conversación con asesor
                </div>
                <div className="space-y-2">
                  <p className="max-w-[90%] rounded-lg bg-white px-3 py-2 text-[12px] text-ink-muted">
                    Necesito entender si el servicio aplica para mi caso.
                  </p>
                  <p className="ml-auto max-w-[90%] rounded-lg bg-indigo-50 px-3 py-2 text-[12px] text-ink">
                    Revisamos elegibilidad, resolvemos dudas y presentamos la oferta.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7">
            <article className="h-full overflow-hidden rounded-2xl border border-line bg-white">
              <div className="grid h-full md:grid-cols-[1fr_1fr]">
                <div className="p-6 sm:p-7">
                  <p className="text-[12px] text-ink-muted">04</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                    Activamos
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    El proceso no termina con una conversación. Buscamos llevar
                    cada oportunidad hasta la contratación o activación efectiva
                    del servicio.
                  </p>
                </div>
                <div className="border-t border-line bg-canvas p-5 md:border-t-0 md:border-l">
                  <ol className="space-y-3">
                    {[
                      { label: "Oferta aceptada", done: true },
                      { label: "Contratación gestionada", done: true },
                      { label: "Servicio activado", done: true },
                    ].map((item) => (
                      <li key={item.label} className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-[13px] text-ink">
                          <Check className="h-4 w-4 text-success" />
                          {item.label}
                        </span>
                        <StatusBadge tone="success">Hecho</StatusBadge>
                      </li>
                    ))}
                    <li className="flex items-center gap-2 pt-1 text-[12px] text-ink-muted">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      El resultado es un cliente, no una conversación.
                    </li>
                  </ol>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
