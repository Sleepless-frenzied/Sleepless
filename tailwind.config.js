/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {

    fontFamily: {
      Sheikah:['Sheikah'],
      Gamer: ['"sans"']
    },


    extend: {
      colors:{
        'idk':'#1c1c1c',
        'b':'#01a3dc',

        'DarkBlue':'#004096'

      },

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}