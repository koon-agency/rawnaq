/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: '"Montserrat"',
      },
      colors: {
        greenColor: {
          300: "#C7E5B7ff",
          400: "#9EDD82ff",
        },
        brownColor: {
          300: "#C9B6A1ff",
          400: "#543E2Aff",
        },
        greyColor: {
          DEFAULT: "#545454ff",
        },
        primary: {
          DEFAULT: "#615D9D",
          50: "#D0CFE3",
          100: "#C4C2DB",
          200: "#ABA9CC",
          300: "#928FBD",
          400: "#7975AD",
          500: "#615D9D",
          600: "#4B487A",
          700: "#353357",
          800: "#1D1C36",
          900: "#131221",
        },
        "zona-blue": {
          DEFAULT: "#5CC4F1",
          50: "#FFFFFF",
          100: "#F2FAFE",
          200: "#CDEDFB",
          300: "#A7DFF7",
          400: "#82D2F4",
          500: "#5CC4F1",
          600: "#28B1ED",
          700: "#1193CB",
          800: "#0D6E98",
          900: "#094864",
        },
        "zona-yellow": {
          DEFAULT: "#FFE94D",
          50: "#FFFFFF",
          100: "#FFFDF0",
          200: "#FFF8C7",
          300: "#FFF39F",
          400: "#FFEE76",
          500: "#FFE94D",
          600: "#FFE215",
          700: "#DCC100",
          800: "#A48F00",
          900: "#6C5E00",
        },
      },
    },
  },
  plugins: [],
};
