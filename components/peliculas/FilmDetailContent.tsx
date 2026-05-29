/**
 * components/peliculas/FilmDetailContent.tsx
 *
 * Sección de narrativa, elenco y ficha técnica de la película.
 * Layout asimétrico de 12 columnas: sinopsis + elenco (7 cols) y ficha técnica (5 cols).
 */
import { Film } from "@/lib/types";

interface Props {
  film: Film;
}

export default function FilmDetailContent({ film }: Props) {
  const detail = film.detail;
  if (!detail) return null;

  const featuredCast = detail.cast.find((m) => m.featured);
  const supportingCast = detail.cast.filter((m) => !m.featured);

  return (
    <section className="py-32 px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
      {/* ── Columna izquierda: sinopsis + elenco ── */}
      <div className="md:col-span-7">
        {/* Sinopsis */}
        <div className="mb-20">
          <h2 className="font-headline font-extrabold text-4xl tracking-tight mb-8 text-on-surface">
            LA NARRATIVA
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            {detail.synopsis.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {detail.quote && (
              <p className="font-light italic border-l-2 border-primary pl-6 py-2 text-primary">
                {detail.quote}
              </p>
            )}
          </div>
        </div>

        {/* Elenco – bento grid */}
        <div>
          <h2 className="font-headline font-extrabold text-4xl tracking-tight mb-8 uppercase text-on-surface">
            ELENCO
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Actor principal */}
            {featuredCast && (
              <div className="bg-surface-container-high p-6 flex flex-col justify-end min-h-[300px] group overflow-hidden relative rounded-sm">
                <img
                  src={featuredCast.image}
                  alt={featuredCast.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="relative z-10">
                  <p className="text-primary text-xs font-bold tracking-widest uppercase">
                    {featuredCast.role}
                  </p>
                  <h3 className="font-headline font-bold text-xl uppercase text-on-surface">
                    {featuredCast.name}
                  </h3>
                </div>
              </div>
            )}

            {/* Actores secundarios */}
            <div className="grid grid-rows-2 gap-4">
              {supportingCast.slice(0, 2).map((member) => (
                <div
                  key={member.name}
                  className="bg-surface-container p-4 flex items-center gap-4 group rounded-sm border border-outline-variant/30"
                >
                  <div className="w-16 h-16 bg-surface-container-highest flex-shrink-0 overflow-hidden rounded-sm">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm text-on-surface">
                      {member.name}
                    </h4>
                    <p className="text-xs text-on-surface-variant italic">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Columna derecha: ficha técnica ── */}
      <div className="md:col-span-5 bg-surface-container-low p-12 border border-outline-variant/30 rounded-sm">
        <h2 className="font-headline font-extrabold text-2xl tracking-tighter mb-12 text-primary uppercase">
          FICHA TÉCNICA
        </h2>
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant/60 uppercase">
              Dirección
            </p>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {detail.crew.director}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.4em] text-on-surface-variant/60 uppercase">
              Cinematografía
            </p>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {detail.crew.cinematography}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-[0.3em] text-on-surface-variant/60 uppercase">
                Ubicación
              </p>
              <p className="text-sm font-semibold uppercase text-on-surface">
                {detail.crew.location}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-[0.3em] text-on-surface-variant/60 uppercase">
                Estudio
              </p>
              <p className="text-sm font-semibold uppercase text-on-surface">
                {detail.crew.studio}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-[0.3em] text-on-surface-variant/60 uppercase">
                Formato
              </p>
              <p className="text-sm font-semibold uppercase text-on-surface">
                Cine 65mm
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-[0.3em] text-on-surface-variant/60 uppercase">
                Categoría
              </p>
              <p className="text-sm font-semibold uppercase text-on-surface">
                {film.category}
              </p>
            </div>
          </div>

          {/* Nota del director (quote como nota) */}
          {detail.quote && (
            <div className="pt-12">
              <div className="p-6 border border-primary/30 bg-primary/5 rounded-sm">
                <p className="text-[10px] font-black tracking-widest uppercase mb-4 text-primary">
                  Nota del Director
                </p>
                <p className="text-sm leading-relaxed text-on-surface-variant italic">
                  {detail.quote}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
