/**
 * components/peliculas/FilmDetailHero.tsx
 *
 * Hero de pantalla completa para el detalle de película.
 * Imagen de fondo en escala de grises con gradientes, badge, título y CTAs.
 */
import { Film } from "@/lib/types";

interface Props {
  film: Film;
}

export default function FilmDetailHero({ film }: Props) {
  /* Dividir el título para destacar la última palabra en color primario */
  const words = film.title.split(" ");
  const last = words.slice(-1)[0];
  const rest = words.slice(0, -1).join(" ");

  return (
    <section className="relative h-[921px] w-full overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={film.poster}
          alt={film.title}
          className="w-full h-full object-cover grayscale brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-20 pb-20 max-w-7xl mx-auto w-full">
        {/* Badges */}
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
            {film.category}
          </span>
          {film.badge && (
            <span className="text-on-surface/60 text-xs font-bold tracking-[0.2em] uppercase">
              {film.badge}
            </span>
          )}
        </div>

        {/* Título */}
        <h1 className="font-headline font-black text-6xl md:text-9xl tracking-tighter text-on-surface leading-tight mb-4">
          {rest}
          {rest && <br />}
          <span className="text-primary italic">{last}</span>
        </h1>

        {/* Descripción */}
        <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-10">
          {film.description}
        </p>

        {/* CTA: solo si hay trailerUrl */}
        {film.trailerUrl && (
          <div className="flex flex-wrap gap-4">
            <a
              href={film.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-sm font-headline font-bold tracking-widest uppercase transition-all hover:bg-on-primary-container"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                play_arrow
              </span>
              Ver Teaser
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
