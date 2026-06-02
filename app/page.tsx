/**
 * app/page.tsx — Página de inicio de MÁS AL SUR Productora.
 */
import Link from "next/link";
import filmsData from "@/data/films.json";
import seriesData from "@/data/series.json";
import { Film, Serie } from "@/lib/types";

const STATUS_LABELS: Record<string, string> = {
  Released: "Released",
  "In Development": "In Development",
  "In Financing": "In Financing",
};

const STATUS_COLORS: Record<string, string> = {
  Released: "bg-primary text-on-primary",
  "In Development": "bg-surface-container-high text-on-surface border border-outline-variant/50",
  "In Financing": "bg-surface-container-high text-on-surface border border-outline-variant/50",
};

export default function HomePage() {
  const films = filmsData.films as Film[];
  const series = (seriesData.series as (Serie & { status?: string; backer?: string })[]).slice(0, 3);
  const heroFilm = films.find((f) => f.isFeaturedHero)!;

  return (
    <>
      {/* ── Hero: Rey del Ring ── */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFilm.poster}
            alt={heroFilm.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-8 md:px-20 pb-20 max-w-7xl mx-auto w-full">
          {/* Badge estrenada */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
              {heroFilm.badge}
            </span>
          </div>

          {/* Título */}
          <h1 className="font-headline font-black text-6xl md:text-9xl tracking-tighter text-on-surface leading-tight mb-5">
            REY DEL
            <br />
            <span className="text-primary italic">RING</span>
          </h1>

          {/* Descripción */}
          <p className="max-w-xl text-on-surface-variant text-lg font-light leading-relaxed mb-8">
            {heroFilm.description}
          </p>

          {/* Premios / Plataformas */}
          {heroFilm.accolades && (
            <ul className="mb-10 space-y-2">
              {heroFilm.accolades.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-on-surface/70">
                  <span className="material-symbols-outlined text-primary text-base">star</span>
                  {a}
                </li>
              ))}
            </ul>
          )}

          {/* CTA: teaser */}
          {heroFilm.trailerUrl && (
            <a
              href={heroFilm.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-sm font-headline font-bold tracking-widest uppercase hover:bg-on-primary-container transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                play_arrow
              </span>
              Ver Teaser
            </a>
          )}
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 px-8 md:px-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-3xl">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Quiénes somos</p>
          <p className="text-on-surface text-xl md:text-2xl font-light leading-relaxed">
            MAS al Sur es una productora chilena dedicada al desarrollo y producción de largometrajes y series inspiradas en{" "}
            <strong className="font-bold text-on-surface">poderosas historias latinoamericanas con proyección internacional.</strong>
          </p>
        </div>
      </section>

      {/* ── Películas ── */}
      <section className="py-24 px-8 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-14">
            <div>
              <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3">Producciones</p>
              <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase text-on-surface">PELÍCULAS</h2>
            </div>
            <Link href="/peliculas" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
              Ver todas <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {films.map((film) => (
              <Link key={film.id} href={`/peliculas/${film.id}`} className="group block">
                <div className="relative overflow-hidden rounded-sm aspect-video poster-frame mb-5 bg-surface-container">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Status badge */}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-black tracking-widest uppercase rounded-sm ${STATUS_COLORS[film.status ?? "In Development"]}`}>
                    {STATUS_LABELS[film.status ?? "In Development"]}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-headline font-black text-xl uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors mb-1">
                  {film.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{film.description}</p>
                <p className="text-on-surface-variant/50 text-xs uppercase tracking-widest mt-2 font-bold">
                  {film.year ? `${film.year} · ` : ""}{film.genre}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divisor ── */}
      <div className="h-px bg-outline-variant/30 mx-8 md:mx-20" />

      {/* ── Series ── */}
      <section className="py-24 px-8 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-14">
            <div>
              <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3">Producciones</p>
              <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase text-on-surface">SERIES</h2>
            </div>
            <Link href="/series" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
              Ver todas <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {series.map((serie) => (
              <Link key={serie.id} href={`/series/${serie.id}`} className="group block">
                <div className="relative overflow-hidden rounded-sm aspect-video poster-frame mb-5 bg-surface-container">
                  <img
                    src={serie.poster}
                    alt={serie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-black tracking-widest uppercase rounded-sm ${STATUS_COLORS[serie.status ?? "In Development"]}`}>
                    {STATUS_LABELS[serie.status ?? "In Development"]}
                  </span>
                  {serie.backer && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/50 text-white text-[10px] font-bold tracking-widest uppercase rounded-sm backdrop-blur-sm">
                      {serie.backer}
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-headline font-black text-xl uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors mb-1">
                  {serie.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{serie.description}</p>
                {serie.episodes && (
                  <p className="text-on-surface-variant/50 text-xs uppercase tracking-widest mt-2 font-bold">
                    {serie.year ? `${serie.year} · ` : ""}{serie.episodes} episodios
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-8 bg-surface-container-high border-t border-outline-variant/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tight mb-6 text-on-surface uppercase">
            EMPECEMOS UN <span className="text-primary italic">PROYECTO</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 font-light">
            Cuéntanos tu historia.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            Contactar <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
