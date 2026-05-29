/**
 * tailwind.config.ts
 *
 * Configuración completa del tema para MÁS AL SUR - Director's Cut Studio.
 * Paleta de colores Material You (light mode), tipografías Epilogue + Inter
 * y radios de borde personalizados.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /* ─── Paleta Material You – Light Mode ─── */
      colors: {
        "on-tertiary-container": "#595145",
        "outline-variant": "#d1c5b4",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "error-container": "#ffdad6",
        "tertiary-fixed": "#ede1d1",
        "on-tertiary-fixed": "#201b11",
        "on-error-container": "#93000a",
        background: "#fcf9f4",
        "on-primary-fixed": "#261900",
        outline: "#7f7667",
        "surface-container-high": "#ebe8e3",
        surface: "#fcf9f4",
        "on-primary-fixed-variant": "#5d4200",
        error: "#ba1a1a",
        primary: "#775a19",
        "inverse-primary": "#e9c176",
        "on-primary-container": "#6a4e0c",
        "surface-tint": "#775a19",
        "tertiary-fixed-dim": "#d0c5b5",
        "primary-fixed": "#ffdea5",
        "surface-variant": "#e5e2dd",
        "on-secondary": "#ffffff",
        "surface-dim": "#dcdad5",
        "inverse-surface": "#31302d",
        "secondary-fixed-dim": "#cac5c2",
        "secondary-container": "#e4dfdb",
        "on-surface-variant": "#4e4639",
        "on-secondary-fixed-variant": "#494644",
        "on-background": "#1c1c19",
        tertiary: "#655d51",
        "on-secondary-fixed": "#1d1b19",
        "secondary-fixed": "#e7e1de",
        "on-tertiary-fixed-variant": "#4d463a",
        "surface-bright": "#fcf9f4",
        "tertiary-container": "#d0c5b5",
        "primary-container": "#e9c176",
        "surface-container-lowest": "#ffffff",
        "on-secondary-container": "#65625f",
        "inverse-on-surface": "#f3f0eb",
        "surface-container-low": "#f6f3ee",
        "surface-container-highest": "#e5e2dd",
        "on-surface": "#1c1c19",
        "on-error": "#ffffff",
        secondary: "#615e5b",
        "primary-fixed-dim": "#e9c176",
        "surface-container": "#f0ede8",
      },

      /* ─── Tipografías ─── */
      fontFamily: {
        headline: ["var(--font-epilogue)", "Epilogue", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        label: ["var(--font-inter)", "Inter", "sans-serif"],
      },

      /* ─── Radios de borde ─── */
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "9999px",
      },

      /* ─── Animaciones ─── */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },

  plugins: [],
};

export default config;
