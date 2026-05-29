/**
 * app/not-found.tsx
 *
 * Página 404 personalizada con el estilo cinematográfico del sitio.
 * Se muestra automáticamente cuando Next.js no encuentra una ruta.
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      {/* Número de error con stroke */}
      <p
        className="font-headline font-black text-[180px] md:text-[240px] leading-none text-transparent select-none"
        style={{ WebkitTextStroke: "2px #775a19" }}
        aria-hidden="true"
      >
        404
      </p>

      <div className="space-y-4 -mt-8">
        <h1 className="font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter text-on-surface">
          Escena no encontrada
        </h1>
        <p className="text-on-surface-variant text-lg max-w-md mx-auto leading-relaxed">
          La página que buscas no existe o fue trasladada a otro set de rodaje.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-sm font-headline font-bold uppercase tracking-widest mt-8 hover:opacity-90 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_back
          </span>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
