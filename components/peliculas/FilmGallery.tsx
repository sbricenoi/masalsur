/**
 * components/peliculas/FilmGallery.tsx
 *
 * Galería de fotogramas clave con scroll horizontal.
 * Las imágenes están en escala de grises y revelan color al hacer hover.
 */
interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
}

/* Anchos alternativos para dar variedad visual */
const widths = ["min-w-[400px]", "min-w-[600px]", "min-w-[400px]", "min-w-[500px]"];

export default function FilmGallery({ images }: Props) {
  return (
    <section className="py-32 overflow-hidden bg-background">
      {/* Encabezado */}
      <div className="px-8 md:px-20 max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
            LENGUAJE VISUAL
          </p>
          <h2 className="font-headline font-black text-5xl tracking-tighter uppercase text-on-surface">
            Fotogramas Clave
          </h2>
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
          Ver Galería Completa{" "}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

      {/* Galería horizontal */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar px-8 md:px-20">
        {images.map((img, i) => (
          <div
            key={i}
            className={`${widths[i % widths.length]} h-[600px] bg-surface-container flex-shrink-0 rounded-sm overflow-hidden`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
