"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};

export function ContactForm() {
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
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
    };
  }

  if (state === "success") {
    return (
      <div>
        <p className="heading text-[28px]">Recibimos tu mensaje.</p>
        <p className="mt-4 max-w-[40ch] text-[16px] leading-7 text-muted">
          El equipo de DuMo revisará la información y continuará la conversación.
        </p>
        <Button className="mt-8" onClick={() => setState("idle")} variant="secondary">
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
        <Field label="Correo" htmlFor="email">
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
        <Field label="Producto o servicio" htmlFor="product">
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
        {state === "submitting" ? "Enviando..." : "Solicitar demo"}
      </Button>
    </form>
  );
}

const fieldClass =
  "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-[15px] text-ink transition-colors duration-200 hover:border-ink/40 focus:border-ink focus:ring-0 focus:outline-none";

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
    <label htmlFor={htmlFor} className="block text-[13px] text-muted">
      {label}
      {children}
    </label>
  );
}
