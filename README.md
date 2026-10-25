# Indra Bayu | Resume Site

A fast, responsive, single-page resume site for **Indra Bayu**, Senior Manager,
Solutions Architect. Built as a zero-dependency static site (plain
HTML/CSS/JS) so it deploys to **Cloudflare Pages** with no build step.

Positioning: targeting enterprise transformation roles under **Saudi Vision 2030**.

Design: third pass on 25 Oct 2026, a **lean CV** layout chosen after two
[Hallmark](https://github.com/nutlope/hallmark) themes (Almanac, then Lumen) were rejected as
too plain and too stylised. The earlier [anti-slop](https://github.com/miqdadbadjuber/anti-slop)
audit is kept in `anti-slop/` for history.

Design read: clean, lean, professional, for Saudi hiring managers and recruiters on desktop
and phone. One centred column (720px), each section a row with a small label on the left in
the read.cv manner, Geist throughout with Geist Mono for dates, near-white paper and one
green accent used only for the status dot, link hovers, "show more" and focus.

## Features

- **Summary / Detailed views**: a two-way switch under the figures. Summary (the default)
  shows the intro, one line per role, the four competencies, the degree and contact;
  Detailed adds the full summary prose, every role point, "Also own", the stack,
  continuous learning and languages. `?view=detailed` opens the full CV and is kept in the
  URL so either view can be shared; Save as PDF prints the view on screen. Blocks carry
  `data-only="summary"` or `data-only="detailed"`; with scripting off the detailed CV shows.
- **Intro**: initials avatar, name, title, a "Jakarta, open to relocate to Saudi Arabia"
  status pill, the one-paragraph pitch, then actions (mailto, LinkedIn, Save as PDF) and the
  four figures (14, 6M, 600+, 300M+). The intro rises in once on load; nothing loops.
- **About**: the summary prose, with the Vision 2030 line marked by the accent rule.
- **Experience**: one entry per role (role, dates, org, context, points). The current role
  shows four points and folds the other seven under "Show 7 more" (a native `<details>`,
  opened automatically for print).
- **Expertise**: the four areas as cards with their proof, then "Also own" as tags.
- **Stack**: four groups of tags. **Education**, languages and **contact** as label/value pairs.
- **All content is static HTML**, so the page reads fully with scripting off.
  `script.js` only sets the footer year, the theme toggle, the views, the nav states, and print.
- **Top bar**: sticky, blurred, with section links (swipeable on phones), scroll spy,
  and the name fading in once you scroll past the intro.
- Light by default, dark follows the system in pure CSS; the toggle saves an override in `data-theme`
- **Print / save as PDF**: the button calls `window.print()`; no nav or buttons, every point printed
- Security headers via `_headers`, custom `404.html`
- Accessible: skip link, semantic landmarks, focus rings, reduced-motion support

## Design tokens

- `tokens.css`: colour, type and spacing tokens, then the dark block (declared twice:
  `:root[data-theme="dark"]` and `@media (prefers-color-scheme: dark)`; keep them in sync),
  then the print block.
- `base.css`: base rules (box sizing, overflow clip, focus ring, reduced motion).
- `styles.css`: the page. No literal colours or font families past the token files.

| Token | Light | Used for |
|-------|-------|----------|
| `--color-paper` | near-white `oklch(99.4% 0.002 160)` | page ground |
| `--color-surface` | `oklch(97.6% 0.003 160)` | figures strip, tags, hovers |
| `--color-ink` | `oklch(21% 0.01 160)` | text and the primary button |
| `--color-accent` | green `oklch(50% 0.11 160)` | status dot, primary hover, "show more", focus |

## Project structure

```
index.html      Main page (all content, static)
styles.css      Page styling; the design note is its first comment
tokens.css      Colour, type, and spacing tokens (light, dark, print)
base.css        Base rules from the Hallmark scaffold
script.js       Footer year, theme toggle, summary/detailed views, sticky-nav state, scroll spy, print
_headers        Cloudflare Pages security & cache headers
404.html        Custom not-found page
```

## Local preview

No tooling required. Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Note: `_headers` is applied by Cloudflare Pages, not by the local server, so the CSP is
not exercised in local preview. The CSP is `script-src 'self'`: keep all JS in
`script.js` and avoid inline `<script>` or third-party script tags.

## Verification

There is no test runner (zero-dependency, no build step). Changes are checked with
Hallmark's linter in headless Chrome, against a local server:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
node <hallmark>/skills/hallmark/scripts/sloplint.mjs index.html --genre editorial --render --url http://127.0.0.1:4173/
```

It needs `puppeteer-core` (`HALLMARK_PUPPETEER=<dir with node_modules>`) and Chrome.
`.hallmark/` holds its screenshots and records and is git-ignored. Result on the
lean CV pass is recorded in the commit that shipped it. Words-per-screen reports as a note because a
redesign keeps the owner's words.

Also check by hand: light and dark (the toggle flips `data-theme` and persists), 320 to 1920
with no horizontal scroll, reduced motion, and print to PDF.

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

- **Everything** (hero, summary, competencies, stack, experience, education, contact):
  edit directly in `index.html`.
- **Colors & type:** the tokens in `tokens.css` (light, dark, and print blocks).
- **Asset caching:** `index.html` links `styles.css` and `script.js` with a `?v=N`
  query string, `404.html` links `styles.css` the same way, and `styles.css` imports
  `tokens.css` and `base.css` with the same `?v=N`. Bump `N` in **all five** places when
  shipping style or script changes so the Cloudflare edge cache serves fresh assets.
  Currently `v=8`.
