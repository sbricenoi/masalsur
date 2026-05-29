/**
 * app/peliculas/page.tsx
 *
 * Página de listado de películas.
 * Hero con la película isFeaturedHero + grilla de todas las películas.
 */
import type { Metadata } from "next";
import FilmGrid from "@/components/peliculas/FilmGrid";
import filmsData from "@/data/films.json";
import siteData from "@/data/site.json";
import { Film } from "@/lib/types";

export const metadata: Metadata = {
  title: `Películas | ${siteData.name}`,
  description: "Catálogo de largometrajes, documentales y producciones del estudio MÁS AL SUR.",
};

export default function PeliculasPage() {
  const films = filmsData.films as Film[];

  return (
    <>
      {/* Hero de sección */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-end pt-20">
        <div className="absolute inset-0">
          <img
            src={films[0]?.poster ?? ""}
            alt="Películas hero"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 px-12 pb-20 max-w-6xl">
          <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase mb-4 text-sm">
            Catálogo
          </p>
          <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter text-on-surface uppercase leading-none">
            PELÍCULAS
          </h1>
        </div>
      </section>

      {/* Filtros de categoría */}
      <section className="px-12 py-12 bg-surface">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          {filmsData.categories.map((cat) => (
            <button
              key={cat}
              className="text-on-surface-variant hover:text-on-surface pb-2 font-headline font-bold uppercase tracking-widest text-xs transition-all first:text-primary first:border-b-2 first:border-primary"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grilla */}
      <FilmGrid films={films} />
    </>
  );
}
