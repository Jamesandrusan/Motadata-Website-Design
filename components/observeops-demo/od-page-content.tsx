"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { OdLogin } from "./od-login";
import { OdLoginV2 } from "./od-login-v2";
import { OdLoginV3 } from "./od-login-v3";
import { OdLoginV4 } from "./od-login-v4";
import { OdLoginV5 } from "./od-login-v5";
import { OdLoginV6 } from "./od-login-v6";
import { OdOtpVerification } from "./od-otp-verification";
import { OdDemoEnvironment } from "./od-demo-environment";
import { OD_DARK, OD_LIGHT } from "./od-theme";

type Step = "login" | "otp" | "demo";
type Variant = "1" | "2" | "3" | "4" | "5" | "6";

const VARIANTS: { id: Variant; label: string }[] = [
  { id: "1", label: "Split Panel" },
  { id: "2", label: "Pattern Card" },
  { id: "3", label: "Borderless" },
  { id: "4", label: "Filled Pattern" },
  { id: "5", label: "Product-Led" },
  { id: "6", label: "Stroke Pattern" },
];

function isVariant(v: string | null): v is Variant {
  return v === "1" || v === "2" || v === "3" || v === "4" || v === "5" || v === "6";
}

export function OdPageContent() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("v");
  const initialVariant: Variant = isVariant(raw) ? raw : "1";

  const [variant, setVariant] = useState<Variant>(initialVariant);
  const [step, setStep] = useState<Step>("login");
  const [email, setEmail] = useState("");
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const theme = themeMode === "dark" ? OD_DARK : OD_LIGHT;
  const router = useRouter();

  /* All options go through OTP verification */
  const handleLogin = (userEmail: string) => {
    setEmail(userEmail);
    setStep("otp");
  };

  const handleOtpVerified = () => {
    setStep("demo");
  };

  const handleExitDemo = () => {
    router.push("/products/observeops");
  };

  return (
    <>
      {/* ── Variant Switcher + Theme Toggle ── */}
      {step !== "demo" && (
        <div className={`fixed top-5 right-5 z-[200] flex items-center gap-1.5 rounded-full border ${theme.switcherBorder} ${theme.switcherBg} px-1.5 py-1 shadow-lg backdrop-blur-sm`}>
          {step === "login" && (
            <>
              {VARIANTS.map(({ id }) => (
                <button
                  key={id}
                  onClick={() => setVariant(id)}
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-label-sm-strong transition-all ${
                    variant === id
                      ? "bg-[#F17463] text-white shadow-sm"
                      : theme.switcherText
                  }`}
                >
                  {id}
                </button>
              ))}
              <div className={`mx-0.5 h-4 w-px ${theme.divider}`} />
            </>
          )}
          <button
            onClick={() => setThemeMode(m => m === "dark" ? "light" : "dark")}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${theme.switcherText}`}
            title={themeMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {themeMode === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
        </div>
      )}

      {/* ── Login Variants ── */}
      {step === "login" && variant === "1" && <OdLogin onLogin={handleLogin} theme={theme} />}
      {step === "login" && variant === "2" && <OdLoginV2 onLogin={handleLogin} theme={theme} />}
      {step === "login" && variant === "3" && <OdLoginV3 onLogin={handleLogin} theme={theme} />}
      {step === "login" && variant === "4" && <OdLoginV4 onLogin={handleLogin} theme={theme} />}
      {step === "login" && variant === "5" && <OdLoginV5 onLogin={handleLogin} theme={theme} />}
      {step === "login" && variant === "6" && <OdLoginV6 onLogin={handleLogin} theme={theme} />}

      {/* ── OTP Verification (all options) ── */}
      {step === "otp" && (
        <OdOtpVerification email={email} onVerified={handleOtpVerified} theme={theme} />
      )}

      {/* ── Demo Dashboard ── */}
      <AnimatePresence>
        {step === "demo" && (
          <OdDemoEnvironment email={email} onExit={handleExitDemo} />
        )}
      </AnimatePresence>
    </>
  );
}
