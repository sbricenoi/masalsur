/**
 * app/series/page.tsx — Listado de series originales.
 */
import type { Metadata } from "next";
import SeriesHero from "@/components/series/SeriesHero";
import SeriesGrid from "@/components/series/SeriesGrid";
import UpcomingSeries from "@/components/series/UpcomingSeries";
import seriesData from "@/data/series.json";
import siteData from "@/data/site.json";
import { Serie, UpcomingSerie } from "@/lib/types";

export const metadata: Metadata = {
  title: `Series | ${siteData.name}`,
  description: "Series originales de MÁS AL SUR.",
};

export default function SeriesPage() {
  return (
    <>
      <div className="pt-20">
        <SeriesHero hero={seriesData.hero} />
      </div>
      <SeriesGrid
        series={seriesData.series as Serie[]}
        categories={seriesData.categories}
      />
      <UpcomingSeries upcoming={seriesData.upcoming as UpcomingSerie[]} />
    </>
  );
}
