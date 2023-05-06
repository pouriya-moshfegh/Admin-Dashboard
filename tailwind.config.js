/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#2a2b36',
      secondary:'#181924',
      white:"#fff",
      red:"#DC2626",
      blue : "#5299e0",
      green : "#519668",
      yellow : "#FFFF00"
    },
    extend: {},
    fontFamily:{
      sans: [ "Jost" , "Frank Ruhl Libre"],
    }
  },
  
  plugins: [],
}
