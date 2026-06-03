/**
 * components/series/SeriesCard.tsx
 *
 * Tarjeta de serie en formato poster (relación 2:3).
 */
import Link from "next/link";
import { Serie } from "@/lib/types";

interface Props {
  serie: Serie;
}

export default function SeriesCard({ serie }: Props) {
  return (
    <div className="group">
      {/* Poster — navega al detalle */}
      <Link href={`/series/${serie.id}`} className="cursor-pointer block">
        <div className="aspect-[2/3] overflow-hidden poster-frame bg-surface-container-high transition-transform duration-500 group-hover:-translate-y-2 mb-6">
          <img
            src={serie.poster}
            alt={serie.title}
            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700"
          />
        </div>

        {/* Info */}
        <div className="px-2">
          <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-1 font-bold">
            {serie.genre}
          </p>
          <h3 className="text-xl font-headline font-extrabold uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors">
            {serie.title}
          </h3>
          {(serie.year || serie.seasons) && (
            <p className="text-on-surface-variant text-xs font-body uppercase mt-1">
              {[serie.year, serie.seasons].filter(Boolean).join(" • ")}
            </p>
          )}
        </div>
      </Link>

      {/* Ver Trailer — solo si existe el link */}
      {serie.trailerUrl && (
        <a
          href={serie.trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 px-2 text-primary text-xs font-bold uppercase tracking-widest hover:underline"
        >
          <span
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            play_arrow
          </span>
          Ver Trailer
        </a>
      )}
    </div>
  );
}
