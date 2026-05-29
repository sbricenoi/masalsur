/**
 * components/shared/Footer.tsx
 *
 * Footer global del sitio con logo, links y redes sociales.
 * El logo usa la variante "dark" (MOSCA2, blanca) con grayscale + opacidad
 * para mantener el estilo cinematográfico del diseño original.
 */
import Link from "next/link";
import siteData from "@/data/site.json";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 flex flex-col items-center gap-8 bg-surface-container-highest border-t border-outline-variant/30">
      {/* Logo: MOSCA2 en blanco, desaturado */}
      <div className="h-12">
        <img
          src={siteData.logo.srcDark}
          alt={siteData.logo.alt}
          className="h-full w-auto object-contain grayscale opacity-60"
        />
      </div>

      {/* Links de pie */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
        {siteData.footer.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={"external" in link && link.external ? "_blank" : undefined}
            rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
            className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Redes sociales */}
      <div className="flex gap-6">
        {siteData.social.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 rounded-full text-on-surface-variant hover:border-primary hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-xl">
              {item.icon}
            </span>
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant/60">
        {siteData.footer.copyright}
      </p>
    </footer>
  );
}
