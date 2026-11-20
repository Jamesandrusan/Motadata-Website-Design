"use client";

import { ResourceDetail } from "@/components/resources/resource-detail";
import { whitepapers, type Whitepaper } from "@/lib/whitepapers-data";

export function WpDetail({ wp }: { wp: Whitepaper }) {
  const related = whitepapers.filter((w) => w.id !== wp.id).slice(0, 3);

  return (
    <ResourceDetail
      back={{ href: "/resources/whitepapers", label: "All whitepapers" }}
      badge={`${wp.tag} · Whitepaper`}
      title={wp.title}
      desc={wp.desc}
      overview={wp.overview}
      highlights={{ title: "Key takeaways", items: wp.highlights }}
      chapters={{ title: "What's inside", items: wp.chapters }}
      audience={{ title: "Who should read this", items: wp.audience }}
      form={{ heading: "Download Whitepaper", buttonLabel: "Download Free Whitepaper" }}
      mobileCta="Download the Whitepaper"
      related={{
        title: "Related whitepapers",
        href: "/resources/whitepapers",
        cta: "Read more",
        items: related.map((r) => ({ href: `/resources/whitepapers/${r.id}`, tag: r.tag, title: r.title })),
      }}
    />
  );
}
