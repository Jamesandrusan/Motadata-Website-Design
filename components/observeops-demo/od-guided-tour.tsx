"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import { tourSteps } from "./od-tour-data";

const TOUR_STORAGE_KEY = "od-tour-completed";

interface OdGuidedTourProps {
  onComplete: () => void;
}

export function OdGuidedTour({ onComplete }: OdGuidedTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const step = tourSteps[currentStep];

  const updateTargetRect = useCallback(() => {
    const el = document.querySelector(step.target);
    if (el) {
      setTargetRect(el.getBoundingClientRect());
    } else {
      setTargetRect(null);
    }
  }, [step.target]);

  useEffect(() => {
    updateTargetRect();
    const handleResize = () => updateTargetRect();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, true);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize, true);
    };
  }, [updateTargetRect]);

  const finishTour = useCallback(() => {
    localStorage.setItem(TOUR_STORAGE_KEY, "true");
    onComplete();
  }, [onComplete]);

  const goNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      finishTour();
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const isLast = currentStep === tourSteps.length - 1;
  const padding = 8;

  // Spotlight cutout rect
  const cx = targetRect ? targetRect.x - padding : 0;
  const cy = targetRect ? targetRect.y - padding : 0;
  const cw = targetRect ? targetRect.width + padding * 2 : 0;
  const ch = targetRect ? targetRect.height + padding * 2 : 0;

  // Tooltip position — clamp to viewport on small screens
  const getTooltipStyle = (): React.CSSProperties => {
    if (!targetRect) return { top: "50%", left: "50%", transform: "translate(-50%,-50%)" };

    const gap = 16;
    const vw = typeof window !== "undefined" ? window.innerWidth : 1024;
    const isMobile = vw < 640;

    // On mobile, always position below the target and center horizontally
    if (isMobile) {
      return {
        top: Math.min(targetRect.bottom + gap, vw * 0.6),
        left: 16,
        right: 16,
        transform: "none",
      };
    }

    switch (step.position) {
      case "right":
        return {
          top: targetRect.top + targetRect.height / 2,
          left: Math.min(targetRect.right + gap, vw - 340),
          transform: "translateY(-50%)",
        };
      case "left":
        return {
          top: targetRect.top + targetRect.height / 2,
          left: Math.max(targetRect.left - gap, 16),
          transform: "translate(-100%,-50%)",
        };
      case "bottom":
        return {
          top: targetRect.bottom + gap,
          left: Math.max(Math.min(targetRect.left + targetRect.width / 2, vw - 176), 176),
          transform: "translateX(-50%)",
        };
      case "top":
        return {
          top: targetRect.top - gap,
          left: Math.max(Math.min(targetRect.left + targetRect.width / 2, vw - 176), 176),
          transform: "translate(-50%,-100%)",
        };
    }
  };

  return (
    <div className="fixed inset-0 z-[200]">
      {/* SVG Spotlight Mask */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <mask id="spotlight-mask">
            <rect width="100%" height="100%" fill="white" />
            {targetRect && (
              <rect
                x={cx}
                y={cy}
                width={cw}
                height={ch}
                rx={12}
                fill="black"
              />
            )}
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="rgba(0,0,0,0.6)"
          mask="url(#spotlight-mask)"
        />
      </svg>

      {/* Tooltip */}
      <div
        className="absolute z-10 w-[calc(100vw-2rem)] rounded-xl border border-neutral-700 bg-[#1a1d21] p-5 shadow-2xl sm:w-80"
        style={getTooltipStyle()}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-label-sm uppercase tracking-wider" style={{ color: "#F17463" }}>
            Step {currentStep + 1} of {tourSteps.length}
          </span>
          <button
            onClick={finishTour}
            className="rounded-lg p-1 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h3 className="text-label-md-strong text-white">{step.title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">
          {step.description}
        </p>

        {/* Progress dots */}
        <div className="mt-4 flex items-center gap-1.5">
          {tourSteps.map((_, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === currentStep ? 16 : 6,
                backgroundColor: i === currentStep ? "#F17463" : "#3f3f46",
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={finishTour}
            className="text-caption text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Skip Tour
          </button>
          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                onClick={goPrev}
                className="inline-flex items-center gap-1 rounded-lg border border-neutral-700 px-3 py-1.5 text-caption text-neutral-300 transition-colors hover:bg-neutral-800"
              >
                <ArrowLeft className="h-3 w-3" />
                Back
              </button>
            )}
            <button
              onClick={goNext}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-label-sm-strong text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#F17463" }}
            >
              {isLast ? "Finish" : "Next"}
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function shouldShowTour(): boolean {
  if (typeof window === "undefined") return false;
  return !localStorage.getItem(TOUR_STORAGE_KEY);
}
