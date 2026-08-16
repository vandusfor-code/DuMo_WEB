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
    <section id="contacto" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <h2 className="display max-w-[10ch] text-[48px] sm:text-[68px] lg:text-[76px]">
              ¿Qué quieres vender?
            </h2>
            <p className="mt-8 max-w-[38ch] text-[17px] leading-8 text-ink-muted">
              Cuéntanos qué producto tienes, a quién quieres llegar y qué
              resultado buscas. Diseñemos la operación comercial.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            {state === "success" ? (
              <div>
                <p className="text-[28px] tracking-[-0.03em] text-ink">
                  Recibimos tu mensaje.
                </p>
                <p className="mt-4 max-w-[40ch] text-[16px] leading-7 text-ink-muted">
                  El equipo de Dumo revisará la información y continuará la
                  conversación.
                </p>
                <Button
                  className="mt-8"
                  onClick={() => setState("idle")}
                  variant="secondary"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form id="formulario-dumo" onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
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
                {state === "error" ? (
                  <p className="text-sm text-red-700" role="alert">
                    {error}
                  </p>
                ) : null}
                <Button type="submit" disabled={state === "submitting"}>
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
  "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-[15px] text-ink transition-colors duration-200 placeholder:text-ink-muted/50 hover:border-ink/40 focus:border-ink focus:ring-0 focus:outline-none";

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
    <label htmlFor={htmlFor} className="block text-[13px] text-ink-muted">
      {label}
      {children}
    </label>
  );
}
