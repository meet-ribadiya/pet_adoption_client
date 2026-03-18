import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns is the modern, recommended way
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'share.google',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;