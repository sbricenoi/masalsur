/**
 * app/peliculas/page.tsx — Listado de películas.
 */
import type { Metadata } from "next";
import FilmGrid from "@/components/peliculas/FilmGrid";
import filmsData from "@/data/films.json";
import siteData from "@/data/site.json";
import { Film } from "@/lib/types";

export const metadata: Metadata = {
  title: `Películas | ${siteData.name}`,
  description: "Largometrajes producidos por MÁS AL SUR.",
};

export default function PeliculasPage() {
  const films = filmsData.films as Film[];
  const heroFilm = films.find((f) => f.isFeaturedHero) ?? films[0];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-end pt-20">
        <div className="absolute inset-0">
          <img
            src={heroFilm?.poster ?? ""}
            alt="Películas"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 px-12 pb-20 max-w-6xl">
          <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase mb-4 text-sm">
            MÁS AL SUR
          </p>
          <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter text-on-surface uppercase leading-none">
            PELÍCULAS
          </h1>
        </div>
      </section>

      {/* Grilla */}
      <FilmGrid films={films} />
    </>
  );
}
