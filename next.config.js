const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["escapertest.s3.ap-northeast-2.amazonaws.com"],
  },
});

module.exports = nextConfig;
