import { notFound } from "next/navigation";
import { getDictionary, isLocale, site } from "@/content";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Sheet } from "@/components/Sheet";
import { ProjectIndex } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { ContactBlock } from "@/components/Contact";
import { TitleBlock } from "@/components/TitleBlock";
import { GridOverlay } from "@/components/GridOverlay";
import { CommandPalette } from "@/components/CommandPalette";
import { ScrollReveal } from "@/components/ScrollReveal";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <a
        href="#main"
        className="annot sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.nav.skip}
      </a>

      <main id="main">
        <Hero t={t} />
        <Manifesto t={t} />

        <Sheet id="projects" {...t.sheets.projects} className="pb-24 md:pb-40">
          <p data-reveal className="mb-12 max-w-[52ch] text-lead text-ink-soft md:mb-20">{t.projects.intro}</p>
          <ProjectIndex t={t} />
        </Sheet>

        <Experience t={t} lang={lang} />
        <Services t={t} />
        <Stack t={t} />

        <Sheet id="contact" {...t.sheets.contact}>
          <ContactBlock t={t} lang={lang} />
        </Sheet>
      </main>

      <footer className="frame annot flex flex-col gap-2 border-t border-line pt-6 pb-28 text-ink-soft md:flex-row md:justify-between md:pb-48">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{t.footer}</span>
      </footer>

      <TitleBlock t={t} lang={lang} />
      <GridOverlay />
      <CommandPalette t={t} lang={lang} />
      <ScrollReveal />
    </>
  );
}
