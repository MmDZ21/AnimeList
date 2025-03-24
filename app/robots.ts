import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/',"/api/","/_next/"]
    },
    sitemap: process.env.WEBSITE_URL + '/sitemap.xml',
  }
}