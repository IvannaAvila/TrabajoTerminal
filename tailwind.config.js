const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#D24265',
        'secondary': '#F5B27A',
        'tertiary': '#D0A074',
        'alternative': '#F5877A',
        ...colors,
      },
    },
  },
  plugins: [],
}