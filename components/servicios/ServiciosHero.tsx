/**
 * components/servicios/ServiciosHero.tsx
 */
interface HeroData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  backgroundImage: string;
}

interface Props {
  hero: HeroData;
}

export default function ServiciosHero({ hero }: Props) {
  return (
    <section className="relative h-[480px] flex items-center px-8 md:px-20 overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Servicios"
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-4xl">
        <span className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
          {hero.eyebrow}
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface mb-6 leading-none uppercase">
          {hero.title}
          <br />
          <span className="text-primary italic">{hero.titleHighlight}</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
