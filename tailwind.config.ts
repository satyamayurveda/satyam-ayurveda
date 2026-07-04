import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clinic: {
          leaf: "#1E7A43",
          forest: "#0F3B2E",
          mint: "#EAF7EF",
          gold: "#C9972C",
          saffron: "#F7C948",
          ink: "#1F2933",
          soft: "#F8FBF7"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 59, 46, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
