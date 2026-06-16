"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface FtFormProps {
  compact?: boolean;
  productSlug?: string;
}

interface FormErrors {
  [key: string]: string;
}

export function FtForm({ compact = false, productSlug = "serviceops" }: FtFormProps) {
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});
  const [values, setValues] = useState({
    fullName: "",
    companyName: "",
    country: "",
    contact: "",
    email: "",
    queries: "",
  });

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

    if (!values.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!compact) {
      if (!values.companyName.trim()) newErrors.companyName = "Company name is required";
      if (!values.country.trim()) newErrors.country = "Country is required";
      if (!values.contact.trim()) newErrors.contact = "Contact number is required";
    }
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!compact && !values.queries.trim()) newErrors.queries = "Please describe your requirements";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push(`/free-trial/thank-you?product=${productSlug}`);
    }
  };

  const inputClass = (field: string) =>
    `h-11 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40 ${
      errors[field] ? "border-red-400" : "border-border"
    }`;

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="mb-1.5 block text-label-md text-foreground">
          Full Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={values.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className={inputClass("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
        )}
      </div>

      {!compact && (
        <div>
          <label className="mb-1.5 block text-label-md text-foreground">
            Company Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your company name"
            value={values.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            className={inputClass("companyName")}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>
          )}
        </div>
      )}

      {!compact && (
        <div>
          <label className="mb-1.5 block text-label-md text-foreground">
            Country <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your country"
            value={values.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className={inputClass("country")}
          />
          {errors.country && (
            <p className="mt-1 text-xs text-red-500">{errors.country}</p>
          )}
        </div>
      )}

      {!compact && (
        <div>
          <label className="mb-1.5 block text-label-md text-foreground">
            Contact number <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={values.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            className={inputClass("contact")}
          />
          {errors.contact && (
            <p className="mt-1 text-xs text-red-500">{errors.contact}</p>
          )}
        </div>
      )}

      <div>
        <label className="mb-1.5 block text-label-md text-foreground">
          Email <span className="text-primary">*</span>
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

      {!compact && (
        <div>
          <label className="mb-1.5 block text-label-md text-foreground">
            Write your queries here <span className="text-primary">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your requirements and questions..."
            value={values.queries}
            onChange={(e) => handleChange("queries", e.target.value)}
            className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/40 resize-none ${
              errors.queries ? "border-red-400" : "border-border"
            }`}
          />
          {errors.queries && (
            <p className="mt-1 text-xs text-red-500">{errors.queries}</p>
          )}
        </div>
      )}

      <p className="text-caption text-muted-foreground">
        By submitting this form, I agree to the{" "}
        <a href="#" className="text-primary hover:underline">
          Privacy Policy
        </a>{" "}
        and consent to being contacted by Motadata.
      </p>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-label-md-strong uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
      >
        Download Now
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
