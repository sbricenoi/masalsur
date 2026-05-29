/**
 * app/page.tsx
 *
 * Página de inicio de MÁS AL SUR Productora.
 * Secciones: Hero → Películas → Series → CTA
 */
import Link from "next/link";
import filmsData from "@/data/films.json";
import seriesData from "@/data/series.json";
import { Film, Serie } from "@/lib/types";

export default function HomePage() {
  const films = filmsData.films as Film[];
  const series = seriesData.series as (Serie & { posterStyle?: string })[];
  const heroFilm = films.find((f) => f.isFeaturedHero);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFilm?.poster ?? "/mosca-mountain.png"}
            alt={heroFilm?.title ?? "Más Al Sur"}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 px-8 md:px-20 pb-24 max-w-7xl mx-auto w-full">
          {heroFilm && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
                  {heroFilm.category}
                </span>
                {heroFilm.badge && (
                  <span className="text-on-surface/60 text-xs font-bold tracking-[0.2em] uppercase">
                    {heroFilm.badge}
                  </span>
                )}
              </div>
              <h1 className="font-headline font-black text-6xl md:text-9xl tracking-tighter text-on-surface leading-tight mb-4">
                {heroFilm.title.split(" ").slice(0, -1).join(" ")}
                <br />
                <span className="text-primary italic">
                  {heroFilm.title.split(" ").slice(-1)[0]}
                </span>
              </h1>
              <p className="max-w-2xl text-on-surface-variant text-lg font-light leading-relaxed mb-10">
                {heroFilm.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/peliculas/${heroFilm.id}`}
                  className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-sm font-headline font-bold tracking-widest uppercase hover:bg-on-primary-container transition-all"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  Ver Película
                </Link>
                <Link
                  href="/peliculas"
                  className="flex items-center gap-3 border border-outline px-8 py-4 rounded-sm font-headline font-bold tracking-widest uppercase hover:bg-surface-container transition-all"
                >
                  Nuestro Portafolio
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Sección Películas ── */}
      <section className="py-24 px-8 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Producciones
              </p>
              <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase text-on-surface">
                PELÍCULAS
              </h2>
            </div>
            <Link
              href="/peliculas"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs"
            >
              Ver todas <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Grid 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {films.map((film) => (
              <Link
                key={film.id}
                href={`/peliculas/${film.id}`}
                className="group block"
              >
                {/* Poster landscape con aspect 16:9 para aprovechar mejor las imágenes */}
                <div className="relative overflow-hidden rounded-sm aspect-video poster-frame mb-6 bg-surface-container">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Badge flotante */}
                  {film.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary text-[10px] font-black tracking-widest uppercase rounded-sm">
                      {film.badge}
                    </span>
                  )}
                  {/* Play hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div>
                  <p className="text-primary text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
                    {film.genre}
                  </p>
                  <h3 className="font-headline font-black text-2xl md:text-3xl uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                    {film.description}
                  </p>
                  <p className="text-on-surface-variant/60 text-xs uppercase tracking-widest mt-3 font-bold">
                    {film.year} · {film.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divisor ── */}
      <div className="h-px bg-outline-variant/30 mx-8 md:mx-20" />

      {/* ── Sección Series ── */}
      <section className="py-24 px-8 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Producciones
              </p>
              <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase text-on-surface">
                SERIES
              </h2>
            </div>
            <Link
              href="/series"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs"
            >
              Ver todas <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Grid 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {series.slice(0, 2).map((serie) => (
              <Link
                key={serie.id}
                href={`/series/${serie.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-sm aspect-video poster-frame mb-6 bg-surface-container">
                  <>
                    <img
                      src={serie.poster}
                      alt={serie.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </>
                  {/* Badge flotante */}
                  {serie.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary text-[10px] font-black tracking-widest uppercase rounded-sm">
                      {serie.badge}
                    </span>
                  )}
                  {/* Play hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div>
                  <p className="text-primary text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
                    {serie.genre}
                  </p>
                  <h3 className="font-headline font-black text-2xl md:text-3xl uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    {serie.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                    {serie.description}
                  </p>
                  <p className="text-on-surface-variant/60 text-xs uppercase tracking-widest mt-3 font-bold">
                    {serie.year} · {serie.seasons}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-24 px-8 bg-surface-container-high border-t border-outline-variant/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tight mb-6 text-on-surface uppercase">
            ¿TIENES UN <span className="text-primary italic">PROYECTO?</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 font-light">
            Trabajemos juntos. Cuéntanos tu historia.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            Iniciar Proyecto
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
