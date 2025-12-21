Below is a **high-quality, agent-ready operating procedure** you can give directly to an AI agent (or automation system).
It is **explicit, defensive, idempotent**, and written to avoid data loss in real-world repositories.

---

# 🧠 AI Agent Runbook

## Safely Renaming Remote Git Branches and Reassigning `main`

---

## 🎯 Objective

Transform repository branch structure **without losing history or breaking production**.

### Desired Final State

- `main` → **Next.js–only code** (currently on `master`)
- `combined-react-next` → **React + Next combined code** (currently on `main`)
- `master` → **removed**
- Remote default branch → `main`

---

## 📌 Preconditions (Agent MUST Validate)

1. Git repository has **two branches**:

   - `main` → combined React + Next code
   - `master` → Next.js only code

2. Agent has:

   - Push permissions to remote
   - Permission to change default branch in repository settings

3. No uncommitted local changes
4. No active rebases or merges
5. CI/CD is not actively deploying from `main` during execution

---

## 🧪 Safety Guarantees

- No commit history is deleted
- No orphaned commits
- Rollback is always possible
- Remote state is preserved at every step

---

## 🔐 Phase 1 — Repository Integrity Check

### 1.1 Sync with remote

```bash
git fetch origin --prune
```

### 1.2 Verify clean working tree

```bash
git status --porcelain
```

**If output is non-empty → STOP**

---

## 🛡️ Phase 2 — Immutable Backup Creation

### 2.1 Checkout current `main`

```bash
git checkout main
```

### 2.2 Create permanent backup branch

```bash
git branch combined-react-next
```

### 2.3 Push backup branch to remote

```bash
git push origin combined-react-next
```

### 2.4 (Optional but recommended) Create tag snapshot

```bash
git tag backup-before-main-reassignment
git push origin backup-before-main-reassignment
```

✅ **At this point, rollback is guaranteed**

---

## 🔄 Phase 3 — Rename `master` to `main` Locally

### 3.1 Switch to `master`

```bash
git checkout master
```

### 3.2 Rename branch locally

```bash
git branch -m master main
```

---

## 🚀 Phase 4 — Update Remote `main`

⚠️ This is a controlled force update. Safe because a backup exists.

```bash
git push origin main --force
```

---

## 🧭 Phase 5 — Update Remote Default Branch

### Required manual or API-based step:

- Navigate to **Repository Settings**
- Set **Default Branch** → `main`

> This step must be completed **before deleting `master`**

---

## 🧹 Phase 6 — Remove Legacy `master` Branch

### 6.1 Delete remote `master`

```bash
git push origin --delete master
```

### 6.2 Prune local references

```bash
git fetch --prune
```

---

## 🔗 Phase 7 — Fix Upstream Tracking

```bash
git branch --set-upstream-to=origin/main main
```

---

## 📊 Phase 8 — Validation Checklist

Agent must verify:

```bash
git branch -a
```

Expected output:

- `main`
- `combined-react-next`
- No `master`

```bash
git log --oneline --decorate -5
```

Confirm:

- `main` contains Next.js-only commits
- `combined-react-next` contains combined app commits

---

## 🧯 Rollback Procedure (If Anything Goes Wrong)

### Restore old main:

```bash
git checkout combined-react-next
git push origin combined-react-next:main --force
```

Or via tag:

```bash
git checkout backup-before-main-reassignment
git branch -f main
git push origin main --force
```

---

## 👥 Collaborator Instructions (Post-Migration)

```bash
git fetch origin --prune
git checkout main
git reset --hard origin/main
```

---

## 🧠 Design Principles for Agent

- **Never delete before backup**
- **Never force-push without a recovery path**
- **Never assume default branch is updated**
- **Never proceed if working tree is dirty**

---

## 🏁 Final State Summary

| Branch                | Purpose                         |
| --------------------- | ------------------------------- |
| `main`                | ✅ Next.js-only production code |
| `combined-react-next` | 🧪 Legacy / experimental        |
| `master`              | ❌ Removed                      |

---

## 🧩 Optional Enhancements

- Add branch protection rules after migration
- Lock `combined-react-next` from direct pushes
- Update CI/CD to trigger only on `main`

---

If you want, I can:

- Convert this into **JSON/YAML agent instructions**
- Add **GitHub API automation**
- Add **CI/CD auto-pause logic**
- Generate a **rollback-only runbook**

Just tell me what format your AI agent expects.
