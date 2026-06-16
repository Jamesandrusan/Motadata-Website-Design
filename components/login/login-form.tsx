"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LogIn } from "lucide-react";

type LoginFormProps = {
  portalType: "employee" | "okr" | "360-feedback";
};

export function LoginForm({ portalType }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="space-y-5"
    >
      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-label-md">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="name@motadata.com"
          autoComplete="email"
          required
        />
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label htmlFor="password" className="text-label-md">
          Password
        </label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Remember me + Forgot password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-border accent-primary"
          />
          Remember me
        </label>
        <a
          href="#"
          className="text-label-md text-primary hover:underline"
        >
          Forgot password?
        </a>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full" size="lg">
        <LogIn className="mr-2 h-4 w-4" />
        Sign In
      </Button>

      {/* Help text */}
      <p className="text-center text-caption text-muted-foreground">
        Having trouble signing in?{" "}
        <a
          href="mailto:it-support@motadata.com"
          className="font-medium text-primary hover:underline"
        >
          Contact IT Support
        </a>
      </p>
    </form>
  );
}
