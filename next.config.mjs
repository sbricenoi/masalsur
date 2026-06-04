/**
 * next.config.mjs
 *
 * Configuración de Next.js para MÁS AL SUR.
 * - Permite imágenes externas desde Google (lh3.googleusercontent.com)
 * - Activa la optimización de imágenes de Next.js
 * - Permite export estático condicional para subir frontend a cPanel
 */

/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {}),

  /* Dominios permitidos para <Image> de next/image */
  images: isStaticExport
    ? {
        unoptimized: true,
      }
    : {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            pathname: "/**",
          },
        ],
      },

  /*
   * Las imágenes del proyecto usan <img> con URLs externas de Google.
   * En producción se recomienda migrar a next/image para mejor rendimiento.
   * Por ahora desactivamos esta regla ESLint solo para el build.
   */
  eslint: {
    ignoreDuringBuilds: false,
  },

  async headers() {
    if (isStaticExport) {
      return [];
    }

    return [
      {
        source: "/api/contacto",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "POST, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
};

export default nextConfig;
