"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ChevronDown, Download } from "lucide-react";

/* Gated-download form shared by whitepaper and brochure detail pages
   (same fields as the Request a Demo form). */

const COUNTRIES = [
  "India", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates",
  "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Singapore", "Malaysia", "Indonesia",
  "Thailand", "Philippines", "Vietnam", "Japan", "South Korea", "Germany", "France", "Netherlands",
  "Italy", "Spain", "South Africa", "Kenya", "Nigeria", "Egypt", "Brazil", "Mexico", "Other",
];

type Fields = { name: string; company: string; country: string; phone: string; email: string };
type Errors = Partial<Record<keyof Fields | "consent", string>>;

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-label-md text-foreground">
      {children} <span className="text-primary">*</span>
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1 text-xs text-red-500">{msg}</p> : null;
}

export function DownloadForm({ heading, buttonLabel }: { heading: string; buttonLabel: string }) {
  const [form, setForm] = useState<Fields>({ name: "", company: "", country: "", phone: "", email: "" });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof Fields, v: string) => {
    setForm({ ...form, [k]: v });
    setErrors({ ...errors, [k]: undefined });
  };

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.country) e.country = "Please select a country";
    if (!form.phone.trim()) e.phone = "Contact number is required";
    else if (!/^[+\d][\d\s()-]{5,}$/.test(form.phone.trim())) e.phone = "Enter a valid contact number";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!consent) e.consent = "Please accept the terms to continue";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const fieldCls = (err?: string) =>
    `w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/15 ${err ? "border-red-400" : "border-border"}`;

  if (submitted) {
    return (
      <div className="py-4 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-7 w-7 text-green-600" />
        </div>
        <h2 className="text-heading-sm">You&apos;re all set!</h2>
        <p className="mt-2 text-body-xs text-muted-foreground">
          A download link has been sent to{" "}
          <span className="font-medium text-foreground">{form.email}</span>.
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Open PDF
        </a>
        <p className="mt-3 text-caption text-muted-foreground">
          Didn&apos;t receive the email?{" "}
          <button className="text-primary underline-offset-2 hover:underline" onClick={() => setSubmitted(false)}>
            Try again
          </button>
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-5">
        <h2 className="text-heading-sm">{heading}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <FieldLabel>Full Name</FieldLabel>
          <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} className={`h-11 ${fieldCls(errors.name)}`} />
          <FieldError msg={errors.name} />
        </div>

        <div>
          <FieldLabel>Company Name</FieldLabel>
          <input type="text" value={form.company} onChange={(e) => set("company", e.target.value)} className={`h-11 ${fieldCls(errors.company)}`} />
          <FieldError msg={errors.company} />
        </div>

        <div>
          <FieldLabel>Country</FieldLabel>
          <div className="relative">
            <select
              value={form.country}
              onChange={(e) => set("country", e.target.value)}
              className={`h-11 appearance-none pr-10 ${fieldCls(errors.country)} ${form.country ? "" : "text-muted-foreground"}`}
            >
              <option value="" disabled>Select country</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c} className="text-foreground">{c}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
          <FieldError msg={errors.country} />
        </div>

        <div>
          <FieldLabel>Contact number</FieldLabel>
          <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={`h-11 ${fieldCls(errors.phone)}`} />
          <FieldError msg={errors.phone} />
        </div>

        <div>
          <FieldLabel>Email</FieldLabel>
          <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={`h-11 ${fieldCls(errors.email)}`} />
          <FieldError msg={errors.email} />
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => { setConsent(e.target.checked); setErrors({ ...errors, consent: undefined }); }}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-border accent-primary"
            />
            <span className="text-caption leading-relaxed text-muted-foreground">
              I agree to the{" "}
              <a href="#" className="text-primary underline underline-offset-2">Terms of Service</a> and{" "}
              <Link href="/privacy-policy" className="text-primary underline underline-offset-2">Privacy Policy</Link>. I also
              acknowledge and consent to the collection, storage, processing, and transfer of my personal data in
              accordance with the{" "}
              <Link href="/privacy-policy" className="text-primary underline underline-offset-2">Privacy Policy</Link>.
            </span>
          </label>
          <FieldError msg={errors.consent} />
        </div>

        <button
          type="submit"
          className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-primary text-label-md-strong text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:opacity-95 hover:shadow-md hover:shadow-primary/25 active:scale-[0.99]"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          {buttonLabel}
        </button>
      </form>
    </>
  );
}
