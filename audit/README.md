# ERP Academy — Audit, Growth & SEO Intelligence Hub

Welcome to the central intelligence and audit repository for **ERP Academy** ([https://erp-academy.vercel.app](https://erp-academy.vercel.app)).

This directory contains complete operational playbooks, data-driven roadmaps, keyword targets, content ideation frameworks, and automated tooling to maintain top search rankings, maximize course inquiries, and monitor site health.

---

## 📁 Repository Contents

| File | Purpose | Key Focus Areas |
| :--- | :--- | :--- |
| **[`01_audit_execution_sop.md`](./01_audit_execution_sop.md)** | Periodic Audit SOP | How to run monthly and quarterly audits across Technical SEO, Core Web Vitals, and UX |
| **[`02_growth_roadmap_30_60_90.md`](./02_growth_roadmap_30_60_90.md)** | Strategic Growth Roadmap | 30-, 60-, and 90-day execution milestones for enrollments, backlinks, and rankings |
| **[`03_keyword_research_strategy.md`](./03_keyword_research_strategy.md)** | Keyword Opportunity Matrix | High-intent, transactional, and long-tail SAP keyword clusters with intent classification |
| **[`04_content_discovery_from_insights.md`](./04_content_discovery_from_insights.md)** | Content Ideation Framework | How to extract viral, high-ranking blog ideas from live GA4 & Search Console queries |
| **[`05_mcp_ga4_and_gsc_usage_guide.md`](./05_mcp_ga4_and_gsc_usage_guide.md)** | MCP Automation Manual | Complete instructions for using Model Context Protocol (MCP) with GA4 & Search Console |
| **[`06_pagespeed_api_instructions.md`](./06_pagespeed_api_instructions.md)** | PageSpeed & Core Web Vitals | API key configuration, performance benchmark scores, and optimization rules |
| **[`scripts/run_pagespeed_audit.mjs`](./scripts/run_pagespeed_audit.mjs)** | Automated Audit Script | CLI script to test homepage, course pages, and blogs using PageSpeed API |

---

## 🚀 Quick Commands

### Run Automated PageSpeed Audit
```bash
node audit/scripts/run_pagespeed_audit.mjs
```

### Check Production Build Health
```bash
npm run build
```
