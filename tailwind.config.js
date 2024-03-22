/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary:'#ff1e00',
        dark:"#141414",
        hover:"#c7c6c5",
      },
      container:{
        center:true,
        padding:"1rem",
        sm:"3rem",
      },
    },
  },
  plugins: [],
}

