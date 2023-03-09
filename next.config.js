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
  images: {
    domains: ['adhgloqjygnspxqhqpmq.supabase.co', 'img.danawa.com'],
  },
})

module.exports = nextConfig
