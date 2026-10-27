import type { Metadata } from 'next'
import EnhancedBlogLanding from '@/components/blog/EnhancedBlogLanding'
import { getAllPosts } from '@/lib/mdx'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'SAP Blog - Daily Insights & Tutorials | ERP Academy',
  description: 'Expert SAP tutorials, career guides & daily insights by Akshay Kumar. Learn SAP MM, HANA, FI with industry-proven strategies.',
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

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function BlogPage() {
  const posts = getAllPosts()
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />
      <main className="pt-16 flex-grow">
        <EnhancedBlogLanding posts={posts} />
      </main>
      <Footer />
    </div>
  )
}
