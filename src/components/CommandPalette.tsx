"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Dictionary, Locale } from "@/content";
import { site } from "@/content";
import { PALETTE_EVENT, toggleGrid } from "./events";

type Command = { id: string; label: string; hint: string; run: () => void };

/** Paleta ⌘K / Ctrl K sobre <dialog> nativo (foco, Esc y backdrop gratis). */
export function CommandPalette({ t, lang }: { t: Dictionary; lang: Locale }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const commands = useMemo<Command[]>(() => {
    const anchors: Record<keyof Dictionary["sheets"], string> = {
      hero: "top",
      manifesto: "manifesto",
      projects: "projects",
      services: "services",
      stack: "stack",
      contact: "contact",
    };
    const go = (Object.keys(anchors) as (keyof typeof anchors)[]).map((key) => ({
      id: `go-${key}`,
      label: `${t.palette.goTo} ${t.sheets[key].title}`,
      hint: t.sheets[key].code,
      run: () => document.getElementById(anchors[key])?.scrollIntoView(),
    }));
    return [
      ...go,
      {
        id: "copy",
        label: t.palette.copyEmail,
        hint: "@",
        run: () => void navigator.clipboard?.writeText(site.email),
      },
      { id: "grid", label: t.palette.toggleGrid, hint: "G", run: toggleGrid },
      {
        id: "lang",
        label: t.palette.switchLocale,
        hint: lang === "es" ? "EN" : "ES",
        run: () => (window.location.href = lang === "es" ? "/en" : "/es"),
      },
    ];
  }, [t, lang]);

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const open = () => {
      setQuery("");
      setActive(0);
      dialog.current?.showModal();
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(PALETTE_EVENT, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(PALETTE_EVENT, open);
    };
  }, []);

  function run(cmd: Command | undefined) {
    if (!cmd) return;
    dialog.current?.close();
    cmd.run();
  }

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    }
  }

  return (
    <dialog
      ref={dialog}
      aria-label={t.nav.palette}
      onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      className="m-auto mt-[15vh] w-[min(36rem,calc(100vw-2*var(--gutter)))] border border-ink bg-paper p-0 text-ink backdrop:bg-ink/30 backdrop:backdrop-blur-[2px]"
    >
      <input
        autoFocus
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActive(0);
        }}
        onKeyDown={onInputKey}
        placeholder={t.palette.placeholder}
        role="combobox"
        aria-expanded="true"
        aria-controls="palette-list"
        aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
        className="w-full border-b border-ink bg-transparent px-4 py-4 text-lg outline-none placeholder:text-ink-soft focus-visible:outline-none"
      />
      <ul id="palette-list" role="listbox" className="max-h-80 overflow-y-auto py-2">
        {results.length === 0 && <li className="annot px-4 py-3 text-ink-soft">{t.palette.empty}</li>}
        {results.map((c, i) => (
          <li
            key={c.id}
            id={`cmd-${c.id}`}
            role="option"
            aria-selected={i === active}
            onMouseEnter={() => setActive(i)}
            onClick={() => run(c)}
            className={`flex cursor-pointer items-center justify-between px-4 py-2.5 ${
              i === active ? "bg-ink text-paper" : ""
            }`}
          >
            <span>{c.label}</span>
            <span className={`annot ${i === active ? "text-accent" : "text-ink-soft"}`}>{c.hint}</span>
          </li>
        ))}
      </ul>
    </dialog>
  );
}
