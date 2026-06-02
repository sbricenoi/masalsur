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
    <Link
      href={`/series/${serie.id}`}
      className="group cursor-pointer block"
    >
      {/* Poster */}
      <div className="aspect-[2/3] overflow-hidden poster-frame bg-surface-container-high transition-transform duration-500 group-hover:-translate-y-2 mb-6">
        <img
          src={serie.poster}
          alt={serie.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
        />
      </div>

      {/* Info */}
      <div className="px-2">
        <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-1 font-bold">
          {serie.genre}
        </p>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-headline font-extrabold uppercase tracking-tight text-on-surface">
            {serie.title}
          </h3>
          <span className="material-symbols-outlined text-primary scale-110 opacity-0 group-hover:opacity-100 transition-opacity">
            play_circle
          </span>
        </div>
        {(serie.year || serie.seasons) && (
          <p className="text-on-surface-variant text-xs font-body uppercase mt-1">
            {[serie.year, serie.seasons].filter(Boolean).join(" • ")}
          </p>
        )}
      </div>
    </Link>
  );
}
