import type { Dictionary } from "./types";
import { site } from "./site";

export const en: Dictionary = {
  meta: {
    title: `${site.name} · Freelance fullstack web development`,
    description:
      "Custom websites, high-performance landing pages, API integrations and pixel-precise UI. Next.js, React, TypeScript and Node.",
  },
  nav: {
    skip: "Skip to content",
    contact: "Contact",
    sheet: "Sheet",
    project: "Project",
    scale: "Scale",
    revision: "Rev.",
    palette: "Commands",
    otherLocale: "ES",
  },
  sheets: {
    hero: { code: "A-01", title: "Cover" },
    manifesto: { code: "A-02", title: "Statement" },
    projects: { code: "A-03", title: "Projects" },
    experience: { code: "A-04", title: "Experience" },
    services: { code: "A-05", title: "Services" },
    stack: { code: "A-06", title: "Materials" },
    contact: { code: "A-07", title: "Contact" },
  },
  hero: {
    eyebrow: "Freelance fullstack · Málaga, Spain",
    titleA: "Web development,",
    titleAccent: "built",
    titleB: "at 1:1 scale.",
    lead: "I design and build custom websites, landing pages that load instantly and API integrations that don't break. With the precision of an architecture background.",
    ctaPrimary: "Let's talk about your project",
    ctaSecondary: "See projects",
    availability: "Available for new projects",
    measuring: "measuring…",
  },
  manifesto: {
    paragraphs: [
      "Before code, I studied architecture. That's where I learned that a good project is decided in the grid, in proportion, and in everything you leave out.",
      "I bring the same to the web: clear structure, components that fit together and CSS that doesn't break on anyone's phone.",
      "I don't do templates. I build sites that load fast, read well and stay maintainable long after launch.",
    ],
    notes: [
      "This page sits on a 12-column grid too. Press G to see it.",
      "Truly mobile-first: designed at 360 px before anything else.",
      "Less JavaScript, more HTML. Performance is a design decision.",
    ],
  },
  projects: {
    intro:
      "Project sheets. Entries marked “Commission” are client work; those marked “Study” are self-initiated mockups: as in architecture, an unbuilt project still shows how you think.",
    labels: {
      client: "Commission",
      built: "Built",
      study: "Study",
      problem: "Problem",
      solution: "Solution",
      parts: "System parts",
      stack: "Stack",
      open: "Open sheet",
      close: "Close sheet",
    },
    items: [
      {
        id: "vera",
        title: "VERA · a bar's digital system",
        year: "2026",
        kind: "client",
        featured: true,
        summary:
          "Website, bookings, admin panel, bar tablet, inventory and food safety records for a bar in Málaga that is about to open. I designed and built it end to end.",
        problem:
          "A new bar needed far more than a website: bookings without phone calls or DMs, a panel to manage them, a screen behind the bar for the night shift, a clear view of what each drink earns and the hygiene records health inspectors ask for. All without juggling five different tools.",
        solution:
          "A single Supabase backend (Postgres, Auth, Storage and Realtime) locked down with row-level security, and several apps on top sharing the same data in real time.",
        parts: [
          {
            name: "Public website",
            body: "Bilingual and prerendered. Table booking with email confirmation and cancellation, add-to-calendar events and a strict CSP.",
          },
          {
            name: "Admin panel",
            body: "Live bookings, events with poster upload, menu with sold-out items, and settings for hours, closures and notices.",
          },
          {
            name: "Bar tablet",
            body: "Kiosk-mode PWA: tonight's bookings in real time with arrivals and no-shows, what's sold out, upcoming events, terrace weather and the bar's Spotify.",
          },
          {
            name: "Stock: inventory & costs",
            body: "COGS, recipe costing and weighted average cost, purchases from delivery notes, stock counts and waste. A plain-language profit screen with weekly advice in euros. Built tablet-first.",
          },
          {
            name: "Food safety (HACCP)",
            body: "Fridge temperatures, cleaning plan, traceability of deliveries, a 14-allergen matrix and a monthly PDF for inspectors. Keeps working offline and syncs when it's back.",
          },
        ],
        stack: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
        metrics: [
          { label: "Apps", value: "4" },
          { label: "SQL migrations", value: "22" },
          { label: "Languages", value: "ES · EN" },
        ],
        links: [{ label: "Visit the site", href: "https://veravercel.vercel.app/en/" }],
      },
      {
        id: "az-listing-media",
        title: "AZ Listing Media",
        year: "2026",
        kind: "client",
        summary:
          "Website for a real estate photo and video studio in Phoenix, Arizona, rebuilt from scratch.",
        problem:
          "Photos went straight from the camera at around 20 MB each: the home page downloaded about 190 MB before showing anything.",
        solution:
          "React 19 and Vite, AVIF photos in several sizes with lazy loading, per-page code splitting, security headers and prices in plain sight so nobody has to ask. I'm now working on a second version styled like an architecture monograph: a video hero, a curated edit of 27 photos and a rate-card pricing page.",
        stack: ["React", "Vite", "CSS", "Node.js", "sharp", "Netlify"],
        metrics: [
          { label: "Home page before", value: "190 MB" },
          { label: "Home page now", value: "~200 KB" },
        ],
        links: [
          { label: "Visit the site", href: "https://az-listing-media.netlify.app" },
          { label: "Source", href: "https://github.com/vanerezk/az-media" },
        ],
      },
      {
        id: "cocteleria",
        title: "Cocktail bar website",
        year: "2026",
        kind: "study",
        summary: "A sleek, dark single-page showcase site for a local cocktail bar.",
        problem:
          "A cocktail bar lives on its atmosphere, and most hospitality websites lose it between templates, PDF menus and photos that take ages to load.",
        solution:
          "HTML, CSS and JavaScript, no frameworks: a tabbed menu that filters drink categories without reloading, smooth-scrolling navigation, a clear UI hierarchy and fast media loading, built mobile-first.",
        images: [
          {
            src: "/projects/cocteleria.png",
            alt: "Website hero: a cocktail on a dark background with the headline “After dark, poured perfectly”.",
            width: 1021,
            height: 728,
          },
        ],
        stack: ["HTML5", "CSS3", "JavaScript"],
        metrics: [],
        links: [{ label: "View on Upwork", href: "https://www.upwork.com/freelancers/~0155b3bc67bb73cb56" }],
      },
      {
        id: "scaleforge",
        title: "ScaleForge · SaaS landing page",
        year: "2026",
        kind: "study",
        summary: "A responsive SaaS landing page for a growth platform, built from scratch.",
        problem:
          "A SaaS landing page has to explain a complex product at a glance and convert without looking like yet another template.",
        solution:
          "A complex layout turned into modern React components: a monthly / yearly pricing toggle, a mobile navigation drawer and smooth CSS animations. Pixel-perfect, cleanly structured and fast in every browser.",
        images: [
          {
            src: "/projects/scaleforge-hero.png",
            alt: "ScaleForge hero: the headline “Convert more users” next to an acquisition metrics panel.",
            width: 1036,
            height: 718,
          },
          {
            src: "/projects/scaleforge-precios.png",
            alt: "ScaleForge pricing section: Basic, Pro and Enterprise plans with a monthly or yearly toggle.",
            width: 1032,
            height: 710,
          },
        ],
        stack: ["React", "TypeScript", "Tailwind CSS"],
        metrics: [],
        links: [{ label: "View on Upwork", href: "https://www.upwork.com/freelancers/~0155b3bc67bb73cb56" }],
      },
      {
        id: "portfolio",
        title: "This site",
        year: "2026",
        kind: "built",
        summary: "A bilingual portfolio designed as a set of drawings.",
        problem: "A portfolio of shadowed cards says nothing about how I work.",
        solution:
          "Next.js App Router, typed content, a visible grid and dimension lines that measure the page itself in real time.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        metrics: [{ label: "Client JS", value: "minimal" }],
        links: [{ label: "Source", href: "https://github.com/vanerezk/portfolio" }],
      },
    ],
  },
  experience: {
    intro: "Before going freelance, I built product in teams with heavy traffic and real responsibility.",
    items: [
      {
        period: "2026 — now",
        company: "Freelance",
        role: "Fullstack development",
        points: ["Custom websites and systems for clients such as VERA and AZ Listing Media."],
      },
      {
        period: "Jan 2026 — Jun 2026",
        company: "Alamaula",
        role: "Software Engineer (Full-Stack)",
        points: [
          "Frontend architecture and service consumption for high-traffic platforms: 25% faster execution and rendering.",
          "Integrated complex REST APIs and global state management to keep data consistent.",
          "Full development lifecycle in Agile teams, with continuous integration and deployment (CI/CD).",
        ],
      },
      {
        period: "Apr 2024 — Dec 2025",
        company: "AZListings",
        role: "Software Engineer (Full-Stack)",
        points: [
          "Led the full product lifecycle: data modelling, Node.js backend and production deployment.",
          "Scalable services and APIs with reliable data sync, security and system integrity.",
          "Architecture decisions focused on efficiency, scalability and reducing technical debt.",
        ],
      },
      {
        period: "Mar 2022 — Apr 2023",
        company: "Motolike",
        role: "Systems & Support Engineer",
        points: [
          "Corporate systems and network infrastructure (Cisco, routing, switching).",
          "Automated backups and a disaster recovery plan.",
        ],
      },
    ],
    educationLabel: "Education",
    education: "Architecture · Universidad de Morón (Argentina)",
    github: {
      label: "GitHub activity",
      total: "{n} contributions in the last year",
      less: "Less",
      more: "More",
      link: "View profile",
    },
    languagesLabel: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Bilingual · C2" },
      { name: "Portuguese", level: "Intermediate · B2" },
    ],
  },
  services: {
    intro: "Brief: what I can build for you, and roughly how long it takes.",
    scopeLabel: "Scope",
    timeLabel: "Typical timeframe",
    items: [
      {
        title: "Custom websites",
        body: "From design to deployment. Company sites, portfolios and product websites with Next.js or React.",
        scope: "UI design · development · technical SEO · deployment",
        timeframe: "3–6 weeks",
      },
      {
        title: "High-performance landing pages",
        body: "One page, one goal. Instant load, clear copy and measurement from day one.",
        scope: "Build · forms · analytics",
        timeframe: "1–2 weeks",
      },
      {
        title: "API & catalogue integration",
        body: "I connect your site to your catalogue, ERP or supplier through REST APIs, with Node and Express.",
        scope: "Backend · data normalisation · caching",
        timeframe: "2–4 weeks",
      },
      {
        title: "UI build & CSS rescue",
        body: "I turn your Figma design into exact code, or fix that layout bug nobody manages to close.",
        scope: "Figma → code · responsive · debugging",
        timeframe: "From 2 days",
      },
    ],
  },
  stack: {
    intro: "Materials legend. Each tool, with what I use it for.",
    levels: ["Familiar", "Proficient", "Daily"],
    groups: [
      {
        material: "Structure · Frontend",
        hatch: "diagonal",
        items: [
          { name: "TypeScript", use: "Every new project starts typed.", level: 2 },
          { name: "React", use: "Component-driven interfaces.", level: 2 },
          { name: "Next.js", use: "Fast sites with SSR/SSG and App Router.", level: 2 },
          { name: "HTML & CSS", use: "Semantics, Grid, Flexbox, container queries.", level: 2 },
          { name: "Angular", use: "Enterprise applications.", level: 1 },
        ],
      },
      {
        material: "Services · Backend",
        hatch: "cross",
        items: [
          { name: "Node.js", use: "Services and data scripts.", level: 2 },
          { name: "Express", use: "Lightweight REST APIs.", level: 1 },
          { name: "REST APIs", use: "Design, consumption and integration.", level: 2 },
          { name: "Supabase · PostgreSQL", use: "Auth, Realtime, Storage and row-level security.", level: 1 },
        ],
      },
      {
        material: "Process · Method",
        hatch: "dots",
        items: [
          { name: "Git & GitHub", use: "Branches, PRs, code review.", level: 2 },
          { name: "Vercel · Netlify · CI/CD", use: "Deployments, security headers and domains.", level: 2 },
          { name: "Agile / Scrum", use: "Short, frequent deliveries.", level: 1 },
          { name: "Figma", use: "From idea to handoff.", level: 1 },
        ],
      },
    ],
  },
  contact: {
    title: "Got a project in mind?",
    lead: "Tell me what you need. I reply within 48 h with a clear proposal on scope and timing.",
    copy: "Copy email",
    copied: "Email copied",
    stamp: "Approved",
    direct: "Or email me directly",
    form: {
      name: "Name",
      email: "Email",
      message: "Your project",
      messagePlaceholder: "What you need, by when and, if you have one, a link to your current site.",
      send: "Send message",
      sending: "Sending…",
      stamp: "Received",
      sentTitle: "Message received.",
      sentBody: "I'll reply within 48 hours, to the email you left.",
      errors: {
        name: "Tell me your name.",
        email: "Check the email: I need a valid one to reply.",
        message: "Tell me a bit more (at least 10 characters).",
        send: "It couldn't be sent. Try again or email me at the address below.",
      },
    },
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/vanessarezk" },
      { label: "Upwork", href: "https://www.upwork.com/freelancers/~0155b3bc67bb73cb56" },
      { label: "GitHub", href: "https://github.com/vanerezk" },
    ],
  },
  cv: {
    download: "Download CV (PDF)",
    command: "Download CV as PDF",
    title: "Fullstack web developer",
    profile:
      "Full-stack software engineer with a background in architecture. I design and build custom websites, internal systems and API integrations with Next.js, React, TypeScript and Node. Experience on high-traffic platforms and taking a product from data model to deployment.",
    headings: { profile: "Profile", experience: "Experience", projects: "Selected projects", stack: "Stack" },
  },
  palette: {
    placeholder: "Type a command or a section…",
    empty: "No results",
    goTo: "Go to",
    copyEmail: "Copy email",
    toggleGrid: "Show / hide grid",
    switchLocale: "Cambiar a español",
  },
  footer: "Designed and built without templates.",
};
