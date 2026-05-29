/**
 * app/convenio/page.tsx
 *
 * Transparencia y Obligaciones Legales – Más Al Sur Productora.
 * Contiene la información del proyecto adjudicado CNTV 2021,
 * convenios, estados financieros y nómina del directorio.
 */
import type { Metadata } from "next";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: `Transparencia y Obligaciones Legales | ${siteData.name}`,
  description:
    "Información de transparencia, presupuesto adjudicado, convenios y estados financieros de Más Al Sur Productora.",
};

/* ─── Datos de la sección ─── */

const proyecto = {
  nombre: "Serie Agáchate Godoy",
  fondo: "Fondo CNTV 2021",
  montoAdjudicado: "$311.917.655",
  convenios: [
    "Contrato Escritura Pública de 29-12-21 bajo repertorio 2187, Notaría Eduardo Diez Morello",
    "Resolución Exenta CNTV N° 1145 de 2021",
  ],
};

const documentos = [
  {
    label: "Memoria Anual 2024",
    href: "/legal/Memoria-Anual-2024-Mas-al-Sur-1.docx",
    ext: "DOCX",
  },
  {
    label: "Estado de Resultado 2024",
    href: "/legal/Estado-de-Resultado-Mas-al-Sur-2024.pdf",
    ext: "PDF",
  },
  {
    label: "Balance Clasificado 2024",
    href: "/legal/Balance-Clasificado-Mas-al-Sur-2024.pdf",
    ext: "PDF",
  },
  {
    label: "Orden de Pago (Res. CNTV N° 1145)",
    href: "/legal/1-1145-APRUEBA-CONTRATO-Y-ORDENA-PAGO-A-MAS-AL-SUR-SPA-AGACHATE-GODOY.pdf",
    ext: "PDF",
  },
  {
    label: "Contrato de Ejecución",
    href: "/legal/CONTRATO-DE-EJECUCION-AGACHATE-GODOY-012-202159073_OK-1-1.pdf",
    ext: "PDF",
  },
];

const directorio = [
  { cargo: "Director", nombre: "Max Alejandro Gandarillas Henríquez" },
  { cargo: "Administrador", nombre: "Max Alejandro Gandarillas Henríquez" },
  { cargo: "Representante Legal", nombre: "Max Alejandro Gandarillas Henríquez" },
  { cargo: "Socio Único", nombre: "Max Alejandro Gandarillas Henríquez" },
];

/* ─── Componente de sección ─── */

function Section({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-outline-variant/30 rounded-sm overflow-hidden">
      {/* Encabezado de sección */}
      <div className="bg-surface-container px-8 py-5 flex items-center gap-4 border-b border-outline-variant/30">
        <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
        <h2 className="font-headline font-extrabold text-lg uppercase tracking-tight text-on-surface">
          {title}
        </h2>
      </div>
      {/* Contenido */}
      <div className="bg-surface-container-lowest px-8 py-8">{children}</div>
    </div>
  );
}

/* ─── Página principal ─── */

export default function ConvenioPage() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-8 md:px-20 bg-surface-container-low border-b border-outline-variant/30 overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-primary absolute right-20 top-10 text-[200px]">
            gavel
          </span>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
            Obligaciones Legales
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface uppercase leading-none mb-6">
            TRANSPARENCIA
            <br />
            <span className="text-primary italic">Y CONVENIOS</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Información pública sobre el presupuesto adjudicado, convenios
            asociados, estados financieros y nómina directiva de{" "}
            <strong className="text-on-surface">Más Al Sur Productora</strong>{" "}
            en cumplimiento de las obligaciones legales vigentes.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <main className="max-w-5xl mx-auto px-8 md:px-20 py-20 space-y-10">

        {/* ── Proyecto adjudicado ── */}
        <Section icon="emoji_events" title="Proyecto y Presupuesto Adjudicado">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nombre del proyecto */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant/60 uppercase">
                Proyecto
              </p>
              <p className="font-headline font-bold text-2xl text-on-surface">
                {proyecto.nombre}
              </p>
              <p className="text-sm text-on-surface-variant">{proyecto.fondo}</p>
            </div>
            {/* Monto */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant/60 uppercase">
                Monto Adjudicado
              </p>
              <p className="font-headline font-black text-4xl text-primary tracking-tight">
                {proyecto.montoAdjudicado}
              </p>
              <p className="text-sm text-on-surface-variant">
                Fecha de adjudicación y fuente de financiamiento: Fondo CNTV 2021
              </p>
            </div>
          </div>
        </Section>

        {/* ── Convenios asociados ── */}
        <Section icon="description" title="Convenio Asociado">
          <ul className="space-y-4">
            {proyecto.convenios.map((convenio) => (
              <li
                key={convenio}
                className="flex items-start gap-4 p-5 bg-surface-container rounded-sm border border-outline-variant/20"
              >
                <span className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5">
                  article
                </span>
                <p className="text-on-surface leading-relaxed">{convenio}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Estados financieros ── */}
        <Section icon="bar_chart" title="Estados Financieros, Balances y Memoria Anual">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentos.map((doc) => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group flex items-center justify-between p-5 bg-surface-container rounded-sm border border-outline-variant/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">
                    {doc.ext === "PDF" ? "picture_as_pdf" : "description"}
                  </span>
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors uppercase tracking-wide block truncate">
                      {doc.label}
                    </span>
                    <span className="text-[10px] text-on-surface-variant/60 font-bold tracking-widest">
                      {doc.ext}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-sm flex-shrink-0 ml-2">
                  download
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* ── Directorio ── */}
        <Section icon="group" title="Nómina del Directorio y Administradores">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {directorio.map((persona) => (
              <div
                key={persona.cargo}
                className="p-6 bg-surface-container rounded-sm border border-outline-variant/20"
              >
                <p className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant/60 uppercase mb-2">
                  {persona.cargo}
                </p>
                <p className="font-headline font-bold text-lg text-on-surface">
                  {persona.nombre}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Nota al pie ── */}
        <p className="text-center text-xs text-on-surface-variant/50 uppercase tracking-widest border-t border-outline-variant/20 pt-10">
          Información publicada en cumplimiento de las obligaciones legales de
          transparencia activa — Más Al Sur Productora · {new Date().getFullYear()}
        </p>
      </main>
    </div>
  );
}
