const colors = require('tailwindcss/colors')

const PRIMARY_COLOR = 'slate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/calculator.svg'],
  theme: {
    extend: {
      colors: {
        primary: { ...colors[PRIMARY_COLOR], DEFAULT: colors[PRIMARY_COLOR][600] },
      },
    },
  },
  plugins: [],
}
