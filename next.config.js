/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  /* config options here */
  transpilePackages: ['@mui/icons-material', '@mui/material'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // অথবা আপনার নির্দিষ্ট ডোমেইন
      },
    ],
  },
  // যদি reactCompiler এরর দেয় তবে এটি আপাতত সরিয়ে রাখতে পারেন
  reactCompiler: true,
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  turbopack: {},
};

export default nextConfig;