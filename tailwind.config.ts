import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: {
            light: "#EADCC6",
            DEFAULT: "#C5A880",
            dark: "#9E825B",
            bright: "#D4AF37",
          },
          dark: {
            base: "#0B0B0C",
            surface: "#121214",
            elevated: "#1A1A1D",
            muted: "#242429",
          },
          stone: {
            light: "#F5F5F7",
            DEFAULT: "#A1A1AA",
            dark: "#71717A",
          }
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.15em",
        superwidest: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;