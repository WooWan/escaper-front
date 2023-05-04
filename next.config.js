const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['adhgloqjygnspxqhqpmq.supabase.co', 'img.danawa.com', 'images.unsplash.com'],
  },
})

module.exports = nextConfig
