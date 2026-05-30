/* ============================================================
   Indra Bayu — Resume site interactions & data
   ============================================================ */

/* ---- Core competencies ---- */
const SKILLS = [
  "Enterprise Solutions Architecture",
  "Production Cybersecurity Architecture",
  "AI / ML Platform Integration",
  "UU PDP / PDPL Data Protection Compliance",
  "Omnichannel & E-Commerce Platforms",
  "Data Warehouse & AI/ML Pipelines",
  "Cloud Architecture (AWS, Azure, GCP)",
  "Mobile (iOS / Android) Platforms",
  "Microservices & Event-Driven Design",
  "DevOps, CI/CD & FinOps",
  "API Gateway & System Integration",
  "Offline-First POS at National Scale",
  "IoT / MQTT & Real-Time Streaming",
  "Vendor & Cross-Functional Leadership",
  "P&L and Country-Level Operations",
  "Vision 2030 Digital Transformation",
];

/* ---- Professional experience ---- */
const EXPERIENCE = [
  {
    period: "Apr 2022 – Present",
    role: "Senior Manager — Solutions Architect",
    org: "PT Sarimelati Kencana Tbk (Pizza Hut Indonesia, IDX: PZZA)",
    context:
      "IDX-listed national F&B leader, YUM! International franchisee. 600+ outlets across 36 provinces, ~6M monthly customers, ~4,400 staff. Reports to CTO. Leads 15 engineers within a 45-person Technology function. Cloud: GCP (current), AWS (prior).",
    points: [
      "Architecture owner for the full technology stack: two-site VoIP contact center, offline POS across 600+ outlets, cloud POS with failover, the e-commerce platform (pizzahut.co.id), iOS and Android apps, CRM, factory and supply chain integration, the enterprise data warehouse, and the AI platform — handling ~2M digital orders and 300M+ API requests a month for 6M customers.",
      "Designed a two-site VoIP contact center (Jakarta + Solo Raya) with active-passive database replication so support stays seamless during a site failure — same call context, no dropped tickets, no manual reconciliation.",
      "Launched the AI platform in Q1 2026: customer-facing chatbot and ML models for sales and inventory forecasting on a unified data platform ingesting via real-time streaming (MQTT order events, driver GPS telemetry) and batch pipelines. First AI deployment to production at PZZA.",
      "Built real-time driver tracking using MQTT-based IoT event streaming from the driver app into the customer order tracker, giving customers live GPS visibility of their delivery.",
      "Own the production security architecture — edge WAF and DDoS mitigation, SIEM monitoring, a regular pentest cycle, IAM hardening, secrets management, and rehearsed IR runbooks. Held up against real DDoS and phishing attempts without material breach across 24M+ annual transactions.",
      "Leading the POC and vendor evaluation for SASE across the enterprise network — assessing Cloudflare One and FortiSASE against zero-trust access, cloud-delivered security, and SD-WAN requirements.",
      "Brought the platform into UU PDP compliance across every consumer-facing system (data classification, consent flows, retention, breach response) — a framework that lifts cleanly onto Saudi PDPL and NCA ECC.",
      "Cut cloud infrastructure spend by 20% through architecture changes, right-sizing, and reserved capacity — with no SLA degradation through peak ordering periods.",
      "Designed the offline-first POS with local server failover and cloud sync so no transaction is lost when connectivity drops — proven across 600+ stores.",
      "Delivered a real-time inventory and COGS visibility platform, moving the business from end-of-day to intraday cost visibility to support margin management.",
      "Lead the 15-person team across architecture, integration, mobile, web, and data. Delivery runs on Agile; service management aligns to ITILv4 (incident, change, problem).",
    ],
  },
  {
    period: "Jul 2018 – Mar 2022",
    role: "Country Director & Solutions Architect",
    org: "DIQIT Business Solutions (Singapore HQ)",
    context:
      "Regional digital solutions firm. Cloud POS platform across 1,000+ stores in Japan, Indonesia, Singapore, and Vietnam. Indonesia operations acquired by PT Sarimelati Kencana Tbk in 2022.",
    points: [
      "Scaled DIQIT Indonesia from zero — owning country P&L, client acquisition, solutions architecture, and a 10-person delivery team across the full requirements-to-release cycle for retail and F&B clients.",
      "Delivered cloud POS and e-commerce to Indonesian clients, contributing to the platform's 1,000+ store footprint across four APAC markets.",
      "Part of the DIQIT Indonesia team brought across in the 2022 acquisition, transitioning into the Senior Manager Solutions Architect role at PZZA to lead the technology integration.",
    ],
  },
  {
    period: "Sep 2016 – Jul 2018",
    role: "Scrum Master & Product Owner",
    org: "We Are Definite · Datanest",
    context:
      "Digital product agency (We Are Definite) and AI/data analytics startup (Datanest). Client-facing product delivery across Indonesia.",
    points: [
      "Shipped digital.dompetdhuafa.org for Dompet Dhuafa, Indonesia's largest Islamic philanthropy organization — wearing three hats (product manager, scrum master, DevOps lead) from discovery through live.",
      "Ran multiple concurrent client product builds through discovery, backlog, sprints, and release. Picked up hands-on data and AI exposure at Datanest that made the later PZZA AI platform feel familiar.",
    ],
  },
  {
    period: "Jun 2015 – Sep 2016",
    role: "E-Commerce Platform Architect & Business Analyst",
    org: "PT Mitra Adiperkasa Tbk (MAP, IDX: MAPI)",
    context:
      "Indonesia's #1 lifestyle retailer, IDX-listed. 150+ international brands, 2,000+ retail stores.",
    points: [
      "Designed and built the e-commerce platform that became MAPClub.com — MAP's loyalty and commerce platform now serving 8M+ members — covering business analysis, system analysis, architecture, and delivery.",
      "Worked on omnichannel integration across MAP's multi-brand estate — early exposure to the patterns I now use daily at PZZA.",
    ],
  },
  {
    period: "Jan 2013 – Mar 2015",
    role: "IT Application Specialist",
    org: "PT Gramedia Media Nusantara (KOMPAS TV / Kompas Gramedia Group)",
    context:
      "National free-to-air broadcaster, part of Kompas Gramedia (Indonesia's largest media conglomerate).",
    points: [
      "Supported and enhanced enterprise broadcast and corporate applications for a national media group reaching millions of viewers.",
    ],
  },
  {
    period: "Feb 2011 – Feb 2012",
    role: "IT Web Developer (earlier roles)",
    org: "PT Priamanaya Djan International · PT Kustodian Sentral Efek Indonesia (KSEI)",
    context:
      "Priamanaya (EPC/property): project management and a mini-ERP build. KSEI internship at Indonesia's Central Securities Depository: intranet web application.",
    points: [
      "Delivered project management and a mini-ERP build at Priamanaya, and built an intranet web application during the KSEI internship.",
    ],
  },
];

/* ---- Render skills ---- */
(function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(
    (s) =>
      `<div class="skill reveal"><span class="skill__dot" aria-hidden="true"></span>${s}</div>`
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

/* ---- Reveal on scroll ---- */
(function reveal() {
  const items = document.querySelectorAll(".reveal");
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
  if (!("IntersectionObserver" in window)) return;
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
