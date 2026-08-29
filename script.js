/* ============================================================
   Indra Bayu - Resume site interactions & data
   ============================================================ */

/* ---- Lucide icons (inlined: the CSP blocks third-party scripts,
        and the site stays zero-dependency / no build step) ---- */
const ICON_PATHS = {
  "layout-grid":
    '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  "shield-check":
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  cpu:
    '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
  lock:
    '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "shopping-cart":
    '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  cloud:
    '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  smartphone:
    '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  "git-branch":
    '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  infinity:
    '<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>',
  "share-2":
    '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  "wifi-off":
    '<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',
  radio:
    '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "trending-up":
    '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  globe:
    '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
};

const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${
    ICON_PATHS[name] || ""
  }</svg>`;

/* ---- Core competencies ---- */
const SKILLS = [
  { icon: "layout-grid", label: "Enterprise Solutions Architecture" },
  { icon: "shield-check", label: "Production Cybersecurity Architecture" },
  { icon: "cpu", label: "AI / ML Platform Integration" },
  { icon: "lock", label: "UU PDP / PDPL Data Protection Compliance" },
  { icon: "shopping-cart", label: "Omnichannel & E-Commerce Platforms" },
  { icon: "database", label: "Data Warehouse & AI/ML Pipelines" },
  { icon: "cloud", label: "Cloud Architecture (AWS, Azure, GCP)" },
  { icon: "smartphone", label: "Mobile (iOS / Android) Platforms" },
  { icon: "git-branch", label: "Microservices & Event-Driven Design" },
  { icon: "infinity", label: "DevOps, CI/CD & FinOps" },
  { icon: "share-2", label: "API Gateway & System Integration" },
  { icon: "wifi-off", label: "Offline-First POS at National Scale" },
  { icon: "radio", label: "IoT / MQTT & Real-Time Streaming" },
  { icon: "users", label: "Vendor & Cross-Functional Leadership" },
  { icon: "trending-up", label: "P&L and Country-Level Operations" },
  { icon: "globe", label: "Vision 2030 Digital Transformation" },
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
      "Pentest Cycle", "UU PDP", "Saudi PDPL", "NCA ECC",
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
      "Own the production security architecture: edge WAF and DDoS mitigation, SIEM monitoring, a regular pentest cycle, IAM hardening, secrets management, and rehearsed IR runbooks. The platform held up against real DDoS and phishing attempts without material breach across 24M+ annual transactions.",
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
      "Designed and built the e-commerce platform that became MAPClub.com, MAP's loyalty and commerce platform now serving 8M+ members, covering business analysis, system analysis, architecture, and delivery.",
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

/* ---- Render competency cards ---- */
(function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill reveal">
      <span class="skill__icon">${icon(s.icon)}</span>
      <span class="skill__text">${s.label}</span>
    </div>`
  ).join("");
})();

/* ---- Render tech stack badges ---- */
(function renderStack() {
  const wrap = document.getElementById("techStack");
  if (!wrap) return;
  wrap.innerHTML = TECH_STACK.map(
    (g) => `
    <div class="stack__group reveal">
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
    <article class="job reveal">
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

/* ---- Theme toggle (persisted) ---- */
(function theme() {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = stored || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", initial);
  btn?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
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

  const OFFSET = 120; // clears the sticky nav
  let queued = false;

  const update = () => {
    queued = false;
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

/* ---- Staggered reveal on scroll ---- */
(function reveal() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  if (!items.length) return;

  // Stagger siblings within the same container, capped so nothing lags badly.
  const seen = new Map();
  const STEP_MS = 70;
  const MAX_STEPS = 7;
  items.forEach((el) => {
    const parent = el.parentElement;
    const i = seen.get(parent) ?? 0;
    seen.set(parent, i + 1);
    el.style.setProperty("--reveal-delay", `${Math.min(i, MAX_STEPS) * STEP_MS}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
})();

/* ---- Animated stat counters ---- */
(function counters() {
  const nums = document.querySelectorAll(".stat__num");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finalText = (el) => Math.round(parseFloat(el.dataset.count)) + (el.dataset.suffix || "");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    nums.forEach((el) => (el.textContent = finalText(el)));
    return;
  }

  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  nums.forEach((n) => io.observe(n));
})();
