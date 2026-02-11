/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect /story/* to /stories/* (common typo/singular vs plural)
      {
        source: '/story/:slug',
        destination: '/stories/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
