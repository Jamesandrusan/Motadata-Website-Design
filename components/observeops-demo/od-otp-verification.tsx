"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { OdTheme } from "./od-theme";

interface OdOtpVerificationProps {
  email: string;
  onVerified: () => void;
  theme: OdTheme;
}

export function OdOtpVerification({ email, onVerified, theme }: OdOtpVerificationProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = useCallback((index: number) => {
    inputRefs.current[index]?.focus();
  }, []);

  useEffect(() => {
    focusInput(0);
  }, [focusInput]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const digit = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    setError("");

    if (digit && index < 5) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;

    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasted[i] || "";
    }
    setOtp(newOtp);
    setError("");

    const nextEmpty = newOtp.findIndex((d) => !d);
    focusInput(nextEmpty === -1 ? 5 : nextEmpty);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) {
      setError("Please enter the full 6-digit code");
      return;
    }

    setVerifying(true);
    setTimeout(() => {
      onVerified();
    }, 1000);
  };

  const maskedEmail = email.replace(
    /^(.{2})(.*)(@.*)$/,
    (_, start, middle, end) => start + "*".repeat(middle.length) + end
  );

  return (
    <div className="fixed inset-0 z-[100] overflow-x-hidden overflow-y-auto" style={{ backgroundColor: theme.rootBg }}>
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6">
      <div className={`w-full max-w-md rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-8 sm:p-10`}>
        <div className="mb-8 flex justify-center">
          <BrandLogo className={`h-5 ${theme.logoClass}`} />
        </div>

        <h2 className={`text-center text-heading-md ${theme.textPrimary}`}>
          Verify Your Identity
        </h2>
        <p className={`mt-2 text-center text-sm ${theme.textTertiary}`}>
          We&apos;ve sent a verification code to
          <br />
          <span className={`font-medium ${theme.textSecondary}`}>{maskedEmail}</span>
        </p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-3" onPaste={handlePaste}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`h-14 w-11 rounded-xl border ${theme.inputBg} text-center text-heading-sm ${theme.inputText} outline-none transition-colors focus:border-[#F17463]/60 sm:h-16 sm:w-12 ${
                  error ? "border-red-500" : theme.inputBorder
                }`}
                disabled={verifying}
              />
            ))}
          </div>

          {error && (
            <p className="mt-3 text-center text-xs text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={verifying}
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-label-md-strong uppercase tracking-wider text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: "#F17463" }}
          >
            {verifying ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                Verify & Continue
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <p className={`mt-6 text-center text-xs ${theme.textMuted}`}>
          For this demo, enter any 6 digits to proceed.
        </p>
      </div>
      </div>
    </div>
  );
}
