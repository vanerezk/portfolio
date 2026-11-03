import type { Dictionary } from "./types";
import { site } from "./site";

export const es: Dictionary = {
  meta: {
    title: `${site.name} · Desarrollo web fullstack freelance`,
    description:
      "Webs a medida, landing pages de alto rendimiento, integración de APIs y maquetación UI precisa. Next.js, React, TypeScript y Node.",
  },
  nav: {
    skip: "Saltar al contenido",
    contact: "Contacto",
    sheet: "Hoja",
    project: "Proyecto",
    scale: "Esc.",
    revision: "Rev.",
    palette: "Comandos",
    otherLocale: "EN",
  },
  sheets: {
    hero: { code: "A-01", title: "Portada" },
    manifesto: { code: "A-02", title: "Memoria" },
    projects: { code: "A-03", title: "Proyectos" },
    services: { code: "A-04", title: "Servicios" },
    stack: { code: "A-05", title: "Materiales" },
    contact: { code: "A-06", title: "Contacto" },
  },
  hero: {
    eyebrow: "Fullstack freelance · España",
    titleA: "Desarrollo web",
    titleAccent: "construido",
    titleB: "a escala 1:1.",
    lead: "Diseño y desarrollo webs a medida, landing pages que cargan al instante e integraciones de API que no se rompen. Con la precisión de quien se formó en arquitectura.",
    ctaPrimary: "Hablemos de tu proyecto",
    ctaSecondary: "Ver proyectos",
    availability: "Disponible para nuevos proyectos",
    measuring: "midiendo…",
  },
  manifesto: {
    paragraphs: [
      "Antes del código, estudié arquitectura. Allí aprendí que un buen proyecto se decide en la retícula, en la proporción y en todo lo que se deja fuera.",
      "Hoy aplico lo mismo a la web: estructura clara, componentes que encajan entre sí y CSS que no se rompe en el móvil de nadie.",
      "No trabajo con plantillas. Construyo sitios que cargan rápido, se leen bien y se pueden mantener cuando yo ya no esté mirando.",
    ],
    notes: [
      "Esta página también está sobre una retícula de 12 columnas. Pulsa G para verla.",
      "Mobile-first de verdad: se diseña primero a 360 px.",
      "Menos JavaScript, más HTML. El rendimiento es una decisión de diseño.",
    ],
  },
  projects: {
    intro:
      "Fichas técnicas. Los proyectos marcados como «Estudio» son ejercicios propios: como en arquitectura, un proyecto no construido también explica cómo piensas.",
    labels: {
      built: "Construido",
      study: "Estudio",
      problem: "Problema",
      solution: "Solución",
      stack: "Stack",
      open: "Abrir ficha",
      close: "Cerrar ficha",
    },
    items: [
      {
        id: "catalogo",
        title: "Catálogo B2B conectado por API",
        year: "2026",
        kind: "study",
        summary: "Catálogo de producto alimentado por una API REST externa.",
        problem:
          "Un distribuidor mantiene su catálogo a mano en una web y en un Excel. Precios y stock nunca coinciden.",
        solution:
          "Capa intermedia en Node/Express que normaliza la API del proveedor, caché con revalidación y frontend en Next.js con filtros indexables.",
        stack: ["Next.js", "TypeScript", "Node.js", "Express", "REST"],
        metrics: [
          { label: "Sincronía", value: "< 5 min" },
          { label: "Fichas", value: "1.200" },
        ],
        links: [{ label: "Repositorio", href: "#" }],
      },
      {
        id: "landing",
        title: "Landing de alto rendimiento",
        year: "2026",
        kind: "study",
        summary: "Landing para un estudio local, optimizada al milímetro.",
        problem:
          "Las landings hechas con constructores visuales pesan varios megas y pierden visitas antes de cargar.",
        solution:
          "HTML semántico, CSS sin dependencias, imágenes responsive y cero JavaScript bloqueante. Formulario con Server Action.",
        stack: ["Next.js", "CSS", "Vercel"],
        metrics: [
          { label: "Lighthouse", value: "100" },
          { label: "Peso", value: "< 90 KB" },
        ],
        links: [
          { label: "Demo", href: "#" },
          { label: "Repositorio", href: "#" },
        ],
      },
      {
        id: "bugs",
        title: "Cuaderno de bugs CSS",
        year: "2025",
        kind: "study",
        summary: "Colección de bugs de maquetación reales, reproducidos y resueltos.",
        problem:
          "Safari en iOS, 100vh, stacking contexts, overflow en flex… Los bugs de layout se repiten y nadie documenta la causa.",
        solution:
          "Cada entrada tiene una reproducción mínima, la causa explicada y el arreglo. Un recurso público que demuestra cómo depuro.",
        stack: ["HTML", "CSS", "JavaScript"],
        metrics: [{ label: "Casos", value: "12" }],
        links: [{ label: "Ver cuaderno", href: "#" }],
      },
      {
        id: "portfolio",
        title: "Este sitio",
        year: "2026",
        kind: "built",
        summary: "Portfolio bilingüe diseñado como un juego de planos.",
        problem:
          "Un portfolio de tarjetas con sombras no cuenta nada sobre cómo trabajo.",
        solution:
          "Next.js App Router, contenido tipado, retícula visible y cotas que miden la propia página en tiempo real.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        metrics: [{ label: "JS cliente", value: "mínimo" }],
        links: [{ label: "Código", href: "https://github.com/vanerezk/portfolio" }],
      },
    ],
  },
  services: {
    intro: "Programa de necesidades: qué puedo construir para ti y en cuánto tiempo, aproximadamente.",
    scopeLabel: "Alcance",
    timeLabel: "Plazo orientativo",
    items: [
      {
        title: "Webs a medida",
        body: "Del diseño al despliegue. Sitios corporativos, portfolios y webs de producto con Next.js o React.",
        scope: "Diseño UI · desarrollo · SEO técnico · despliegue",
        timeframe: "3–6 semanas",
      },
      {
        title: "Landing pages de alto rendimiento",
        body: "Una página, un objetivo. Carga instantánea, copy claro y medición desde el primer día.",
        scope: "Maquetación · formularios · analítica",
        timeframe: "1–2 semanas",
      },
      {
        title: "Integración de APIs y catálogos",
        body: "Conecto tu web con tu catálogo, ERP o proveedor mediante APIs REST, con Node y Express.",
        scope: "Backend · normalización de datos · caché",
        timeframe: "2–4 semanas",
      },
      {
        title: "Maquetación UI y rescate CSS",
        body: "Paso tu diseño de Figma a código exacto, o arreglo ese bug de layout que nadie consigue cerrar.",
        scope: "Figma → código · responsive · depuración",
        timeframe: "Desde 2 días",
      },
    ],
  },
  stack: {
    intro: "Leyenda de materiales. Cada herramienta, con el uso que le doy.",
    levels: ["Conozco", "Con soltura", "A diario"],
    groups: [
      {
        material: "Estructura · Frontend",
        hatch: "diagonal",
        items: [
          { name: "TypeScript", use: "Todo proyecto nuevo empieza tipado.", level: 2 },
          { name: "React", use: "Interfaces por componentes.", level: 2 },
          { name: "Next.js", use: "Sitios rápidos con SSR/SSG y App Router.", level: 2 },
          { name: "HTML & CSS", use: "Semántica, Grid, Flexbox, container queries.", level: 2 },
          { name: "Angular", use: "Aplicaciones empresariales.", level: 1 },
        ],
      },
      {
        material: "Instalaciones · Backend",
        hatch: "cross",
        items: [
          { name: "Node.js", use: "Servicios y scripts de datos.", level: 2 },
          { name: "Express", use: "APIs REST ligeras.", level: 1 },
          { name: "APIs REST", use: "Diseño, consumo e integración.", level: 2 },
        ],
      },
      {
        material: "Proceso · Método",
        hatch: "dots",
        items: [
          { name: "Git & GitHub", use: "Ramas, PRs, revisión de código.", level: 2 },
          { name: "Agile / Scrum", use: "Entregas cortas y frecuentes.", level: 1 },
          { name: "Figma", use: "De la idea al handoff.", level: 1 },
        ],
      },
    ],
  },
  contact: {
    title: "¿Tienes un proyecto entre manos?",
    lead: "Cuéntame qué necesitas. Respondo en menos de 48 h con una propuesta clara de alcance y plazo.",
    copy: "Copiar email",
    copied: "Email copiado",
    stamp: "Aprobado",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/vanessarezk" },
      { label: "GitHub", href: "https://github.com/vanerezk" },
    ],
  },
  palette: {
    placeholder: "Escribe un comando o una sección…",
    empty: "Sin resultados",
    goTo: "Ir a",
    copyEmail: "Copiar email",
    toggleGrid: "Mostrar / ocultar retícula",
    switchLocale: "Switch to English",
  },
  footer: "Diseñado y construido sin plantillas.",
};
