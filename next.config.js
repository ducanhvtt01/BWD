/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cho phép tải ảnh từ Unsplash
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',   // chấp nhận mọi đường dẫn
      },
    ],
  },
};

module.exports = nextConfig;
