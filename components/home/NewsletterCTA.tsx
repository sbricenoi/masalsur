/**
 * components/home/NewsletterCTA.tsx
 *
 * Sección CTA / newsletter al final de la página de inicio.
 */
interface NewsletterData {
  title: string;
  placeholder: string;
  ctaLabel: string;
}

interface Props {
  data: NewsletterData;
}

export default function NewsletterCTA({ data }: Props) {
  return (
    <section className="py-32 px-8 bg-surface-container-high border-y border-outline-variant/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tight mb-8 text-on-surface">
          {data.title.split("?")[0]}
          <span className="text-primary italic">?</span>
        </h2>
        <p className="text-on-surface-variant text-xl mb-12 font-light">
          Sé el primero en conocer nuestros nuevos proyectos, estrenos y convocatorias de talento.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder={data.placeholder}
            className="flex-1 bg-surface-container-lowest border border-outline-variant/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary px-6 py-4 text-on-surface rounded-sm placeholder:text-on-surface-variant/40 uppercase tracking-widest text-xs font-bold"
          />
          <button
            type="submit"
            className="bg-primary text-on-primary px-10 py-4 rounded-sm font-headline font-bold uppercase tracking-widest text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            {data.ctaLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
