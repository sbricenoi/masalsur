/**
 * components/contacto/ContactInfo.tsx
 *
 * Columna derecha de la página de contacto con dirección,
 * email, teléfono y sección para talentos.
 */
import Link from "next/link";
import siteData from "@/data/site.json";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between space-y-16">
      {/* Bloques de información */}
      <div className="space-y-12">
        {/* Dirección */}
        <div className="space-y-4">
          <h3 className="text-primary font-headline font-bold text-lg uppercase tracking-wider">
            Sede Central
          </h3>
          <p className="text-on-surface/80 font-body text-xl leading-relaxed">
            {siteData.contact.address}
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-sm font-label uppercase tracking-widest hover:gap-4 transition-all font-bold"
          >
            Ver en Mapa{" "}
            <span className="material-symbols-outlined text-sm">north_east</span>
          </a>
        </div>

        {/* Comunicaciones */}
        <div className="space-y-4">
          <h3 className="text-primary font-headline font-bold text-lg uppercase tracking-wider">
            Contacto directo
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-on-surface font-bold text-lg">Max Gandarillas</p>
              <p className="text-on-surface-variant text-sm uppercase tracking-wider">Producer</p>
              <a
                href="mailto:max@masalsur.cl"
                className="text-primary hover:underline text-lg font-body"
              >
                max@masalsur.cl
              </a>
            </div>
            <div className="pt-2 border-t border-outline-variant/30">
              <a
                href={`mailto:${siteData.contact.email}`}
                className="text-on-surface/70 hover:text-primary transition-colors text-base font-body"
              >
                {siteData.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Redes */}
        <div className="space-y-4">
          <h3 className="text-primary font-headline font-bold text-lg uppercase tracking-wider">
            Redes
          </h3>
          <div className="flex gap-6">
            {siteData.social.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="w-12 h-12 flex items-center justify-center border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300 rounded-lg"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sección talentos */}
      <div className="bg-surface-container p-8 rounded-xl border-l-4 border-primary shadow-sm">
        <h3 className="text-2xl font-headline font-extrabold text-on-surface uppercase mb-4 tracking-tight">
          ¿Eres un creador?
        </h3>
        <p className="text-on-surface-variant font-body mb-6 leading-relaxed">
          Siempre estamos buscando nuevos directores, guionistas y talentos
          visuales para nuestras próximas producciones. Envíanos tu reel o
          portafolio.
        </p>
        <a
          href={`mailto:${siteData.contact.talentEmail}`}
          className="text-primary font-headline font-bold border-b-2 border-primary/20 pb-1 hover:border-primary transition-all"
        >
          {siteData.contact.talentEmail}
        </a>
      </div>
    </div>
  );
}
