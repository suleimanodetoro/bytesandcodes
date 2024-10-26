// next.config.mjs
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs' and 'path' modules on the client to prevent this error
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

// Create the MDX configuration
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

// Export the combined configuration
export default withMDX(nextConfig);
