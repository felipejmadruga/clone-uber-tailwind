/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      backgroundImage: {
        'uber': "url('/assets/bguber.png')",
        'city': "url('/src/assets/bg-city.png')",
      },
    },
  },
  plugins: [],
};
