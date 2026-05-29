/**
 * app/servicios/page.tsx
 *
 * Página de servicios del estudio MÁS AL SUR.
 */
import type { Metadata } from "next";
import ServiciosHero from "@/components/servicios/ServiciosHero";
import ServiciosBento from "@/components/servicios/ServiciosBento";
import ServiciosCTA from "@/components/servicios/ServiciosCTA";
import servicesData from "@/data/services.json";
import siteData from "@/data/site.json";
import { Service } from "@/lib/types";

export const metadata: Metadata = {
  title: `Servicios | ${siteData.name}`,
  description:
    "Pre-producción, producción, post-producción y renta de equipo cinematográfico de alto nivel.",
};

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      <ServiciosHero hero={servicesData.hero} />
      <ServiciosBento services={servicesData.services as Service[]} />
      <ServiciosCTA cta={servicesData.cta} />
    </div>
  );
}
