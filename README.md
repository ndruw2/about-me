# Indra Bayu | Resume Site

A fast, responsive, single-page resume site for **Indra Bayu**, Principal Solutions
Architect & AI Platform Leader. Built as a zero-dependency static site (plain
HTML/CSS/JS) so it deploys to **Cloudflare Pages** with no build step.

Positioning: enterprise digital transformation for **Saudi Vision 2030**.

## Features

- Responsive single-page layout: hero, summary, competencies, tech stack, experience timeline, education, contact
- **Amber/gold accent** (`--accent: #D4A84B`) on CTA buttons, the active nav indicator, and section dividers,
  layered over a cool brand blue (`--brand`) used for identity and gradients
- **Big hero stats** (3rem, bold) with an amber underline and animated counters
- **Competency cards** — 16 four-column icon cards with hover glow and lift
- **Tech stack badges** — pill badges grouped by Cloud & Infrastructure, Data & AI, Backend & Platform,
  Security & Compliance
- **Career timeline** — vertical timeline with amber dots and a connecting gradient line
- **Micro-interactions** — hover scale on cards and badges, smooth scroll, staggered fade-in on scroll,
  scroll-spy active nav
- **Vision 2030 positioning** — hero subtitle reads "Enterprise Digital Transformation for **Saudi Vision 2030**";
  both primary CTAs read "Open to Saudi Arabia roles → Let's talk" and open a pre-subjected mailto
- Light / dark theme toggle (respects system preference, persists choice)
- Data-driven content (edit the arrays in `script.js`)
- Security headers via `_headers`, custom `404.html`
- Accessible: skip link, semantic landmarks, visible focus rings, reduced-motion support

## Design tokens

Two accent layers, both defined at the top of `styles.css` and overridden under
`:root[data-theme="light"]`:

| Token | Dark | Light | Used for |
|-------|------|-------|----------|
| `--accent` | `#d4a84b` | `#c08f2a` | CTA fill, nav indicator, section dividers, timeline dots |
| `--accent-text` | `#d4a84b` | `#8a6410` | Accent-colored text (kickers, eyebrow) at readable contrast |
| `--brand` / `--brand-2` | `#38bdf8` / `#818cf8` | `#0284c7` / `#4f46e5` | Identity gradient on the hero title |
| `--text-dim` | `#778aad` | `#606f86` | Small supporting text (stat labels, section notes, metadata) |

`--accent-text` is a deeper gold in the light theme so gold-on-white text still clears
WCAG AA. Fills and borders keep the brighter `--accent`.

`--text-dim` is tuned so the smallest text on the page still clears 4.5:1 against every
surface it sits on (`--bg`, `--bg-alt`, `--surface`, `--surface-2`) in both themes.
If you darken a surface token, re-check this pair.

## Icons

Competency icons are [Lucide](https://lucide.dev) paths **inlined as SVG strings** in
`script.js` (`ICON_PATHS`). No CDN, no npm — the `_headers` CSP is `script-src 'self'`,
so a third-party icon script would be blocked anyway.

To add an icon: copy the inner markup of the Lucide SVG into `ICON_PATHS`, then reference
the key from `SKILLS`. The `icon()` helper supplies the `<svg>` wrapper
(24×24 viewBox, `stroke="currentColor"`, `stroke-width="1.75"`).

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
not exercised in local preview. The CSP is `script-src 'self'` — keep all JS in
`script.js` and avoid inline `<script>` or third-party script tags.

## Verification

There is no test runner (zero-dependency, no build step). Changes are checked in headless
Chrome over the Chrome DevTools Protocol:

- **No console errors** — `console.error`/`console.warn`, uncaught exceptions, and failed
  network requests all at zero on `index.html` and `404.html`, after scrolling the full
  page to trigger every `IntersectionObserver`.
- **Responsive** — 320, 375, 768, 1024, 1440, 1920. No horizontal overflow at any width;
  the competency grid steps 4 -> 3 -> 2 -> 1 column.
- **Both themes** — toggle flips `data-theme`, persists to `localStorage`, and swaps the
  sun/moon icons.
- **Reduced motion** — under `prefers-reduced-motion: reduce`, reveals render at full
  opacity with no transition, counters jump straight to their final values, and smooth
  scroll falls back to `auto`.
- **Contrast** — every foreground/background token pair is checked against WCAG AA (4.5:1).

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
  assets. Currently `v=3`.
