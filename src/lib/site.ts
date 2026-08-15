export const SITE_NAME = "Dumo";
export const SITE_TAGLINE = "Adquisición y conversión comercial";
export const SITE_HEADLINE = "Convertimos oportunidades en clientes.";

export const SITE_DESCRIPTION =
  "Dumo ayuda a empresas a generar prospectos, gestionar oportunidades y convertirlas en clientes mediante marketing, tecnología y equipos comerciales especializados.";

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
  { href: "#soluciones", label: "Soluciones" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#campanas", label: "Campañas" },
] as const;

export const FOOTER_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#campanas", label: "Campañas" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const CONTACT_EMAIL_PLACEHOLDER = "CONTACT_EMAIL_PLACEHOLDER";
export const CONTACT_PHONE_PLACEHOLDER = "CONTACT_PHONE_PLACEHOLDER";

export const NEED_OPTIONS = [
  "Conseguir más clientes",
  "Gestionar prospectos existentes",
  "Mejorar la conversión",
  "Construir una operación comercial completa",
  "Otra necesidad",
] as const;
