# Repository Cleanup Guide

## Objective

Keep only the Next.js 15 version in the repository and remove the old React/Vite version.

## Current Structure

```
C:\Users\nikhi\OneDrive\Desktop\SapERP2.0\ERP_Academy\
├── nextjs-migration\     ← KEEP THIS (Next.js 15)
└── [old-react-folder]\   ← DELETE THIS (React/Vite)
```

## Safe Cleanup Steps

### Step 1: Identify What to Keep and Remove

```powershell
# Navigate to the parent directory
cd C:\Users\nikhi\OneDrive\Desktop\SapERP2.0\ERP_Academy

# List all directories
dir
```

You should see:

- `nextjs-migration` (KEEP - Next.js 15)
- Old React files at root level (REMOVE)

### Step 2: Move Next.js to Root (Recommended Approach)

This is the cleanest approach - move the Next.js content to the root of the repo:

```powershell
# Navigate to the repo root
cd C:\Users\nikhi\OneDrive\Desktop\SapERP2.0\ERP_Academy

# Remove old React files from git tracking
git rm -r --cached src/ public/ *.jsx *.html index.html vite.config.js tailwind.config.js postcss.config.js package.json package-lock.json eslint.config.js

# Move Next.js files to root
Move-Item -Path nextjs-migration\* -Destination .\ -Force

# Remove the now-empty nextjs-migration folder
Remove-Item -Path nextjs-migration -Recurse -Force

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "refactor: migrate to Next.js 15 - remove legacy React codebase

- Moved Next.js 15 application to repository root
- Removed legacy React/Vite implementation
- Updated project structure for production deployment
- Maintained all SEO optimizations and performance enhancements"

# Push to GitHub
git push
```

### Step 3: Alternative - Delete Old Files Manually

If you prefer to keep the structure:

```powershell
cd C:\Users\nikhi\OneDrive\Desktop\SapERP2.0\ERP_Academy

# Remove old React files from Git (if they're at root level)
git rm -r src/
git rm -r public/
git rm *.jsx
git rm index.html
git rm vite.config.js
git rm package.json
git rm package-lock.json
# ... (remove other React-specific files)

# Commit the cleanup
git commit -m "chore: remove legacy React codebase, keep Next.js 15 only"

# Push
git push
```

## What Files to Remove (Old React Version)

### React/Vite Files (DELETE):

- `src/` (old React src)
- `public/vite.svg`
- `index.html`
- `vite.config.js`
- Old `package.json` and `package-lock.json`
- Old `tailwind.config.js`
- `eslint.config.js`
- Old component JSX files
- Old React assets

### Next.js Files (KEEP):

Everything in `nextjs-migration/`:

- `src/` (Next.js src with app router)
- `content/` (blog posts)
- `public/` (Next.js assets)
- `next.config.js`
- `tsconfig.json`
- `package.json` (Next.js version)
- `pnpm-lock.yaml`
- All documentation
- README.md

## Verification Checklist

After cleanup:

- [ ] Only Next.js files remain
- [ ] `git status` shows clean state
- [ ] `pnpm install` works
- [ ] `pnpm dev` starts successfully
- [ ] `pnpm build` completes without errors
- [ ] `.gitignore` is properly configured
- [ ] No large files in repo

## Repository Structure After Cleanup

### Option 1: Next.js at Root (Recommended)

```
ERP_Academy/
├── src/
├── content/
├── public/
├── docs/
├── next.config.js
├── package.json
├── README.md
└── ... (all Next.js files)
```

### Option 2: Next.js in Subfolder (Current)

```
ERP_Academy/
└── nextjs-migration/
    ├── src/
    ├── content/
    ├── public/
    └── ...
```

## Recommended Git Commit Message

```
refactor: complete migration to Next.js 15

- Removed legacy React/Vite codebase
- Next.js 15 with App Router is now the sole implementation
- Maintained all features and optimizations:
  - SEO optimizations (Lighthouse 100)
  - PWA support with manifest
  - Security headers (HSTS, CSP, XSS protection)
  - 28 blog posts with MDX support
  - Responsive design across all devices
  - Performance optimizations (WebP, code splitting)
- Repository structure cleaned and organized
- Comprehensive documentation in docs/ folder
- Production-ready for deployment

Breaking Changes: None (complete codebase replacement)
```

## Need Help?

If you encounter any issues:

1. Make sure you're in the correct directory
2. Check `git status` before committing
3. Verify the build works: `pnpm build`
4. Test locally: `pnpm dev`

---

**Ready to Proceed?** Run the commands above in PowerShell to clean up your repository!
