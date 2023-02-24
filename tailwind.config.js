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
      },
      spacing : {
        '0.75' : '3px'
      },
      scale : {
        '101' : '1.01',
        '108' : '1.08'
      }
    },
  },
  plugins: [],
}
