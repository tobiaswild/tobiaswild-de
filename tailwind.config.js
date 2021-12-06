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
                    see: 'var(--color-see)',
                    seebit: 'var(--color-seebit)',
                    seemore: 'var(--color-seemore)',
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
            },
        },
        screens: {
            tablet: '640px',
            desktop: '1248px',
        },
        stroke: (theme) => ({
            white: theme('colors.white'),
            black: theme('colors.black'),
        }),
        fill: (theme) => ({
            white: theme('colors.white'),
            black: theme('colors.black'),
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
