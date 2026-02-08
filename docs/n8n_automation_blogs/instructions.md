```markdown
# Automated Blog Publishing with n8n + GitHub + Vercel  
## Clean Case Study Summary & Execution Guide

This document summarizes the **current state**, **problems identified**, **decisions made**, and **exact steps to implement** a production-grade, safe, and scalable article publishing workflow using **n8n**, **GitHub**, and **Vercel**.

Use this as the **single source of truth** for implementing changes.

---

## 1. Current System Overview

### GitHub
- Branches:
  - `main` → **Production**
  - `dev` → **Staging / Preview**
  - `combined-react-dev` → **Archived / ignore**
- `main` is integrated with **Vercel Production Deploy**
- `dev` is auto-deployed as a **Vercel Preview Deployment**

### Vercel
- Automatically deploys:
  - `main` → Production URL
  - `dev` → Preview URL  
    `https://erp-academy-git-dev-nikhilnishads-projects.vercel.app/`
- Vercel Free Tier is sufficient
- GitHub Checks can be required before production promotion

### n8n
- Generates:
  - MDX article file
  - Image file
- Commits files to GitHub
- Currently **does NOT update the blog index**, causing articles to not appear

---

## 2. Problems Identified

1. **Article not visible after generation**
   - Cause: Blog index / registry is not updated
2. **Risk of breaking `main`**
   - Cause: No strict separation of dev vs prod publishing
3. **No promotion workflow**
   - No formal dev → main verification gate
4. **No validation before commit**
   - Slug uniqueness and index inclusion not enforced
5. **Deploy hooks misunderstood**
   - Vercel deploy hooks should NOT be used when Git-based deployment exists

---

## 3. Key Decisions (Non-Negotiable)

### Branch Strategy
- `main` = Production (protected, stable, boring)
- `dev` = Staging (automation writes here)
- n8n **must never commit to `main`**

### Deployment Strategy
- Git-based deployments ONLY
- No manual or webhook-triggered Vercel deploys
- Vercel Preview Deploy = primary validation gate

### Commit Strategy
- One article = one atomic commit
- Squash merge only into `main`
- No frequent or partial commits to `main`

---

## 4. Final Target Architecture

```

n8n
└── commit article → dev
└── Vercel Preview Deploy (auto)
├── build succeeds
├── article route works
├── article listed in blog index
└── no runtime errors
↓
merge dev → main (squash)
↓
Vercel Production Deploy

```

---

## 5. Required n8n Workflow (Exact Responsibilities)

### Step 1: Generate Content
- Create MDX file with:
  - slug
  - title
  - date
  - published = true
- Generate and save article image

### Step 2: Update Blog Index (MANDATORY)
n8n must programmatically update:
- Blog index / manifest / content registry file

The article is **NOT considered published** unless:
- The index contains the new slug

### Step 3: Validate Before Commit
Fail the workflow if:
- MDX file not created
- Image not created
- Slug already exists
- Blog index not updated correctly

### Step 4: Commit to GitHub
- Branch: `dev`
- One commit only
- Commit message format:
```

feat(blog): publish <slug>

```

---

## 6. Vercel Behavior (Confirmed)

- `dev` branch:
- Auto-deploys on every commit
- Generates preview URL
- `main` branch:
- Auto-deploys to production
- Deploy hooks:
- ❌ NOT to be used
- GitHub commits already trigger deployments

---

## 7. Verification Checklist (After Each Article)

### On Dev Preview URL
- `/blog/<slug>` loads successfully
- Blog listing page shows the article
- No build or runtime errors
- Images load correctly

If any check fails:
- Do NOT merge to `main`
- Fix on `dev` and redeploy

---

## 8. Promotion to Production

### GitHub Rules (Must Be Enforced)
- Protect `main` branch
- Disallow direct commits
- Require pull request
- Require checks to pass
- Allow squash merges only

### Promotion Flow
1. Open PR: `dev` → `main`
2. Confirm:
 - Vercel Preview Deployment passed
 - Article visible and correct
3. Squash merge
4. Production deploy happens automatically

---

## 9. What “Published” Means (Strict Definition)

An article is considered **published** only if:
- MDX exists
- Image exists
- Blog index updated
- Dev preview builds successfully
- Article route is accessible
- Article appears in listing
- Production deploy completed

Missing any step = **NOT published**

---

## 10. n8n Workflow Nodes (Actual Implementation)

The updated workflow in `n8n_automation_workflow.json` contains:

| Node | Purpose |
|------|---------|
| Schedule Trigger | Cron: Mon & Thu at 9 AM |
| AI Strategist | Generates metadata + image prompt |
| Edit Fields | Normalizes AI output |
| AI Writer | Creates article content |
| HTTP Request1 | Generates image via external API |
| Download Image | Fetches image binary |
| Rename file | Sets proper filename |
| GitHub: Upload Image | Commits image to `dev` |
| GitHub: Create Post | Commits MDX to `dev` |
| GitHub: Get index.json | Fetches current index from `dev` |
| Append to Index | Adds new entry (Code node) |
| GitHub: Update index.json | Commits updated index to `dev` |

All commits target `dev` branch with message format: `feat(blog): publish <slug>`

---

## 11. Automated Verification (GitHub Action)

`.github/workflows/blog-pr.yml` provides:

### What It Does
| Trigger | Action |
|---------|--------|
| Push to `dev` | Creates PR from `dev` → `main` |
| Vercel deployment succeeds | Updates PR with ✅ status, checks blog URL |
| Vercel deployment fails | Comments ❌ on PR |

### Verification Checks
1. ✅ Vercel preview deployed
2. ✅ Blog article accessible (HTTP 200 check)
3. 🔗 Links added to PR description

### Merge Protection
- Merge button blocked until Vercel passes
- PR updated with deployment status automatically
- Manual merge after visual review

---

## 12. Absolute Rules (Do Not Violate)

- n8n never touches `main`
- No deploy hooks with Git-based deploys
- No index update = no publish
- `main` stays clean and minimal
- Preview success is mandatory before production

---

## End of Document
```
