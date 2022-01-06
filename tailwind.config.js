module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                base: 'var(--color-text)',
                accent: 'var(--color-accent)',
                background: 'var(--color-background)',
            },
            fontFamily: {
                normal: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
                'Space-Grotesk': ['Space Grotesk'],
            },
            width: {
                xl: '36rem',
                '2xl': '42rem',
                '3xl': '48rem',
                '4xl': '56rem',
            },
        },
        screens: {
            tablet: '640px',
            desktop: '1248px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
