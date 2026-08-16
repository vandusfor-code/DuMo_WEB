import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "DuMo | Commercial Operating System",
    template: "%s | DuMo",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE_NAME,
    title: "DuMo | La infraestructura detrás de cada venta",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "DuMo | Commercial Operating System",
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
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
