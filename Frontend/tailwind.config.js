/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}"  // ✅ THIS FIXES EVERYTHING
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}