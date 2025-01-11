// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flameFlicker: {
          "0%, 100%": { opacity: "0.6", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.2)" },
        },
      },
      animation: {
        flameFlicker: "flameFlicker 0.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
