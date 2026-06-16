"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function CareersCta() {
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <motion.div
            className="group relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-white sm:px-16 sm:py-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <DottedGlowBackground
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
              gap={14}
              radius={1.8}
              opacity={0.6}
              color="rgba(255,255,255,0.4)"
            />
            <div className="relative z-10">
              <h2 className="text-display-md">
                Your Next Opportunity Could Be Coming Soon
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
                Share your resume, and we&apos;ll match you when the right role opens.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="h-12 rounded-xl bg-white text-foreground hover:bg-white/90 px-8"
                  onClick={() => setShowModal(true)}
                >
                  Submit Your Resume <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border/60 bg-white p-8 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <h3 className="text-heading-md">
                Submit Your Resume
              </h3>
              <p className="mt-1 text-body-xs text-muted-foreground">
                We&apos;ll match you when the right role opens.
              </p>

              {/* Form */}
              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Full Name */}
                <div>
                  <label className="mb-1.5 block text-label-md">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="h-11"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-label-md">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="h-11"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1.5 block text-label-md">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="h-11"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-label-md">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us a bit about yourself and why you're interested in joining Motadata..."
                    rows={4}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="mb-1.5 block text-label-md">
                    Resume/CV <span className="text-primary">*</span>
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setFileName(file ? file.name : "");
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed border-border/60 bg-muted/30 px-6 py-6 text-center transition-colors hover:border-primary/30 hover:bg-muted/50"
                  >
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    {fileName ? (
                      <p className="text-label-md">{fileName}</p>
                    ) : (
                      <p className="text-body-xs text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                    )}
                    <p className="text-caption text-muted-foreground/60">
                      PDF, DOC, or DOCX (max. 5MB)
                    </p>
                  </button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 px-6 text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="h-11 px-6 text-sm">
                    Submit
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
