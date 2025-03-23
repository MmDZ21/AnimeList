import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  // experimental: {
  //   ppr: 'incremental',
  // },
//   cacheHandler: require.resolve(
//     'next/dist/server/lib/incremental-cache/file-system-cache.js',
// ),
  images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname: 'dev-api.animelist.tv'
      },
      {
        protocol:'https',
        hostname: 'dev-api.animup.tv'
      },
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
        hostname: 'animup.tv'
      },
      {
        protocol:'https',
        hostname: 'cdn.myanimelist.net'
      },
      {
        protocol:'https',
        hostname: 'myanimelist.cdn-dena.com'
      }
    ]
  },
}
 
export default nextConfig