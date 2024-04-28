/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F65050" 
      },
      fontFamily: {
        "Barlow": 'Barlow', 
        "Sofia": 'Sofia Sans',
        "Oswald": "Oswald"
      },
      boxShadow: {
        "shadow-rgb": "0px 1px 10px 0px rgba(246, 80, 80, 0.15)"
      }
    },
  },
  plugins: [],
}

