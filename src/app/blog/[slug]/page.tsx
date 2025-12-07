import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, Share2, Heart, Bookmark, ArrowLeft, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import 'highlight.js/styles/github-dark.css'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const site = 'https://erp-academy.vercel.app'
  const url = `${site}/blog/${post.slug}`
  const img = post.imageUrl.startsWith('http') ? post.imageUrl : `${site}${post.imageUrl}`

  return {
    title: `${post.title} | ERP Academy Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.excerpt,
      images: [{ url: img, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [img],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  const site = 'https://erp-academy.vercel.app'
  const url = `${site}/blog/${post.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    image: post.imageUrl.startsWith('http') ? post.imageUrl : `${site}${post.imageUrl}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: site },
          { name: 'Blog', url: `${site}/blog` },
          { name: post.title, url },
        ]}
      />

      <section className="pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 bg-gradient-to-br from-green-50 to-white">
        <div className="container-max px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="outline" className="mb-6 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>

            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              <div className="flex items-center"><User className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /><span className="text-xs sm:text-sm md:text-base">{post.author}</span></div>
              <div className="flex items-center"><Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /><span className="text-xs sm:text-sm md:text-base">{new Date(post.date).toLocaleDateString()}</span></div>
              <div className="flex items-center"><Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /><span className="text-xs sm:text-sm md:text-base">{post.readTime} min</span></div>
              <div className="flex items-center"><Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /><span className="text-xs sm:text-sm md:text-base">{post.views.toLocaleString()}</span></div>
            </div>

            <div className="relative rounded-xl overflow-hidden mb-6 sm:mb-8">
              <Image src={post.imageUrl} alt={post.title} width={800} height={400} className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" priority />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200 pt-4 sm:pt-6">
              <div className="flex items-center flex-wrap gap-2 sm:space-x-4">
                <Button variant="outline" size="sm" className="group text-xs sm:text-sm"><Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:text-red-500 transition-colors" />{post.likes}</Button>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm"><Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2" />Save</Button>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm"><Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2" />Share</Button>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12">
        <div className="container-max px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-sm sm:prose-base md:prose-lg max-w-none prose-green prose-headings:text-green-900 prose-a:text-green-700 hover:prose-a:text-green-900 prose-img:rounded-xl">
             <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeHighlight]}
                components={{
                    img: ({node, ...props}) => (
                        <div className="relative w-full h-64 my-8 rounded-xl overflow-hidden">
                            <Image 
                                src={props.src || ''} 
                                alt={props.alt || ''} 
                                fill
                                className="object-cover"
                            />
                        </div>
                    )
                }}
             >
                {post.content}
             </ReactMarkdown>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
        <div className="container-max px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4 sm:space-x-6">
                  <Image src="/assets/new_ProfilePic.webp" alt={post.author} width={80} height={80} className="rounded-full w-16 h-16 sm:w-20 sm:h-20" />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">SAP Expert and Training Specialist with 6+ years of experience. Helped 500+ professionals advance their SAP careers.</p>
                    <div className="flex flex-wrap gap-2 sm:space-x-4"><Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm">Follow</Button><Button variant="outline" size="sm" className="text-xs sm:text-sm">View Profile</Button></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
