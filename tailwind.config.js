module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            textColor: {
                skin: {
                    base: 'var(--color-text)',
                },
            },
            backgroundColor: {
                skin: {
                    background: 'var(--color-background)',
                    accent: 'var(--color-accent)',
                    see: 'var(--color-see)',
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
        },
        screens: {
            tablet: '640px',
            desktop: '1248px',
        },
        stroke: (theme) => ({
            white: theme('colors.white'),
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
