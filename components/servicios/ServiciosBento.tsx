/**
 * components/servicios/ServiciosBento.tsx
 *
 * Grilla bento asimétrica de servicios del estudio.
 * Cada tarjeta tiene imagen de fondo, ícono, título, descripción y acciones.
 */
import Link from "next/link";
import { Service } from "@/lib/types";

interface Props {
  services: Service[];
}

export default function ServiciosBento({ services }: Props) {
  const preProduccion = services.find((s) => s.id === "pre-produccion");
  const produccion = services.find((s) => s.id === "produccion");
  const postProduccion = services.find((s) => s.id === "post-produccion");
  const rentaEquipo = services.find((s) => s.id === "renta-equipo");

  return (
    <section className="py-24 px-8 md:px-20 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Pre-producción: grande asimétrico */}
        {preProduccion && (
          <div className="md:col-span-7 group relative bg-surface-container-lowest overflow-hidden min-h-[500px] flex flex-col justify-end p-10 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 z-0">
              <img
                src={preProduccion.backgroundImage}
                alt={preProduccion.title}
                className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                {preProduccion.icon}
              </span>
              <h3 className="text-4xl font-headline font-black text-on-surface mb-6 uppercase">
                {preProduccion.title}
              </h3>
              <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed text-lg">
                {preProduccion.description}
              </p>
              {preProduccion.tags.length > 0 && (
                <ul className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  {preProduccion.tags.map((tag) => (
                    <li key={tag} className="px-3 py-1 bg-primary/5 rounded-full">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Producción: cuadrado editorial */}
        {produccion && (
          <div className="md:col-span-5 group relative bg-surface-container-low overflow-hidden flex flex-col justify-end p-10 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 z-0">
              <img
                src={produccion.backgroundImage}
                alt={produccion.title}
                className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                {produccion.icon}
              </span>
              <h3 className="text-3xl font-headline font-black text-on-surface mb-4 uppercase">
                {produccion.title}
              </h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                {produccion.description}
              </p>
              {produccion.showLink && produccion.linkLabel && (
                <Link
                  href={produccion.linkHref ?? "#"}
                  className="text-primary font-headline font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest border-b border-primary/20 pb-1"
                >
                  {produccion.linkLabel}{" "}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Post-producción: vertical */}
        {postProduccion && (
          <div className="md:col-span-4 group relative bg-surface-container-low overflow-hidden min-h-[400px] flex flex-col justify-end p-10 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 z-0">
              <img
                src={postProduccion.backgroundImage}
                alt={postProduccion.title}
                className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                {postProduccion.icon}
              </span>
              <h3 className="text-3xl font-headline font-black text-on-surface mb-4 uppercase">
                {postProduccion.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {postProduccion.description}
              </p>
            </div>
          </div>
        )}

        {/* Renta de Equipo: horizontal ancho */}
        {rentaEquipo && (
          <div className="md:col-span-8 group relative bg-surface-container-lowest overflow-hidden min-h-[400px] flex flex-col md:flex-row items-stretch border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="w-full md:w-5/12 overflow-hidden relative">
              <img
                src={rentaEquipo.backgroundImage}
                alt={rentaEquipo.title}
                className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            <div className="w-full md:w-7/12 p-10 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                {rentaEquipo.icon}
              </span>
              <h3 className="text-3xl font-headline font-black text-on-surface mb-4 uppercase">
                {rentaEquipo.title}
              </h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                {rentaEquipo.description}
              </p>
              {rentaEquipo.equipmentList && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rentaEquipo.equipmentList.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-on-surface text-sm font-bold uppercase tracking-wider"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
