module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Space-Grotesk': ['Space Grotesk'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
