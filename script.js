/* ============================================================
   Indra Bayu - Resume site interactions
   The page content lives in index.html so it reads with scripting off;
   this file only adds the year, the theme toggle, the summary/detailed views,
   the nav states, and print.
   ============================================================ */

/* Marks that scripting runs, so script-only states (the top-bar name) can hide safely. */
document.documentElement.classList.add("js");

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
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") || (systemDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    save(next);
  });
})();

/* ---- Summary / detailed views ----
   Summary is the default; ?view=detailed opens the full CV and is kept in the URL
   so either view can be shared. Print follows whichever view is on screen. */
(function views() {
  const root = document.documentElement;
  const VIEWS = ["summary", "detailed"];
  const fromUrl = new URLSearchParams(window.location.search).get("view");
  const switcher = document.querySelector("[data-view-switch]");

  const apply = (view, { push = false } = {}) => {
    root.setAttribute("data-view", view);
    document.querySelectorAll(".view__btn").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.setView === view));
    });
    if (push) {
      const url = new URL(window.location.href);
      if (view === "detailed") url.searchParams.set("view", "detailed");
      else url.searchParams.delete("view");
      history.replaceState(null, "", url);
    }
    window.dispatchEvent(new Event("viewchange"));
  };

  apply(VIEWS.includes(fromUrl) ? fromUrl : "summary");
  if (switcher) switcher.hidden = false;
  document.querySelectorAll("[data-set-view]").forEach((el) => {
    el.hidden = false;
    el.addEventListener("click", () => {
      apply(el.dataset.setView, { push: true });
      const target = el.dataset.scroll && document.getElementById(el.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

/* ---- Sticky nav shadow ---- */
(function navShadow() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 160);
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
        if (!e.section.offsetParent) continue; // hidden in the current view
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
  window.addEventListener("viewchange", onScroll);
})();

/* ---- Print / save as PDF ----
   The button ships hidden so it never shows without scripting. Collapsed
   details are opened for print so the PDF carries every point. */
(function print() {
  const btn = document.querySelector("[data-print]");
  if (btn) {
    btn.hidden = false;
    btn.addEventListener("click", () => window.print());
  }
  const opened = [];
  window.addEventListener("beforeprint", () => {
    document.querySelectorAll("details:not([open])").forEach((d) => { d.open = true; opened.push(d); });
  });
  window.addEventListener("afterprint", () => {
    opened.splice(0).forEach((d) => { d.open = false; });
  });
})();
