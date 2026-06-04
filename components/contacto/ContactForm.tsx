"use client";

/**
 * components/contacto/ContactForm.tsx
 *
 * Formulario de contacto.
 * En static export (cPanel hosting) construye un mailto con los datos del formulario.
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
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const projectType = formData.get("projectType") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Propuesta: ${projectType} — ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nTipo de proyecto: ${projectType}\n\n${message}`
    );
    window.location.href = `mailto:max@masalsur.cl?subject=${subject}&body=${body}`;
    setStatus("success");
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
            mark_email_read
          </span>
          <p className="text-on-surface font-headline font-bold text-xl">
            Abriendo tu cliente de correo...
          </p>
          <p className="text-on-surface-variant mt-2">
            O escríbenos directamente a{" "}
            <a href="mailto:max@masalsur.cl" className="text-primary underline">
              max@masalsur.cl
            </a>
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
                minLength={2}
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
              minLength={10}
              placeholder="Cuéntanos los detalles..."
              className="w-full bg-surface-container-lowest border border-outline-variant/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary p-4 transition-all duration-300 text-on-surface rounded-lg placeholder:text-on-surface-variant/40"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary font-headline font-black uppercase tracking-widest text-sm rounded-lg hover:bg-on-primary-container hover:shadow-xl hover:shadow-primary/20 active:scale-95 transition-all duration-300"
          >
            Enviar Propuesta
          </button>
        </form>
      )}
    </div>
  );
}
