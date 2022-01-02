const nextTranslate = require('next-translate')

module.exports = {
    reactStrictMode: true,
    ...nextTranslate(),
    headers: [
        {
            key: 'Cache-Control',
            value: 'max-age=31536000',
        },
    ],
}
