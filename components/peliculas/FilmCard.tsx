/**
 * components/peliculas/FilmCard.tsx
 *
 * Tarjeta de película en formato poster (relación 2:3).
 * Usada en el listado de películas.
 */
import Link from "next/link";
import { Film } from "@/lib/types";

interface Props {
  film: Film;
}

export default function FilmCard({ film }: Props) {
  return (
    <Link href={`/peliculas/${film.id}`} className="group cursor-pointer block">
      {/* Poster */}
      <div className="aspect-[2/3] overflow-hidden poster-frame bg-surface-container-high transition-transform duration-500 group-hover:-translate-y-2 mb-6">
        <img
          src={film.poster}
          alt={film.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
        />
      </div>

      {/* Info */}
      <div className="px-2">
        <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-1 font-bold">
          {film.genre}
        </p>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-headline font-extrabold uppercase tracking-tight text-on-surface">
            {film.title}
          </h3>
          <span
            className="material-symbols-outlined text-primary scale-110 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            play_circle
          </span>
        </div>
        <p className="text-on-surface-variant text-xs font-body uppercase mt-1">
          {[film.year, film.status ?? film.category].filter(Boolean).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
