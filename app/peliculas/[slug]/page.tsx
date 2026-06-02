/**
 * app/peliculas/[slug]/page.tsx — Detalle de película individual.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FilmDetailHero from "@/components/peliculas/FilmDetailHero";
import TechBanner from "@/components/peliculas/TechBanner";
import FilmDetailContent from "@/components/peliculas/FilmDetailContent";
import filmsData from "@/data/films.json";
import siteData from "@/data/site.json";
import { Film } from "@/lib/types";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return (filmsData.films as Film[]).map((film) => ({ slug: film.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const film = (filmsData.films as Film[]).find((f) => f.id === params.slug);
  if (!film) return {};
  return {
    title: `${film.title} | ${siteData.name}`,
    description: film.description,
  };
}

export default function FilmDetailPage({ params }: Props) {
  const film = (filmsData.films as Film[]).find((f) => f.id === params.slug);
  if (!film) notFound();

  const isReleased = film.status === "Released";

  /* TechBanner solo si hay specs reales */
  const techSpecs = film.detail?.techSpecs ?? null;

  return (
    <>
      <FilmDetailHero film={film} />

      {techSpecs && <TechBanner specs={techSpecs} />}

      {/* Contenido detallado (solo si existe) */}
      {film.detail ? (
        <>
          <FilmDetailContent film={film} />

          {/* Trailer / Teaser solo si hay URL */}
          {film.trailerUrl && (
            <section className="py-20 bg-surface-container">
              <div className="max-w-7xl mx-auto px-8 md:px-20">
                <a
                  href={film.trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video bg-surface-variant group overflow-hidden cursor-pointer shadow-xl rounded-sm flex items-center justify-center"
                >
                  <img
                    src={film.poster}
                    alt={`Teaser de ${film.title}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all" />
                  <div className="relative flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-primary flex items-center justify-center bg-background/60 backdrop-blur-md group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </div>
                    <p className="mt-6 font-headline font-bold text-xl tracking-[0.2em] uppercase text-on-surface drop-shadow-md">
                      Ver Teaser
                    </p>
                  </div>
                </a>
              </div>
            </section>
          )}
        </>
      ) : (
        /* Films en desarrollo: bloque limpio sin datos falsos */
        <section className="py-24 px-8 md:px-20 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-surface-container border border-outline-variant/30 text-on-surface-variant text-xs font-bold uppercase tracking-widest rounded-sm mb-8">
            {film.status ?? "En Desarrollo"}
          </span>
          <h2 className="font-headline font-black text-3xl md:text-4xl tracking-tight text-on-surface mb-6 uppercase">
            Proyecto en desarrollo
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed max-w-xl mx-auto">
            {film.description}
          </p>
        </section>
      )}

      {/* CTA */}
      <section className={`py-24 px-8 border-t border-outline-variant/30 ${isReleased ? "bg-surface-container-high" : "bg-background"}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-black text-3xl md:text-5xl tracking-tight mb-6 text-on-surface uppercase">
            ¿Interesado en <span className="text-primary italic">colaborar?</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 font-light">
            Cuéntanos en qué etapa está tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-lg"
          >
            Contactar <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
