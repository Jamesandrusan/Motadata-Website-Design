"use client";

const testimonials = [
  {
    quote:
      "The Motadata community has been instrumental in our success. The support we receive from both the team and fellow users is outstanding. It\u2019s more than a product \u2013 it\u2019s a partnership.",
    initials: "TC",
    name: "Sarah Johnson",
    role: "Director of IT Operations, TechCorp Global",
  },
  {
    quote:
      "Joining the Motadata community was the best decision for our monitoring strategy. The shared knowledge and best practices have helped us optimize our infrastructure significantly.",
    initials: "CS",
    name: "Michael Chen",
    role: "Senior DevOps Engineer, CloudScale Inc",
  },
  {
    quote:
      "The responsiveness and expertise of the Motadata community is unmatched. Every question gets answered, and the collaborative environment drives continuous improvement.",
    initials: "DD",
    name: "Priya Patel",
    role: "IT Manager, Digital Dynamics",
  },
];

// Duplicate for seamless loop
const marqueeItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export function CmTestimonials() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span className="text-overline text-primary">Testimonials</span>
          <div className="hidden h-px flex-1 bg-border sm:block" />
          <span className="text-body-xs text-muted-foreground">What Our Community Members Are Saying</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee gap-4 py-2">
          {marqueeItems.map((t, i) => (
            <div
              key={i}
              className="w-[360px] shrink-0 rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-body-xs text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-label-sm-strong text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-label-md text-foreground">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl px-6 text-center">
        <a href="#" className="text-label-md text-primary hover:underline underline-offset-4">
          See all Reviews
        </a>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
