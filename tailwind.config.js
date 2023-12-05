const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "184/56": "184 / 56",
      },
      colors: {
        "main-black": "#595959",
        "dim-black": "#353535",
        "dim-blue": "#F3F6FA",
        cyan: "#00AAE8",
        "main-gray": "#55616D",
        "main-orange": "#F6761B",
        "main-green": "#51C975",
      },
      fontFamily: {
        inter: ["inter"],
        roboto: ["Roboto Mono"],
      },
    },
    screens: {
      "4sm": "361px",
      "3sm": "390px",
      "2.5sm": "415px",
      "2sm": "426px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "1xl": "1350px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1921px",
    },
    safelist: [
      "animate-[fade-in_1s_ease-in-out]",
      "animate-[fade-out_0.5s_ease-in-out]",
    ],
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
