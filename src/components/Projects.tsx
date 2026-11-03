"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/content";
import { stagger } from "@/lib/stagger";

/**
 * Índice de proyectos (concepto B) con fichas técnicas desplegables (concepto A).
 * Una sola ficha abierta a la vez; animación con grid-template-rows 0fr → 1fr.
 */
export function ProjectIndex({ t }: { t: Dictionary }) {
  const { items, labels } = t.projects;
  const [open, setOpen] = useState<string | null>(items.find((p) => p.featured)?.id ?? null);

  return (
    <ol className="border-b border-line">
      {items.map((p, i) => {
        const isOpen = open === p.id;
        const panelId = `project-${p.id}`;
        return (
          <li key={p.id} data-reveal style={stagger(i)} className="border-t border-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : p.id)}
                className="group sheet-grid w-full items-baseline gap-y-2 py-6 text-left transition-colors hover:bg-ink hover:text-paper md:py-8"
              >
                <span className="annot col-span-1 text-accent-ink group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-3 text-xl font-medium tracking-tight md:col-span-5 md:text-3xl">
                  {p.title}
                </span>
                <span className="annot col-span-2 col-start-2 text-ink-soft group-hover:text-paper/70 md:col-span-2 md:col-start-auto">
                  {labels[p.kind]}
                </span>
                <span className="annot hidden text-ink-soft group-hover:text-paper/70 md:col-span-3 md:block">
                  {p.stack.slice(0, 3).join(" · ")}
                </span>
                <span className="annot col-span-1 flex justify-end gap-3 tabular-nums md:col-span-1">
                  <span className="hidden sm:inline">{p.year}</span>
                  <span
                    aria-hidden
                    className={`inline-block transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                  <span className="sr-only">{isOpen ? labels.close : labels.open}</span>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-label={p.title}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.7,0,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="sheet-grid gap-y-8 pt-2 pb-12">
                  {p.images && (
                    <div
                      className={`col-span-4 grid gap-4 md:col-start-2 ${
                        p.images.length > 1 ? "md:col-span-10 md:grid-cols-2" : "md:col-span-6"
                      }`}
                    >
                      {p.images.map((img) => (
                        <Image
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="h-auto w-full border border-line"
                        />
                      ))}
                    </div>
                  )}
                  <p className="col-span-4 text-lead md:col-span-6 md:col-start-2">{p.summary}</p>

                  <dl className="col-span-4 grid gap-6 md:col-span-6 md:col-start-2 md:grid-cols-2">
                    <div>
                      <dt className="annot mb-2 text-accent-ink">{labels.problem}</dt>
                      <dd className="text-ink-soft">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="annot mb-2 text-accent-ink">{labels.solution}</dt>
                      <dd className="text-ink-soft">{p.solution}</dd>
                    </div>
                    {p.parts && (
                      <div className="md:col-span-2">
                        <dt className="annot mb-3 text-accent-ink">{labels.parts}</dt>
                        <dd>
                          <ol className="grid gap-px bg-line md:grid-cols-2">
                            {p.parts.map((part, j) => (
                              <li key={part.name} className="bg-paper py-3 md:p-4">
                                <p className="mb-1 flex gap-3 font-medium">
                                  <span className="annot pt-1 text-accent-ink">
                                    {String.fromCharCode(97 + j)}
                                  </span>
                                  {part.name}
                                </p>
                                <p className="pl-6 text-sm text-ink-soft">{part.body}</p>
                              </li>
                            ))}
                          </ol>
                        </dd>
                      </div>
                    )}
                    <div className="md:col-span-2">
                      <dt className="annot mb-2 text-accent-ink">{labels.stack}</dt>
                      <dd className="flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span key={s} className="annot border border-line-strong px-2 py-1">
                            {s}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  {/* Métricas dibujadas como cotas */}
                  <div className="col-span-4 flex flex-col gap-6 md:col-span-4 md:col-start-9">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="text-accent">
                        <div className="relative flex h-4 items-center">
                          <span className="absolute left-0 h-full w-px bg-current" />
                          <span className="absolute right-0 h-full w-px bg-current" />
                          <span
                            className={`absolute inset-x-0 h-px origin-left bg-current transition-transform delay-200 duration-700 ${
                              isOpen ? "scale-x-100" : "scale-x-0"
                            }`}
                          />
                        </div>
                        <p className="mt-2 flex items-baseline justify-between">
                          <span className="annot text-ink-soft">{m.label}</span>
                          <span className="font-serif text-4xl text-ink italic">{m.value}</span>
                        </p>
                      </div>
                    ))}
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                      {p.links.map((l) => (
                        <li key={l.label}>
                          <a href={l.href} className="link-draw" target="_blank" rel="noreferrer">
                            {l.label} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
