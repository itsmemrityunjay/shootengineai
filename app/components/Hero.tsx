import { SeoCard, Shot } from "./art";
import { CTA_HREF, HOW_HREF } from "./site";
import { Check, Container, Eyebrow, PrimaryButton, SecondaryButton } from "./ui";

const PIPELINE = ["Product image", "Studio scene", "Model photo", "SEO content", "Listing"];

function Arrow() {
  return (
    <div className="flex items-center justify-center self-center" aria-hidden>
      <span className="grid h-9 w-9 place-items-center rounded-full border border-plum/10 bg-white text-plum shadow-card">
        <svg className="rotate-90 lg:rotate-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 8h12m0 0L9.5 3.5M14 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative -mt-[68px] overflow-hidden pb-16 pt-[108px] sm:pt-[124px] lg:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-0 h-[760px]"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 0%, rgba(222,136,207,.28) 0%, rgba(248,231,247,.6) 45%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div className="bg-grid absolute inset-x-0 top-0 h-[760px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <div className="rise">
            <Eyebrow>For Amazon, Shopify &amp; WooCommerce sellers</Eyebrow>
          </div>
          <h1 className="rise delay-1 mt-6 text-balance text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1] tracking-[-0.045em] text-plum">
            Turn one product photo into the{" "}
            <span className="text-gradient">entire listing workflow.</span>
          </h1>
          <p className="rise delay-2 mx-auto mt-5 max-w-xl text-balance text-[17px] leading-relaxed text-muted sm:text-lg">
            Upload a raw photo. Get product images, model shots, SEO copy and a
            ready-to-publish listing, with your product&rsquo;s text and logo untouched.
          </p>
          <div className="rise delay-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href={CTA_HREF} className="w-full sm:w-auto">
              Try It Free
            </PrimaryButton>
            <SecondaryButton href={HOW_HREF} className="w-full sm:w-auto">
              See How It Works
            </SecondaryButton>
          </div>
          <ul className="rise delay-3 mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px] text-muted">
            {["No credit card required", "₹199 per product", "No subscription"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-plum" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* RAW → SHOOTENGINE AI → COMPLETE SELLING ASSETS, framed as an app window */}
        <div className="rise delay-4 relative mx-auto mt-12 max-w-[1120px] lg:mt-16">
          <div
            aria-hidden
            className="absolute -inset-x-6 -bottom-10 top-10 -z-10 rounded-[48px] opacity-60 blur-3xl"
            style={{ background: "linear-gradient(90deg, rgba(222,136,207,.35), rgba(75,22,76,.18))" }}
          />
          <div className="rounded-[28px] border border-plum/10 bg-white/70 p-2 shadow-lift backdrop-blur sm:rounded-[32px] sm:p-2.5">
            <div className="flex items-center gap-2 px-3 pb-2.5 pt-1.5">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-plum/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-plum/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-plum/15" />
              </span>
              <span className="mx-auto truncate whitespace-nowrap rounded-full bg-mist px-4 py-1 font-mono text-[10.5px] text-muted">
                shootengine.ai / new-product
              </span>
              <span className="w-[42px]" aria-hidden />
            </div>

            <div className="grid items-center gap-4 rounded-[22px] bg-gradient-to-b from-mist to-blush/50 p-4 sm:rounded-[24px] sm:p-6 lg:grid-cols-[1fr_auto_1.05fr_auto_1.35fr] lg:items-start lg:gap-4">
              {/* raw */}
              <figure className="mx-auto w-full max-w-[280px] lg:max-w-none">
                <p className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-plum/55">01 · Upload</p>
                <div className="-rotate-2 rounded-[20px] border border-line bg-white p-2 shadow-card">
                  <Shot kind="raw" className="aspect-[4/5] rounded-2xl" />
                  <figcaption className="flex justify-between px-1 pb-0.5 pt-2 font-mono text-[10px] text-muted">
                    <span>IMG_4821.jpg</span>
                    <span>Phone photo</span>
                  </figcaption>
                </div>
              </figure>

              <Arrow />

              {/* engine */}
              <div className="mx-auto w-full max-w-[320px] lg:max-w-none">
                <p className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-plum/55">02 · Generate</p>
                <div className="on-dark overflow-hidden rounded-[20px] bg-plum p-4 text-white shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold tracking-tight">ShootEngine AI</span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-pink">
                      <span className="tick h-1.5 w-1.5 rounded-full bg-pink" />
                      Running
                    </span>
                  </div>
                  <div className="relative mt-3 overflow-hidden rounded-xl bg-white/[.06] p-1.5">
                    <Shot kind="raw" className="aspect-[16/9] rounded-lg opacity-90" />
                    <div className="scan-line absolute inset-x-1.5 top-1.5 h-0.5 bg-pink shadow-[0_0_14px_2px_rgba(222,136,207,.8)]" />
                  </div>
                  <ul className="mt-3 space-y-2">
                    {PIPELINE.map((s, i) => (
                      <li key={s} className="flex items-center gap-2.5 text-[12.5px] text-white/85">
                        <span
                          className="tick grid h-4 w-4 place-items-center rounded-full bg-pink/25"
                          style={{ animationDelay: `${i * 0.35}s` }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3.5 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="fill-bar h-full w-full rounded-full bg-gradient-to-r from-pink to-white" />
                  </div>
                </div>
              </div>

              <Arrow />

              {/* outputs */}
              <div>
                <p className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-plum/55">03 · Ready to sell</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { kind: "white", label: "White background" },
                    { kind: "studio", label: "Studio" },
                    { kind: "model", label: "Model photo" },
                  ].map((o, i) => (
                    <figure
                      key={o.label}
                      className="slide-in rounded-2xl border border-line bg-white p-1.5 shadow-card"
                      style={{ animationDelay: `${0.7 + i * 0.15}s` }}
                    >
                      <Shot
                        kind={o.kind as "white" | "studio" | "model"}
                        className={`aspect-[4/5] rounded-xl ${o.kind === "white" ? "border border-line" : ""}`}
                      />
                      <figcaption className="px-1 pb-0.5 pt-1.5 text-[11px] font-medium text-plum/80">
                        {o.label}
                      </figcaption>
                    </figure>
                  ))}
                  <SeoCard compact className="slide-in" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center font-mono text-[11px] text-muted/70">
            Illustrative sample product. Replace with real results before launch.
          </p>
        </div>
      </Container>
    </section>
  );
}
