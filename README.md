# Indra Bayu | Resume Site

A fast, responsive, single-page resume site for **Indra Bayu**, Principal Solutions
Architect & AI Platform Leader. Built as a zero-dependency static site (plain
HTML/CSS/JS) so it deploys to **Cloudflare Pages** with no build step.

Positioning: targeting enterprise transformation roles under **Saudi Vision 2030**.

Design is held to the [anti-slop](https://github.com/miqdadbadjuber/anti-slop) ruleset.
The latest audit and the decisions behind it live in `anti-slop/`.

Design Read: single-page executive resume for Saudi hiring managers and recruiters,
desktop and phone, in a restrained corporate-editorial language (navy, one gold accent,
Sora display over Inter). Dials: ENERGY 2 / RHYTHM 2 / MOTION 1.

## Features

- Responsive single-page layout: hero, summary, competencies, tech stack, experience timeline, education, contact
- **One amber/gold accent** (`--accent`), used only on the CTA fill, the active nav link,
  the career timeline, and the section numerals. Everything else is neutral, so those
  four read as the important moments.
- **Hero stats** as static numbers (no count-up: a screenshot or PDF always shows the real value)
- **Competencies**: four primary areas as cards, each with one line of evidence from the
  timeline, followed by a plain "Also own" list of the supporting areas
- **Tech stack** as plain labels grouped by Cloud & Infrastructure, Data & AI, Backend & Platform,
  Security & Compliance. Only technologies run in production; self-study topics live under Education.
- **Career timeline**: vertical line with amber dots
- **Motion**: hover feedback on clickable things only (buttons, contact links, nav, toggle),
  smooth scroll, scroll-spy active nav. Nothing fades in, so content is readable on first paint.
- **One CTA label** in both places: "Email me about a Saudi role" (pre-subjected mailto)
- **Phone nav**: at 760px and below the section links become a swipeable strip under the brand
  (no hamburger, no JS); every nav link and the toggle are 44px tap targets
- Light / dark theme: follows the system in pure CSS (no flash on load); the toggle saves an override
- **Print / save as PDF**: light tokens, no nav or buttons, cards kept on one page
- Data-driven content (edit the arrays in `script.js`)
- Security headers via `_headers`, custom `404.html`
- Accessible: skip link, semantic landmarks, visible focus rings, reduced-motion support

## Design tokens

Defined at the top of `styles.css`. Light values appear twice, under
`@media (prefers-color-scheme: light)` and under `:root[data-theme="light"]`; keep them in sync.

| Token | Dark | Light | Used for |
|-------|------|-------|----------|
| `--accent` | `#d4a84b` | `#c08f2a` | CTA fill, active nav underline, timeline line and dots |
| `--accent-text` | `#d4a84b` | `#8a6410` | Section numerals, the brand dot |
| `--brand` | `#38bdf8` | `#0284c7` | Hero title, primary competency icons, hero atmosphere |
| `--text-dim` | `#778aad` | `#606f86` | Small supporting text (stat labels, section notes, metadata) |

`--accent-text` is a deeper gold in the light theme so gold-on-white text still clears
WCAG AA. Fills and borders keep the brighter `--accent`.

`--text-dim` is tuned so the smallest text on the page still clears 4.5:1 against every
surface it sits on (`--bg`, `--bg-alt`, `--surface`, `--surface-2`) in both themes.
The tightest pairs are 4.53:1 (dark, on `--surface-2`) and 4.54:1 (light, on `--bg-alt`).
If you darken a surface token, re-check them.

## Icons

Only the four primary competencies have icons: [Lucide](https://lucide.dev) paths
**inlined as SVG strings** in `script.js` (`ICON_PATHS`). No CDN, no npm: the `_headers`
CSP is `script-src 'self'`, so a third-party icon script would be blocked anyway.
Each glyph is chosen for what the area does (layers = architecture tiers, shield =
security, rising line = forecasting, lock = data protection); the reason sits next to it.

To add one, copy the inner markup of the Lucide SVG into `ICON_PATHS` and reference the
key from `PRIMARY_SKILLS`. The supporting list deliberately has no icons.

## Project structure

```
index.html      Main page (semantic structure + content)
styles.css      All styling and theming
script.js       Content data, section rendering, theme toggle, scroll spy, animations
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

There is no test runner (zero-dependency, no build step). Changes are checked in headless
Chrome over the Chrome DevTools Protocol:

- **No console errors**: `console.error`/`console.warn`, uncaught exceptions, and failed
  network requests all at zero on `index.html` and `404.html`, in both color schemes.
- **Responsive**: 320, 375, 768, 1024, 1440, 1920. No horizontal overflow at any width;
  the primary competencies step 2 -> 1 column; every nav link is 44px tall.
- **Both themes**: toggle flips `data-theme`, persists to `localStorage`, and swaps the
  sun/moon icons.
- **Reduced motion**: under `prefers-reduced-motion: reduce`, transitions and hover lifts
  are off and smooth scroll falls back to `auto`.
- **Print**: save as PDF and check that every section renders on the light palette.
- **Contrast**: every foreground/background token pair is checked against WCAG AA (4.5:1).

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

- **Experience, competencies, tech stack:** edit the `EXPERIENCE`, `SKILLS`, and
  `TECH_STACK` arrays in `script.js`.
- **Summary, contact, languages, hero copy:** edit directly in `index.html`.
- **Colors & theme:** adjust the CSS variables at the top of `styles.css`.
- **Asset caching:** `index.html` links `styles.css` and `script.js` with a `?v=N`
  query string, and `404.html` links `styles.css` the same way. Bump `N` in **all three**
  places when shipping style or script changes so the Cloudflare edge cache serves fresh
  assets. Currently `v=4`.
