import type { NextConfig } from "next";
import "./src/env";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    dynamicIO: true,
  },
};
export default nextConfig;
