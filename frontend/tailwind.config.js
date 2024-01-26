/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
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
    screens: {
      xxs: "400px",
      // => @media (min-width: 400px) { ... }

      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  darkMode: "media",
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
