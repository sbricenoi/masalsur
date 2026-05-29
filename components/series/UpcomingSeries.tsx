/**
 * components/series/UpcomingSeries.tsx
 *
 * Sección "En Producción" con dos proyectos próximos en formato full-height.
 */
import { UpcomingSerie } from "@/lib/types";

interface Props {
  upcoming: UpcomingSerie[];
}

export default function UpcomingSeries({ upcoming }: Props) {
  return (
    <section className="py-32 bg-surface-container-low">
      {/* Encabezado */}
      <div className="px-12 mb-16 flex flex-col items-center">
        <span className="text-primary font-headline font-bold tracking-[0.4em] uppercase text-xs mb-4">
          Próximos Estrenos
        </span>
        <h2 className="text-5xl font-headline font-black uppercase text-center tracking-tighter text-on-surface">
          EN PRODUCCIÓN
        </h2>
        <div className="w-24 h-1 bg-primary mt-6" />
      </div>

      {/* Proyectos */}
      <div className="flex flex-col lg:flex-row gap-8 px-12 max-w-screen-2xl mx-auto">
        {upcoming.map((item) => (
          <div
            key={item.id}
            className="flex-1 relative group h-[500px] overflow-hidden poster-frame"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-background/60 group-hover:bg-background/20 transition-all">
              <p className="text-primary font-label text-xs tracking-widest uppercase mb-2 font-black">
                {item.statusLabel}
              </p>
              <h4 className="text-3xl font-headline font-black uppercase tracking-widest text-on-surface">
                {item.title}
              </h4>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-on-surface bg-background px-4 py-2 border border-outline">
                  {item.releaseLabel}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
