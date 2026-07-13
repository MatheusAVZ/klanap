import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // grafite estrutural — a casa do logo
        graphite: {
          700: "#3d4149",
          800: "#292c31",
          900: "#1d1f23",
          950: "#141518",
        },
        // laranja Klanap — ação e destaque, ≤10% da tela (Carimbo Rule)
        brand: {
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        ink: {
          DEFAULT: "#24262b",
          soft: "#4d525c",
        },
        mist: "#f3f4f5",
        line: "#e4e6e8",
      },
      fontFamily: {
        sans: ["Archivo Variable", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.5rem, 1.4rem + 4.2vw, 4rem)",
          { lineHeight: "1.04", letterSpacing: "-0.015em" },
        ],
        display: [
          "clamp(1.875rem, 1.1rem + 2.8vw, 3rem)",
          { lineHeight: "1.08", letterSpacing: "-0.01em" },
        ],
        "display-sm": [
          "clamp(1.5rem, 1.1rem + 1.4vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        // numeral de sacaria: motivo decorativo gigante (52,5N / 1997)
        numeral: ["clamp(6rem, 4rem + 8vw, 8.5rem)", { lineHeight: "1" }],
        "numeral-lg": ["clamp(7rem, 5rem + 9vw, 9rem)", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
