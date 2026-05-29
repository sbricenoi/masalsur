/**
 * components/series/SeriesCTA.tsx
 *
 * Sección de llamada a la acción al final de la página de series.
 */
import Link from "next/link";

interface CTAData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

interface Props {
  cta: CTAData;
}

export default function SeriesCTA({ cta }: Props) {
  return (
    <section className="py-32 bg-background flex flex-col items-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-headline font-black uppercase mb-8 max-w-3xl leading-tight text-on-surface">
        {cta.title.split(cta.titleHighlight)[0]}
        <span className="text-primary">{cta.titleHighlight}</span>
        {cta.title.split(cta.titleHighlight)[1]}
      </h2>
      <p className="text-on-surface-variant font-body text-lg mb-12 max-w-xl">
        {cta.description}
      </p>
      <Link
        href={cta.actionHref}
        className="group flex items-center gap-4 bg-primary text-on-primary px-12 py-6 font-headline font-black uppercase tracking-widest text-sm rounded-sm hover:-translate-y-1 transition-all hover:shadow-2xl hover:shadow-primary/30"
      >
        {cta.actionLabel}
        <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
          arrow_forward
        </span>
      </Link>
    </section>
  );
}
