/** Dominio de producción que Vercel expone en build y runtime (el dominio propio en cuanto se añada). */
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

/** Datos que no cambian entre idiomas. */
export const site = {
  name: "Vanessa Rezk",
  initials: "V.REZK",
  email: "rezkvane@gmail.com",
  github: "vanerezk",
  /** Solo para uso en servidor (metadatos, sitemap, CV). NEXT_PUBLIC_SITE_URL tiene prioridad. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  revision: "2026.11",
} as const;
