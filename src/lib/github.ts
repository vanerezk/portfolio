import { site } from "@/content";

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
export type ContributionCalendar = { total: number; weeks: ContributionDay[][] };

const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 } as const;

type ApiDay = { date: string; contributionCount: number; contributionLevel: keyof typeof LEVELS };

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`;

/**
 * Calendario de contribuciones de los últimos 12 meses (API GraphQL de GitHub).
 * Se cachea un día. Sin GITHUB_TOKEN o si la API falla devuelve null y la sección no se pinta.
 */
export async function getContributions(): Promise<ContributionCalendar | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn("[github] Falta GITHUB_TOKEN: no se muestra la actividad");
    return null;
  }
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { login: site.github } }),
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const cal = json.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) throw new Error(JSON.stringify(json.errors ?? json));
    return {
      total: cal.totalContributions,
      weeks: cal.weeks.map((w: { contributionDays: ApiDay[] }) =>
        w.contributionDays.map((d) => ({
          date: d.date,
          count: d.contributionCount,
          level: LEVELS[d.contributionLevel] ?? 0,
        })),
      ),
    };
  } catch (err) {
    console.error("[github] No se ha podido leer la actividad:", err);
    return null;
  }
}
