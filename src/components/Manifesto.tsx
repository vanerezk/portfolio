import type { Dictionary } from "@/content";
import { Sheet } from "./Sheet";

export function Manifesto({ t }: { t: Dictionary }) {
  const { paragraphs, notes } = t.manifesto;
  return (
    <Sheet id="manifesto" {...t.sheets.manifesto} className="pb-24 md:pb-40">
      <div className="sheet-grid gap-y-12">
        <div className="col-span-4 space-y-8 md:col-span-8 md:col-start-3">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-h2 font-medium"
                  : "max-w-[46ch] text-lead text-ink-soft"
              }
            >
              {p}
            </p>
          ))}
        </div>

        {/* Notas al margen, como en una memoria de proyecto */}
        <ol className="col-span-4 space-y-5 border-t border-line pt-6 md:col-span-2 md:col-start-11 md:row-start-1 md:border-t-0 md:border-l md:pt-0 md:pl-4">
          {notes.map((n, i) => (
            <li key={i} className="annot flex gap-3 normal-case tracking-normal text-ink-soft">
              <span className="text-accent-ink">N.{i + 1}</span>
              <span>{n}</span>
            </li>
          ))}
        </ol>
      </div>
    </Sheet>
  );
}
