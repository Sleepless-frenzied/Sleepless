/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {

    fontFamily: {
      Gamer: ['"Press Start 2P"']
    },


    extend: {
      colors:{
        'idk':'#1c1c1c',
      },

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}