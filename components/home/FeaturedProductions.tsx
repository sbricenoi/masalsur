/**
 * components/home/FeaturedProductions.tsx
 *
 * Sección de producciones destacadas en la página de inicio.
 * Muestra las películas con `featured: true` en grid de pósteres.
 */
import Link from "next/link";
import { Film } from "@/lib/types";

interface FeaturedData {
  eyebrow: string;
  title: string;
  subtitle: string;
  extraImages: { src: string; alt: string }[];
}

interface Props {
  data: FeaturedData;
  films: Film[];
}

export default function FeaturedProductions({ data, films }: Props) {
  return (
    <section className="py-32 px-8 md:px-20 bg-surface-container-low">
      {/* Encabezado */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
            {data.eyebrow}
          </p>
          <h2 className="font-headline font-black text-5xl tracking-tighter uppercase text-on-surface">
            {data.title}
          </h2>
          <p className="text-on-surface-variant mt-4 text-lg font-light max-w-md">
            {data.subtitle}
          </p>
        </div>
        <Link
          href="/peliculas"
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs"
        >
          Ver todo{" "}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      {/* Grid de pósteres */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {films.slice(0, 4).map((film) => (
          <Link
            key={film.id}
            href={`/peliculas/${film.id}`}
            className="group cursor-pointer block"
          >
            <div className="aspect-[2/3] overflow-hidden poster-frame bg-surface-container-high transition-transform duration-500 group-hover:-translate-y-2 mb-4">
              <img
                src={film.poster}
                alt={film.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-1 font-bold">
              {film.genre}
            </p>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-headline font-extrabold uppercase tracking-tight text-on-surface">
                {film.title}
              </h3>
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                play_circle
              </span>
            </div>
            <p className="text-on-surface-variant text-xs font-body uppercase mt-1">
              {film.year}
            </p>
          </Link>
        ))}
      </div>

      {/* Imágenes extra si existen */}
      {data.extraImages.length > 0 && (
        <div className="mt-16 grid grid-cols-2 gap-4 max-w-2xl">
          {data.extraImages.map((img) => (
            <div
              key={img.src}
              className="aspect-video overflow-hidden poster-frame"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
