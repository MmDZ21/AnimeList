import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.WEBSITE_URL || 'https://animelist.pro'

  const sitemapCount = 10 // Adjust this if your sitemap count increases dynamically

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: Array.from({ length: sitemapCount }, (_, i) => `${baseUrl}/sitemap/${i}.xml`),
  }
}
