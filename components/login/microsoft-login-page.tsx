"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

const quotes = [
  {
    text: "Ability is what you\u2019re capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
    author: "Lou Holtz",
  },
  {
    text: "It\u2019s not the will to win that matters \u2014 everyone has that. It\u2019s the will to prepare to win that matters.",
    author: "Lou Holtz",
  },
  {
    text: "You\u2019re never as good as everyone tells you when you win, and you\u2019re never as bad as they say when you lose.",
    author: "Lou Holtz",
  },
  {
    text: "Do right. Do your best. Treat others as you want to be treated.",
    author: "Lou Holtz",
  },
  {
    text: "Winners embrace hard work. They love the discipline of it, the trade-off they\u2019re making to win.",
    author: "Lou Holtz",
  },
  {
    text: "Don\u2019t tell your problems to people \u2014 eighty percent don\u2019t care and the other twenty percent are glad you have them.",
    author: "Lou Holtz",
  },
  {
    text: "If you\u2019re bored with life, if you don\u2019t get up every morning with a burning desire to do things \u2014 you don\u2019t have enough goals.",
    author: "Lou Holtz",
  },
  {
    text: "No one has ever drowned in sweat.",
    author: "Lou Holtz",
  },
  {
    text: "Show me someone who has done something worthwhile, and I\u2019ll show you someone who has overcome adversity.",
    author: "Lou Holtz",
  },
  {
    text: "Life is ten percent what happens to you and ninety percent how you respond to it.",
    author: "Lou Holtz",
  },
];

function MicrosoftLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
    </svg>
  );
}

/*
  Theme 1: White left + primary gradient right
  Theme 2: Black left + dark grey right
  Theme 3: Pure black both sides, grey pattern only
*/
function getColors(theme: number) {
  if (theme === 3) {
    return {
      pageBg: "#000000",
      leftBg: "#000000",
      leftText: "#ffffff",
      leftMuted: "#888888",
      leftLabel: "#cccccc",
      dividerBg: "#000000",
      dividerText: "#555555",
      dividerBorder: "#333333",
      inputBorder: "#333333",
      inputBg: "#0a0a0a",
      inputText: "#ffffff",
      rightBg: "#000000",
      rightPatternOpacity: 0.45,
      rightPatternFilter: "invert(1) brightness(0.35)",
      quoteText: "#e0e0e0",
      quoteAuthor: "#777777",
      quoteMark: "#222222",
      dotActive: "#aaaaaa",
      dotInactive: "#333333",
    };
  }
  if (theme === 2) {
    return {
      pageBg: "#0a0a0a",
      leftBg: "#0a0a0a",
      leftText: "#ffffff",
      leftMuted: "#9ca3af",
      leftLabel: "#e5e7eb",
      dividerBg: "#0a0a0a",
      dividerText: "#4b5563",
      dividerBorder: "#374151",
      inputBorder: "#374151",
      inputBg: "#141414",
      inputText: "#ffffff",
      rightBg: "linear-gradient(135deg, #1a1a1a 0%, #222222 50%, #2a2a2a 100%)",
      rightPatternOpacity: 0.3,
      rightPatternFilter: "invert(1) brightness(0.4)",
      quoteText: "#f3f4f6",
      quoteAuthor: "#6b7280",
      quoteMark: "#374151",
      dotActive: "#d1d5db",
      dotInactive: "#374151",
    };
  }
  // Theme 1
  return {
    pageBg: "#ffffff",
    leftBg: "#ffffff",
    leftText: "#111827",
    leftMuted: "#6b7280",
    leftLabel: "#111827",
    dividerBg: "#ffffff",
    dividerText: "#9ca3af",
    dividerBorder: "#e5e7eb",
    inputBorder: "#d1d5db",
    inputBg: "#ffffff",
    inputText: "#111827",
    rightBg: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 50%, hsl(var(--primary) / 0.6) 100%)",
    rightPatternOpacity: 0.5,
    rightPatternFilter: "invert(1)",
    quoteText: "#ffffff",
    quoteAuthor: "rgba(255,255,255,0.7)",
    quoteMark: "rgba(255,255,255,0.2)",
    dotActive: "#ffffff",
    dotInactive: "rgba(255,255,255,0.4)",
  };
}

