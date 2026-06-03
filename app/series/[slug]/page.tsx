/**
 * app/series/[slug]/page.tsx — Detalle de serie individual.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TechBanner from "@/components/peliculas/TechBanner";
import seriesData from "@/data/series.json";
import siteData from "@/data/site.json";

type SerieData = (typeof seriesData.series)[number] & { status?: string };

export function generateStaticParams() {
  return seriesData.series.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const serie = seriesData.series.find((s) => s.id === params.slug);
  if (!serie) return { title: "Serie no encontrada" };
  return {
    title: `${serie.title} | ${siteData.name}`,
    description: serie.description,
    openGraph: {
      title: `${serie.title} | ${siteData.name}`,
      description: serie.description,
      images: [{ url: serie.poster }],
    },
  };
}

export default function SerieDetailPage({ params }: { params: { slug: string } }) {
  const serie = seriesData.series.find((s) => s.id === params.slug) as SerieData | undefined;
  if (!serie) notFound();

  const isReleased = (serie as SerieData).status === "Released";

  /* Specs solo con valores reales */
  const techSpecs: string[] = [
    "Producido por MÁS AL SUR",
    isReleased ? "Estrenada en TV abierta" : "En Producción",
    serie.episodes != null ? `${serie.episodes} Episodios` : null,
    serie.seasons ?? null,
    serie.genre,
    serie.year ? `${serie.year}` : null,
  ].filter((s): s is string => !!s);

  /* Ficha: solo filas con datos reales */
  const fichaRows = [
    { label: "Género", value: serie.genre },
    serie.year ? { label: "Año", value: String(serie.year) } : null,
    serie.seasons ? { label: "Temporadas", value: serie.seasons } : null,
    serie.episodes != null ? { label: "Episodios", value: `${serie.episodes} episodios` } : null,
    isReleased ? { label: "Exhibición", value: "TV abierta · Chile" } : { label: "Estado", value: "En Desarrollo" },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={serie.poster} alt={serie.title} className="w-full h-full object-cover" />
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
          <div className="flex gap-4 flex-wrap">
            {serie.trailerUrl && (
              <a
                href={serie.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 font-headline font-black uppercase text-sm rounded-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
                Ver Trailer
              </a>
            )}
            <Link
              href="/series"
              className="border border-outline text-on-surface px-8 py-4 font-headline font-black uppercase text-sm rounded-sm hover:bg-on-surface/5 transition-all"
            >
              Todas las Series
            </Link>
          </div>
        </div>
      </section>

      {techSpecs.length > 0 && <TechBanner specs={techSpecs} />}

      {/* Contenido */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Sinopsis */}
        <div className="md:col-span-7">
          <h2 className="font-headline font-extrabold text-4xl tracking-tight mb-8 uppercase text-on-surface">
            La Historia
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>{serie.description}</p>
            {serie.episodes != null && (
              <p>
                {serie.episodes} episodios · {serie.genre}
              </p>
            )}
          </div>
        </div>

        {/* Ficha */}
        <div className="md:col-span-5 bg-surface-container-low p-12 border border-outline-variant/30 rounded-sm">
          <h2 className="font-headline font-extrabold text-2xl tracking-tighter mb-12 text-primary uppercase">
            Ficha de Serie
          </h2>
          <div className="space-y-8">
            {fichaRows.map(({ label, value }) => (
              <div key={label} className="space-y-2">
                <p className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant/60 uppercase">
                  {label}
                </p>
                <p className="text-xl font-headline font-bold text-on-surface">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
