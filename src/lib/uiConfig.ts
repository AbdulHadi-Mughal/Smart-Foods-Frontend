import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FAF9F6",
          red: "#B22222",
          gold: "#E6B800",
          orange: "#FFA500",
          dark: "#1A1A1A",
          grayblue: "#2F4858",
        },
      },
    },
  },
  plugins: [animate],
};

export default config;
