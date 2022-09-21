const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  webpack(config) {
    let prod = process.env.NODE_ENV === "production";
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
    };
  },
  images: {
    domains: ["escapertest.s3.ap-northeast-2.amazonaws.com"],
  },
});

module.exports = nextConfig;
