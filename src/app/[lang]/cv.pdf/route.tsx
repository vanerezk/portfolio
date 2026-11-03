import { renderToBuffer } from "@react-pdf/renderer";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, site } from "@/content";
import { CvDocument } from "@/components/CvDocument";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const pdf = await renderToBuffer(<CvDocument t={getDictionary(lang)} />);
  const file = `${site.name.replace(/\s+/g, "-")}-CV-${lang.toUpperCase()}.pdf`;
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${file}"`,
    },
  });
}
