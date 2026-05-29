/**
 * app/layout.tsx
 *
 * Layout raíz de la aplicación Next.js.
 * Configura:
 * - Fuentes de Google (Epilogue + Inter)
 * - Material Symbols (iconos)
 * - Metadata global SEO
 * - Clase dark mode en <html>
 * - Componentes compartidos: Navigation y Footer
 */
import type { Metadata, Viewport } from "next";
import { Epilogue, Inter } from "next/font/google";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import siteData from "@/data/site.json";
import "./globals.css";

/* ─── Fuentes tipográficas ─── */

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-epilogue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/* ─── Metadata global (SEO base) ─── */

export const metadata: Metadata = {
  title: {
    default: siteData.seo.defaultTitle,
    template: siteData.seo.titleTemplate,
  },
  description: siteData.seo.defaultDescription,
  metadataBase: new URL(siteData.seo.siteUrl),
  /* Favicon: logo circular VARIACION.LOGOFINAL */
  icons: {
    icon: siteData.logo.srcFavicon,
    shortcut: siteData.logo.srcFavicon,
    apple: siteData.logo.srcFavicon,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteData.seo.siteUrl,
    siteName: siteData.name,
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
    images: [{ url: siteData.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
    images: [siteData.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#1e293b",
};

/* ─── Layout principal ─── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`light ${epilogue.variable} ${inter.variable}`}
    >
      <head>
        {/*
         * Material Symbols – Variable font de iconos de Google.
         * Se carga como <link> en el <head> porque next/font/google
         * no soporta fuentes de iconos variables. La regla ESLint
         * no-page-custom-font está desactivada en .eslintrc.json.
         */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="bg-background text-on-surface font-body antialiased selection:bg-primary selection:text-on-primary">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
