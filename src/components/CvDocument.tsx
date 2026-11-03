import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { Dictionary } from "@/content";
import { site } from "@/content";
import { fontFile } from "@/lib/fonts";

Font.register({
  family: "Geist",
  fonts: [
    { src: fontFile("Geist-Regular.ttf"), fontWeight: 400 },
    { src: fontFile("Geist-Medium.ttf"), fontWeight: 500 },
  ],
});
Font.register({ family: "Geist Mono", src: fontFile("GeistMono-Regular.ttf") });
Font.register({ family: "Instrument Serif", src: fontFile("InstrumentSerif-Regular.ttf") });
// Sin guiones de partición: en un CV se leen como erratas.
Font.registerHyphenationCallback((word) => [word]);

const ink = "#5a1a24";
const soft = "#7d4a50";
const accent = "#b0305a";
const rule = "#e2d6c4";

const s = StyleSheet.create({
  page: { paddingVertical: 36, paddingHorizontal: 44, fontFamily: "Geist", fontSize: 8.8, color: ink, lineHeight: 1.4 },
  annot: { fontFamily: "Geist Mono", fontSize: 7, letterSpacing: 0.6, textTransform: "uppercase", color: soft },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: ink },
  name: { fontFamily: "Instrument Serif", fontSize: 34, lineHeight: 1 },
  title: { fontSize: 11, fontWeight: 500, marginTop: 6 },
  contact: { alignItems: "flex-end", gap: 2 },
  link: { color: ink, textDecoration: "none" },
  section: { marginTop: 12 },
  heading: { paddingBottom: 4, marginBottom: 6, borderBottomWidth: 0.5, borderBottomColor: rule },
  row: { flexDirection: "row", marginBottom: 7 },
  side: { width: 128, paddingRight: 10 },
  body: { flex: 1 },
  strong: { fontWeight: 500, fontSize: 10 },
  point: { flexDirection: "row", marginTop: 2, color: soft },
  dash: { width: 10, color: accent },
});

const host = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={s.section}>
      <Text style={[s.annot, s.heading]}>{title}</Text>
      {children}
    </View>
  );
}

/** CV en A4 generado con el mismo contenido que el portfolio (sin teléfono a propósito). */
export function CvDocument({ t }: { t: Dictionary }) {
  const { cv, experience: e } = t;
  const projects = t.projects.items.filter((p) => p.kind === "client");
  const links = t.contact.links.filter((l) => l.label !== "Upwork");

  return (
    <Document title={`${site.name} · CV`} author={site.name} subject={cv.title}>
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <View>
            <Text style={s.name}>{site.name}</Text>
            <Text style={s.title}>{cv.title}</Text>
          </View>
          <View style={s.contact}>
            <Text style={s.annot}>Málaga · {site.email}</Text>
            {links.map((l) => (
              <Link key={l.href} src={l.href} style={[s.annot, s.link]}>
                {host(l.href)}
              </Link>
            ))}
            <Link src={site.url} style={[s.annot, s.link, { color: accent }]}>
              {host(site.url)}
            </Link>
          </View>
        </View>

        <Section title={cv.headings.profile}>
          <Text>{cv.profile}</Text>
        </Section>

        <Section title={cv.headings.experience}>
          {e.items.map((job) => (
            <View key={`${job.company}-${job.period}`} style={s.row} wrap={false}>
              <Text style={[s.side, s.annot, { color: accent }]}>{job.period}</Text>
              <View style={s.body}>
                <Text style={s.strong}>
                  {job.company} <Text style={s.annot}>· {job.role}</Text>
                </Text>
                {job.points.map((point) => (
                  <View key={point} style={s.point}>
                    <Text style={s.dash}>—</Text>
                    <Text style={s.body}>{point}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </Section>

        <Section title={cv.headings.projects}>
          {projects.map((p) => (
            <View key={p.id} style={s.row} wrap={false}>
              <Text style={[s.side, s.annot]}>{p.year}</Text>
              <View style={s.body}>
                <Text style={s.strong}>{p.title}</Text>
                <Text style={{ color: soft }}>{p.summary}</Text>
                {p.links[0] && (
                  <Link src={p.links[0].href} style={[s.annot, s.link, { marginTop: 2, color: accent }]}>
                    {host(p.links[0].href)}
                  </Link>
                )}
              </View>
            </View>
          ))}
        </Section>

        <Section title={cv.headings.stack}>
          {t.stack.groups.map((g) => (
            <View key={g.material} style={[s.row, { marginBottom: 4 }]}>
              <Text style={[s.side, s.annot]}>{g.material}</Text>
              <Text style={s.body}>{g.items.map((i) => i.name).join(" · ")}</Text>
            </View>
          ))}
        </Section>

        <Section title={`${e.educationLabel} · ${e.languagesLabel}`}>
          <View style={s.row}>
            <Text style={[s.side, s.annot]}>{e.educationLabel}</Text>
            <Text style={s.body}>{e.education}</Text>
          </View>
          <View style={s.row}>
            <Text style={[s.side, s.annot]}>{e.languagesLabel}</Text>
            <Text style={s.body}>
              {e.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
            </Text>
          </View>
        </Section>

      </Page>
    </Document>
  );
}
