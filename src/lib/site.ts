export const SITE_NAME = "Dumo";
export const SITE_TAGLINE = "Adquisición y conversión comercial";
export const SITE_HEADLINE = "Convertimos oportunidades en clientes.";

export const SITE_DESCRIPTION =
  "Dumo ayuda a empresas a adquirir nuevos clientes mediante marketing, tecnología y equipos comerciales especializados.";

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
  { href: "/soluciones", label: "Soluciones" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const FOOTER_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const CONTACT_EMAIL_PLACEHOLDER = "CONTACT_EMAIL_PLACEHOLDER";
export const CONTACT_PHONE_PLACEHOLDER = "CONTACT_PHONE_PLACEHOLDER";
