# ERP Academy — Complete SEO Roadmap & Audit Report

> **Prepared:** August 2026 | **Stack:** Next.js 16 + TypeScript + Tailwind
> **Domain:** erp-academy.vercel.app | **Goal:** Lead generation + Top Google Rankings for SAP Training India

---

## Current State Analysis (Search Console Data)

| Metric | Value | Benchmark | Gap |
|--------|-------|-----------|-----|
| Total Clicks (16 months) | **53** | 500+ | CRITICAL |
| Total Impressions | **7,810** | 50,000+ | CRITICAL |
| Average CTR | **0.7%** | 3-5% | CRITICAL |
| Average Position | **9.1** | Top 3 | Near-miss |
| Indexed Pages | **2 of 30** | 30/30 | CRITICAL |

### Key Observations from the Graph

- **Phase 1 (Apr 2025 - Nov 2025):** Near-zero activity, site barely crawled
- **Phase 2 (Dec 2025 - Mar 2026):** Blog posts created, impressions began rising
- **Phase 3 (Mar 2026 - Aug 2026):** Impressions plateau at ~80/day, no click breakthrough
- **Root Cause:** 28 pages discovered but NOT indexed = Google sees the content but refuses to index it

---

## CRITICAL ISSUES (Fix These FIRST — Week 1-2)

### Issue 1: Single-Page Architecture Killing SEO

**Problem:** `src/app/page.tsx` starts with `'use client'` — it's a Client Component.

This is the #1 SEO killer. Google cannot properly server-render a `'use client'` root page. The homepage content (hero, courses, FAQs) is invisible to crawlers because it's all JavaScript-rendered client-side.

**Evidence from code:**
```tsx
// src/app/page.tsx — Line 1
'use client'   // WRONG for homepage
```

**Fix:** Convert `page.tsx` to a Server Component. Move animation/interactivity to child Client Components only.

---

### Issue 2: All Sections are Hash-Based Anchors (#about, #courses, #contact)

**Problem:** `sitemap.ts` includes:
```ts
{ url: `${site}/#about`, ... }
{ url: `${site}/#courses`, ... }
{ url: `${site}/#contact`, ... }
```

Hash anchors (#) are **NOT indexable pages**. Google treats `erp-academy.vercel.app/#courses` as the same URL as the homepage. You have **1 real page** (homepage) + **1 blog index** = 2 indexed pages. This matches your Search Console data exactly.

**Fix:** Remove these from sitemap.ts immediately. Replace with real dedicated pages.

---

### Issue 3: Blog Posts — "Discovered but Not Indexed" Root Causes

28 blog posts appear in sitemap but Google won't index them. Likely reasons:

1. **Thin/Duplicate Content:** Many posts are AI-generated with no human edit, E-E-A-T signals, or original insight
2. **Author Trust Issue:** Posts authored by "AI Contributor" — Google's Helpful Content Update penalizes this heavily
3. **Duplicate Slugs:** `generative-ai-s4hana-cloud-migration` and `generative-ai-sap-s4hana-cloud-migration` are near-identical titles and content
4. **No Internal Linking:** Blog posts are isolated — no cross-linking between posts or back to homepage
5. **Missing Keywords Alignment:** Posts target S/4HANA cloud migration, not "SAP training India" — zero local search intent

---

### Issue 4: Domain Authority — Vercel Subdomain

**Problem:** `erp-academy.vercel.app` is a subdomain of `vercel.app`.

Google's trust for `vercel.app` subdomains is dramatically lower than custom domains. You're competing with vercel.app's domain authority instead of building your own.

**Fix:** Move to a custom domain (e.g., `erpacademy.in` or `erp-academy.in`) immediately.

---

### Issue 5: Missing FAQPage Schema on Homepage

The FAQ section has real content but no `FAQPage` structured data. This is a direct ranking factor and enables Rich Results (expanded FAQ boxes in SERPs).

---

### Issue 6: Missing Course Schema on Pages

`courseSchema` is defined in `src/lib/seo.ts` but **never actually rendered** on any page. It exists in the library but is never injected into `<script type="application/ld+json">` tags.

