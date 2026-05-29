/**
 * components/servicios/ServiciosHero.tsx
 *
 * Hero de la página de servicios con imagen de fondo tenue,
 * título en gran formato y descripción.
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
    <section className="relative h-[550px] flex items-center px-8 md:px-20 overflow-hidden bg-surface-container-low">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Servicios hero"
          className="w-full h-full object-cover opacity-15 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl">
        <span className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
          {hero.eyebrow}
        </span>
        <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-on-surface mb-8 leading-[0.9] uppercase">
          {hero.title}
          <br />
          <span className="text-primary italic">{hero.titleHighlight}</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
