/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    // blue: {
    //   50: "#EBF5FF",
    //   100: "#E1EFFE",
    //   200: "#C3DDFD",
    //   300: "#A4CAFE",
    //   400: "#76A9FA",
    //   500: "#3F83F8",
    //   600: "#1C64F2",
    //   700: "#1A56DB",
    //   800: "#1E429F",
    //   900: "#233876",
    // },
    // },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: [
          "InterVariable",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        montserrat: ["Montserrat"],
        inter: ["Roboto"],
        martel: ["Martel sans"],
        montaga: ["Montaga"],
      },
      boxShadow: {
        tiny: `0 1px 0.5px rgba(0, 0, 0, 0.13),
         0 1px 1px rgba(0, 0, 0, 0.2)`,
        "mui-1": `0px 2px 1px -1px rgba(0,0,0,0.2),
           0px 1px 1px 0px rgba(0,0,0,0.14),
            0px 1px 3px 0px rgba(0,0,0,0.12)`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
