/**
 * components/series/SeriesHero.tsx
 *
 * Hero de la página de series con imagen de fondo, título y CTAs.
 */
interface HeroData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  backgroundImage: string;
  trailerLabel: string;
  catalogLabel: string;
}

interface Props {
  hero: HeroData;
}

export default function SeriesHero({ hero }: Props) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-end">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt="Series Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 px-12 pb-24 max-w-6xl">
        <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase mb-4 text-sm">
          {hero.eyebrow}
        </p>
        <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter text-on-surface uppercase leading-none mb-8">
          {hero.title}
          <br />
          <span className="text-primary">{hero.titleHighlight}</span>
        </h1>
        <div className="flex gap-6">
          <button className="bg-primary text-on-primary px-8 py-4 font-headline font-black uppercase text-sm rounded-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            {hero.trailerLabel}
          </button>
          <button className="border border-outline text-on-surface px-8 py-4 font-headline font-black uppercase text-sm rounded-sm backdrop-blur-md hover:bg-on-surface/5 transition-all">
            {hero.catalogLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
