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
                },
            },
            fontFamily: {
                'Bebas-Neue': ['Bebas Neue'],
                'Space-Grotesk': ['Space Grotesk'],
            },
        },
        screens: {
            mobile: { max: '375px' },
            tablet: { min: '376px', max: '960px' },
            desktop: { min: '961px' },
        },
        fill: (theme) => ({
            white: theme('colors.white'),
            accent: 'var(--color-accent)'
        }),
        stroke: (theme) => ({
            accent: 'var(--color-accent)',
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
