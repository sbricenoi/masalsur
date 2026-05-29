"use client";

/**
 * components/shared/Logo.tsx
 *
 * Logo con dos variantes:
 *  - variant="dark"  → MOSCA2 (blanco sobre fondos oscuros, ej: nav)
 *  - variant="light" → MOSCA1 (verde/dorado sobre fondos claros, ej: footer grayscale)
 *
 * Si la imagen falla o no carga, muestra el fallback tipográfico.
 */
import { useState } from "react";
import siteData from "@/data/site.json";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const src =
    variant === "dark" ? siteData.logo.srcDark : siteData.logo.src;

  if (imgError || !src) {
    return (
      <span
        className={`font-headline font-black leading-none select-none flex flex-col justify-center ${className}`}
        aria-label={siteData.logo.alt}
      >
        <span className="text-white tracking-tighter text-sm md:text-base uppercase whitespace-nowrap">
          MÁS AL <span className="text-primary">SUR</span>
        </span>
        <span className="text-[8px] font-label font-semibold tracking-[0.25em] text-slate-400 uppercase">
          Productora
        </span>
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={siteData.logo.alt}
      className={`h-full w-auto object-contain ${className}`}
      onError={() => setImgError(true)}
    />
  );
}
