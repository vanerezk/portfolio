import type { Dictionary, StackGroup } from "@/content";
import { Sheet } from "./Sheet";
import { stagger } from "@/lib/stagger";

/** Rayados de la leyenda de materiales, como en un plano. */
function Hatch({ kind }: { kind: StackGroup["hatch"] }) {
  const id = `hatch-${kind}`;
  return (
    <svg viewBox="0 0 48 32" className="h-8 w-12 shrink-0 border border-ink text-ink" aria-hidden>
      <defs>
        <pattern id={id} width="6" height="6" patternUnits="userSpaceOnUse">
          {kind === "diagonal" && <path d="M0 6 L6 0" stroke="currentColor" strokeWidth="0.75" />}
          {kind === "cross" && (
            <path d="M0 6 L6 0 M0 0 L6 6" stroke="currentColor" strokeWidth="0.6" />
          )}
          {kind === "dots" && <circle cx="3" cy="3" r="0.9" fill="currentColor" />}
          {kind === "lines" && <path d="M0 3 H6" stroke="currentColor" strokeWidth="0.75" />}
          {kind === "solid" && <rect width="6" height="6" fill="currentColor" />}
        </pattern>
      </defs>
      <rect width="48" height="32" fill={`url(#${id})`} />
    </svg>
  );
}

function Level({ level, labels }: { level: 0 | 1 | 2; labels: [string, string, string] }) {
  return (
    <span className="flex items-center gap-2" title={labels[level]}>
      <span className="flex gap-0.5" aria-hidden>
        {[0, 1, 2].map((n) => (
          <span key={n} className="relative h-2 w-3 border border-line-strong">
            {n <= level && (
              <span className="level-fill absolute -inset-px bg-ink" style={{ "--n": n } as React.CSSProperties} />
            )}
          </span>
        ))}
      </span>
      <span className="annot hidden text-ink-soft sm:inline">{labels[level]}</span>
      <span className="sr-only sm:hidden">{labels[level]}</span>
    </span>
  );
}

export function Stack({ t }: { t: Dictionary }) {
  const s = t.stack;
  return (
    <Sheet id="stack" {...t.sheets.stack} className="pb-24 md:pb-40">
      <p data-reveal className="mb-12 max-w-[48ch] text-lead text-ink-soft md:mb-20">{s.intro}</p>
      <div className="space-y-14">
        {s.groups.map((g) => (
          <div key={g.material} className="sheet-grid gap-y-4">
            <div data-reveal className="col-span-4 flex items-center gap-4 md:col-span-3 md:items-start">
              <Hatch kind={g.hatch} />
              <h3 className="annot">{g.material}</h3>
            </div>
            <ul className="col-span-4 md:col-span-9">
              {g.items.map((item, i) => (
                <li
                  key={item.name}
                  data-reveal
                  style={stagger(i)}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-t border-line py-3 md:grid-cols-[14rem_1fr_auto]"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="col-span-2 row-start-2 text-sm text-ink-soft md:col-span-1 md:row-start-auto">
                    {item.use}
                  </span>
                  <span className="col-start-2 row-start-1 md:col-start-auto md:row-start-auto">
                    <Level level={item.level} labels={s.levels} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Sheet>
  );
}
