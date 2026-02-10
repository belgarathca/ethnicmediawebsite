# Ethnic Media Canada Website (Production-ready rebuild)

This repository contains a clean rebuild of the `ethnicmedia.ca` website as a Vite + React app that can be deployed on **Netlify** or **Vercel**.

## Why this rebuild

Your previous repository could not run because `package.json` was malformed JSON, which breaks installs in StackBlitz/Netlify/Vercel.
This rebuild provides a validated, deployable structure.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- GSAP (light entrance animation)

## Local development

```bash
npm install
npm run dev
```

## Production build check

```bash
npm run build
npm run preview
```

## Deploy to Netlify

1. Create a new Netlify site from this GitHub repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The included `netlify.toml` already handles SPA redirects.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Framework preset: Vite (auto-detected)
3. Build command: `npm run build`
4. Output directory: `dist`
5. The included `vercel.json` handles SPA rewrites.

## Environment variables

Copy `.env.example` to `.env` and customize as needed:

- `VITE_CONTACT_EMAIL`
- `VITE_PHONE`

## Creating a brand new GitHub repository

If you want this as a **new** repo (recommended), do this locally:

```bash
git clone <this-repo-url>
cd <repo>
# optional: remove old git history and re-init
rm -rf .git
git init
git add .
git commit -m "Initial production-ready ethnicmedia.ca rebuild"
git branch -M main
git remote add origin https://github.com/<your-user>/<new-repo>.git
git push -u origin main
```

If you want, I can also prepare a migration checklist to copy over your original content/text/images section by section.
