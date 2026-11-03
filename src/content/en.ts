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
    services: { code: "A-04", title: "Services" },
    stack: { code: "A-05", title: "Materials" },
    contact: { code: "A-06", title: "Contact" },
  },
  hero: {
    eyebrow: "Freelance fullstack · Spain",
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
      "Project sheets. Entries marked “Study” are self-initiated: as in architecture, an unbuilt project still shows how you think.",
    labels: {
      built: "Built",
      study: "Study",
      problem: "Problem",
      solution: "Solution",
      stack: "Stack",
      open: "Open sheet",
      close: "Close sheet",
    },
    items: [
      {
        id: "catalogo",
        title: "API-driven B2B catalogue",
        year: "2026",
        kind: "study",
        summary: "Product catalogue fed by an external REST API.",
        problem:
          "A distributor maintains its catalogue by hand on a website and in a spreadsheet. Prices and stock never match.",
        solution:
          "A Node/Express layer that normalises the supplier API, cache with revalidation, and a Next.js frontend with indexable filters.",
        stack: ["Next.js", "TypeScript", "Node.js", "Express", "REST"],
        metrics: [
          { label: "Sync", value: "< 5 min" },
          { label: "Products", value: "1,200" },
        ],
        links: [{ label: "Repository", href: "#" }],
      },
      {
        id: "landing",
        title: "High-performance landing page",
        year: "2026",
        kind: "study",
        summary: "Landing page for a local studio, tuned to the millimetre.",
        problem:
          "Landing pages made with visual builders weigh megabytes and lose visitors before they load.",
        solution:
          "Semantic HTML, dependency-free CSS, responsive images and zero render-blocking JavaScript. Form via Server Action.",
        stack: ["Next.js", "CSS", "Vercel"],
        metrics: [
          { label: "Lighthouse", value: "100" },
          { label: "Weight", value: "< 90 KB" },
        ],
        links: [
          { label: "Demo", href: "#" },
          { label: "Repository", href: "#" },
        ],
      },
      {
        id: "bugs",
        title: "CSS bug notebook",
        year: "2025",
        kind: "study",
        summary: "A collection of real layout bugs, reproduced and solved.",
        problem:
          "iOS Safari, 100vh, stacking contexts, flex overflow… Layout bugs keep coming back and nobody documents the cause.",
        solution:
          "Each entry has a minimal repro, the root cause explained and the fix. A public resource that shows how I debug.",
        stack: ["HTML", "CSS", "JavaScript"],
        metrics: [{ label: "Cases", value: "12" }],
        links: [{ label: "Open notebook", href: "#" }],
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
        ],
      },
      {
        material: "Process · Method",
        hatch: "dots",
        items: [
          { name: "Git & GitHub", use: "Branches, PRs, code review.", level: 2 },
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
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/vanessarezk" },
      { label: "GitHub", href: "https://github.com/vanerezk" },
    ],
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
