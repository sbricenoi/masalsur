"use client";

/**
 * components/contacto/ContactForm.tsx
 *
 * Formulario de contacto con validación básica en cliente.
 * Envía los datos al endpoint /api/contacto.
 */
import { useState } from "react";

const PROJECT_TYPES = [
  "Largometraje",
  "Cortometraje",
  "Publicidad / Comercial",
  "Serie Documental",
  "Otro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          projectType: formData.get("projectType"),
          message: formData.get("message"),
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-xl relative overflow-hidden border border-outline-variant/30 shadow-sm">
      <div className="cinematic-gradient absolute inset-0 pointer-events-none" />
      <h2 className="text-3xl font-headline font-extrabold tracking-tight mb-8 text-on-surface uppercase">
        Cuéntanos más sobre tu proyecto
      </h2>

      {status === "success" ? (
        <div className="py-16 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-4 block">
            check_circle
          </span>
          <p className="text-on-surface font-headline font-bold text-xl">
            ¡Propuesta enviada con éxito!
          </p>
          <p className="text-on-surface-variant mt-2">
            Te responderemos a la brevedad.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface/60">
                Nombre Completo
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Escribe tu nombre"
                className="w-full bg-surface-container-lowest border border-outline-variant/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary p-4 transition-all duration-300 text-on-surface rounded-lg placeholder:text-on-surface-variant/40"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface/60">
                Correo Electrónico
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="nombre@ejemplo.com"
                className="w-full bg-surface-container-lowest border border-outline-variant/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary p-4 transition-all duration-300 text-on-surface rounded-lg placeholder:text-on-surface-variant/40"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-label uppercase tracking-widest text-on-surface/60">
              Tipo de Proyecto
            </label>
            <select
              name="projectType"
              className="w-full bg-surface-container-lowest border border-outline-variant/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary p-4 transition-all duration-300 text-on-surface appearance-none rounded-lg"
            >
              {PROJECT_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-label uppercase tracking-widest text-on-surface/60">
              Mensaje / Sinopsis
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Cuéntanos los detalles..."
              className="w-full bg-surface-container-lowest border border-outline-variant/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary p-4 transition-all duration-300 text-on-surface rounded-lg placeholder:text-on-surface-variant/40"
            />
          </div>

          {status === "error" && (
            <p className="text-error text-sm">
              Hubo un error al enviar. Inténtalo de nuevo.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary font-headline font-black uppercase tracking-widest text-sm rounded-lg hover:bg-on-primary-container hover:shadow-xl hover:shadow-primary/20 active:scale-95 transition-all duration-300 disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar Propuesta"}
          </button>
        </form>
      )}
    </div>
  );
}
