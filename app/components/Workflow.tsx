"use client";

import { useEffect, useState } from "react";
import { SeoCard, Shot } from "./art";
import { Container, SectionHead } from "./ui";

const STEPS = [
  { t: "Upload your product photo", d: "Any phone photo. No studio needed." },
  { t: "Generate professional product imagery", d: "Clean, white-background, evenly lit." },
  { t: "Create studio imagery", d: "Styled scenes around your exact product." },
  { t: "Generate model photos", d: "Pick gender and target market." },
  { t: "Generate SEO content", d: "Title, description, tags and bullets." },
  { t: "Create the ecommerce listing", d: "Everything assembled, field by field." },
  { t: "Publish", d: "Amazon, Shopify or WooCommerce." },
];

function StepVisual({ i }: { i: number }) {
  if (i === 0) return <Shot kind="raw" className="h-full w-full" />;
  if (i === 1) return <Shot kind="white" className="h-full w-full" />;
  if (i === 2) return <Shot kind="studio" className="h-full w-full" />;
  if (i === 3) return <Shot kind="model" className="h-full w-full" />;
  if (i === 4)
    return (
      <div className="grid h-full place-items-center bg-blush p-5">
        <SeoCard className="w-full max-w-[260px]" />
      </div>
    );
  if (i === 5)
    return (
      <div className="grid h-full grid-cols-[1fr_1.4fr] place-items-center gap-3 bg-blush p-4">
        <Shot kind="studio" className="aspect-[4/5] w-full rounded-xl" />
        <SeoCard compact className="w-full" />
      </div>
    );
  return (
    <div className="grid h-full place-items-center bg-blush p-5">
      <div className="w-full max-w-[260px] space-y-2.5">
        {["Amazon", "Shopify", "WooCommerce"].map((p) => (
          <div key={p} className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 shadow-card">
            <span className="text-sm font-semibold text-plum">{p}</span>
            <span className="rounded-full bg-plum px-3 py-1 text-[11px] font-medium text-white">Publish</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Workflow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="how-it-works" className="on-dark relative overflow-hidden bg-plum py-20 text-white sm:py-28">
      <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #de88cf, transparent)" }}
      />
      <Container className="relative">
        <SectionHead
          eyebrow="How it works"
          dark
          title={<>Replace the entire <span className="text-pink">listing-production stack.</span></>}
          lead="Seven steps. One connected system. Nothing re-uploaded or re-typed."
        />

        <div
          className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ol className="relative">
            {/* connecting line */}
            <span className="absolute bottom-6 left-[25px] top-6 w-px bg-white/15" aria-hidden />
            <span
              className="absolute left-[25px] top-6 w-px bg-gradient-to-b from-pink to-white transition-all duration-700"
              style={{ height: `calc((100% - 48px) * ${active / (STEPS.length - 1)})` }}
              aria-hidden
            />
            {STEPS.map((s, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <li key={s.t}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onFocus={() => setPaused(true)}
                    aria-current={on ? "step" : undefined}
                    className={`relative flex w-full items-start gap-4 rounded-2xl p-3 text-left transition-colors ${
                      on ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`relative z-10 grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full font-mono text-[11px] font-medium transition-colors ${
                        on
                          ? "bg-pink text-plum ring-4 ring-pink/25"
                          : done
                            ? "bg-white text-plum"
                            : "border border-white/25 bg-plum text-white/60"
                      } mt-0.5`}
                    >
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/45">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`block text-[17px] font-semibold tracking-tight ${on ? "text-white" : "text-white/70"}`}>
                        {s.t}
                      </span>
                      <span
                        className={`grid transition-all duration-300 ${
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden text-[15px] leading-relaxed text-white/65">
                          <span className="block pt-1">{s.d}</span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white text-plum shadow-[0_40px_80px_-30px_rgba(0,0,0,.5)]">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-plum/60">
                  Step {String(active + 1).padStart(2, "0")} / 07
                </span>
                <span className="flex gap-1" aria-hidden>
                  {STEPS.map((_, i) => (
                    <span key={i} className={`h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-plum" : "w-1.5 bg-plum/20"}`} />
                  ))}
                </span>
              </div>
              <div key={active} className="rise aspect-[4/3] sm:aspect-[16/11]">
                <StepVisual i={active} />
              </div>
              <div className="border-t border-line px-5 py-4">
                <p className="text-[15px] font-semibold text-plum">{STEPS[active].t}</p>
                <p className="mt-1 text-sm text-muted">{STEPS[active].d}</p>
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[11px] text-white/45">
              Illustrative sample product.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
