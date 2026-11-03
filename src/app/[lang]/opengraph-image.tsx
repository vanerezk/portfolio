import { ImageResponse } from "next/og";
import { getDictionary, isLocale, locales, site } from "@/content";
import { loadFont } from "@/lib/fonts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Vanessa Rezk";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const paper = "#efe6d6";
const ink = "#5a1a24";
const soft = "#7d4a50";
const accent = "#d4577f";
const accentInk = "#b0305a";
const line = "rgba(90,26,36,0.08)";

/** Portada del plano en 1200×630: retícula, titular, cota y cajetín. */
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(isLocale(lang) ? lang : "es");
  const [geist, geistMedium, mono, serifItalic] = await Promise.all([
    loadFont("Geist-Regular.ttf"),
    loadFont("Geist-Medium.ttf"),
    loadFont("GeistMono-Regular.ttf"),
    loadFont("InstrumentSerif-Italic.ttf"),
  ]);

  const annot = { fontFamily: "Geist Mono", fontSize: 15, letterSpacing: 1.5, textTransform: "uppercase" as const };
  const cell = { display: "flex", padding: "10px 16px", borderLeft: `1px solid ${ink}` };

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", padding: 20, background: paper }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 40,
          border: `1px solid ${ink}`,
          backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          color: ink,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", color: soft, ...annot }}>
          <span>
            {t.sheets.hero.code} · {t.sheets.hero.title}
          </span>
          <span>{t.hero.eyebrow}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Cota sobre el titular */}
          <div style={{ display: "flex", alignItems: "center", width: 900, marginBottom: 20, color: accent }}>
            <div style={{ width: 1, height: 18, background: accent }} />
            <div style={{ flex: 1, height: 1, background: accent }} />
            <span style={{ ...annot, fontSize: 14, padding: "0 12px" }}>1:1</span>
            <div style={{ flex: 1, height: 1, background: accent }} />
            <div style={{ width: 1, height: 18, background: accent }} />
          </div>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 500, letterSpacing: -4, lineHeight: 0.95 }}>
            {t.hero.titleA}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 104, fontWeight: 500, letterSpacing: -4, lineHeight: 0.95 }}>
            <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic", fontWeight: 400, color: accentInk, letterSpacing: -2, marginRight: 24 }}>
              {t.hero.titleAccent}
            </span>
            <span>{t.hero.titleB}</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", border: `1px solid ${ink}`, background: paper, ...annot }}>
            <div style={{ ...cell, borderLeft: "none", color: soft }}>{t.nav.project}</div>
            <div style={{ ...cell, color: ink }}>{site.name}</div>
            <div style={{ ...cell, color: soft }}>
              {t.nav.revision} {site.revision}
            </div>
          </div>
        </div>
      </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist, weight: 400, style: "normal" },
        { name: "Geist", data: geistMedium, weight: 500, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
        { name: "Instrument Serif", data: serifItalic, weight: 400, style: "italic" },
      ],
    },
  );
}
