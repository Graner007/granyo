/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/anna',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
