module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/domains/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
