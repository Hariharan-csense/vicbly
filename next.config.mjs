/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  head: {
    scripts: [
      {
        src: '/disable-fdprocessedid.js',
        strategy: 'beforeInteractive',
      },
    ],
  },
  // Base path for production
  basePath: isProd ? '' : '',
  // Asset prefix for CDN (if using one)
  assetPrefix: isProd ? 'https://www.vcbly.com' : '',
  
  images: {
    unoptimized: true,
    // Configure image domains if using external image sources
    domains: ['www.vcbly.com'],
  },
  
  // Configure the export path map
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/services': { page: '/services' },
      '/portfolio': { page: '/portfolio' },
      '/contact': { page: '/contact' },
      // Add other routes as needed
    }
  },
  
  // Environment variables to be available on the client side
  env: {
    NEXT_PUBLIC_BASE_URL: isProd ? 'https://www.vcbly.com' : 'http://localhost:3000',
  },
  
  // Add headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;