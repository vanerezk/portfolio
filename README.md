# Portfolio · Vanessa Rezk

Portfolio bilingüe (ES/EN) concebido como un **juego de planos**: cada sección es una hoja numerada, con cajetín de navegación, retícula visible (tecla `G`), cotas que miden la página en vivo y paleta de comandos (`⌘K` / `Ctrl K`).

## Stack
Next.js 16 (App Router, SSG) · React 19 · TypeScript · Tailwind CSS v4

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:3000 → /es
npm run build
```

## Estructura
```
src/
  app/[lang]/        layout (fuentes, metadata, hreflang) + página one-page
  app/globals.css    tokens de diseño, retícula, utilidades
  content/           textos tipados por idioma (es.ts / en.ts) y datos comunes
  components/        Sheet, Hero, Manifesto, Projects, Services, Stack, Contact,
                     TitleBlock (cajetín), GridOverlay, CommandPalette
```

Todo el contenido se edita en `src/content/`. Los proyectos marcados `kind: "study"` son proyectos de estudio.
