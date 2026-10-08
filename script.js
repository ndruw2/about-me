/* ============================================================
   Indra Bayu - Resume site interactions & data
   ============================================================ */

/* ---- Lucide icons (inlined: the CSP blocks third-party scripts,
        and the site stays zero-dependency / no build step).
        Only the four primary competencies carry an icon; each glyph was
        picked for what the area protects or produces, not for looks. ---- */
const ICON_PATHS = {
  // stacked layers: architecture across POS, commerce, data, and AI tiers
  layers:
    '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  "shield-check":
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  // rising line: the AI platform's first production use is forecasting
  "trending-up":
    '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  lock:
    '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
};

const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${
    ICON_PATHS[name] || ""
  }</svg>`;

/* ---- Core competencies: the four areas the role is hired for, each with
        one line of evidence from the timeline, then the supporting work. ---- */
const PRIMARY_SKILLS = [
  {
    icon: "layers",
    title: "Enterprise solutions architecture",
    proof: "Architecture owner for POS, e-commerce, mobile, CRM, contact center, and the data warehouse at PZZA.",
  },
  {
    icon: "shield-check",
    title: "Production cybersecurity architecture",
    proof: "WAF, DDoS mitigation, SIEM, pentest cycle, IAM, and IR runbooks across 24M+ transactions a year.",
  },
  {
    icon: "trending-up",
    title: "AI / ML platform",
    proof: "Launched PZZA's first production AI platform in Q1 2026: an operations chatbot plus sales and inventory forecasting.",
  },
  {
    icon: "lock",
    title: "Data protection compliance",
    proof: "Brought every consumer-facing system into UU PDP compliance, a framework that maps onto Saudi PDPL and NCA ECC.",
  },
];

const SUPPORTING_SKILLS = [
  "Omnichannel & e-commerce platforms",
  "Data warehouse & ML pipelines",
  "Cloud architecture (AWS, Azure, GCP)",
  "iOS & Android platforms",
  "Microservices & event-driven design",
  "DevOps, CI/CD & FinOps",
  "API gateway & system integration",
  "Offline-first POS at national scale",
  "IoT / MQTT real-time streaming",
  "Vendor & cross-functional leadership",
  "P&L and country-level operations",
];

/* ---- Technology stack ---- */
const TECH_STACK = [
  {
    group: "Cloud & Infrastructure",
    items: [
      "GCP", "AWS", "Azure", "Kubernetes", "Docker", "Terraform",
      "Cloudflare", "CI/CD", "Linux",
    ],
  },
  {
    group: "Data & AI",
    items: [
      "BigQuery", "Kafka", "MQTT", "Airflow", "LangGraph", "Vertex AI",
      "Python", "Looker Studio",
    ],
  },
  {
    group: "Backend & Platform",
    items: [
      "Go", "Node.js", "PostgreSQL", "MySQL", "Redis", "REST & gRPC",
      "API Gateway", "iOS & Android",
    ],
  },
  {
    group: "Security & Compliance",
    items: [
      "WAF & DDoS", "SIEM", "Zero Trust / SASE", "IAM", "Secrets Management",
      "Pentest Cycle", "UU PDP",
    ],
  },
];

/* ---- Professional experience ---- */
const EXPERIENCE = [
  {
    period: "Apr 2022 - Present",
    role: "Senior Manager, Solutions Architect",
    org: "PT Sarimelati Kencana Tbk (Pizza Hut Indonesia, IDX: PZZA)",
    context:
      "IDX-listed national F&B leader, YUM! International franchisee. 600+ outlets across 36 provinces, ~6M monthly customers, ~4,400 staff. Reports to CTO. Leads 15 engineers within a 45-person Technology function. Cloud: GCP (current), AWS (prior).",
    points: [
      "Architecture owner for the full technology stack: two-site VoIP contact center, offline POS across 600+ outlets, cloud POS with failover, the e-commerce platform (pizzahut.co.id), iOS and Android apps, CRM, factory and supply chain integration, the enterprise data warehouse, and the AI platform. The whole stack handles roughly 2M digital orders and 300M+ API requests a month for 6M customers.",
      "Designed a two-site VoIP contact center (Jakarta and Solo Raya) with active-passive database replication so support holds steady during a site failure: agents keep the same call context, no dropped tickets, no manual reconciliation.",
      "Launched the AI platform in Q1 2026: internal AI chatbot for operations team and ML models for sales and inventory forecasting on a unified data platform ingesting via real-time streaming (MQTT order events, driver GPS telemetry) and batch pipelines. First AI deployment to production at PZZA.",
      "Built real-time driver tracking using MQTT-based IoT event streaming from the driver app into the customer order tracker, giving customers live GPS visibility of their delivery.",
      "Own the production security architecture: edge WAF and DDoS mitigation, SIEM monitoring, a regular pentest cycle, IAM hardening, secrets management, and rehearsed IR runbooks. The platform held up against real DDoS and phishing attempts with no breach across 24M+ annual transactions.",
      "Leading the POC and vendor evaluation for SASE across the enterprise network, assessing Cloudflare One and FortiSASE against zero-trust access, cloud-delivered security, and SD-WAN requirements.",
      "Brought the platform into UU PDP compliance across every consumer-facing system (data classification, consent flows, retention, breach response). The same framework lifts cleanly onto Saudi PDPL and NCA ECC.",
      "Cut cloud infrastructure spend by 20% through architecture changes, right-sizing, and reserved capacity, with no SLA degradation through peak ordering periods.",
      "Designed the offline-first POS with local server failover and cloud sync so no transaction is lost when connectivity drops. That design has held across 600+ stores.",
      "Delivered a real-time inventory and COGS visibility platform, moving the business from end-of-day to intraday cost visibility to support margin management.",
      "Lead the 15-person team across architecture, integration, mobile, web, and data. Delivery runs on Agile; service management aligns to ITILv4 (incident, change, problem).",
    ],
  },
  {
    period: "Jul 2018 - Mar 2022",
    role: "Country Director & Solutions Architect",
    org: "DIQIT Business Solutions (Singapore HQ)",
    context:
      "Regional digital solutions firm. Cloud POS platform across 1,000+ stores in Japan, Indonesia, Singapore, and Vietnam. Indonesia operations acquired by PT Sarimelati Kencana Tbk in 2022.",
    points: [
      "Scaled DIQIT Indonesia from zero, owning country P&L, client acquisition, solutions architecture, and a 10-person delivery team across the full requirements-to-release cycle for retail and F&B clients.",
      "Delivered cloud POS and e-commerce to Indonesian clients, contributing to the platform's 1,000+ store footprint across four APAC markets.",
      "Part of the DIQIT Indonesia team brought across in the 2022 acquisition, transitioning into the Senior Manager Solutions Architect role at PZZA to lead the technology integration.",
    ],
  },
  {
    period: "Sep 2016 - Jul 2018",
    role: "Scrum Master & Product Owner",
    org: "We Are Definite · Datanest",
    context:
      "Digital product agency (We Are Definite) and AI/data analytics startup (Datanest). Client-facing product delivery across Indonesia.",
    points: [
      "Shipped digital.dompetdhuafa.org for Dompet Dhuafa, Indonesia's largest Islamic philanthropy organization, wearing three hats (product manager, scrum master, DevOps lead) from discovery through live.",
      "Ran multiple concurrent client product builds through discovery, backlog, sprints, and release. Picked up hands-on data and AI exposure at Datanest that made the later PZZA AI platform feel familiar.",
    ],
  },
  {
    period: "Jun 2015 - Sep 2016",
    role: "E-Commerce Platform Architect & Business Analyst",
    org: "PT Mitra Adiperkasa Tbk (MAP, IDX: MAPI)",
    context:
      "Indonesia's #1 lifestyle retailer, IDX-listed. 150+ international brands, 2,000+ retail stores.",
    points: [
      "Designed and built the e-commerce platform that became MAPClub.com, MAP's loyalty and commerce platform, covering business analysis, system analysis, architecture, and delivery.",
      "Worked on omnichannel integration across MAP's multi-brand estate, an early look at the patterns I now use daily at PZZA.",
    ],
  },
  {
    period: "Jan 2013 - Mar 2015",
    role: "IT Application Specialist",
    org: "PT Gramedia Media Nusantara (KOMPAS TV / Kompas Gramedia Group)",
    context:
      "National free-to-air broadcaster, part of Kompas Gramedia (Indonesia's largest media conglomerate).",
    points: [
      "Supported and enhanced enterprise broadcast and corporate applications for a national media group reaching millions of viewers.",
    ],
  },
  {
    period: "Feb 2011 - Feb 2012",
    role: "IT Web Developer (earlier roles)",
    org: "PT Priamanaya Djan International · PT Kustodian Sentral Efek Indonesia (KSEI)",
    context:
      "Priamanaya (EPC/property): project management and a mini-ERP build. KSEI internship at Indonesia's Central Securities Depository: intranet web application.",
    points: [
      "Delivered project management and a mini-ERP build at Priamanaya, and built an intranet web application during the KSEI internship.",
    ],
  },
];

/* ---- Render competencies ---- */
(function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  const more = document.getElementById("skillsMore");
  if (grid) {
    grid.innerHTML = PRIMARY_SKILLS.map(
      (s) => `
    <article class="skill">
      <span class="skill__icon">${icon(s.icon)}</span>
      <h3 class="skill__title">${s.title}</h3>
      <p class="skill__proof">${s.proof}</p>
    </article>`
    ).join("");
  }
  if (more) {
    more.innerHTML = SUPPORTING_SKILLS.map((t) => `<li>${t}</li>`).join("");
  }
})();

/* ---- Render tech stack badges ---- */
(function renderStack() {
  const wrap = document.getElementById("techStack");
  if (!wrap) return;
  wrap.innerHTML = TECH_STACK.map(
    (g) => `
    <div class="stack__group">
      <h3 class="stack__label">${g.group}</h3>
      <div class="stack__items">
        ${g.items.map((t) => `<span class="badge">${t}</span>`).join("")}
      </div>
    </div>`
  ).join("");
})();

/* ---- Render experience timeline ---- */
(function renderExperience() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = EXPERIENCE.map(
    (j) => `
    <article class="job">
      <p class="job__period">${j.period}</p>
      <h3 class="job__role">${j.role}</h3>
      <p class="job__org">${j.org}</p>
      <p class="job__context">${j.context}</p>
      <ul class="job__points">
        ${j.points.map((p) => `<li>${p}</li>`).join("")}
      </ul>
    </article>`
  ).join("");
})();

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
