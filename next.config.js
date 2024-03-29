const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'picsum.photos'],
  },
};

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
module.exports = {
  ...withMDX(nextConfig, {
    options: { providerImportSource: '@mdx-js/react' },
  }),
};
