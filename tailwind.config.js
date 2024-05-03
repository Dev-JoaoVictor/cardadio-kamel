/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#DB5c87",
        secondary: "#6AC6B9"
      }
    },
  },
  plugins: [],
}

