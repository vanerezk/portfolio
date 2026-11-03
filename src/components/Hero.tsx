import type { Dictionary } from "@/content";
import { site } from "@/content";
import { LiveDimension } from "./LiveDimension";
import { stagger } from "@/lib/stagger";

export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section
      id="top"
      data-sheet={t.sheets.hero.code}
      data-sheet-title={t.sheets.hero.title}
      aria-labelledby="hero-title"
      className="relative"
    >
      <div className="frame flex min-h-[calc(100svh-4rem)] flex-col justify-between pt-6 pb-28 md:pb-36">
        {/* Membrete */}
        <div className="intro sheet-grid items-baseline" style={stagger(-4)}>
          <span className="annot col-span-2 font-semibold md:col-span-3">{site.initials}</span>
          <span className="annot col-span-2 text-right text-ink-soft md:col-span-9">
            {h.eyebrow}
          </span>
        </div>

        <div className="sheet-grid gap-y-10 pt-16">
          <h1
            id="hero-title"
            className="col-span-4 text-display font-medium md:col-span-11"
          >
            <span className="rise-clip">
              <span style={stagger(0)}>{h.titleA}</span>
            </span>{" "}
            <span className="rise-clip">
              <em className="font-serif font-normal italic tracking-normal" style={stagger(1)}>
                {h.titleAccent}
              </em>
            </span>{" "}
            <br className="hidden md:block" />
            <span className="rise-clip">
              <span style={stagger(2)}>{h.titleB}</span>
            </span>
          </h1>

          <div className="col-span-4 md:col-span-12">
            <LiveDimension measuringLabel={h.measuring} />
          </div>

          <p style={stagger(1)} className="intro col-span-4 max-w-[36ch] text-lead text-ink-soft md:col-span-6 md:col-start-1">
            {h.lead}
          </p>

          <div style={stagger(2)} className="intro col-span-4 flex flex-col items-start gap-5 md:col-span-5 md:col-start-8 md:items-end md:self-end">
            <p className="annot flex items-center gap-2">
              <span className="relative inline-flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {h.availability}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-ink px-5 py-3 text-paper transition-[background-color,transform] hover:bg-accent active:scale-[0.98]"
              >
                {h.ctaPrimary}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a href="#projects" className="link-draw self-center py-1">
                {h.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
