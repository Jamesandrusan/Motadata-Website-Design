"use client";

import { ResourceDetail } from "@/components/resources/resource-detail";
import { ebooks, type Ebook } from "@/lib/ebooks-data";

export function EbDetail({ eb }: { eb: Ebook }) {
  const related = ebooks.filter((e) => e.id !== eb.id).slice(0, 3);

  return (
    <ResourceDetail
      back={{ href: "/resources/ebooks", label: "All ebooks" }}
      badge={`${eb.tag} · Ebook`}
      title={eb.title}
      desc={eb.desc}
      overview={eb.overview}
      highlights={{ title: "Key takeaways", items: eb.highlights }}
      chapters={{ title: "What's inside", items: eb.chapters }}
      audience={{ title: "Who should read this", items: eb.audience }}
      form={{ heading: "Download Ebook", buttonLabel: "Download Free Ebook" }}
      mobileCta="Download the Ebook"
      related={{
        title: "Related ebooks",
        href: "/resources/ebooks",
        cta: "Read more",
        items: related.map((r) => ({ href: `/resources/ebooks/${r.id}`, tag: r.tag, title: r.title })),
      }}
    />
  );
}
