"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/content";
import { site } from "@/content";
import { ContactForm } from "./ContactForm";

/** Hoja de "Aprobación": formulario, y el email gigante que se copia y estampa un sello. */
export function ContactBlock({ t, lang }: { t: Dictionary; lang: Locale }) {
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <div className="sheet-grid gap-y-10 pb-40 md:pb-48">
      <h3 className="col-span-4 text-h2 font-medium md:col-span-8">{c.title}</h3>
      <p className="col-span-4 max-w-[44ch] text-lead text-ink-soft md:col-span-6">{c.lead}</p>

      <div className="col-span-4 md:col-span-8 md:col-start-1">
        <ContactForm t={t} lang={lang} />
      </div>

      <p className="annot col-span-4 border-t border-line pt-6 text-ink-soft md:col-span-12">{c.direct}</p>

      <div className="relative col-span-4 -mt-4 md:col-span-12">
        <a
          href={`mailto:${site.email}`}
          className="block break-all font-serif text-[clamp(2rem,9vw,9rem)] leading-none italic transition-colors hover:text-accent"
        >
          {site.email}
        </a>
        {copied && (
          <span
            aria-hidden
            className="annot pointer-events-none absolute top-0 right-0 border-2 border-accent px-4 py-2 text-base text-accent [animation:stamp-in_400ms_ease-out_both]"
          >
            {c.stamp}
          </span>
        )}
      </div>

      <div className="col-span-4 flex flex-wrap items-center gap-x-8 gap-y-4 md:col-span-12">
        <button
          type="button"
          onClick={copy}
          className="border border-ink px-5 py-3 transition-colors hover:border-accent hover:bg-accent hover:text-white"
        >
          {copied ? c.copied : c.copy}
        </button>
        {c.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link-draw">
            {l.label} ↗
          </a>
        ))}
        <span role="status" className="sr-only">
          {copied ? c.copied : ""}
        </span>
      </div>
    </div>
  );
}
