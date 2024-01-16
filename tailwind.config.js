/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "greenblue" : "rgb(0, 233, 191)",
        "backgroundColor" : "#121212"
      }
      
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
