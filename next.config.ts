import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/silendas',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;
