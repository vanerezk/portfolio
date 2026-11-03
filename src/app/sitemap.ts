import type { MetadataRoute } from "next";
import { locales, site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((lang) => [lang, `${site.url}/${lang}`]));
  return locales.map((lang) => ({
    url: `${site.url}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: lang === "es" ? 1 : 0.9,
    alternates: { languages },
  }));
}
