/** @type {import('next').NextConfig} */
import { resolve } from 'path';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(process.cwd()),
    };
    return config;
  },
};

export default nextConfig;
