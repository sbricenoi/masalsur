/**
 * components/peliculas/FilmGrid.tsx
 *
 * Grilla de tarjetas de película (4 columnas en escritorio).
 */
import { Film } from "@/lib/types";
import FilmCard from "./FilmCard";

interface Props {
  films: Film[];
}

export default function FilmGrid({ films }: Props) {
  return (
    <section className="px-12 py-20 bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </section>
  );
}
