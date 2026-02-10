# StackBlitz + GitHub recovery guide for `ethnicmedia.ca`

From your screenshot, StackBlitz is failing on:

- `npm ERR! code EJSONPARSE`
- `Invalid package.json`

That means your repository opens, but dependency install fails because `package.json` is not valid JSON.

## 1) Fix `package.json` in GitHub first

Open your GitHub repo and edit `package.json` directly.

Common issue (visible in your terminal output): dependencies were saved with escaped quotes/newlines like this:

```json
"react": "^18.2.0"\n "gsap": "^3.12.2"\n ...
```

That is invalid JSON. Use proper JSON only.

Example React app `package.json` that StackBlitz can run:

```json
{
  "name": "newethnicmedia",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "gsap": "^3.12.2"
  }
}
```

If you use Tailwind, make sure these are also valid (if present):

- `postcss.config.js`
- `tailwind.config.js`

## 2) Re-open in StackBlitz correctly

Use one of these:

- `https://stackblitz.com/github/<your-user>/<your-repo>`
- In StackBlitz dashboard: **Import Repository** → paste GitHub URL

After opening:

1. Wait for WebContainer boot.
2. Run `npm install`.
3. Run `npm start` (or `npm run dev` if Vite).

## 3) If install still fails

In StackBlitz terminal run:

```bash
cat package.json
node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('package.json is valid JSON')"
```

If JSON parse fails, fix syntax (missing commas, trailing commas, stray `\n`, smart quotes, etc.).

## 4) Minimal React file structure to verify

Make sure your repo has at least:

- `package.json`
- `public/index.html`
- `src/index.js`
- `src/App.js`

If these are missing/corrupt, create a fresh StackBlitz React project and copy your source files into it, then reconnect GitHub.

## 5) Recommended clean workflow

1. Clone repo locally (or open in Codespaces).
2. Validate with `npm install` + `npm run build`.
3. Push to GitHub.
4. Open the same commit in StackBlitz.

This avoids committing malformed `package.json` content from browser copy/paste glitches.
