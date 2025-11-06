import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Set the root directory to avoid workspace root detection issues
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
