/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Archivo", "sans-serif"],
      },
      colors: {
        left: "linear-gradient(rgba(255, 255, 255, 0),rgba(0, 0, 0, 1))",
      },
    },
  },
  plugins: [],
};
