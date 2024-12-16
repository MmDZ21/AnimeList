import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  images: {
    domains: ['dev-api.alplayer.ir', 'anilist.top'],
  },
}
 
export default nextConfig