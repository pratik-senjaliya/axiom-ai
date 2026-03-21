import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/:slug',
        destination: '/:slug',
        permanent: true, // 301 redirect
      },
      {
        source: '/hire-staff/:slug',
        destination: '/:slug',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;


