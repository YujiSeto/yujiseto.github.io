import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias['next-intl/config'] = path.resolve('./src/i18n/request.ts');
    return config;
  },
  turbopack: {
    resolveAlias: {
      'next-intl/config': './src/i18n/request.ts',
    },
  },
};

export default nextConfig;
