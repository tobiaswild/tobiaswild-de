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
    images: {
        domains: [
            'repository-images.githubusercontent.com',
            'avatars.githubusercontent.com',
        ],
    },
}
