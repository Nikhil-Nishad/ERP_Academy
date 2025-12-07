'use client'

import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, Search, Star, TrendingUp, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Spotlight } from '@/components/ui/spotlight'
import type { BlogPost } from '@/data/blog'

export default function BlogLanding({ posts }: { posts: BlogPost[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const set = new Set<string>(['All'])
    posts.forEach((p) => set.add(p.category))
    return Array.from(set)
  }, [posts])

  const filteredPosts = useMemo(() => {
    let filtered = posts
    if (selectedCategory !== 'All') filtered = filtered.filter((p) => p.category === selectedCategory)
    if (searchTerm) {
      const t = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(t) ||
          p.excerpt.toLowerCase().includes(t) ||
          p.tags.some((tag) => tag.toLowerCase().includes(t))
      )
    }
    return filtered
  }, [posts, selectedCategory, searchTerm])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
        <Spotlight className="-top-32" />
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 text-sm font-medium">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                <span>Daily SAP Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                SAP Knowledge <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Hub</span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">Stay ahead with daily SAP insights, expert tips, and industry updates.</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{posts.length}</div>
                  <div className="text-sm text-green-200">Articles</div>
                </div>
                <div className="w-px h-12 bg-green-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50K+</div>
                  <div className="text-sm text-green-200">Monthly Readers</div>
                </div>
                <div className="w-px h-12 bg-green-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">Daily</div>
                  <div className="text-sm text-green-200">New Content</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-600/20 rounded-2xl blur-2xl transform rotate-6 scale-110" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Image src="/assets/success.webp" alt="SAP Knowledge Hub" width={500} height={400} className="w-full h-auto rounded-xl shadow-2xl" priority />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container-max">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {filteredPosts.some((p) => p.featured) && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {filteredPosts.filter((p) => p.featured).map((post) => (
                    <motion.div key={post.id} variants={itemVariants}>
                      <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow group">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image src={post.imageUrl} alt={post.title} width={600} height={300} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(post.publishDate).toLocaleDateString()}</div>
                            <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime} min read</div>
                            <div className="flex items-center"><Eye className="w-4 h-4 mr-1" />{post.views.toLocaleString()}</div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{post.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="bg-green-100 text-green-800 border-green-200">{tag}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2"><User className="w-4 h-4 text-gray-500" /><span className="text-sm text-gray-600">{post.author}</span></div>
                            <Link href={`/blog/${post.slug}`}><Button className="bg-green-600 hover:bg-green-700 group">Read More<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter((p) => !p.featured).map((post) => (
                  <motion.div key={post.id} variants={itemVariants}>
                    <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow group">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image src={post.imageUrl} alt={post.title} width={400} height={200} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-green-800 px-2 py-1 rounded text-xs font-medium">{post.category}</div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 text-xs text-gray-600 mb-2">
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span><span>•</span><span>{post.readTime} min</span><span>•</span><span>{post.views.toLocaleString()} views</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1"><Star className="w-3 h-3 text-yellow-400 fill-current" /><span className="text-xs text-gray-600">{post.likes}</span></div>
                          <Link href={`/blog/${post.slug}`}><Button size="sm" className="bg-green-600 hover:bg-green-700">Read</Button></Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Never Miss a SAP Insight</h2>
            <p className="text-green-100 mb-8 text-lg">Get daily SAP tips, career advice, and industry updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 h-12 text-gray-900" />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">Subscribe Free</Button>
            </div>
            <p className="text-green-200 text-sm mt-3">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
