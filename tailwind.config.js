/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {

    fontFamily: {
      Gamer: ["Press Start 2P"]
    },


    extend: {

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}