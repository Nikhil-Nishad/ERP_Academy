import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/tmp_rovodev_*',
        ],
      },
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: 'https://erp-academy.vercel.app/sitemap.xml',
    host: 'https://erp-academy.vercel.app',
  }
}