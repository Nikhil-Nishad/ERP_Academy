# Standard Operating Procedure (SOP): Website & SEO Audit Execution

This guide outlines the recurring audit procedure to maintain 95+ Core Web Vitals, 100 SEO health, and optimal conversion rates for **ERP Academy**.

---

## 1. Audit Schedule & Cadence

- **Weekly Check (15 mins):**
  - Check Google Search Console Coverage / Indexing status.
  - Review Google Analytics 4 active traffic, bounce rate, and lead form submissions.
  - Test live WhatsApp CTA and Free Demo Booking modal.
- **Monthly Deep-Dive (45 mins):**
  - Run full PageSpeed Insights audit via CLI script (`node audit/scripts/run_pagespeed_audit.mjs`).
  - Analyze query position changes in Google Search Console (focus on positions 4–15).
  - Check broken internal links, 404s, and redirect chains.
  - Refresh or expand underperforming articles.
- **Quarterly Architecture Review (2 hours):**
  - Audit Next.js dependencies, security patches, and npm audit.
  - Review sitemap coverage and canonical link integrity.
  - Assess competitive landscape for primary courses (`/courses/sap-mm`, `/courses/sap-fi`, `/courses/sap-hana`).

---

## 2. Technical SEO Checklist

### A. Crawlability & Indexability
1. **Robots.txt Validation:**
   - Verify `https://erp-academy.vercel.app/robots.txt` is accessible.
   - Ensure AI search bots (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Bingbot`, `Googlebot`) are explicitly allowed.
2. **XML Sitemap Check:**
   - Confirm `https://erp-academy.vercel.app/sitemap.xml` returns valid XML.
   - Verify all published posts in `content/posts/index.json` appear in the sitemap.
3. **Canonical Tags:**
   - Ensure every page renders `<link rel="canonical" href="https://erp-academy.vercel.app/...">`.
   - Ensure preview deployment URLs (e.g. `*.vercel.app` branches) never override canonical URLs.
4. **Structured Data Validation:**
   - Test URLs on [Google Rich Results Test](https://search.google.com/test/rich-results).
   - Ensure `Organization`, `WebSite`, `BreadcrumbList`, and `BlogPosting` schemas have zero critical errors.
   - For blog posts with Q&A sections, verify `FAQPage` schema generates rich search snippets.

---

## 3. Core Web Vitals & Performance Checklist

| Metric | Target | How to Measure | Optimization Strategy |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | < 2.5s | PageSpeed API / DevTools | Preload hero image (`priority`), avoid initial `opacity: 0` blocking, use WebP/AVIF |
| **INP (Interaction to Next Paint)** | < 200ms | Lighthouse / Real User Data | Minimize heavy React re-renders, defer non-critical JS |
| **CLS (Cumulative Layout Shift)** | < 0.1 | PageSpeed API | Explicit `width` and `height` on all `Image` components, reserve layout space for dynamic elements |
| **FCP (First Contentful Paint)** | < 1.2s | PageSpeed API | Server Components for primary content, inline critical CSS |
| **TTFB (Time to First Byte)** | < 0.6s | Vercel Edge / Network tab | Vercel Edge caching and Next.js SSG (Static Site Generation) |

---

## 4. Conversion Rate Optimization (CRO) Checklist

1. **Direct Mentor WhatsApp Chat:**
   - Verify `+91-9312340496` opens WhatsApp with pre-filled enquiry text.
   - Test from both mobile and desktop devices.
2. **Demo Booking Form (`/#contact`):**
   - Submit a test inquiry to verify validation, error messages, and submission triggers.
   - Verify GA4 `form_submit` event fires on completion.
3. **Navigation Anchor Consistency:**
   - From `/blog` and any article page, click `#about`, `#courses`, and `#contact` to verify redirection to `/#about`, `/#courses`, etc.
