import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const site = 'https://erp-academy.vercel.app'
  const base: MetadataRoute.Sitemap = [
    { url: site, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${site}/#about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site}/#courses`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site}/#contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  ]

  const blog = getAllPosts().map((p) => ({
    url: `${site}/blog/${p.slug}`,
    lastModified: new Date(p.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...base, ...blog]
}
