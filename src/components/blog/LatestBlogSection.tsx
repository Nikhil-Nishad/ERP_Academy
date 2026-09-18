import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getAllPosts, Post } from '@/lib/mdx'

export default function LatestBlogSection() {
  const allPosts = getAllPosts()

  // Target key high-value articles that Google needs to index
  const targetSlugs = [
    'future-of-sap-s4hana-2025',
    'optimizing-sap-hana-column-store-compression',
    'sap-analytics-cloud-2025',
    'sap-btp-2025',
    'sap-cloud-security-2025',
    'retrieval-augmented-generation-s4hana-query-assistance'
  ]

  const featuredList: Post[] = []
  for (const slug of targetSlugs) {
    const post = allPosts.find((p) => p.slug === slug)
    if (post) featuredList.push(post)
  }

  // Backfill with other published posts if any are missing
  const displayPosts = (featuredList.length >= 4 
    ? featuredList.slice(0, 4) 
    : [...featuredList, ...allPosts.filter(p => !featuredList.some(f => f.slug === p.slug))].slice(0, 4)
  )

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="container-max px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-green-600" />
              <span>Industry Insights & Technical Tutorials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Master SAP with Expert Guides & Deep Dives
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Accelerate your knowledge with real-time architectural insights, hands-on HANA optimization techniques, and S/4HANA migration strategies written by senior practitioners.
            </p>
          </div>
          <div>
            <Link href="/blog">
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 font-semibold group">
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="group block h-full focus:outline-none focus:ring-2 focus:ring-green-500 rounded-2xl"
            >
              <Card className="h-full overflow-hidden border-slate-200 bg-white hover:shadow-xl hover:border-green-300 transition-all duration-300 flex flex-col">
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-slate-900/80 backdrop-blur-sm text-white border-0 text-xs font-medium">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-green-600" />
                      {post.readTime} min read
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {new Date(post.date || Date.now()).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-green-600 group-hover:text-green-700 mt-auto">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Topic Links for Search Crawlers */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Popular Learning Topics:
            </span>
            <div className="flex flex-wrap gap-2">
              <Link href="/blog/future-of-sap-s4hana-2025" className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-green-700 hover:border-green-300 transition-colors">
                SAP S/4HANA 2025
              </Link>
              <Link href="/blog/optimizing-sap-hana-column-store-compression" className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-green-700 hover:border-green-300 transition-colors">
                HANA Column Store Optimization
              </Link>
              <Link href="/blog/sap-analytics-cloud-2025" className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-green-700 hover:border-green-300 transition-colors">
                SAP Analytics Cloud
              </Link>
              <Link href="/blog/sap-btp-2025" className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-green-700 hover:border-green-300 transition-colors">
                SAP BTP Platform
              </Link>
              <Link href="/blog/sap-cloud-security-2025" className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-green-700 hover:border-green-300 transition-colors">
                SAP Cloud Security
              </Link>
              <Link href="/blog" className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-100 transition-colors">
                Browse All 28+ Articles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
