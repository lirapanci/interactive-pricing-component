/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
          'xs': '280px',

          'sm': '400px',
          // => @media (min-width: 576px) { ... }

          'md': '768px',
          // => @media (min-width: 960px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1440px) { ... }
        },
    colors: {
      'main': '#F2F2F2',
      'white': '#FFFFFF',
      'aquamarine': '#7AEADF',
      'gray': '#848EAD',
      'orange': '#FF8D68',
      'light-orange': '#FEEDE8',
      'light-gray': '#ECF0FB',
      'blue': '#293356',
      'lilly': '#BECDFF',
    },
    fontFamily: {
      'manrope': ['manrope', 'sans-serif']
    },
    fontWeight: {
      semibold: 600,
    },

    extend: {},
  },


  plugins: [],
}
