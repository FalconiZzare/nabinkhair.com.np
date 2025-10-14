import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nabinkhair.com.np"
      }
    ]
  }
}

export default nextConfig
