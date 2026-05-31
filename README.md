# Indra Bayu | Resume Site

A fast, responsive, single-page resume site for **Indra Bayu**, Principal Solutions
Architect & AI Platform Leader. Built as a zero-dependency static site (plain
HTML/CSS/JS) so it deploys to **Cloudflare Pages** with no build step.

## Features

- Responsive single-page layout (hero, summary, competencies, experience timeline, education, contact)
- Light / dark theme toggle (respects system preference, persists choice)
- Animated stat counters and scroll-reveal sections
- Data-driven experience & skills (edit the arrays in `script.js`)
- Security headers via `_headers`, custom `404.html`
- Accessible: skip link, semantic landmarks, reduced-motion support

## Project structure

```
index.html      Main page (semantic structure + content)
styles.css      All styling and theming
script.js       Section rendering, theme toggle, animations
_headers        Cloudflare Pages security & cache headers
404.html        Custom not-found page
```

## Local preview

No tooling required. Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy to Cloudflare Pages

### Option A: Connect to Git (recommended)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages > Create > Pages > Connect to Git**.
3. Select this repository and branch.
4. Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
5. **Save and Deploy.** Every push redeploys automatically.

### Option B: Wrangler CLI (direct upload)

```bash
npm install -g wrangler
wrangler pages deploy . --project-name=indra-bayu-resume
```

## Editing content

- **Experience & skills:** edit the `EXPERIENCE` and `SKILLS` arrays in `script.js`.
- **Summary, contact, languages:** edit directly in `index.html`.
- **Colors & theme:** adjust the CSS variables at the top of `styles.css`.
