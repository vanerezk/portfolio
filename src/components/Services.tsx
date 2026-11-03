import type { Dictionary } from "@/content";
import { Sheet } from "./Sheet";

export function Services({ t }: { t: Dictionary }) {
  const s = t.services;
  return (
    <Sheet id="services" {...t.sheets.services} className="pb-24 md:pb-40">
      <p className="mb-12 max-w-[48ch] text-lead text-ink-soft md:mb-20">{s.intro}</p>
      <ol className="sheet-grid gap-y-px bg-line md:gap-x-px">
        {s.items.map((item, i) => (
          <li
            key={item.title}
            className="group col-span-4 flex flex-col gap-6 bg-paper py-8 md:col-span-6 md:p-10"
          >
            <span className="annot text-accent-ink">S/{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-2xl font-medium tracking-tight md:text-4xl">{item.title}</h3>
            <p className="max-w-[44ch] text-ink-soft">{item.body}</p>
            <dl className="mt-auto grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line pt-4">
              <dt className="annot text-ink-soft">{s.scopeLabel}</dt>
              <dd className="text-sm">{item.scope}</dd>
              <dt className="annot text-ink-soft">{s.timeLabel}</dt>
              <dd className="text-sm tabular-nums">{item.timeframe}</dd>
            </dl>
          </li>
        ))}
      </ol>
    </Sheet>
  );
}
