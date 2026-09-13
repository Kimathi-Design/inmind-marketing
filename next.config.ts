import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@inmind/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
