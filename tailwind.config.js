/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mainlux: ["Mainlux", "sans-serif"],
      },
      colors: {
        anBlue: "#04a0d9",
        anBlueLight: "#d2e6ee",
        anBlueDark: "#1e3a8a",
      },
    },
  },
  plugins: [],
};
