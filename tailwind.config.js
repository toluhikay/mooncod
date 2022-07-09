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
      backgroundImage: {
        'manage-bg': "url('/src/assets/manageBackground.png')",
        'hero-bg': "url('/src/assets/heroBackground.png')",
        'why-bg': "url('/src/assets/whyBackground.png')",
        'buy-bg': "url('/src/assets/buyBackground.png')",
        'data-bg': "url('/src/assets/dataBackground.png')",
        'steps-bg': "url('/src/assets/stepsBackground.png')"
      }
    },
  },
  plugins: [],
};
