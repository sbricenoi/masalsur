"use client";

/**
 * components/shared/Navigation.tsx
 *
 * Barra de navegación fija (top nav) del sitio.
 * Diseño: logo izquierda, links centrados, acciones derecha.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/shared/Logo";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Películas", href: "/peliculas" },
  { label: "Series", href: "/series" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/40">
      {/* Logo: versión blanca (MOSCA2) para el fondo oscuro del nav */}
      <Link href="/" className="h-10 flex-shrink-0 flex items-center">
        <Logo variant="dark" className="h-10" />
      </Link>

      {/* Links de navegación */}
      <div className="hidden md:flex items-center gap-10 font-headline font-bold tracking-tight">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-slate-300 font-medium hover:text-primary transition-all duration-300"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-6">
        <Link
          href="/contacto"
          className="bg-primary text-on-primary px-6 py-2 rounded-sm font-headline font-bold text-sm hover:opacity-90 active:scale-95 transition-all uppercase tracking-wider"
        >
          Iniciar Proyecto
        </Link>
      </div>
    </nav>
  );
}
