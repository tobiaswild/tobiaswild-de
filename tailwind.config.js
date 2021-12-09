module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            textColor: {
                skin: {
                    base: 'var(--color-text)',
                    accent: 'var(--color-accent)',
                },
            },
            backgroundColor: {
                skin: {
                    background: 'var(--color-background)',
                    accent: 'var(--color-accent)',
                },
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
            fill: {
                accent: 'var(--color-accent)',
            },
            from: {
                accent: 'var(--color-accent)',
            },
            to: {
                accent: 'var(--color-accent)',
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
