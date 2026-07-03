import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.shoptool.tw",
          },
        ],
        destination: "https://shoptool.tw/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "store-toolbox.vercel.app",
          },
        ],
        destination: "https://shoptool.tw/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
