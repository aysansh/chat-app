import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#E9FEFE",
        foreground: "var(--foreground)",
        mainColor: '#36B8B8',
        mainText: '#191919'
      },
      boxShadow: {
        mainShadow: '0 1 20 0 rgba(0, 0, 0, 0.15)'
      }
    },
  },  darkMode: "class",
  plugins: [heroui()]
} satisfies Config;

