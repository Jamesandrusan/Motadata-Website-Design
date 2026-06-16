"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const FREE_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
];

interface FormErrors {
  [key: string]: string;
}

export interface DemoUser {
  name: string;
  email: string;
  company: string;
}

interface LdEmailGateProps {
  onSubmit: (user: DemoUser) => void;
}

export function LdEmailGate({ onSubmit }: LdEmailGateProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [values, setValues] = useState({ name: "", email: "", company: "" });

  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.company.trim()) newErrors.company = "Company name is required";
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email";
    } else {
      const domain = values.email.split("@")[1]?.toLowerCase();
      if (domain && FREE_DOMAINS.includes(domain)) {
        newErrors.email = "Please use your business email";
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit({ name: values.name, email: values.email, company: values.company });
    }
  };

  const inputClass = (field: string) =>
    `h-11 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40 ${
      errors[field] ? "border-red-400" : "border-border"
    }`;

  return (
    <div className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
      <h2 className="text-heading-md text-center mb-1">
        Access the Live Demo
      </h2>
      <p className="text-body-xs text-muted-foreground text-center mb-6">
        Enter your business email to get started
      </p>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="mb-1.5 block text-label-md text-foreground">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-label-md text-foreground">
            Business Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-label-md text-foreground">
            Company <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your company name"
            value={values.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className={inputClass("company")}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-500">{errors.company}</p>
          )}
        </div>

        <p className="text-caption text-muted-foreground">
          By continuing, I agree to the{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>{" "}
          and consent to being contacted by Motadata.
        </p>

        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-label-md-strong uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start Demo
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
