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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        brand: {
          bg: "#FAF9F5",
          surface: "#FFFFFF",
          surfaceMuted: "#F2F0E8",
          border: "#E8E6DF",
          borderDark: "#D4D1C7",
          text: "#0A0A0A",
          textMuted: "#666666",
          textLight: "#8A8A8A",
          accent: "#0D547D",
          accentLight: "#E8F4FA",
          accentVibrant: "#20AFFF",
          dark: "#0F0F0F",
        },
      },
      height: {
        112: "28rem",
        128: "32rem",
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
