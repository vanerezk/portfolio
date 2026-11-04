import type { Dictionary, Locale } from "@/content";
import { site } from "@/content";
import { getContributions, type ContributionDay } from "@/lib/github";

const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;
const TOP = 16; // franja para los meses

/** Retícula de contribuciones dibujada como una trama del plano. */
function Grid({
  weeks,
  lang,
  label,
  className,
}: {
  weeks: ContributionDay[][];
  lang: Locale;
  label: string;
  className: string;
}) {
  const month = new Intl.DateTimeFormat(lang, { month: "short", timeZone: "UTC" });
  const months = weeks.flatMap((w, i) => {
    const first = new Date(w[0].date);
    const prev = i > 0 ? new Date(weeks[i - 1][0].date) : null;
    const isNew = !prev || first.getUTCMonth() !== prev.getUTCMonth();
    // Sin etiqueta en las dos últimas columnas: no cabe
    return isNew && i < weeks.length - 2 ? [{ x: i * STEP, text: month.format(first).replace(".", "") }] : [];
  });

  return (
    <svg
      viewBox={`0 0 ${weeks.length * STEP - GAP} ${TOP + 7 * STEP - GAP}`}
      role="img"
      aria-label={label}
      className={`h-auto w-full ${className}`}
    >
      {months.map((m) => (
        <text key={m.x} x={m.x} y={9} className="fill-ink-soft font-mono text-[9px] uppercase">
          {m.text}
        </text>
      ))}
      {weeks.map((w, i) =>
        w.map((d) => (
          <rect
            key={d.date}
            x={i * STEP}
            y={TOP + new Date(d.date).getUTCDay() * STEP}
            width={CELL}
            height={CELL}
            className={`gh-cell gh-${d.level}`}
            style={{ "--w": i } as React.CSSProperties}
          >
            <title>{`${d.date} · ${d.count}`}</title>
          </rect>
        )),
      )}
    </svg>
  );
}

/** Actividad de GitHub de los últimos 12 meses. Si no hay datos, no se pinta nada. */
export async function GitHubActivity({ t, lang }: { t: Dictionary; lang: Locale }) {
  const data = await getContributions();
  if (!data) return null;
  const g = t.experience.github;
  const total = g.total.replace("{n}", new Intl.NumberFormat(lang).format(data.total));

  return (
    <div data-reveal className="sheet-grid gap-y-4 pt-10">
      <p className="annot col-span-4 text-ink-soft md:col-span-3">{g.label}</p>
      <div className="col-span-4 md:col-span-9">
        <Grid weeks={data.weeks} lang={lang} label={total} className="hidden md:block" />
        <Grid weeks={data.weeks.slice(-22)} lang={lang} label={total} className="md:hidden" />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="annot text-accent-ink tabular-nums">{total}</p>
          <div className="flex items-center gap-5">
            <span aria-hidden className="annot flex items-center gap-1 text-ink-soft">
              {g.less}
              {[0, 1, 2, 3, 4].map((l) => (
                <svg key={l} viewBox="0 0 11 11" className="size-2.5">
                  <rect width="11" height="11" className={`gh-${l}`} />
                </svg>
              ))}
              {g.more}
            </span>
            <a href={`https://github.com/${site.github}`} target="_blank" rel="noreferrer" className="link-draw">
              {g.link} ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
