import type { Metadata } from 'next'
import EnhancedBlogLanding from '@/components/blog/EnhancedBlogLanding'
import { getAllPosts } from '@/lib/mdx'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'SAP Blog | Daily SAP Insights, Tutorials, and Career Guides | ERP Academy',
  description: 'Stay ahead with daily SAP insights, expert tutorials, and career guides. Curated content for SAP professionals and learners by industry expert Akshay Kumar.',
  keywords: ['SAP blog', 'SAP tutorials', 'SAP career guide', 'SAP MM blog', 'SAP HANA tutorials', 'SAP FI tips', 'SAP insights', 'enterprise resource planning blog'],
  canonicalUrl: 'https://erp-academy.vercel.app/blog',
  ogType: 'website',
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ERP Academy SAP Blog",
    "description": "Expert SAP insights, tutorials, and career guidance",
    "url": "https://erp-academy.vercel.app/blog",
    "author": {
      "@type": "Person",
      "name": "Akshay Kumar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ERP Academy"
    }
  }
})

export default async function BlogPage() {
  const posts = getAllPosts()
  // The EnhancedBlogLanding component expects posts with specific fields.
  // Our MDX Post interface matches these fields, but we need to ensure type compatibility if strict checking is on.
  // For now, we pass it directly as the structure is identical.
  return <EnhancedBlogLanding posts={posts} />
}
