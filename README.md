# Indra Bayu | Resume Site

A fast, responsive, single-page resume site for **Indra Bayu**, Senior Manager,
Solutions Architect. Built as a zero-dependency static site (plain
HTML/CSS/JS) so it deploys to **Cloudflare Pages** with no build step.

Positioning: targeting enterprise transformation roles under **Saudi Vision 2030**.

Design: rebuilt on 25 Oct 2026 with [Hallmark](https://github.com/nutlope/hallmark)
(`/hallmark redesign`, full depth). The decisions are stamped in the first comment lines
of `styles.css`. The earlier [anti-slop](https://github.com/miqdadbadjuber/anti-slop)
audit is kept in `anti-slop/` for history.

Design read: single-page executive resume for Saudi hiring managers and recruiters,
desktop and phone. Theme **Almanac**: the career set as a printed reference book, with
cool slate stock, blue-black ink, Hanken Grotesk heads over Newsreader prose, figures in
IBM Plex Mono, two rule weights, square corners, and one deep magenta kept under 5% of a screen.
Shape **Conversational FAQ**: every section head is a recruiter's question
("What do you run today?"), answered in first person.

## Features

- **Hero**: name, one line, the mailto action, and the four platform figures set as a
  printed table (the "record" sheet). Static numbers, no count-up.
- **Competencies**: the four primary areas as a numbered list of rows, each with one line
  of evidence, then the "Also own" list in three columns. No icons.
- **Tech stack**: one printed table, area per row, only technologies run in production.
- **Experience**: one row per role, with the meta (dates, role, org, context) on the left
  and the points on the right. The current role's meta stays in view while its points scroll.
- **All content is static HTML**, so the page reads fully with scripting off.
  `script.js` only sets the footer year, the theme toggle, and the nav states.
- **One CTA label** in both places: "Email me about a Saudi role" (pre-subjected mailto)
- **Phone nav**: under 60rem the section links become a swipeable strip under the name
  (no hamburger); the toggle is a 44px tap target
- Light / dark theme: light by default, dark follows the system in pure CSS; the toggle
  saves an override in `data-theme`
- **Print / save as PDF**: near-white stock, no nav or buttons, nothing sticky, rows kept whole
- **Motion**: state changes only (hover, press, underline). Nothing fades in.
- Security headers via `_headers`, custom `404.html`
- Accessible: skip link, semantic landmarks, instant focus rings, reduced-motion support

## Design tokens

- `tokens.css`: Almanac colour and type tokens plus the shared spacing and type scale,
  then the dark block (declared twice: `:root[data-theme="dark"]` and
  `@media (prefers-color-scheme: dark)`; keep them in sync), then the print block.
- `base.css`: base rules from the Hallmark scaffold (overflow clip, focus ring,
  heading measures, reduced motion).
- `styles.css`: the page. No literal colours or font families past the token files.

| Token | Light | Used for |
|-------|-------|----------|
| `--color-paper` | slate `oklch(84% 0.012 245)` | page ground |
| `--color-sheet` | pale `oklch(93.5% 0.008 245)` | the printed tables (hero record, stack) |
| `--color-accent` | magenta `oklch(45% 0.18 350)` | primary button, link underlines, the one marked row |
| `--color-band` | ink | footer mast (re-derived darker in dark mode) |

## Project structure

```
index.html      Main page (all content, static)
styles.css      Page styling; the Hallmark stamp is its first comment
tokens.css      Colour, type, and spacing tokens (light, dark, print)
base.css        Base rules from the Hallmark scaffold
script.js       Footer year, theme toggle, sticky-nav state, scroll spy
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
`.hallmark/` holds its screenshots and records and is git-ignored. Result at the
redesign: 0 FAIL, 0 REFLEX (before: 15 FAIL, 10 REFLEX), 12/12 links kept. The
words-per-screen gate reports as a note because a redesign keeps the owner's words.

Also check by hand: both themes (the toggle flips `data-theme` and persists), 320 to 1920
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
  Currently `v=5`.
