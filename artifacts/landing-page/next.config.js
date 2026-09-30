/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['*.pike.replit.dev', '127.0.0.1', 'localhost'],
  agentRules: false,
};

export default nextConfig;