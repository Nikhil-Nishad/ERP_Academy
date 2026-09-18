import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllPosts, Post } from '@/lib/mdx'

interface RelatedPostsProps {
  currentSlug: string
  category: string
  tags?: string[]
}

export default function RelatedPosts({ currentSlug, category, tags = [] }: RelatedPostsProps) {
  const allPosts = getAllPosts()

  // Filter out current post
  const otherPosts = allPosts.filter((p) => p.slug !== currentSlug)

  // Score posts by category match and tag overlap
  const scored = otherPosts.map((p) => {
    let score = 0
    if (p.category === category) score += 5
    if (Array.isArray(p.tags) && Array.isArray(tags)) {
      const common = p.tags.filter((t) => tags.includes(t)).length
      score += common * 2
    }
    return { post: p, score }
  })

  // Sort by score descending, then date
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    return a.post.date > b.post.date ? -1 : 1
  })

  const relatedList = scored.slice(0, 3).map((item) => item.post)

  if (relatedList.length === 0) return null

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container-max px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Related Tutorials & Articles</h2>
              <p className="text-sm text-slate-600 mt-1">
                Continue learning with more insights from ERP Academy experts.
              </p>
            </div>
            <Link 
              href="/blog" 
              className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center group"
            >
              <span>Explore All</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedList.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`} 
                className="group block h-full focus:outline-none focus:ring-2 focus:ring-green-500 rounded-xl"
              >
                <Card className="h-full overflow-hidden border-slate-200 bg-white hover:shadow-lg hover:border-green-300 transition-all duration-300 flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-white/90 text-slate-900 backdrop-blur-sm text-xs border-0">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4 flex flex-col flex-1">
                    <div className="flex items-center text-xs text-slate-500 mb-2">
                      <Clock className="w-3 h-3 mr-1 text-green-600" />
                      <span>{post.readTime} min read</span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug mb-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3 flex-1">
                      {post.excerpt}
                    </p>

                    <span className="text-xs font-semibold text-green-600 group-hover:text-green-700 flex items-center mt-auto">
                      Read Guide <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
