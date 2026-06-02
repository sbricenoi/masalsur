/**
 * components/servicios/ServiciosBento.tsx
 *
 * Tres servicios core de Más Al Sur: Development, Production, International Delivery.
 */
import { Service } from "@/lib/types";

interface Props {
  services: Service[];
}

export default function ServiciosBento({ services }: Props) {
  return (
    <section className="py-24 px-8 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative bg-surface-container-lowest overflow-hidden flex flex-col justify-between p-10 border border-outline-variant/30 rounded-sm hover:shadow-xl transition-all duration-500 min-h-[420px]"
          >
            {/* Fondo sutil */}
            <div className="absolute inset-0 z-0">
              <img
                src={service.backgroundImage}
                alt={service.title}
                className="w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-700"
              />
            </div>

            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                {service.icon}
              </span>
              <h3 className="text-2xl md:text-3xl font-headline font-black text-on-surface mb-5 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-base">
                {service.description}
              </p>
            </div>

            {service.tags.length > 0 && (
              <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/8 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
