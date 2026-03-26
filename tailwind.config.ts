import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#01172D', // Updated to design specific navy
          muted: 'rgba(1, 23, 45, 0.85)',
        },
        cream: {
          DEFAULT: '#EBDDCB',
          muted: '#D9CBB7',
          light: '#F5EFE6',
        },
        copper: {
          DEFAULT: '#A67C52',
          light: '#C49B72',
        },
        'grey-body': '#1A2B3C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'premium': '0 30px 60px -12px rgba(10, 26, 47, 0.08), 0 18px 36px -18px rgba(10, 26, 47, 0.12)',
      }
    },
  },
  plugins: [],
};
export default config;
