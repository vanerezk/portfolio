import type { Dictionary, Locale } from "@/content";
import { Sheet } from "./Sheet";
import { GitHubActivity } from "./GitHubActivity";

/** Trayectoria: cada puesto como una fila del cuadro de superficies de un plano. */
export function Experience({ t, lang }: { t: Dictionary; lang: Locale }) {
  const e = t.experience;
  return (
    <Sheet id="experience" {...t.sheets.experience} className="pb-24 md:pb-40">
      <p data-reveal className="mb-12 max-w-[48ch] text-lead text-ink-soft md:mb-20">{e.intro}</p>
      <ol className="border-b border-line">
        {e.items.map((job) => (
          <li key={`${job.company}-${job.period}`} data-reveal className="sheet-grid gap-y-3 border-t border-line py-6 md:py-8">
            <span className="annot col-span-4 text-accent-ink tabular-nums md:col-span-3">{job.period}</span>
            <div className="col-span-4 md:col-span-4">
              <h3 className="text-xl font-medium tracking-tight md:text-2xl">{job.company}</h3>
              <p className="annot mt-1 text-ink-soft">{job.role}</p>
            </div>
            <ul className="col-span-4 space-y-2 text-ink-soft md:col-span-5">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden className="text-accent">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <dl data-reveal className="sheet-grid gap-y-3 pt-6">
        <dt className="annot col-span-4 text-ink-soft md:col-span-3">{e.educationLabel}</dt>
        <dd className="col-span-4 md:col-span-9">{e.education}</dd>
        <dt className="annot col-span-4 pt-3 text-ink-soft md:col-span-3 md:pt-0">{e.languagesLabel}</dt>
        <dd className="col-span-4 flex flex-wrap gap-x-8 gap-y-2 md:col-span-9">
          {e.languages.map((l) => (
            <span key={l.name}>
              {l.name} <span className="annot text-ink-soft">{l.level}</span>
            </span>
          ))}
        </dd>
      </dl>
      <GitHubActivity t={t} lang={lang} />
      <div className="sheet-grid pt-10">
        <a href={`/${lang}/cv.pdf`} download className="link-draw col-span-4 md:col-span-9 md:col-start-4">
          {t.cv.download} ↓
        </a>
      </div>
    </Sheet>
  );
}
