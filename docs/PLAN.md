# ERP Academy — SEO, GEO & Code Optimization Implementation Plan

> **Objective:** Maximize search visibility, rank top in Google SERPs, optimize for AI Search Engines (ChatGPT, Perplexity, Copilot GEO), fix structural UX/code bugs, and produce 8 authoritative, high-intent blogs based on active Google Analytics data.

---

## 1. Executive Summary & Google Analytics Findings

- **Property Analyzed:** `properties/474763775` (ERP ACADEMY BY AKSHAY)
- **Top Organic Performers:**
  - `/blog/sap-fico-course-roadmap-career-guide` (Google avg duration: **270s / 4.5 mins**)
  - `/blog/sap-mm-tutorial-beginners` (High organic user engagement)
  - `/blog/sap-mm-training-india` (High intent, course alignment)
- **Breakthrough AI Referral Metrics:**
  - **ChatGPT** referred users to `/blog/sap-fico-course-roadmap-career-guide` with **528 seconds (8.8 minutes)** session duration and **0% bounce rate**.
  - **Microsoft Copilot** referred users to `/blog/sap-mm-training-india` with **527 seconds (8.7 minutes)** duration and **0% bounce rate**.
  - **Perplexity** actively cited and referred to `/blog/sap-mm-tutorial-beginners`.
- **Key Takeaway:** Technical depth, practical real-world T-codes, career transition timelines, salary breakdowns, and comparison tables earn massive dwell time and AI engine citations. Generic futuristic buzzword posts bounce at 100%.

---

## 2. Issues to Fix in the Codebase

1. **Missing Header and Footer on `/blog` and `/blog/[slug]`**:
   - Visitors from Google or AI search land on isolated pages without standard navigation or contact footers.
2. **Broken Navigation Links on Non-Homepage Routes**:
   - `Header.tsx` attempts `scrollToElement` looking for DOM elements only present on `/`. On `/blog` or `/courses/*`, clicking "About", "Courses", or "Roadmap" is non-responsive.
3. **Missing Conversion CTAs in Blog Post Template**:
   - Blogs currently conclude with social icons, without direct lead capture (WhatsApp mentor link, demo booking, course badges).
4. **Missing FAQPage Schema in Blog Posts**:
   - Search engines and AI models require `FAQPage` JSON-LD to award expandable SERP snippets and direct generative answers.
5. **E-E-A-T and Author Signal Hardening**:
   - Ensure author schema and credentials for Akshay Kumar are prominently linked in every post schema.

---

## 3. The 8 High-Probability Viral & GEO Blog Portfolio

1. **`sap-s4hana-vs-ecc-differences`**
   - *Title:* SAP S/4HANA vs SAP ECC 6.0: 12 Critical Differences Every Consultant Must Know (2025/2026 Guide)
   - *Target Intent:* High search volume query from professionals & students upgrading to S/4HANA.
2. **`sap-mm-fi-integration-obyc-guide`**
   - *Title:* SAP MM-FI Integration & OBYC Configuration: Step-by-Step Guide with Common Errors & Fixes
   - *Target Intent:* High-technical dwell time; evergreen troubleshooting query cited by AI engines.
3. **`sap-certification-cost-in-india`**
   - *Title:* SAP Certification Cost in India (2025–2026): Exam Codes, Eligibility, CER006 Vouchers & Career ROI
   - *Target Intent:* Commercial high-intent query for prospective students budgeting for certifications.
4. **`non-it-to-sap-consultant-transition`**
   - *Title:* How to Transition from Non-IT, B.Com, or Mechanical Engineering to SAP Consultant in 90 Days
   - *Target Intent:* High-shareability career transition guide directly addressing ERP Academy's core audience.
5. **`sap-mm-s4hana-interview-questions`**
   - *Title:* Top 35 SAP MM & S/4HANA Sourcing Interview Questions & Answers (Scenario-Based for 2025)
   - *Target Intent:* Viral traffic magnet for job seekers actively preparing for consultant interviews.
6. **`sap-business-partner-cvi-s4hana`**
   - *Title:* SAP Business Partner (BP) & CVI Customer-Vendor Integration in S/4HANA: Complete T-Code BP Guide
   - *Target Intent:* Deep technical S/4HANA mandatory knowledge replacing legacy XK01/MK01/XD01.
7. **`sap-s4hana-sourcing-procurement-roadmap`**
   - *Title:* SAP S/4HANA Sourcing and Procurement: Complete Module Roadmap, Salary & Career Scope in India
   - *Target Intent:* Deep course funnel feeding into ERP Academy's SAP MM / Sourcing training program.
8. **`sap-fico-interview-questions-real-world`**
   - *Title:* Top 50 SAP FICO Real-World Interview Questions & Answers for 1–3 Years Experience
   - *Target Intent:* Pairs with the top-performing FICO Career Guide to capture high-intent finance professionals.

---

## 4. Execution Sequence

- [x] Phase 0: Discovery, GA Data Analysis & Code Audit
- [ ] Phase 1: Code Fixes (Header Navigation, Blog Layouts, Blog CTA Component, FAQ Structured Data)
- [ ] Phase 2: Blog Content Creation (8 MDX guides with tables, T-codes, FAQs, and metadata)
- [ ] Phase 3: Indexing & Registry Update (`index.json`, `sitemap.ts`, `public/llms.txt`)
- [ ] Phase 4: Build Verification & Quality Audit (`npm run build`)
