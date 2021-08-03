module.exports = {
  plugins: {
    'tailwindcss': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      features: {
        'focus-within-pseudo-class': false
      },
      stage: 2
    }
  }
}
