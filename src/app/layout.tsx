import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Dumo | Adquisición y conversión comercial",
    template: "%s | Dumo",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "adquisición de clientes",
    "generación de leads",
    "conversión de leads",
    "ventas tercerizadas",
    "outsourcing comercial",
    "fuerza comercial externa",
    "generación de clientes",
    "servicios comerciales",
    "operación comercial",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE_NAME,
    title: "Dumo | Adquisición y conversión comercial",
    description: "Convertimos oportunidades en clientes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumo | Adquisición y conversión comercial",
    description: "Convertimos oportunidades en clientes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <div className="flex-1" id="contenido">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
