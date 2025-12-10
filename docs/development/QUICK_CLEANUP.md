# Quick Repository Cleanup - Manual Steps

## If You Want to Keep the Current Structure

Just remove old React files that might be at the parent level:

```powershell
cd C:\Users\nikhi\OneDrive\Desktop\SapERP2.0\ERP_Academy

# Check what's there
dir

# If you see old React files at root, remove them from git:
git rm -r --cached src/
git rm -r --cached public/vite.svg
git rm -r --cached public/robots.txt
git rm -r --cached public/sitemap.xml
git rm --cached index.html
git rm --cached vite.config.js
git rm --cached eslint.config.js

# Commit
git add .
git commit -m "chore: remove legacy React files, keep Next.js 15"
git push
```

## If You Want Next.js at Root (Recommended)

Run the automated script:

```powershell
cd C:\Users\nikhi\OneDrive\Desktop\SapERP2.0\ERP_Academy\nextjs-migration
.\cleanup-script.ps1
```

That's it! The script will handle everything.

## Verification After Cleanup

```powershell
# Test the build
pnpm build

# Run locally
pnpm dev

# Check git status
git status
```

## What You'll Have

```
ERP_Academy/
├── src/
├── content/
├── public/
├── docs/
├── next.config.js
├── package.json
├── README.md
└── ... (all Next.js files at root)
```

**Ready to go!** 🚀
