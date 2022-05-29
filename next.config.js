module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug',
      },
    ]
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'cdn.sanity.io',
      'repository-images.githubusercontent.com',
    ],
  },
}