---

## HIGH-PRIORITY ISSUES (Week 2-3)

### Issue 7: Homepage Client Component Blocks SSR Content

The entire homepage rendering relies on JavaScript hydration. Key SEO content invisible pre-JS:
- H1 heading ("Master SAP with Expert Training")
- Course descriptions
- Testimonials with names and companies
- Stats (500+ students, 6+ years, 95% placement)

### Issue 8: No Dedicated Course Pages

All courses live at `/#courses` hash anchor — no individual URLs for:
- `/courses/sap-mm` — SAP MM Training India
- `/courses/sap-hana` — SAP HANA Course India
- `/courses/sap-fi` — SAP FI Training India

Each of these could rank independently for high-intent keywords.

### Issue 9: Phone Number Inconsistency (Trust Signal Damage)

| Location | Phone Number |
|----------|-------------|
| `llm.txt` | +91-9312340496 |
| `seo.ts` (schema) | +91-XXXXXXXXXX |
| `Footer.tsx` | +91 XXXXX XXXXX |
| `FAQSection.tsx` (button) | +919876543210 |

Google's NAP (Name, Address, Phone) consistency is a local SEO ranking factor. 4 different phone numbers = zero trust.

### Issue 10: Email Inconsistency (Trust Signal Damage)

| Location | Email |
|----------|-------|
| `llm.txt` | shortsbyrishab@gmail.com |
| `Footer.tsx` | info@erpacademy.com |
| `seo.ts` (OG) | contact@erp-academy.com |

Three different email addresses signal an untrustworthy, unverified business to Google.

### Issue 11: OpenGraph Image Type Mismatch

```ts
// seo.ts line 55
images: [{
  url: ogImage,  // Points to .webp file
  type: 'image/png'  // WRONG — file is WebP, not PNG
}]
```

This can prevent social sharing previews from loading correctly.

### Issue 12: Missing hreflang Implementation

`seo.ts` has `languages: { 'en': canonicalUrl, 'hi': canonicalUrl }` but both point to the same URL. The `hi` alternate should be removed if there's no Hindi version.

---

## MEDIUM-PRIORITY IMPROVEMENTS (Week 3-4)

### Issue 13: Missing Local SEO Signals

Address in `seo.ts` is just `"addressLocality": "India"` — extremely vague. For lead generation you need:
- Specific city (Delhi, Noida, etc.)
- Pincode
- Google Business Profile
- LocalBusiness schema with opening hours

### Issue 14: No Internal Linking Strategy

- Blog posts don't link to each other
- Blog posts don't link to course landing pages
- Homepage doesn't link to specific blog posts
- No "Related Posts" or "Next Article" navigation

### Issue 15: Blog Post Pages Missing Key SEO Signals

In `src/app/blog/[slug]/page.tsx`:
- No `keywords` metadata on individual posts
- No `dateModified` (only `datePublished`) — affects freshness signals
- Missing `wordCount` and `articleSection` in BlogPosting schema
- Tags are rendered but not linked to tag-filtered pages

### Issue 16: Missing Canonical Handling for Similar Posts

Two nearly identical posts will cause Google to penalize both:
- `generative-ai-s4hana-cloud-migration` (Feb 8, 2026)
- `generative-ai-sap-s4hana-cloud-migration` (Feb 9, 2026)

### Issue 17: sameAs Links Point to Placeholder URLs

Current `sameAs` links in `seo.ts` may point to non-existent profiles:
```ts
"https://www.linkedin.com/company/erp-academy"
"https://twitter.com/ERPAcademyIndia"
"https://www.youtube.com/c/ERPAcademy"
```

If these profiles don't exist, remove them. Broken `sameAs` links hurt trust.

---

## COMPLETE FIX ROADMAP

### PHASE 1: Foundation Fixes (Week 1-2) — HIGHEST IMPACT

