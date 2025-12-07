'use client'

import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Star,
  TrendingUp,
  Eye,
  BookOpen,
  Filter,
  Heart,
  Share2,
  Bookmark,
  Sparkles,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Spotlight } from '@/components/ui/spotlight'
import Marquee from '@/components/ui/marquee'
import type { Post } from '@/lib/mdx'
import { cn } from '@/lib/utils'

interface EnhancedBlogLandingProps {
  posts: Post[]
}

export default function EnhancedBlogLanding({ posts }: EnhancedBlogLandingProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const featuredPost = posts.find(p => p.featured) || posts[0]
  const trendingPosts = posts.sort((a, b) => b.views - a.views).slice(0, 5)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-green-200 selection:text-green-900">
      {/* Hero Section with Spotlight */}
      <section className="relative py-12 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(34, 197, 94, 0.5)" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex justify-center">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-4 py-1.5 text-sm font-medium rounded-full shadow-sm backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 mr-2 fill-green-500 text-green-500" />
                The ERP Academy Blog
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
            >
              Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">SAP</span> & <br className="hidden md:block" />
              Enterprise Tech
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Expert insights, deep-dive tutorials, and career-defining strategies for the modern SAP professional.
            </motion.p>

            <motion.div variants={itemVariants} className="max-w-xl mx-auto mt-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <div className="relative flex items-center bg-white rounded-full shadow-xl">
                  <Search className="absolute left-4 text-slate-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full placeholder:text-slate-400"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Featured & Trending */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Main Featured Post - Spans 2 cols, 2 rows */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute top-6 left-6 z-20">
                <Badge className="bg-green-500/90 hover:bg-green-600 text-white border-0 backdrop-blur-md">
                  Featured
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20 text-white">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-green-100">
                  <span className="bg-white/20 px-2 py-0.5 rounded backdrop-blur-md">{featuredPost.category}</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> {featuredPost.readTime} min</span>
                  <span className="hidden sm:flex items-center"><Calendar className="w-4 h-4 mr-1" /> {new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight group-hover:text-green-300 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-200 line-clamp-2 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Trending List - Spans 1 col, 2 rows */}
          <div className="lg:col-span-1 lg:row-span-2 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-lg flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center text-slate-900">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" /> Trending
              </h3>
              <Link href="#" className="text-sm text-green-600 font-medium hover:underline">View All</Link>
            </div>
            <div className="flex-1 space-y-6 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
              {trendingPosts.map((post, idx) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-4 items-start">
                  <span className="text-2xl font-bold text-slate-200 group-hover:text-green-500 transition-colors">0{idx + 1}</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 group-hover:text-green-600 transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-slate-500 gap-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Main Grid */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border whitespace-nowrap",
                  selectedCategory === category
                    ? "bg-slate-900 text-white border-slate-900 shadow-md transform scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-green-300 hover:bg-green-50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm self-start md:self-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode('grid')}
              className={cn("rounded-md h-8 px-3", viewMode === 'grid' && "bg-slate-100 text-slate-900")}
            >
              Grid
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode('list')}
              className={cn("rounded-md h-8 px-3", viewMode === 'list' && "bg-slate-100 text-slate-900")}
            >
              List
            </Button>
          </div>
        </div>

        <AnimatePresence mode='wait'>
          {filteredPosts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className={cn(
                "gap-4 sm:gap-6",
                viewMode === 'grid'
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "flex flex-col space-y-4"
              )}
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className={cn(
                      "group h-full overflow-hidden border-slate-200 bg-white hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300",
                      viewMode === 'list' && "flex flex-col md:flex-row md:items-center"
                    )}>
                      <div className={cn(
                        "relative overflow-hidden bg-slate-100",
                        viewMode === 'grid' ? "aspect-[16/10]" : "w-full md:w-64 aspect-[16/10] md:aspect-square md:h-full shrink-0"
                      )}>
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/90 backdrop-blur shadow-sm hover:bg-white">
                            <Bookmark className="w-4 h-4 text-slate-700" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className={cn("flex flex-col flex-1", viewMode === 'grid' ? "p-5" : "p-6")}>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-100">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-slate-400 font-medium">•</span>
                          <span className="text-xs text-slate-500 font-medium">{post.readTime} min read</span>
                        </div>

                        <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6 border border-slate-200">
                              <AvatarImage src="/assets/new_ProfilePic.webp" />
                              <AvatarFallback>AK</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-slate-700">{post.author}</span>
                          </div>
                          <div className="flex items-center text-xs text-slate-400">
                            <Eye className="w-3.5 h-3.5 mr-1" />
                            {post.views.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
           <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-green-500 blur-[100px]" />
           <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500 blur-[100px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <Zap className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-slate-200">Join 5,000+ SAP Professionals</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            Level Up Your SAP Career
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0">
            Get exclusive tutorials, interview guides, and industry insights delivered straight to your inbox. No spam, just value.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4 sm:px-0" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-11 sm:h-12 rounded-xl focus-visible:ring-green-500 focus-visible:border-green-500"
            />
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold h-11 sm:h-12 rounded-xl px-6 sm:px-8 transition-all shadow-lg shadow-green-500/25 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-slate-500 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}