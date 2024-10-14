/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff3131',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.neon-red"), 0 0 20px theme("colors.neon-red")',
      },
    },
  },
  plugins: [],
}