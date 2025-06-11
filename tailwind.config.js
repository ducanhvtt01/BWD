/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CFE8FF',
      },
      animation: {
        'slow-spin': 'spin 18s linear infinite',
      }
    },
  },
  plugins: [],
}
