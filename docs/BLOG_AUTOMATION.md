# Blog Automation System

> Automated blog publishing with n8n, GitHub Actions, and Vercel

This document explains the complete blog automation architecture for ERP Academy.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Setup Guide](#setup-guide)
- [How to Add Articles](#how-to-add-articles)
- [Workflow Reference](#workflow-reference)
- [Troubleshooting](#troubleshooting)

---

## Overview

The blog system automatically generates and publishes articles using:

| Component | Role |
|-----------|------|
| **n8n** | AI content generation + GitHub commits |
| **GitHub** | Version control + branch protection |
| **GitHub Actions** | Automated verification + PR management |
| **Vercel** | Deployment + preview environments |

### Key Features

- ✅ AI-generated articles (2x per week)
- ✅ Automatic image generation
- ✅ Blog index auto-update
- ✅ Preview deployment verification
- ✅ Protected production branch
- ✅ Automated PR creation with status checks

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        n8n Workflow                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌───────────────┐  │
│  │Schedule │→ │   AI    │→ │   AI    │→ │ Commit to dev │  │
│  │Trigger  │  │Strategist│  │ Writer  │  │ (MDX + Image) │  │
│  └─────────┘  └─────────┘  └─────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    GitHub (dev branch)                      │
│  • content/posts/{slug}.mdx                                 │
│  • public/assets/blog_images/{slug}.webp                    │
│  • content/posts/index.json (updated)                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Actions                           │
│  1. Create PR (dev → main)                                  │
│  2. Wait for Vercel deployment                              │
│  3. Verify article URL (HTTP 200)                           │
│  4. Verify image URL (HTTP 200)                             │
│  5. Update PR with status                                   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Vercel Deployment                        │
│  Preview: https://erp-academy-git-dev-xxx.vercel.app        │
│  Production: https://erp-academy.vercel.app                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Manual Review                            │
│  • Check PR status (all green?)                             │
│  • Visual review preview URL                                │
│  • Squash merge to main                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## Setup Guide

### Prerequisites

1. **n8n instance** (self-hosted or cloud)
2. **GitHub repository** with branch protection
3. **Vercel project** connected to GitHub

### 1. n8n Workflow Setup

1. Open n8n and create a new workflow
2. Import `n8n_automation_workflow.json` from the repo root
3. Configure credentials:
   - **Groq API** for AI models
   - **GitHub API** (OAuth or PAT)
   - **Image API** (optional, for cover images)
4. Update repository details in GitHub nodes:
   - Owner: `Nikhil-Nishad`
   - Repository: `ERP_Academy`
   - Branch: `dev`
5. Activate the workflow

### 2. GitHub Configuration

**Branch Protection Rules (Settings → Branches → main):**

- ✅ Require pull request before merging
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Do not allow bypassing

**Required Status Checks:**

- `Vercel – erp-academy` or `vercel`

### 3. Vercel Configuration

1. Connect GitHub repository
2. Set production branch to `main`
3. Enable preview deployments for all branches
4. (Optional) Add custom domain

---

## How to Add Articles

### Automatic (via n8n)

The n8n workflow runs automatically on **Monday and Thursday at 9 AM**.

Each run:
1. Generates article metadata (title, slug, tags)
2. Writes full MDX content
3. Creates cover image
4. Updates blog index
5. Commits everything to `dev`
6. GitHub Action creates PR automatically

### Manual

To add an article manually:

#### 1. Create MDX file

```bash
# File: content/posts/your-article-slug.mdx
```

```mdx
---
id: your-article-slug
slug: your-article-slug
title: "Your Article Title"
date: "2025-02-08"
excerpt: "Brief description of the article"
author: "Your Name"
imageUrl: "/assets/blog_images/your-article-slug.webp"
category: "SAP Tech"
tags: ["SAP", "S/4HANA"]
readTime: 10
views: 0
likes: 0
featured: false
status: "published"
---

# Introduction

Your article content here...
```

#### 2. Add cover image

```bash
# File: public/assets/blog_images/your-article-slug.webp
# Size: 1792x1024 recommended
```

#### 3. Update index.json

Add entry to `content/posts/index.json`:

```json
{
  "id": "your-article-slug",
  "slug": "your-article-slug",
  "title": "Your Article Title",
  "date": "2025-02-08",
  "excerpt": "Brief description",
  "author": "Your Name",
  "imageUrl": "/assets/blog_images/your-article-slug.webp",
  "category": "SAP Tech",
  "tags": ["SAP", "S/4HANA"],
  "readTime": 10,
  "views": 0,
  "likes": 0,
  "featured": false,
  "status": "published"
}
```

#### 4. Commit and push to dev

```bash
git checkout dev
git add content/posts/ public/assets/blog_images/
git commit -m "feat(blog): publish your-article-slug"
git push origin dev
```

---

## Workflow Reference

### File Structure

```
content/posts/
├── index.json           # Blog index (REQUIRED)
├── article-one.mdx      # Article files
├── article-two.mdx
└── ...

public/assets/blog_images/
├── article-one.webp     # Cover images
├── article-two.webp
└── ...
```

### Commit Message Format

```
feat(blog): publish <slug>
```

### Branch Strategy

| Branch | Purpose | Auto-Deploy |
|--------|---------|-------------|
| `main` | Production | ✅ Yes |
| `dev` | Staging/Preview | ✅ Yes (preview) |

### Verification Checks

GitHub Action automatically verifies:

1. ✅ Vercel preview deployed
2. ✅ Article URL returns HTTP 200
3. ✅ Image URL returns HTTP 200

---

## Troubleshooting

### Article not appearing

1. Check if article is in `index.json`
2. Verify `status: "published"` in frontmatter
3. Check slug matches filename

### Image not loading

1. Verify image path in `imageUrl` field
2. Check image exists in `public/assets/blog_images/`
3. Ensure filename matches slug

### GitHub Action failing

1. Check workflow logs in Actions tab
2. Verify Vercel deployment succeeded
3. Check if preview URL is accessible

### n8n workflow errors

1. Check n8n execution logs
2. Verify API credentials are valid
3. Check GitHub permissions

---

## Related Files

| File | Purpose |
|------|---------|
| `n8n_automation_workflow.json` | n8n workflow configuration |
| `.github/workflows/blog-pr.yml` | GitHub Actions workflow |
| `src/lib/mdx.ts` | MDX processing logic |
| `content/posts/index.json` | Blog post registry |
| `docs/n8n_automation_blogs/instructions.md` | Detailed case study |

---

## Support

For issues with blog automation:

1. Check this README first
2. Review [instructions.md](docs/n8n_automation_blogs/instructions.md)
3. Open a GitHub issue if needed
