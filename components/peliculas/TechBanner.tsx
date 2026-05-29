/**
 * components/peliculas/TechBanner.tsx
 *
 * Banda horizontal con especificaciones técnicas animadas (marquee).
 * Los ítems se duplican para lograr el efecto de desplazamiento continuo.
 */
interface Props {
  specs: string[];
}

export default function TechBanner({ specs }: Props) {
  /* Duplicar los ítems para el loop continuo */
  const items = [...specs, ...specs];

  return (
    <section className="bg-surface-container py-8 overflow-hidden whitespace-nowrap border-y border-outline-variant/30">
      <div className="flex gap-20 animate-marquee items-center opacity-60 grayscale hover:grayscale-0 transition-all text-on-surface">
        {items.map((spec, i) => (
          <span
            key={i}
            className="text-xs font-bold tracking-[0.3em] uppercase flex-shrink-0"
          >
            {spec}
          </span>
        ))}
      </div>
    </section>
  );
}
