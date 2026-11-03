export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** "built" = trabajo real para cliente · "study" = proyecto de estudio / no construido */
export type ProjectKind = "built" | "study";

export type Project = {
  id: string;
  title: string;
  year: string;
  kind: ProjectKind;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  /** Métricas que se dibujan como cotas, p. ej. { label: "Lighthouse", value: "100" } */
  metrics: { label: string; value: string }[];
  links: { label: string; href: string }[];
};

export type Service = {
  title: string;
  body: string;
  scope: string;
  timeframe: string;
};

export type StackGroup = {
  material: string; // nombre en la leyenda, p. ej. "Estructura"
  hatch: "diagonal" | "cross" | "dots" | "lines" | "solid";
  items: { name: string; use: string; level: 0 | 1 | 2 }[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    skip: string;
    contact: string;
    sheet: string;
    project: string;
    scale: string;
    revision: string;
    palette: string;
    otherLocale: string;
  };
  sheets: Record<
    "hero" | "manifesto" | "projects" | "services" | "stack" | "contact",
    { code: string; title: string }
  >;
  hero: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availability: string;
    measuring: string;
  };
  manifesto: { paragraphs: string[]; notes: string[] };
  projects: {
    intro: string;
    labels: {
      built: string;
      study: string;
      problem: string;
      solution: string;
      stack: string;
      open: string;
      close: string;
    };
    items: Project[];
  };
  services: { intro: string; scopeLabel: string; timeLabel: string; items: Service[] };
  stack: { intro: string; levels: [string, string, string]; groups: StackGroup[] };
  contact: {
    title: string;
    lead: string;
    copy: string;
    copied: string;
    stamp: string;
    links: { label: string; href: string }[];
  };
  palette: {
    placeholder: string;
    empty: string;
    goTo: string;
    copyEmail: string;
    toggleGrid: string;
    switchLocale: string;
  };
  footer: string;
};
