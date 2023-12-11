/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          800: "#0f1014",
          700: "#161920",
          600: "#1b1f28",
          500: "#222631",
          400: "#272b35",
          300: "#2e3442",
          200: "#383e4c",
          100: "#495163",
          50: "#adbfe9",
        },
      },
    },
  },
  plugins: [],
};