#### 1.1 Get a Custom Domain
- [ ] Purchase `erpacademy.in` or `erp-academy.in`
- [ ] Set up DNS with Vercel
- [ ] Update all canonical URLs in codebase
- [ ] Set up 301 redirects from vercel.app to new domain
- [ ] Resubmit sitemap in Google Search Console

#### 1.2 Fix the Homepage Server-Side Rendering
- [ ] Remove `'use client'` from `src/app/page.tsx`
- [ ] Make `page.tsx` a Server Component
- [ ] Extract animation wrappers into a separate `'use client'` wrapper component
- [ ] Verify homepage HTML is fully rendered before JS loads

#### 1.3 Clean Up Sitemap
```ts
// Remove hash anchors — they are NOT indexable pages
// REMOVE:
{ url: `${site}/#about`, ... }
{ url: `${site}/#courses`, ... }
{ url: `${site}/#contact`, ... }

// KEEP and ADD:
{ url: `${site}/`, priority: 1 }
{ url: `${site}/blog`, priority: 0.9 }
{ url: `${site}/courses/sap-mm`, priority: 0.9 }
{ url: `${site}/courses/sap-hana`, priority: 0.9 }
{ url: `${site}/courses/sap-fi`, priority: 0.9 }
// + all published blog posts
```

#### 1.4 Fix NAP Consistency
- [ ] Decide on ONE phone number and ONE email — update across ALL files
- [ ] Update: `seo.ts`, `Footer.tsx`, `FAQSection.tsx`, `llm.txt`, `ContactForm.tsx`

#### 1.5 Add FAQPage Schema to Homepage
```ts
// Add to src/app/page.tsx (after converting to server component)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What SAP modules do you teach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in SAP MM (Materials Management), SAP HANA, and SAP FI (Financial Accounting). Our courses cover fundamental to advanced concepts with hands-on practical experience."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the SAP training program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our comprehensive SAP training program runs for 10-12 weeks with 3-4 hours per week. We also offer intensive weekend batches and flexible scheduling."
      }
    }
    // ... add all 16 FAQs from FAQSection.tsx
  ]
}
```

#### 1.6 Fix OpenGraph Image Type
```ts
// seo.ts — change OG image type
type: 'image/webp'  // was incorrectly 'image/png'
```

---

### PHASE 2: Content & Indexability (Week 2-3)

#### 2.1 Create Dedicated Course Pages

**Create:** `src/app/courses/sap-mm/page.tsx`
**Create:** `src/app/courses/sap-hana/page.tsx`
**Create:** `src/app/courses/sap-fi/page.tsx`

Each page should include:
- Full course curriculum (topic by topic)
- Duration, fees, schedule options
- Instructor credentials (Akshay Kumar)
- Student outcomes / salary data
- CTA for free consultation
- Course schema markup
- LocalBusiness schema
- Breadcrumb schema

**Target keywords per page:**
- SAP MM: "SAP MM training India", "SAP MM course Delhi", "SAP MM with placement"
- SAP HANA: "SAP HANA course India", "SAP HANA training online"
- SAP FI: "SAP FI training online", "SAP FI certification India"

#### 2.2 Audit and Fix Blog Content

**Delete immediately:**
- `generative-ai-s4hana-cloud-migration` — duplicate of the longer one
- `image_hotfix.md` — not a blog post, should not be in /posts

**Fix these posts:**
- Change all "AI Contributor" authors to "Akshay Kumar" or a real human name
- Fix the `undefined` tags in `sap-system-performance-optimization` post
- Add `dateModified` field to all posts in `index.json`

**Draft these posts (zero views, AI-only, need human review):**
- `ai-driven-sap-s4hana-cloud-migration-2024` (0 views, 0 likes)
- `generative-ai-sap-s4hana-cloud-migration` (0 views, 0 likes)

#### 2.3 Add Internal Linking

- [ ] Add "Related Posts" section at end of each blog post
- [ ] Add "Explore Our SAP Courses" CTA in blog posts
- [ ] Link blog posts to specific course pages
- [ ] Add "Featured Articles" widget on homepage
- [ ] Ensure BreadcrumbSchema.tsx renders correctly on all pages

#### 2.4 Enhance BlogPosting Schema

```ts
// src/app/blog/[slug]/page.tsx — enhanced JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.dateModified || post.date,    // ADD
  wordCount: post.content.split(' ').length,         // ADD
  articleSection: post.category,                     // ADD
  keywords: post.tags.join(', '),                    // ADD
  author: {
    '@type': 'Person',
    name: post.author,
    url: 'https://erp-academy.vercel.app',           // ADD
  },
  publisher: {                                       // ADD THIS BLOCK
    '@type': 'Organization',
    name: 'ERP Academy by Akshay',
    logo: {
      '@type': 'ImageObject',
      url: 'https://erp-academy.vercel.app/assets/logo_fit.png'
    }
  },
  image: {                                           // ENHANCE
    '@type': 'ImageObject',
    url: post.imageUrl.startsWith('http') ? post.imageUrl : `${site}${post.imageUrl}`,
    width: 1200,
    height: 630
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
}
```

---

### PHASE 3: Local SEO & Authority (Week 3-4)

#### 3.1 Google Business Profile
- [ ] Create/claim Google Business Profile for "ERP Academy by Akshay"
- [ ] Add complete address (city, state, pincode)
- [ ] Upload photos (office, trainer, students)
- [ ] Add services: SAP MM Training, SAP HANA Course, SAP FI Training
- [ ] Collect 10+ Google Reviews from past students

#### 3.2 Update LocalBusiness Schema in seo.ts

```ts
// Replace vague address with real details
"address": {
  "@type": "PostalAddress",
  "streetAddress": "YOUR ACTUAL STREET ADDRESS",
  "addressLocality": "Delhi",           // Be specific — city, not just India
  "addressRegion": "Delhi",
  "postalCode": "110001",               // Actual pincode
  "addressCountry": "IN"
},
"openingHoursSpecification": [{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "opens": "09:00",
  "closes": "19:00"
}],
"telephone": "+91-ACTUAL-PHONE",        // ONE consistent number everywhere
"priceRange": "Rs Rs",
```

#### 3.3 Build Backlinks (Off-Page SEO)

Priority backlink sources:
1. Submit to SAP Community (community.sap.com) — high domain authority
2. Guest posts on naukri.com career blog
3. Quora answers to "best SAP training in India" questions
4. LinkedIn articles by Akshay Kumar (link back to blog/courses)
5. Submit to local business directories (Justdial, Sulekha, IndiaMart)
6. Get listed on training portals (Shiksha.com, CourseReport.com)

---

### PHASE 4: Keyword & Content Strategy (Week 4-6)

#### 4.1 Target Keyword Map

| Priority | Keyword | Monthly Volume | Difficulty | Target Page |
|----------|---------|---------------|------------|-------------|
| P1 | SAP MM training India | 1,900/mo | Medium | /courses/sap-mm |
| P1 | SAP training institute Delhi | 1,600/mo | Medium | Homepage |
| P1 | SAP HANA course with placement | 880/mo | Low-Med | /courses/sap-hana |
| P1 | SAP FI training online | 720/mo | Low | /courses/sap-fi |
| P2 | SAP salary India 2025 | 2,400/mo | Low-Med | Blog 2 |
| P2 | SAP MM tutorial for beginners | 590/mo | Low | Blog 4 |
| P2 | SAP certification cost India | 480/mo | Low | Blog |
| P2 | SAP career after graduation | 390/mo | Low | Blog |
| P3 | ERP Academy Akshay Kumar | Branded | Very Low | Homepage |
| P3 | SAP placement assistance India | 210/mo | Very Low | /courses/* |

#### 4.2 Homepage Title & Description Optimization

**Current Title (too long):**
```
Master SAP MM, HANA, FI Training India | ERP Academy #1
```

**Recommended:**
```
SAP Training in India | SAP MM, HANA & FI Courses | ERP Academy
```
(57 chars — within 60 char limit, primary keyword at front)

**Current Meta Description:**
```
Transform your career with India's #1 SAP training. Expert SAP MM, HANA & FI courses. 6+ years experience, 500+ placed. Free consultation!
```

**Recommended:**
```
Join India's leading SAP training institute. Expert-led SAP MM, HANA & FI courses with 95% placement. 500+ students placed at TCS, Infosys, Wipro. Book free demo today!
```
(158 chars — near 160 char limit, includes local + social proof signals)

---

## THE 5 POWER BLOGS TO RANK & GET LEADS

These are strategically chosen to capture **high-intent visitors** (people ready to enroll). Each targets a keyword gap that your current blog content completely misses.

---

### Blog 1: "SAP MM Training in India 2025: Complete Guide to Fees, Duration & Placement"

**Target Keyword:** `SAP MM training India` (1,900 searches/month)
**Search Intent:** Commercial/Navigational — someone comparing institutes
**Why It Gets Leads:** Person searching this is ready to enroll. They need one convincing page.

**Content Structure:**
1. What is SAP MM? (200 words — define for beginners)
2. SAP MM Course Curriculum (detailed table with topics)
3. Duration and Schedule (weekday/weekend batches)
4. Fee Structure at ERP Academy vs Market Rate
5. Prerequisites (none needed — reassure them)
6. Career Scope: SAP MM Jobs in India (with salary ranges)
7. Our Students' Success Stories (real names, companies)
8. Free Demo Class CTA

**Schema to add:** Course + FAQPage + AggregateRating
**Internal Links:** Link to /courses/sap-mm, contact form, other course blogs

---

### Blog 2: "SAP Salary in India 2025: How Much Can You Earn After SAP Certification?"

**Target Keyword:** `SAP salary India` / `SAP consultant salary 2025` (~2,400/mo)
**Search Intent:** Informational — high buyer intent (evaluating career switch)
**Why It Gets Leads:** Anyone looking at SAP salary is considering the career. End with "Start Your Journey — Free Consultation"

**Content Structure:**
1. SAP Salary Overview (table with all modules)
2. SAP MM Salary in India (fresher to 10+ years)
3. SAP HANA Salary in India
4. SAP FI Salary in India
5. City-wise SAP Salary (Delhi, Bangalore, Mumbai, Pune)
6. Factors Affecting SAP Salary (module, certification, company)
7. How to Fast-Track SAP Salary Growth
8. CTA: "Start with ERP Academy — Free Demo Class Available"

**Schema:** FAQPage + Article
**Key Stat to Include:** "Our alumni average salary: Rs 8.5 LPA after 1 year"

---

### Blog 3: "SAP Training vs MBA: Which is Better for Career Growth in India?"

**Target Keyword:** `SAP course vs MBA` / `SAP certification worth it India` (~890/mo)
**Search Intent:** Informational — decision stage content
**Why It Gets Leads:** Converts fence-sitters. Someone comparing both is ready to invest in education.

**Content Structure:**
1. Quick Comparison Table (Time, Cost, ROI, Job Market)
2. Why SAP Training Takes 3 Months vs MBA's 2 Years
3. SAP Salary After Course vs MBA Salary (data-driven)
4. Which Companies Hire SAP Professionals?
5. MBA + SAP Combo — Best of Both Worlds?
6. Real Student Story: "I chose SAP over MBA and here's why"
7. CTA: "Talk to Our Counselor — Free Career Guidance Call"

**Schema:** Article + FAQPage
**Differentiator:** Personal first-hand stories from Akshay Kumar's 6+ years of experience

---

### Blog 4: "SAP MM Tutorial for Beginners: What You'll Learn in First 30 Days"

**Target Keyword:** `SAP MM tutorial` / `SAP MM for beginners` (~590/mo)
**Search Intent:** Informational — top of funnel lead magnet
**Why It Gets Leads:** Teaches value upfront, builds trust, funnels to paid course

**Content Structure:**
1. What is SAP MM? (Materials Management explained simply)
2. SAP MM Key Concepts (Procurement, Inventory, Vendor Management)
3. SAP MM Transaction Codes Every Beginner Should Know (ME21N, MIGO, ME11, MIRO)
4. Day-by-Day Learning Plan for 30 Days
5. Common SAP MM Interview Questions with Answers
6. How to Practice SAP MM (SAP sandbox options)
7. When to Go Professional: Joining a Training Institute
8. CTA: "Ready to Go Pro? Join ERP Academy's SAP MM Batch"

**Schema:** HowTo + FAQPage
**Technical Depth:** Include actual SAP transaction codes — this signals E-E-A-T expertise to Google

---

### Blog 5: "How to Get a Job After SAP Training in India: Step-by-Step Guide (2025)"

**Target Keyword:** `SAP job after training` / `SAP placement assistance India` (~320/mo)
**Search Intent:** Commercial — post-evaluation stage, nearly ready to enroll
**Why It Gets Leads:** Someone searching this is worried about ROI. Reassure them and convert.

**Content Structure:**
1. The SAP Job Market in India (current state, demand stats)
2. Companies Hiring SAP Freshers (Infosys, TCS, Wipro, Capgemini, Accenture)
3. What Your SAP Resume Should Look Like (template)
4. Top SAP Interview Questions with Answers
5. How ERP Academy's Placement Program Works (step-by-step)
6. Timeline: Course Completion to First SAP Job (realistic expectations)
7. Student Testimonials: "Got placed at [Company] 3 months after course"
8. CTA: "Our 95% Placement Rate Speaks for Itself — Enroll Now"

**Schema:** HowTo + FAQPage + AggregateRating
**Key Trust Builders:** Real company logos, real alumni names (with permission)

---

## CONTENT CALENDAR (Weeks 1-8)

| Week | Action | Expected Impact |
|------|--------|----------------|
| 1 | Fix homepage SSR, sitemap, NAP consistency | Foundation for all indexing |
| 1 | Custom domain migration | Domain authority begins building |
| 2 | Create /courses/sap-mm + /courses/sap-hana + /courses/sap-fi | 3 new rankable pages |
| 2 | Fix blog authors, delete duplicates | Remove indexing barriers |
| 3 | Publish Blog 1 (SAP MM Training Guide) | Ranking in 4-8 weeks |
| 3 | Add FAQPage schema to homepage | Rich results eligibility |
| 4 | Publish Blog 2 (SAP Salary Guide) | High-traffic informational hits |
| 4 | Set up Google Business Profile | Local pack rankings begin |
| 5 | Publish Blog 3 (SAP vs MBA) | Decision-stage leads |
| 5 | Build 5 backlinks (Quora, SAP Community) | Domain authority boost |
| 6 | Publish Blog 4 (SAP MM Tutorial) | Top-of-funnel traffic |
| 6 | Resubmit sitemap, request manual indexing in GSC | All pages indexed |
| 7 | Publish Blog 5 (SAP Job Guide) | Bottom-funnel lead conversion |
| 7 | Add internal linking across all pages | Improved crawl depth |
| 8 | Full SEO audit review + Search Console analysis | Measure all improvements |

---

## EXPECTED OUTCOMES (3-6 Month Forecast)

| Metric | Current | Month 3 | Month 6 |
|--------|---------|---------|---------|
| Indexed Pages | 2 | 15+ | 28+ |
| Monthly Clicks | ~3-4 | 80-150 | 400-800 |
| Monthly Impressions | ~500 | 5,000 | 15,000+ |
| Average CTR | 0.7% | 2-3% | 3-5% |
| Average Position | 9.1 | 6-8 | 3-6 |
| Monthly Leads from SEO | ~1-2 | 8-15 | 25-50 |

---

## FILES TO MODIFY (Priority Order)

| Priority | File | Change Required |
|----------|------|----------------|
| P1 CRITICAL | `src/app/page.tsx` | Remove `'use client'`, convert to Server Component |
| P1 CRITICAL | `src/app/sitemap.ts` | Remove hash anchors, add course pages |
| P1 CRITICAL | `src/lib/seo.ts` | Fix OG image type, real phone/email, real address |
| P1 CRITICAL | `src/components/Footer.tsx` | Fix contact info (NAP consistency) |
| P1 CRITICAL | `src/components/FAQSection.tsx` | Fix phone number consistency |
| P2 HIGH | `content/posts/index.json` | Fix authors, remove duplicates, add dateModified |
| P2 HIGH | `src/app/blog/[slug]/page.tsx` | Enhance BlogPosting schema |
| P2 HIGH | `public/llm.txt` | Update contact info to match site |
| P3 MEDIUM | `src/app/robots.ts` | Minor optimization |
| P3 MEDIUM | NEW: `src/app/courses/sap-mm/page.tsx` | Create dedicated course page |
| P3 MEDIUM | NEW: `src/app/courses/sap-hana/page.tsx` | Create dedicated course page |
| P3 MEDIUM | NEW: `src/app/courses/sap-fi/page.tsx` | Create dedicated course page |
| P3 MEDIUM | NEW: `content/posts/sap-mm-training-india.mdx` | Power Blog 1 |
| P3 MEDIUM | NEW: `content/posts/sap-salary-india-2025.mdx` | Power Blog 2 |
| P3 MEDIUM | NEW: `content/posts/sap-training-vs-mba-india.mdx` | Power Blog 3 |
| P3 MEDIUM | NEW: `content/posts/sap-mm-tutorial-beginners.mdx` | Power Blog 4 |
| P3 MEDIUM | NEW: `content/posts/sap-job-after-training-india.mdx` | Power Blog 5 |

---

## TRACKING CHECKLIST

### Technical SEO
- [ ] `page.tsx` is Server Component (verify with view-source, not DevTools)
- [ ] All pages return HTTP 200 (no 301/302 chains)
- [ ] Sitemap accessible at `/sitemap.xml` and contains all pages
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] All 28+ pages submitted to Search Console with "Request Indexing"
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] No 404 errors on internal links (check GSC Coverage report)
- [ ] Custom domain configured with HTTPS + HSTS

### Content SEO
- [ ] Every page has unique title tag (under 60 chars)
- [ ] Every page has unique meta description (under 160 chars)
- [ ] Every page has exactly ONE H1 tag
- [ ] All images have descriptive alt text (not filenames)
- [ ] No "AI Contributor" author on any published post
- [ ] All duplicate posts removed or consolidated
- [ ] 5 power blogs published and requested for indexing

### Structured Data
- [ ] Organization schema on homepage
- [ ] FAQPage schema on homepage
- [ ] Course schema on each /courses/* page
- [ ] BlogPosting schema on each blog post (with publisher block)
- [ ] BreadcrumbList on all non-homepage pages
- [ ] LocalBusiness schema with real address and phone
- [ ] All schemas tested at: https://search.google.com/test/rich-results

### Local SEO
- [ ] Google Business Profile created and verified
- [ ] NAP (Name, Address, Phone) consistent across website + GBP + directories
- [ ] Listed on Justdial, Sulekha, IndiaMart
- [ ] 10+ Google Reviews requested from past students

### Off-Page SEO
- [ ] LinkedIn articles published by Akshay Kumar (link to blog/courses)
- [ ] Quora profile with answers to "SAP training in India" questions
- [ ] SAP Community profile or forum post
- [ ] 3+ backlinks secured from education directories or career portals

---

## Quick Reference: Key URLs After Custom Domain

```
Homepage:         https://erp-academy.in/
Blog Index:       https://erp-academy.in/blog/
SAP MM Course:    https://erp-academy.in/courses/sap-mm/
SAP HANA Course:  https://erp-academy.in/courses/sap-hana/
SAP FI Course:    https://erp-academy.in/courses/sap-fi/
Sitemap:          https://erp-academy.in/sitemap.xml
Robots:           https://erp-academy.in/robots.txt
Google Rich Results Test: https://search.google.com/test/rich-results
PageSpeed Insights: https://pagespeed.web.dev/
```

---

*Report compiled by: Antigravity AI | August 2026*
*Next review: 30 days after Phase 1 implementation*
