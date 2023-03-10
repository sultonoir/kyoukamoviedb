/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-background": "rgb(35 36 37)", // Definisi warna custom
      },
      colors: {
        "latar-kon": "var(--background-clr)",
        huruf: "var(--text-clr)",
        prymary: "var(--prymary-clr)",
        textsecond: "var(--textsecond)",
        navbar: "var(--navbar)",
        hvr: "var(--hvr)",
      },
    },
    theme: {
      mobile: [this.darkMode],
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
      jak: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [require("@headlessui/tailwindcss"), require("tailwind-scrollbar-hide")],
};
