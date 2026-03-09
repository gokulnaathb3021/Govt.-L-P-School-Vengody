import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qxjvzxkqisabhfavkdqz.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  cacheComponents: true,
  reactCompiler: true,
};

export default nextConfig;
