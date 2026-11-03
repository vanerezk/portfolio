"use client";

import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/content";
import { site } from "@/content";
import { openPalette } from "./events";

/**
 * Cajetín del plano: navegación fija que indica la hoja actual.
 * Móvil: barra inferior. Escritorio: bloque en la esquina inferior derecha.
 */
export function TitleBlock({ t, lang }: { t: Dictionary; lang: Locale }) {
  const total = Object.keys(t.sheets).length;
  const [current, setCurrent] = useState({ code: t.sheets.hero.code, title: t.sheets.hero.title });

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-sheet]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            setCurrent({ code: el.dataset.sheet ?? "", title: el.dataset.sheetTitle ?? "" });
          }
        }
      },
      // Una hoja es "actual" cuando cruza la franja central del viewport
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const index = current.code.split("-")[1] ?? "01";
  const other: Locale = lang === "es" ? "en" : "es";

  return (
    <nav
      aria-label={t.nav.project}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-paper/95 backdrop-blur-sm md:inset-x-auto md:right-[var(--gutter)] md:bottom-[var(--gutter)] md:w-[26rem] md:border"
    >
      <dl className="annot hidden grid-cols-[auto_1fr_auto_auto] border-b border-ink md:grid [&>*]:px-3 [&>*]:py-2">
        <dt className="border-r border-ink text-ink-soft">{t.nav.project}</dt>
        <dd className="border-r border-ink font-semibold">{site.name}</dd>
        <dt className="text-ink-soft">{t.nav.scale}</dt>
        <dd>1:1</dd>
      </dl>
      <div className="grid grid-cols-[1fr_auto_auto_auto] items-stretch">
        <p className="annot flex items-center gap-2 px-3 py-3" aria-live="polite">
          <span className="text-accent-ink tabular-nums">{current.code}</span>
          <span className="truncate">{current.title}</span>
          <span className="ml-auto hidden text-ink-soft tabular-nums sm:inline">
            {t.nav.sheet} {index}/{String(total).padStart(2, "0")}
          </span>
        </p>
        <button
          type="button"
          onClick={openPalette}
          className="annot border-l border-ink px-3 hover:bg-ink hover:text-paper"
          aria-label={t.nav.palette}
        >
          ⌘K
        </button>
        <a
          href={`/${other}`}
          hrefLang={other}
          lang={other}
          className="annot flex items-center border-l border-ink px-3 hover:bg-ink hover:text-paper"
        >
          {t.nav.otherLocale}
        </a>
        <a
          href="#contact"
          className="annot flex items-center bg-ink px-4 text-paper transition-colors hover:bg-accent hover:text-white"
        >
          {t.nav.contact}
        </a>
      </div>
      <p className="annot hidden justify-between border-t border-ink px-3 py-2 text-ink-soft md:flex">
        <span>
          {t.nav.revision} {site.revision}
        </span>
        <span>G — grid</span>
      </p>
    </nav>
  );
}
