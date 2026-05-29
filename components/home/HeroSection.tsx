/**
 * components/home/HeroSection.tsx
 *
 * Hero principal de la página de inicio.
 * Usa la película destacada (`featured: true, isFeaturedHero: true`) como fondo.
 * Si no hay película destacada, usa la imagen de home.json.
 */
import Link from "next/link";
import { Film } from "@/lib/types";

interface HeroData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  backgroundImage: string;
  reelLabel: string;
  portfolioLabel: string;
}

interface Props {
  hero: HeroData;
  featuredFilm?: Film;
}

export default function HeroSection({ hero, featuredFilm }: Props) {
  const bgImage = featuredFilm?.poster ?? hero.backgroundImage;

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Hero background"
          className="w-full h-full object-cover grayscale brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 px-8 md:px-20 pb-24 max-w-7xl mx-auto w-full">
        {featuredFilm ? (
          <>
            {/* Modo película destacada */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
                {featuredFilm.category}
              </span>
              {featuredFilm.badge && (
                <span className="text-on-surface/60 text-xs font-bold tracking-[0.2em] uppercase">
                  {featuredFilm.badge}
                </span>
              )}
            </div>
            <h1 className="font-headline font-black text-6xl md:text-9xl tracking-tighter text-on-surface leading-tight mb-4">
              {featuredFilm.title.split(" ").slice(0, -1).join(" ")}
              {featuredFilm.title.includes(" ") && (
                <>
                  <br />
                  <span className="text-primary italic">
                    {featuredFilm.title.split(" ").slice(-1)[0]}
                  </span>
                </>
              )}
            </h1>
            <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-10">
              {featuredFilm.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/peliculas/${featuredFilm.id}`}
                className="group flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-sm font-headline font-bold tracking-widest uppercase transition-all hover:bg-on-primary-container"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
                Ver Película
              </Link>
              <Link
                href="/peliculas"
                className="group flex items-center gap-3 border border-outline px-8 py-4 rounded-sm font-headline font-bold tracking-widest uppercase transition-all hover:bg-surface-container"
              >
                <span className="material-symbols-outlined">grid_view</span>
                {hero.portfolioLabel}
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Modo estudio genérico */}
            <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase mb-6 text-sm">
              {hero.eyebrow}
            </p>
            <h1 className="font-headline font-black text-6xl md:text-9xl tracking-tighter text-on-surface leading-tight mb-4">
              {hero.title}
              <br />
              <span className="text-primary italic">{hero.titleHighlight}</span>
            </h1>
            <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-10">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-sm font-headline font-bold tracking-widest uppercase transition-all hover:bg-on-primary-container">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
                {hero.reelLabel}
              </button>
              <Link
                href="/peliculas"
                className="group flex items-center gap-3 border border-outline px-8 py-4 rounded-sm font-headline font-bold tracking-widest uppercase transition-all hover:bg-surface-container"
              >
                <span className="material-symbols-outlined">grid_view</span>
                {hero.portfolioLabel}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
