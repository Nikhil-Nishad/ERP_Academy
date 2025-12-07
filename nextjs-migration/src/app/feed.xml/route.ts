import { NextResponse } from 'next/server'
import { getAllPosts } from '@/data/blog'

export const revalidate = 60 // revalidate every minute

export async function GET() {
  const site = 'https://erp-academy.vercel.app'
  const posts = getAllPosts()

  const items = posts
    .map((p) => `
      <item>
        <title><![CDATA[${p.title}]]></title>
        <link>${site}/blog/${p.slug}</link>
        <guid isPermaLink="true">${site}/blog/${p.slug}</guid>
        <description><![CDATA[${p.excerpt}]]></description>
        <pubDate>${new Date(p.publishDate).toUTCString()}</pubDate>
      </item>
    `)
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>ERP Academy by Akshay – Blog</title>
      <link>${site}</link>
      <description>Daily SAP insights, tutorials, and career guides.</description>
      <language>en-us</language>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=60, stale-while-revalidate',
    },
  })
}
