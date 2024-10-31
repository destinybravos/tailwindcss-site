/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,css}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#018b8d',
        secondary: '#b4a13b'
      }
    },
  },
  plugins: [],
}
