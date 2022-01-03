const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softblue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        darkblue: {
          900: 'hsl(217, 54%, 11%)',
          700: 'hsl(216, 50%, 16%)',
          500: 'hsl(215, 32%, 27%)'
        }
      }
    },
    fontFamily: {
      body: ['Outfit', 'sans-serif']
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    fontSize: {
      sm: '0.9em'
    }
  },
  plugins: [],
}
