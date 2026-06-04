/**
 * next.config.mjs
 *
 * Configuración de Next.js para MÁS AL SUR.
 * - Permite imágenes externas desde Google (lh3.googleusercontent.com)
 * - Activa la optimización de imágenes de Next.js
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Static export para deploy en hosting cPanel */
  output: "export",
  trailingSlash: true,

  /* Imágenes: desactivar optimización (no funciona en static export) */
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
