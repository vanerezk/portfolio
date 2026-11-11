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
    experience: { code: "A-04", title: "Trayectoria" },
    services: { code: "A-05", title: "Servicios" },
    stack: { code: "A-06", title: "Materiales" },
    contact: { code: "A-07", title: "Contacto" },
  },
  hero: {
    eyebrow: "Fullstack freelance · Málaga",
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
      "Fichas técnicas. Los marcados como «Encargo» son trabajo para clientes; los marcados como «Estudio», maquetas propias: como en arquitectura, un proyecto no construido también explica cómo piensas.",
    labels: {
      client: "Encargo",
      built: "Construido",
      study: "Estudio",
      problem: "Problema",
      solution: "Solución",
      parts: "Piezas del sistema",
      stack: "Stack",
      open: "Abrir ficha",
      close: "Cerrar ficha",
    },
    items: [
      {
        id: "vera",
        title: "VERA · sistema digital de un bar",
        year: "2026",
        kind: "client",
        featured: true,
        summary:
          "Web, reservas, panel de gestión, tablet de barra, inventario y control sanitario para un bar de Málaga que está a punto de abrir. Lo diseñé y construí de principio a fin.",
        problem:
          "Un bar nuevo necesitaba mucho más que una web: reservas sin llamadas ni mensajes directos, un panel para gestionarlas, una pantalla en la barra para el servicio de la noche, saber cuánto deja cada consumición y llevar los registros sanitarios que pide la inspección. Todo sin depender de cinco herramientas distintas.",
        solution:
          "Un único backend en Supabase (Postgres, Auth, Storage y Realtime) protegido con seguridad por filas, y varias aplicaciones encima que comparten los mismos datos en tiempo real.",
        parts: [
          {
            name: "Web pública",
            body: "Bilingüe y prerenderizada. Reserva de mesa con confirmación y anulación por email, eventos que se añaden al calendario y una CSP estricta.",
          },
          {
            name: "Panel /admin",
            body: "Reservas en directo, eventos con subida de cartel, carta con agotados y ajustes de horario, cierres y avisos.",
          },
          {
            name: "Tablet de barra",
            body: "PWA en modo quiosco: reservas de la noche en tiempo real con llegadas y no-shows, lo agotado, los próximos eventos, el tiempo para la terraza y la música del bar en Spotify.",
          },
          {
            name: "Stock: inventario y costes",
            body: "COGS, escandallos y precio medio ponderado, compras por albarán, conteos y mermas. Una pantalla de ganancias explicada en claro, con consejos en euros por semana. Pensada para la tablet.",
          },
          {
            name: "Control sanitario (APPCC)",
            body: "Temperaturas de neveras, plan de limpieza, trazabilidad de lo que llega, matriz de los 14 alérgenos y el PDF del mes para Sanidad. Sigue funcionando sin wifi y sube los registros al volver.",
          },
        ],
        stack: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
        metrics: [
          { label: "Aplicaciones", value: "4" },
          { label: "Migraciones SQL", value: "22" },
          { label: "Idiomas", value: "ES · EN" },
        ],
        links: [{ label: "Ver la web", href: "https://veravercel.vercel.app" }],
      },
      {
        id: "az-listing-media",
        title: "AZ Listing Media",
        year: "2026",
        kind: "client",
        summary:
          "Web de un estudio de fotografía y vídeo inmobiliario de Phoenix (Arizona), rehecha desde cero.",
        problem:
          "Las fotos salían directas de la cámara, a unos 20 MB cada una: la portada descargaba alrededor de 190 MB antes de enseñar nada.",
        solution:
          "React 19 y Vite, fotos en AVIF a varios tamaños con carga diferida, código dividido por página, cabeceras de seguridad y precios a la vista para que nadie tenga que preguntar. Ahora preparo una segunda versión con aire de monografía de arquitectura: vídeo en la portada, una selección de 27 fotos y las tarifas en formato índice.",
        stack: ["React", "Vite", "CSS", "Node.js", "sharp", "Netlify"],
        metrics: [
          { label: "Portada antes", value: "190 MB" },
          { label: "Portada ahora", value: "~200 KB" },
        ],
        links: [
          { label: "Ver la web", href: "https://az-listing-media.netlify.app" },
          { label: "Código", href: "https://github.com/vanerezk/az-media" },
        ],
      },
      {
        id: "cocteleria",
        title: "Web de coctelería",
        year: "2026",
        kind: "study",
        summary: "Web de una sola página, de estética oscura, para una coctelería de barrio.",
        problem:
          "Un bar de copas vive de su atmósfera, y la mayoría de webs de hostelería la pierden entre plantillas, menús en PDF y fotos que tardan en cargar.",
        solution:
          "HTML, CSS y JavaScript sin frameworks: carta con pestañas que filtran las bebidas por categoría sin recargar, navegación con desplazamiento suave, jerarquía clara y carga rápida de imágenes, pensada primero para móvil.",
        images: [
          {
            src: "/projects/cocteleria.png",
            alt: "Portada de la web: cóctel con fondo oscuro y el titular «After dark, poured perfectly».",
            width: 1021,
            height: 728,
          },
        ],
        stack: ["HTML5", "CSS3", "JavaScript"],
        metrics: [],
        links: [{ label: "Ver en Upwork", href: "https://www.upwork.com/freelancers/~0155b3bc67bb73cb56" }],
      },
      {
        id: "scaleforge",
        title: "ScaleForge · landing SaaS",
        year: "2026",
        kind: "study",
        summary: "Landing de producto para un SaaS de crecimiento, construida desde cero.",
        problem:
          "Una landing SaaS tiene que explicar un producto complejo en un pantallazo y convertir sin parecer una plantilla más.",
        solution:
          "Un diseño complejo convertido en componentes de React: selector de precios mensual / anual, menú lateral para móvil y animaciones en CSS. Ejecución al píxel, código ordenado y carga rápida en cualquier navegador.",
        images: [
          {
            src: "/projects/scaleforge-hero.png",
            alt: "Portada de ScaleForge: titular «Convert more users» junto a un panel de métricas de adquisición.",
            width: 1036,
            height: 718,
          },
          {
            src: "/projects/scaleforge-precios.png",
            alt: "Sección de precios de ScaleForge: planes Basic, Pro y Enterprise con selector mensual o anual.",
            width: 1032,
            height: 710,
          },
        ],
        stack: ["React", "TypeScript", "Tailwind CSS"],
        metrics: [],
        links: [{ label: "Ver en Upwork", href: "https://www.upwork.com/freelancers/~0155b3bc67bb73cb56" }],
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
  experience: {
    intro: "Antes de trabajar por mi cuenta, desarrollé producto en equipos con mucho tráfico y mucha responsabilidad.",
    items: [
      {
        period: "2026 — hoy",
        company: "Freelance",
        role: "Desarrollo fullstack",
        points: ["Webs y sistemas a medida para clientes, como VERA y AZ Listing Media."],
      },
      {
        period: "Ene 2026 — jun 2026",
        company: "Alamaula",
        role: "Software Engineer (Full-Stack)",
        points: [
          "Arquitectura frontend y consumo de servicios en plataformas con mucho tráfico: un 25 % menos de tiempo de ejecución y render.",
          "Integración de APIs REST complejas y gestión de estado global para mantener los datos consistentes.",
          "Ciclo completo en equipos Agile, con integración y despliegue continuos (CI/CD).",
        ],
      },
      {
        period: "Abr 2024 — dic 2025",
        company: "AZListings",
        role: "Software Engineer (Full-Stack)",
        points: [
          "Lideré el ciclo completo del producto: modelado de datos, backend en Node.js y despliegue en producción.",
          "Servicios y APIs escalables, con sincronización de datos, seguridad e integridad del sistema.",
          "Decisiones de arquitectura orientadas a la eficiencia, la escalabilidad y a reducir la deuda técnica.",
        ],
      },
      {
        period: "Mar 2022 — abr 2023",
        company: "Motolike",
        role: "Systems & Support Engineer",
        points: [
          "Infraestructura de sistemas y redes corporativas (Cisco, routing, switching).",
          "Copias de seguridad automáticas y plan de recuperación ante desastres.",
        ],
      },
    ],
    educationLabel: "Formación",
    education: "Arquitectura · Universidad de Morón (Argentina)",
    github: {
      label: "Actividad en GitHub",
      total: "{n} contribuciones en el último año",
      less: "Menos",
      more: "Más",
      link: "Ver perfil",
    },
    languagesLabel: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Bilingüe · C2" },
      { name: "Portugués", level: "Intermedio · B2" },
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
          { name: "Supabase · PostgreSQL", use: "Auth, Realtime, Storage y seguridad por filas.", level: 1 },
        ],
      },
      {
        material: "Proceso · Método",
        hatch: "dots",
        items: [
          { name: "Git & GitHub", use: "Ramas, PRs, revisión de código.", level: 2 },
          { name: "Vercel · Netlify · CI/CD", use: "Despliegues, cabeceras de seguridad y dominios.", level: 2 },
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
    direct: "O escríbeme directamente",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Tu proyecto",
      messagePlaceholder: "Qué necesitas, para cuándo y, si lo tienes, un enlace a tu web actual.",
      send: "Enviar mensaje",
      sending: "Enviando…",
      stamp: "Recibido",
      sentTitle: "Mensaje recibido.",
      sentBody: "Te respondo en menos de 48 h, al email que me has dejado.",
      errors: {
        name: "Dime cómo te llamas.",
        email: "Revisa el email: necesito uno válido para responderte.",
        message: "Cuéntame un poco más (al menos 10 caracteres).",
        send: "No se ha podido enviar. Prueba de nuevo o escríbeme al email de abajo.",
      },
    },
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/vanessarezk" },
      { label: "Upwork", href: "https://www.upwork.com/freelancers/~0155b3bc67bb73cb56" },
      { label: "GitHub", href: "https://github.com/vanerezk" },
    ],
  },
  cv: {
    download: "Descargar CV (PDF)",
    command: "Descargar CV en PDF",
    title: "Desarrolladora web fullstack",
    profile:
      "Ingeniera de software fullstack con formación en arquitectura. Diseño y desarrollo webs a medida, sistemas internos e integraciones de API con Next.js, React, TypeScript y Node. Experiencia en plataformas de mucho tráfico y en llevar un producto del modelo de datos al despliegue.",
    headings: { profile: "Perfil", experience: "Experiencia", projects: "Proyectos destacados", stack: "Stack" },
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
