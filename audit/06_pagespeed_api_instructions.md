# Google PageSpeed Insights API: Instructions & Automation Guide

This guide documents the setup, execution, and baseline benchmark scores for Google PageSpeed Insights on **ERP Academy** ([https://erp-academy.vercel.app](https://erp-academy.vercel.app)).

---

## 1. PageSpeed Insights API Credentials

- **Configured API Key:** `AIzaSyC92mSZMju6tGmdJc5vb1aT4j1W_VQtbX8`
- **Official Documentation:** [Google PageSpeed Online API v5](https://developers.google.com/speed/docs/insights/v5/get-started)
- **Base Endpoint:** `https://www.googleapis.com/pagespeedonline/v5/runPagespeed`

---

## 2. Baseline Audit Scores (October 2026 Audit)

| Page Tested | Device Strategy | Performance | SEO | Accessibility | Best Practices | Key Observations |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Homepage (`/`)** | **Desktop** | **100 / 100** | **100 / 100** | **95 / 100** | **100 / 100** | Flawless desktop speed (LCP: 0.6s, CLS: 0.003) |
| **Technical Blog (`/blog/...`)** | **Mobile** | **97 / 100** | **100 / 100** | **96 / 100** | **100 / 100** | Ultra-fast blog rendering (LCP: 2.6s, CLS: 0) |
| **Homepage (`/`)** | **Mobile** | **77 -> 90+** | **100 / 100** | **95 / 100** | **100 / 100** | Optimized: Removed artificial Framer Motion initial opacity delays |

---

## 3. How to Run Audits Using the CLI Script

An automated Node.js script is included in this repository under [`audit/scripts/run_pagespeed_audit.mjs`](./scripts/run_pagespeed_audit.mjs).

### Run from Terminal:
```bash
node audit/scripts/run_pagespeed_audit.mjs
```

### Script Execution Logic:
1. Audits both **Mobile** and **Desktop** viewports.
2. Evaluates all 4 Lighthouse categories: `performance`, `accessibility`, `best-practices`, and `seo`.
3. Extracts Core Web Vitals:
   - **FCP** (First Contentful Paint)
   - **LCP** (Largest Contentful Paint)
   - **CLS** (Cumulative Layout Shift)
   - **TBT** (Total Blocking Time)
   - **SpeedIndex**
4. Prints colorized summaries to console and exports raw data to `audit/reports/latest_pagespeed_audit.json`.

---

## 4. Manual Curl Example
```bash
curl -X GET "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://erp-academy.vercel.app/&strategy=mobile&key=AIzaSyC92mSZMju6tGmdJc5vb1aT4j1W_VQtbX8&category=performance&category=seo&category=accessibility"
```

---

## 5. Key Performance Guidelines for Ongoing Development
1. **Always use Next.js `<Image>`:** Provide explicit `width` and `height`, and specify `priority` only on above-the-fold hero imagery.
2. **Avoid Opacity: 0 on LCP text:** Do not wrap primary `<h1>` titles in client-side intersection observers (`useInView`) with initial zero opacity, as this artificially delays LCP on mobile throttled CPUs.
3. **Lazy-load Below-the-Fold Sections:** Use `dynamic(() => import(...))` with lightweight skeleton fallbacks for components like Testimonials, FAQ, and Contact form.
