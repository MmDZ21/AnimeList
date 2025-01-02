import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  // experimental: {
  //   ppr: 'incremental',
  // },
  images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname: 'dev-api.alplayer.ir'
      },
      {
        protocol:'https',
        hostname: 'anilist.top'
      },
      {
        protocol:'https',
        hostname: 'cdn.myanimelist.net'
      }
    ]
  },
}
 
export default nextConfig