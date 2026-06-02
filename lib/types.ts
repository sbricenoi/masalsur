/**
 * lib/types.ts
 *
 * Tipos TypeScript compartidos para todo el proyecto MÁS AL SUR.
 * Mantiene consistencia de datos entre componentes, páginas y JSONs.
 */

/* ─── Películas ─── */

export interface CastMember {
  name: string;
  role: string;
  image: string;
  featured: boolean;
}

export interface FilmCrew {
  director: string;
  cinematography: string;
  location: string;
  studio: string;
}

export interface FilmDetail {
  synopsis: string[];
  quote: string;
  techSpecs: string[];
  cast: CastMember[];
  crew: FilmCrew;
}

export interface Film {
  id: string;
  title: string;
  year: string | null;
  genre: string;
  category: string;
  status?: "Released" | "In Development" | "In Financing";
  badge: string | null;
  featured: boolean;
  isFeaturedHero?: boolean;
  poster: string;
  description: string;
  releaseDate: string | null;
  offset: boolean;
  accolades?: string[];
  trailerUrl?: string;
  detail?: FilmDetail;
}

/* ─── Servicios ─── */

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
  backgroundImage: string;
  size: "large" | "small" | "medium" | "wide";
  showLink: boolean;
  linkLabel?: string;
  linkHref?: string;
  equipmentList?: string[];
}

export interface ServiceCTA {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
}

/* ─── Sitio ─── */

export interface SocialLink {
  label: string;
  icon: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SiteSEO {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  ogImage: string;
}

/* ─── Series ─── */

export interface Serie {
  id: string;
  title: string;
  year: string;
  seasons: string;
  episodes: number;
  genre: string;
  category: string;
  status: "emitted" | "in-production";
  badge: string | null;
  featured: boolean;
  poster: string;
  description: string;
  upcoming: boolean;
}

export interface UpcomingSerie {
  id: string;
  title: string;
  statusLabel: string;
  releaseLabel: string;
  description: string;
  image: string;
}

/* ─── Formulario de contacto ─── */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
