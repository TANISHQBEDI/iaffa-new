/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Explicitly set root directory to avoid workspace root warning
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
}

export default nextConfig
