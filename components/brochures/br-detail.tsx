"use client";

import { ResourceDetail } from "@/components/resources/resource-detail";
import { brochures, type Brochure, type BrochureDetail } from "@/lib/brochures-data";

export function BrDetail({ br }: { br: Brochure & { detail: BrochureDetail } }) {
  const d = br.detail;
  // Prefer other brochures that also have a detail page, then fill with the rest.
  const others = brochures.filter((b) => b.id !== br.id);
  const related = [...others.filter((b) => b.detail), ...others.filter((b) => !b.detail)].slice(0, 3);

  return (
    <ResourceDetail
      back={{ href: "/resources/brochures", label: "All brochures" }}
      badge={`${br.tag} · Brochure`}
      title={br.title}
      desc={br.desc}
      hook={d.hook}
      overview={d.overview}
      highlights={{ title: "Key capabilities", items: d.highlights }}
      chapters={{ title: "What's inside", items: d.sections }}
      audience={{ title: "Who it's for", items: d.audience }}
      form={{ heading: "Download Brochure", buttonLabel: "Get the Free Brochure" }}
      related={{
        title: "Related brochures",
        href: "/resources/brochures",
        cta: "View brochure",
        items: related.map((r) => ({
          href: r.detail ? `/resources/brochures/${r.id}` : "/resources/brochures",
          tag: r.tag,
          title: r.title,
        })),
      }}
    />
  );
}
