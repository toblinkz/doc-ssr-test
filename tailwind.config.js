module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['karla',],

    },
    extend: {},
    typography: {
      default: {
        css: {
          'code::before': {
            content: '""',
          },
          'code::after': {
            content:  '""'
          }
        }
      }

    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
