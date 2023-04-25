/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    assetPrefix: './',
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },

    ],
},
}

module.exports = nextConfig
