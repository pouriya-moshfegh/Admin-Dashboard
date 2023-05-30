/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    colors: {
      primary: "#2a2b36",
      secondary: "#181924",
      white: "#fff",
      red: "#DC2626",
      blue: "#5299e0",
      green: "#519668",
      yellow: "#FFFF00",
    },
    screens: {
      xsm:"400px",
      sm: "640px",
      md:"768px",
      lg:"1024px",
      xl:"1280px"
    },
 
    fontFamily: {
      sans: ["Jost", "Frank Ruhl Libre"],
    },
  },

  plugins: [],
};
