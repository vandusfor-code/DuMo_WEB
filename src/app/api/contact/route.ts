import { NextResponse } from "next/server";
import { CONTACT_EMAIL_PLACEHOLDER, NEED_OPTIONS } from "@/lib/site";

type ContactPayload = {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  product?: string;
  need?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const role = body.role?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const product = body.product?.trim() ?? "";
  const need = body.need?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !company || !role || !email || !phone || !product || !need || !message) {
    return NextResponse.json(
      { error: "Completa todos los campos del formulario." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Ingresa un correo corporativo válido." },
      { status: 400 },
    );
  }

  if (!NEED_OPTIONS.includes(need as (typeof NEED_OPTIONS)[number])) {
    return NextResponse.json(
      { error: "Selecciona una necesidad válida." },
      { status: 400 },
    );
  }

  // Destination is intentionally a placeholder until a corporate inbox exists.
  const destination = process.env.CONTACT_EMAIL ?? CONTACT_EMAIL_PLACEHOLDER;

  console.info("[dumo-contact]", {
    destination,
    name,
    company,
    role,
    email,
    phone,
    product,
    need,
    message,
  });

  return NextResponse.json({ ok: true });
}
