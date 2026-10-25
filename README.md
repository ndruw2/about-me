# Indra Bayu | Resume Site

A fast, responsive, single-page resume site for **Indra Bayu**, Senior Manager,
Solutions Architect. Built as a zero-dependency static site (plain
HTML/CSS/JS) so it deploys to **Cloudflare Pages** with no build step.

Positioning: targeting enterprise transformation roles under **Saudi Vision 2030**.

Design: rebuilt on 25 Oct 2026 (Lumen pass) with [Hallmark](https://github.com/nutlope/hallmark)
(`/hallmark redesign`, full depth). The decisions are stamped in the first comment lines
of `styles.css`. The earlier [anti-slop](https://github.com/miqdadbadjuber/anti-slop)
audit is kept in `anti-slop/` for history.

Design read: single-page executive resume for Saudi hiring managers and recruiters,
desktop and phone. Theme **Lumen** (chosen 25 Oct 2026 after the first pass, Almanac, was
rejected as too plain): a violet-black night ground, near-white ink, lowercase Instrument
Serif heads over Geist, figures and readouts in Geist Mono, hairline wells, a faint
blueprint grid, one brass signal and one rose verb ("hold") in the hero.
Shape **Map / Diagram**: the hero draws the two platform paths I own (an order through the
edge, operational events into the AI platform); the sections below prove each node.

## Features

- **Hero**: the path diagram as the field, then the name, the head and the mailto action.
  The brass connector draws in once on load; nothing loops.
- **About**: the platform as a console readout (6M, 600+, ~2M, 300M+, 15, −20%, and what
  held in production) beside the summary prose.
- **Competencies**: a bento of the four areas with their proof (24M+, Q1 2026, the
  UU PDP → PDPL / NCA ECC map), then "also own" as tags.
- **Tech stack**: rate-card rows, area per row, technologies as mono tags.
- **Experience**: one hairline row per role (dates, meta, points). The current role's
  meta stays in view while its points scroll.
- **Contact**: a message well (to, subject, the mailto) beside email, phone, LinkedIn, location.
- **All content is static HTML**, so the page reads fully with scripting off.
  `script.js` only sets the footer year, the theme toggle, and the nav states.
- **One CTA label**: "Email me about a Saudi role" (pre-subjected mailto), in the hero and the close
- **Phone nav**: under 60rem the pill wraps and the section links become a swipeable strip
- Theme: night by default; the toggle switches to the `day` drop (`data-theme="light"`) and saves it
- **Print / save as PDF**: near-white stock, no nav or buttons, nothing sticky, rows kept whole
- Security headers via `_headers`, custom `404.html`
- Accessible: skip link, semantic landmarks, focus rings, reduced-motion support

## Design tokens

- `tokens.css`: Lumen night tokens and the shared spacing and type scale, then the `day`
  drop under `:root[data-theme="light"]`, then the print block.
- `base.css`: base rules from the Hallmark scaffold (overflow clip, focus ring,
  heading measures, reduced motion).
- `styles.css`: the page. No literal colours or font families past the token files.

| Token | Night | Used for |
|-------|-------|----------|
| `--color-paper` | violet-black `oklch(12.5% 0.027 290)` | page ground |
| `--color-paper-2` | `oklch(16% 0.03 290)` | wells, console, tiles |
| `--color-accent` | brass `oklch(80% 0.15 62)` (day: indigo) | primary button, the order path, focus ring |
| `--color-accent-2` | rose `oklch(72% 0.15 12)` | the one verb in the hero head only |
| `--color-live` | green `oklch(80% 0.13 155)` | live states and "held" results |

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
node <hallmark>/skills/hallmark/scripts/sloplint.mjs index.html --genre atmospheric --render --url http://127.0.0.1:4173/
```

It needs `puppeteer-core` (`HALLMARK_PUPPETEER=<dir with node_modules>`) and Chrome.
`.hallmark/` holds its screenshots and records and is git-ignored. Result on the
Lumen pass: 0 FAIL, 0 REFLEX, 0 WARN. Words-per-screen reports as a note because a
redesign keeps the owner's words.

Also check by hand: night and day (the toggle flips `data-theme` and persists), 320 to 1920
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
- **Colors & type:** the tokens in `tokens.css` (night, day, and print blocks).
- **Asset caching:** `index.html` links `styles.css` and `script.js` with a `?v=N`
  query string, `404.html` links `styles.css` the same way, and `styles.css` imports
  `tokens.css` and `base.css` with the same `?v=N`. Bump `N` in **all five** places when
  shipping style or script changes so the Cloudflare edge cache serves fresh assets.
  Currently `v=6`.
