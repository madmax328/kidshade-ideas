const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'via.placeholder.com' },
      { hostname: 'picsum.photos' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
