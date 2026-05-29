/**
 * app/contacto/page.tsx
 *
 * Página de contacto de MÁS AL SUR.
 * Hero → formulario + info (bento grid) → mapa visual.
 */
import type { Metadata } from "next";
import ContactForm from "@/components/contacto/ContactForm";
import ContactInfo from "@/components/contacto/ContactInfo";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: `Contacto | ${siteData.name}`,
  description:
    "Hablemos de tu próximo proyecto cinematográfico. Contacta al equipo de MÁS AL SUR.",
};

export default function ContactoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-end px-8 pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDti0i-DBQPf4rXvHAdctbZgvbSF3XsdEdEQCX9GknGUnq35IySyPKUng7Hdp-GEzWzEjWLV7BJWhEk1A7tQy5uF780Ws_7-Mgeq9ewmu0MQdtp2EKIW7foG_dH5aqU0ZNqtGdN5kpozE9-0RaH05h_1Lfry1LPJRhuEeAjjT-O-KnwkEfr6CLsgy1nSXJylJ2V-1wP4T3KP3NIOWhlHHjO_FhL9a9nDS8DlFSCK2tEloJrjotVuVT99wp8l9bMgxzq43arL30TLZg"
            alt="Director's Office"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl w-full">
          <span className="text-primary font-headline font-bold tracking-[0.2em] text-sm mb-4 block uppercase">
            The Director&apos;s Office
          </span>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-surface uppercase leading-[0.9] max-w-4xl">
            Hablemos de tu <br />
            <span className="text-primary italic">próximo proyecto</span>
          </h1>
        </div>
      </section>

      {/* Bento grid: formulario + info */}
      <section className="px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-[1400px] mx-auto">
        <ContactForm />
        <ContactInfo />
      </section>

      {/* Mapa visual */}
      <section className="h-[400px] w-full grayscale opacity-20 hover:opacity-100 transition-opacity duration-700 overflow-hidden border-y border-outline-variant/30">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8b0Oc7d_FXTFTj5tx8o5rYs7GScBFS8_usVoCdW__dFs9caDnBtM1BN7SdOXUOri-_lVl-OID-vnWhUp2aEOrPbp5VtskF3s10SDbdne3kePhHNlDtpbVqox3UNSwVuC0U4AlqHvjUaeicMCoK23wa587taPcydq9XcONl59MxBn0Lhl8XLXtng1JdJThQpWgyPb2x5iEjDsv6qWailAsZdBiIYV7dA9DCHgmNab95-J0rBFO5N2JsdByuEWvfXnaTL_Jn_0A_8Q"
          alt="Santiago, Chile"
          className="w-full h-full object-cover invert"
        />
      </section>
    </div>
  );
}
