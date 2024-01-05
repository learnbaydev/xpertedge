// next.config.js

const isProd = process.env.NODE_ENV === "production";
module.exports = {
  basePath: '/your-base-path',
}
module.exports = {
  assetPrefix: isProd ? "https://d32and0ii3b8oy.cloudfront.net/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      "react-phone-input-2",
      "react-icons",
      "swiper",
      "mongodb",
      "typed.js",
    ],
  },
  reactStrictMode: true,
  images: {
    domains: ["d32and0ii3b8oy.cloudfront.net"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
  },
  async redirects() {
    return [
      // Your redirects go here
    ];
  },
};
