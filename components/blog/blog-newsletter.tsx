"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
        <Mail className="h-4 w-4" />
        Subscribe to Our Newsletter
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
        Get the latest insights and updates delivered to your inbox.
      </p>

      {submitted ? (
        <div className="mt-4 flex items-center gap-2 text-[13px] font-medium text-green-600">
          <CheckCircle className="h-4 w-4" />
          Thanks for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-[13px] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <Button type="submit" size="sm" className="w-full text-[13px]">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}
