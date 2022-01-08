const nextTranslate = require('next-translate')

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    ...nextTranslate(),
    images: {
        domains: [
            'repository-images.githubusercontent.com',
            'avatars.githubusercontent.com',
            'res.cloudinary.com',
        ],
    },
}
