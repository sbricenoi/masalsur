/**
 * app/peliculas/[slug]/page.tsx
 *
 * Página de detalle de película individual.
 * Renderiza: Hero → Tech Ticker → Narrativa + Elenco → Trailer → Galería → CTA.
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

  const techSpecs = film.detail?.techSpecs ?? [
    "Rodado en ARRI ALEXA LF",
    "Relación de Aspecto 2.39:1",
    "Dolby Atmos Surround",
    "Lentes Panavision Primo",
    "Intermedio Digital 4K",
  ];

  return (
    <>
      <FilmDetailHero film={film} />
      <TechBanner specs={techSpecs} />
      {film.detail && <FilmDetailContent film={film} />}

      {/* Sección Trailer */}
      <section className="py-20 bg-surface-container">
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <div className="relative aspect-video bg-surface-variant group overflow-hidden cursor-pointer shadow-xl rounded-sm">
            <img
              src={film.poster}
              alt={`Trailer de ${film.title}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/20 group-hover:bg-background/10 transition-all">
              <div className="w-24 h-24 rounded-full border border-primary flex items-center justify-center bg-background/60 backdrop-blur-md group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-primary text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
              <p className="mt-6 font-headline font-bold text-xl tracking-[0.2em] uppercase text-on-surface drop-shadow-md">
                Primer Vistazo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-surface-container-high border-y border-outline-variant/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tight mb-8 text-on-surface">
            ¿INTERESADO EN{" "}
            <span className="text-primary italic">COLABORAR?</span>
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 font-light">
            Únete a nosotros en el siguiente capítulo de la narración
            cinematográfica.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contacto"
              className="bg-primary text-on-primary px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary-container hover:text-on-primary-container transition-all shadow-lg"
            >
              Enviar Portafolio
            </Link>
            <Link
              href="/contacto"
              className="border border-outline text-on-surface px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-all"
            >
              Relación con Inversores
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
