module.exports = {
  purge: {
    content: [
      './frontend/javascript/*.js',
      './output/**/*.html',
      './src/**/*.rb',
      './src/**/*.erb',
      './src/**/*.html',
      './src/**/*.liquid',
      './src/**/*.md',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
