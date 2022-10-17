/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        nunito: "Nunito",
        roboto: "Roboto",
        montserrat: "Montserrat",
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      green: {
        "100": "#65ff65",
        "200": "#59de59",
        "300": "#49b649",
        "400": "#359735",
        "500": "#249d24",
        "600": "#2c902c",
        "700": "#2c8a2c",
        "800": "#248e24",
        "900": "#219021",
      },
      gray: {
        "100": "#fffefe",
        "200": "#f2f2f2",
        "300": "#e2e0e0",
        "400": "#d0d0d0",
        "500": "#767676",
      },
    },
    fontSize: {
      "6xs": "14px",
      "5xs": "15px",
      "4xs": "18px",
      "3xs": "19px",
      "2xs": "20px",
      xs: "22px",
      sm: "24.75px",
      base: "24px",
      lg: "28px",
      xl: "36px",
      "2xl": "40px",
      "3xl": "50px",
      "4xl": "56px",
    },
    screens: {
      lg: { max: "1400px" },
      md: { max: "923px" },
      sm: { max: "520px" },
    },
  },
  corePlugins: { preflight: false },
};
