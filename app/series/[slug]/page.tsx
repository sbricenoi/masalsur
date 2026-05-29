/**
 * app/series/[slug]/page.tsx
 *
 * Página de detalle de una serie individual.
 * Ruta dinámica: /series/[slug]
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TechBanner from "@/components/peliculas/TechBanner";
import seriesData from "@/data/series.json";
import siteData from "@/data/site.json";
import type { Serie } from "@/lib/types";

export function generateStaticParams() {
  return seriesData.series.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const serie = seriesData.series.find((s) => s.id === params.slug) as
    | Serie
    | undefined;
  if (!serie) return { title: "Serie no encontrada" };
  return {
    title: `${serie.title} | ${siteData.name}`,
    description: serie.description,
    openGraph: {
      title: `${serie.title} | ${siteData.name} Series`,
      description: serie.description,
      images: [{ url: serie.poster }],
    },
  };
}

export default function SerieDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const serie = seriesData.series.find((s) => s.id === params.slug) as
    | Serie
    | undefined;
  if (!serie) notFound();

  const techSpecs = [
    "Formato Serie Original",
    `${serie.episodes} Episodios`,
    serie.seasons,
    `${serie.genre} · ${serie.year}`,
    "Producido por MÁS AL SUR",
    "Dolby Atmos · 4K HDR",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src={serie.poster}
            alt={serie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 px-12 pb-24 max-w-6xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
              {serie.genre}
            </span>
            {serie.badge && (
              <span className="px-3 py-1 bg-surface-container/80 text-on-surface text-xs font-bold tracking-widest uppercase rounded-sm">
                {serie.badge}
              </span>
            )}
          </div>
          <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter text-on-surface uppercase leading-none mb-8">
            {serie.title}
          </h1>
          <div className="flex gap-6">
            <button className="bg-primary text-on-primary px-8 py-4 font-headline font-black uppercase text-sm rounded-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              <span className="inline-flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
                Ver Primer Episodio
              </span>
            </button>
            <Link
              href="/series"
              className="border border-outline text-on-surface px-8 py-4 font-headline font-black uppercase text-sm rounded-sm hover:bg-on-surface/5 transition-all"
            >
              Todas las Series
            </Link>
          </div>
        </div>
      </section>

      <TechBanner specs={techSpecs} />

      {/* Contenido */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Sinopsis */}
        <div className="md:col-span-7">
          <h2 className="font-headline font-extrabold text-4xl tracking-tight mb-8 uppercase text-on-surface">
            La Historia
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>{serie.description}</p>
            <p className="font-light italic border-l-2 border-primary pl-6 py-2 text-primary">
              &ldquo;Una producción que define el nuevo estándar del drama en
              serie latinoamericano.&rdquo;
            </p>
            <p>
              Con {serie.episodes} episodios y una narrativa que no concede nada
              a la superficialidad, {serie.title} es una apuesta radical por la
              profundidad y el carácter.
            </p>
          </div>
        </div>

        {/* Ficha */}
        <div className="md:col-span-5 bg-surface-container-low p-12 border border-outline-variant/30 rounded-sm">
          <h2 className="font-headline font-extrabold text-2xl tracking-tighter mb-12 text-primary uppercase">
            Ficha de Serie
          </h2>
          <div className="space-y-8">
            {[
              { label: "Género", value: serie.genre },
              { label: "Año", value: serie.year },
              { label: "Temporadas", value: serie.seasons },
              { label: "Episodios", value: `${serie.episodes} episodios` },
              { label: "Formato", value: "4K HDR · Dolby Atmos" },
            ].map(({ label, value }) => (
              <div key={label} className="space-y-2">
                <p className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant/60 uppercase">
                  {label}
                </p>
                <p className="text-xl font-headline font-bold text-on-surface">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
