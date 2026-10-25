/* ============================================================
   Indra Bayu - Resume site interactions
   The page content lives in index.html so it reads with scripting off;
   this file only adds the year, the theme toggle, and the nav states.
   ============================================================ */

/* ---- Year in footer ---- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---- Theme toggle (persisted) ----
   With no saved choice the CSS follows prefers-color-scheme, so nothing is
   set here on load and there is no flash. localStorage can throw (Safari
   private mode, blocked storage); the toggle still works for the visit. */
(function theme() {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const KEY = "theme";
  const read = () => {
    try { return localStorage.getItem(KEY); } catch { return null; }
  };
  const save = (value) => {
    try { localStorage.setItem(KEY, value); } catch { /* not persisted this visit */ }
  };
  const stored = read();
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);
  btn?.addEventListener("click", () => {
    const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const current = root.getAttribute("data-theme") || (systemLight ? "light" : "dark");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    save(next);
  });
})();

/* ---- Sticky nav shadow ---- */
(function navShadow() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---- Active nav indicator (scroll spy) ---- */
(function navSpy() {
  const links = Array.from(document.querySelectorAll('.nav__links a[href^="#"]'));
  const entries = links
    .map((link) => ({ link, section: document.getElementById(link.getAttribute("href").slice(1)) }))
    .filter((e) => e.section);
  if (!entries.length) return;

  const nav = document.getElementById("nav");
  const SPY_MARGIN = 24; // a section counts as current once its top is just under the nav
  let queued = false;

  const update = () => {
    queued = false;
    // The nav is taller on phones (links wrap to a second row), so measure it.
    const OFFSET = (nav?.offsetHeight ?? 88) + SPY_MARGIN;
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
    // Last section whose top has crossed the offset line; bottom of page always wins.
    let active = atBottom ? entries[entries.length - 1] : null;
    if (!active) {
      for (const e of entries) {
        if (e.section.getBoundingClientRect().top <= OFFSET) active = e;
      }
    }
    entries.forEach((e) => e.link.classList.toggle("is-active", e === active));
  };

  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
})();
