/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  images: {
    domains: ["escapertest.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
