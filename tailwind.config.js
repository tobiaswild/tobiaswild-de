module.exports = {
  content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: 'var(--color-dark)',
        darker: 'var(--color-darker)',
        primery: 'var(--color-primery)',
      },
      width: {
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
      },
    },
  },
  plugins: [],
}
