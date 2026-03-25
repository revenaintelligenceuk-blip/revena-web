import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "var(--theme-cream)",
          muted: "var(--theme-cream-muted)",
          light: "var(--theme-cream-light)",
        },
        navy: {
          DEFAULT: "var(--theme-navy)",
          muted: "var(--theme-navy-muted)",
        },
        ink: "var(--theme-ink)",
        grey: {
          body: "var(--theme-grey-body)",
        },
        copper: {
          DEFAULT: "var(--theme-copper)",
          light: "var(--theme-copper-light)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
