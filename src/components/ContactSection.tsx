"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NEED_OPTIONS } from "@/lib/site";

type FormState = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  product: "",
  need: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "No pudimos enviar el mensaje.");
      }

      setState("success");
      setValues(initialValues);
    } catch (submitError) {
      setState("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "No pudimos enviar el mensaje.",
      );
    }
  }

  function update(field: keyof typeof initialValues) {
    return (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
    };
  }

  return (
    <section id="contacto" className="border-t border-line py-20 sm:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
              Conversemos
            </p>
            <h2 className="mt-4 max-w-[16ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[42px]">
              ¿Tienes un producto que necesita más clientes?
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-muted">
              Cuéntanos qué estás vendiendo, a quién quieres llegar y qué
              resultado buscas. Diseñemos juntos una operación comercial.
            </p>
            <div className="mt-10 border-t border-line pt-8">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                Hablemos de crecimiento.
              </h3>
              <p className="mt-3 max-w-[40ch] text-sm leading-6 text-ink-muted">
                Si tienes un producto, nosotros podemos ayudarte a construir el
                camino hacia el cliente.
              </p>
              <Button href="#formulario-dumo" variant="secondary" className="mt-5">
                Contactar a Dumo
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {state === "success" ? (
              <div className="rounded-2xl border border-line bg-white p-8">
                <p className="text-lg font-semibold tracking-[-0.02em] text-ink">
                  Recibimos tu mensaje.
                </p>
                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  El equipo de Dumo revisará la información y te contactará para
                  continuar la conversación.
                </p>
                <Button
                  className="mt-6"
                  onClick={() => setState("idle")}
                  variant="secondary"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form
                id="formulario-dumo"
                onSubmit={onSubmit}
                className="rounded-2xl border border-line bg-white p-5 sm:p-7"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nombre" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={values.name}
                      onChange={update("name")}
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Empresa" htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      required
                      autoComplete="organization"
                      value={values.company}
                      onChange={update("company")}
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Cargo" htmlFor="role">
                    <input
                      id="role"
                      name="role"
                      required
                      autoComplete="organization-title"
                      value={values.role}
                      onChange={update("role")}
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Correo corporativo" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={values.email}
                      onChange={update("email")}
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Teléfono" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={values.phone}
                      onChange={update("phone")}
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="¿Qué necesitas?" htmlFor="need">
                    <select
                      id="need"
                      name="need"
                      required
                      value={values.need}
                      onChange={update("need")}
                      className={fieldClass}
                    >
                      <option value="">Selecciona una opción</option>
                      {NEED_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="mt-4">
                  <Field
                    label="¿Qué producto o servicio quieres comercializar?"
                    htmlFor="product"
                  >
                    <input
                      id="product"
                      name="product"
                      required
                      value={values.product}
                      onChange={update("product")}
                      className={fieldClass}
                    />
                  </Field>
                </div>
                <div className="mt-4">
                  <Field label="Mensaje" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={values.message}
                      onChange={update("message")}
                      className={`${fieldClass} resize-y`}
                    />
                  </Field>
                </div>
                {state === "error" ? (
                  <p className="mt-4 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}
                <Button
                  type="submit"
                  className="mt-6 w-full sm:w-auto"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" ? "Enviando..." : "Hablar con Dumo"}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink transition-colors duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-[13px] font-medium text-ink">
      {label}
      {children}
    </label>
  );
}
