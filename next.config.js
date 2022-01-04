module.exports = {
    reactStrictMode: true,
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
