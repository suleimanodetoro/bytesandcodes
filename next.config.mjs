import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config, { isServer, dev }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }

    // Comment out the custom cache configuration cause its crashing lmfao
    // if (!dev) {
    //   config.cache = {
    //     type: 'filesystem',
    //     buildDependencies: {
    //       config: [path.join(__dirname, 'next.config.mjs')],
    //     },
    //     name: isServer ? 'server' : 'client',
    //   };
    // }

    return config;
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'https://bytesandcodes.org',
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
