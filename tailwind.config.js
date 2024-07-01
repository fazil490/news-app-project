/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        navBg : "#4D3E3E",
        lightBg : "#FFF3CD", 
        greyColor : "#939185"
      },
      textColor : {
        peach : "#FF926B",
        greyText : "#939185",
        brown : "#4D3E3E"
      }, 
      borderColor: {
        peach : "#FF926B",
        darkGray : "#939185",
        lightGray : "#EEEDEB",
        navy : "#4D3E3E"
      }
    },
  },
  plugins: [],
}

