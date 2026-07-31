import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  "#F4F1EC",
          100: "#E4DCD0",
          200: "#B8ADA0",
          300: "#8C8074",
          400: "#5C534A",
          500: "#3A342E",
          600: "#2A2521",
          700: "#1E1A17",
          800: "#16130F",
          900: "#0D0B09",
          950: "#070605"
        },
        copper: {
          50:  "#FBF1E8",
          100: "#F2D9BE",
          200: "#E3B482",
          300: "#D2924F",
          400: "#B8722F",
          500: "#8F5623",
          600: "#6B3F1A"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Georgia", "serif"]
      },
      letterSpacing: {
        widest: "0.25em"
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards"
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
