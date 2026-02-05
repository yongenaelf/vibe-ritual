/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#11a4d4",
        "background-light": "#f6f8f8",
        "background-dark": "#101d22",
        "sage": "#4a5d5e",
        "candle": "#f5d18d",
        "stone": {
          "50": "#fafaf9",
          "100": "#f5f5f4",
          "200": "#e7e5e4",
          "800": "#292524",
          "900": "#1c1917",
        }
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "serif": ["Noto Serif", "serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