export function MicrosoftLoginPage() {
  const [theme, setTheme] = useState(1);
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const c = getColors(theme);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToQuote = useCallback((i: number) => {
    setFade(false);
    setTimeout(() => {
      setActive(i);
      setFade(true);
    }, 400);
  }, []);

  const hidden = mounted && !visible;
  const animClass = `transition-all duration-500 ease-out ${hidden ? "translate-y-5 opacity-0" : "translate-y-0 opacity-100"}`;

  const switcherDark = theme >= 2;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: c.pageBg,
        transition: "background-color 0.5s",
      }}
    >
      {/* ─── Theme Switcher ─── */}
      <div
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 99999,
          display: "flex",
          gap: 4,
          borderRadius: 10,
          padding: 4,
          backgroundColor: switcherDark ? "#1f1f1f" : "#f0f0f0",
          border: switcherDark ? "1px solid #333" : "1px solid #ddd",
          transition: "all 0.3s",
        }}
      >
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setTheme(n)}
            style={{
              borderRadius: 6,
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              backgroundColor:
                theme === n
                  ? switcherDark ? "#333" : "#ffffff"
                  : "transparent",
              color:
                theme === n
                  ? switcherDark ? "#fff" : "#111"
                  : "#888",
              boxShadow:
                theme === n
                  ? switcherDark
                    ? "0 1px 4px rgba(0,0,0,0.3)"
                    : "0 1px 4px rgba(0,0,0,0.15)"
                  : "none",
              transition: "all 0.2s",
            }}
          >
            {n}
          </button>
        ))}
      </div>

      {/* ─── Left Side ─── */}
      <div
        style={{
          flex: "0 0 50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
          backgroundColor: c.leftBg,
          transition: "background-color 0.5s",
        }}
      >
        <div className={animClass} style={{ width: "100%", maxWidth: 420 }}>
          {/* Logo */}
          <Link href="/" className="inline-block" style={{ color: theme >= 2 ? "#ffffff" : "#111827", transition: "color 0.5s" }}>
            <BrandLogo className="h-7 w-auto" />
          </Link>

          {/* Heading */}
          <h1
            style={{
              marginTop: 32,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: c.leftText,
              transition: "color 0.5s",
            }}
          >
            Login
          </h1>
          <p
            style={{
              marginTop: 8,
              fontSize: 14,
              color: c.leftMuted,
              transition: "color 0.5s",
            }}
          >
            Sign in with your organizational Microsoft account
          </p>

          {/* Microsoft SSO Button */}
          <button
            type="button"
            style={{
              marginTop: 32,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              width: "100%",
              height: 48,
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 500,
              border: `2px solid ${c.inputBorder}`,
              backgroundColor: c.inputBg,
              color: c.leftText,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            <MicrosoftLogo />
            Sign in with Microsoft
          </button>

          {/* Divider */}
          <div style={{ position: "relative", margin: "32px 0" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderTop: `1px solid ${c.dividerBorder}`,
                  transition: "border-color 0.5s",
                }}
              />
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  padding: "0 12px",
                  fontSize: 12,
                  textTransform: "uppercase",
                  backgroundColor: c.dividerBg,
                  color: c.dividerText,
                  transition: "all 0.5s",
                }}
              >
                or
              </span>
            </div>
          </div>

          {/* Magic Link */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <label
              htmlFor="email"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: c.leftLabel,
                transition: "color 0.5s",
              }}
            >
              Email address
            </label>
            <div style={{ position: "relative" }}>
              <Mail
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 16,
                  height: 16,
                  color: c.leftMuted,
                  transition: "color 0.5s",
                }}
              />
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 8,
                  border: `1px solid ${c.inputBorder}`,
                  backgroundColor: c.inputBg,
                  color: c.inputText,
                  paddingLeft: 40,
                  paddingRight: 12,
                  fontSize: 14,
                  outline: "none",
                  transition: "all 0.5s",
                }}
              />
            </div>
            <Button className="h-11 w-full text-label-md">
              Send Magic Link
            </Button>
          </div>

          {/* Back link */}
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-sm hover:text-primary"
              style={{
                color: c.leftMuted,
                transition: "color 0.3s",
              }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to portal selection
            </Link>
          </div>

          {/* Help */}
          <p
            style={{
              marginTop: 16,
              textAlign: "center",
              fontSize: 12,
              color: c.leftMuted,
              transition: "color 0.5s",
            }}
          >
            Having trouble?{" "}
            <a
              href="mailto:support@motadata.com"
              className="font-medium text-primary hover:underline"
            >
              Contact IT Support
            </a>
          </p>
        </div>
      </div>

      {/* ─── Right Side ─── */}
      <div
        className="hidden lg:flex"
        style={{
          flex: "0 0 50%",
          position: "relative",
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: c.rightBg,
            transition: "background 0.5s",
          }}
        />

        {/* Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: "url('/pattern-motadata.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "900px",
            opacity: c.rightPatternOpacity,
            filter: c.rightPatternFilter,
            transition: "opacity 0.5s, filter 0.5s",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "48px 140px",
          }}
        >
          {/* Quote mark */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 1,
              userSelect: "none",
              color: c.quoteMark,
              transition: "color 0.5s",
            }}
          >
            &ldquo;
          </div>

          {/* Quote */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: -40 }}>
            <div
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
              }}
            >
              <p
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: c.quoteText,
                  transition: "color 0.5s",
                }}
              >
                {quotes[active].text}
              </p>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 18,
                  fontWeight: 500,
                  color: c.quoteAuthor,
                  transition: "color 0.5s",
                }}
              >
                &mdash; {quotes[active].author}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToQuote(i)}
                style={{
                  height: 8,
                  width: i === active ? 24 : 8,
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  backgroundColor: i === active ? c.dotActive : c.dotInactive,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>

          {/* Watermark */}
          <div style={{ position: "absolute", bottom: 24, right: 24, opacity: 0.1 }}>
            <BrandLogo className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
