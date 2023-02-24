/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        blue: "#2a609d",
        grey: "#0000008f",
        dark_grey: "#000000eb"
      }
    },
  },
  plugins: [],
}
