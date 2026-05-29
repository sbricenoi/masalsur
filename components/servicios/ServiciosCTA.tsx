/**
 * components/servicios/ServiciosCTA.tsx
 *
 * Sección de CTA impactante al final de la página de servicios.
 */
import Link from "next/link";

interface CTAData {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
}

interface Props {
  cta: CTAData;
}

export default function ServiciosCTA({ cta }: Props) {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface-container-high relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface mb-10 uppercase leading-[0.9]">
          {cta.title.split("TU LEGADO")[0]}
          <br />
          <span className="text-primary italic">TU LEGADO?</span>
        </h2>
        <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
          {cta.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link
            href={cta.primaryAction.href}
            className="bg-primary text-on-primary px-12 py-5 rounded-sm font-headline font-black text-lg uppercase tracking-[0.1em] hover:scale-105 transition-all shadow-xl active:scale-95"
          >
            {cta.primaryAction.label}
          </Link>
          <Link
            href={cta.secondaryAction.href}
            className="text-on-surface border-2 border-on-surface px-12 py-5 rounded-sm font-headline font-black text-lg uppercase tracking-[0.1em] hover:bg-on-surface hover:text-background transition-all active:scale-95"
          >
            {cta.secondaryAction.label}
          </Link>
        </div>

        {/* Decoración */}
        <div className="mt-20 flex justify-center items-center gap-4 text-primary opacity-20">
          <div className="h-[1px] w-24 bg-current" />
          <span className="material-symbols-outlined text-4xl">movie</span>
          <div className="h-[1px] w-24 bg-current" />
        </div>
      </div>
    </section>
  );
}
