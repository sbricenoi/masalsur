"use client";

/**
 * components/series/SeriesGrid.tsx
 *
 * Grilla de series con filtros por categoría.
 */
import { useState } from "react";
import { Serie } from "@/lib/types";
import SeriesCard from "./SeriesCard";

interface Props {
  series: Serie[];
  categories: string[];
}

export default function SeriesGrid({ series, categories }: Props) {
  const [active, setActive] = useState("Todo");

  const filtered =
    active === "Todo"
      ? series
      : series.filter((s) => s.category === active);

  return (
    <>
      {/* Filtros */}
      <section className="px-12 py-12 bg-surface">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? "text-primary border-b-2 border-primary pb-2 font-headline font-bold uppercase tracking-widest text-xs transition-all"
                  : "text-on-surface-variant hover:text-on-surface pb-2 font-headline font-bold uppercase tracking-widest text-xs transition-all"
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grilla */}
      <section className="px-12 py-20 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {filtered.map((serie) => (
            <SeriesCard key={serie.id} serie={serie} />
          ))}
        </div>
      </section>
    </>
  );
}
