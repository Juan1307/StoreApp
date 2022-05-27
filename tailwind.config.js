module.exports = {
  // path content files use tailwind css
  content: ['./index.html','./src/**/*.{vue,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
