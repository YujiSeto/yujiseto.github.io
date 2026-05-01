import path from 'path';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
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
