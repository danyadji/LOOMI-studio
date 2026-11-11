import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FAF9F5", // Neutral off-white / ecru
          surface: "#FFFFFF",
          surfaceMuted: "#F2F0E8", // Subtle raised card
          border: "#E8E6DF",
          borderDark: "#D4D1C7",
          text: "#0A0A0A", // High-contrast deep black
          textMuted: "#666666",
          textLight: "#8A8A8A",
          accent: "#0D547D", // Scandinavian deep blue / azur
          accentLight: "#E8F4FA",
          accentVibrant: "#20AFFF",
          dark: "#0F0F0F",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-body)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "var(--font-heading)",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
