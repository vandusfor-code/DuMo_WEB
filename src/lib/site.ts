export const SITE_NAME = "DuMo";
export const SITE_TAGLINE = "Commercial Operating System";
export const SITE_HEADLINE = "La infraestructura detrás de cada venta.";

export const SITE_DESCRIPTION =
  "DuMo conecta leads, conversaciones, IA, asesores y ventas en una sola operación comercial.";

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export const NAV_LINKS = [
  { href: "/#producto", label: "Producto" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#ia", label: "IA" },
  { href: "/#operacion", label: "Operación" },
] as const;

export const CONTACT_EMAIL_PLACEHOLDER = "CONTACT_EMAIL_PLACEHOLDER";
export const CONTACT_PHONE_PLACEHOLDER = "CONTACT_PHONE_PLACEHOLDER";
