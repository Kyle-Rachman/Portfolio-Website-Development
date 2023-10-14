/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "md" : "769px"
    },
    extend: {
      colors: {
        "accent-blue": "rgb(var(--accent-blue))",
        "accent-purple": "rgb(var(--accent-purple))",
        "accent-orange": "rgb(var(--accent-orange))",
        "accent-yellow": "rgb(var(--accent-yellow))",
        "background-black": "rgb(var(--background-black))"
      },
      opacity: {
        '85' : '0.85'
      },
      dropShadow: {
        "accent-orange" : "0px 0px 10px rgb(var(--accent-orange))",
        "accent-blue" : "0px 0px 10px rgb(var(--accent-blue))",
        "black" : "0px 0px 5px black"
      }
    },
  },
  plugins: [],
}