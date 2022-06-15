const nextTranslate = require('next-translate')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate(),
  images: {
    domains: [
      'cdn.sanity.io',
      'images.pexels.com',
      'repository-images.githubusercontent.com',
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
    ],
  },
}
