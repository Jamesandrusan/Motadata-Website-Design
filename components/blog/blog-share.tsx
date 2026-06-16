"use client";

import { useState } from "react";
import { Check, Copy, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogShareProps {
  title: string;
  slug: string;
}

export function BlogShare({ title, slug }: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined"
    ? `${window.location.origin}/blog/${slug}`
    : `/blog/${slug}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] font-medium text-muted-foreground">Share:</span>

      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <Twitter className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={() =>
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <Linkedin className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={handleCopy}
      >
        {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}
