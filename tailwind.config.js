/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
  black: '#000',
  white: '#fff',
  gray: '#999999',
  yellow: '#F3D100'
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants
    }
  },
  plugins: [],
}
