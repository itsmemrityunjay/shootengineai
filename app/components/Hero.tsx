import { SeoCard, Shot } from "./art";
import { CTA_HREF, HOW_HREF } from "./site";
import { Check, Container, Eyebrow, PrimaryButton, SecondaryButton } from "./ui";

const PIPELINE = ["Product image", "Studio scene", "Model photo", "SEO content", "Listing"];

const TICKER = [
  "White-background images",
  "Studio scenes",
  "AI model photos",
  "SEO titles",
  "Descriptions",
  "Tags",
  "Bullet points",
  "Ecommerce listing",
  "Publish to Amazon",
  "Publish to Shopify",
  "Publish to WooCommerce",
];

function Arrow() {
  return (
    <div className="flex items-center justify-center self-center" aria-hidden>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-plum text-white shadow-[0_6px_20px_-6px_rgba(75,22,76,.7)]">
        <svg className="rotate-90 lg:rotate-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 8h12m0 0L9.5 3.5M14 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="on-dark relative -mt-[68px] overflow-hidden pt-[112px] text-white sm:pt-[132px]"
      style={{
        background:
          "radial-gradient(90% 60% at 50% 0%, #7a2f7b 0%, #4b164c 38%, #2a0a2b 72%, #1c061d 100%)",
      }}
    >
      <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0" />
      {/* two restrained light sources */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-240px] h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(222,136,207,.7), transparent)" }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <div className="rise">
            <Eyebrow dark>For Amazon, Shopify &amp; WooCommerce sellers</Eyebrow>
          </div>
          <h1 className="rise delay-1 mt-6 text-balance text-[clamp(2.5rem,6.4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Turn one product photo into the{" "}
            <span className="text-shimmer">entire listing workflow.</span>
          </h1>
          <p className="rise delay-2 mx-auto mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-white/70 sm:text-lg">
            Upload a raw photo. Get product images, model shots, SEO copy and a
            ready-to-publish listing, with your product&rsquo;s text and logo untouched.
          </p>
          <div className="rise delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href={CTA_HREF} glow className="h-[52px] w-full px-7 sm:w-auto">
              Try It Free
            </PrimaryButton>
            <SecondaryButton href={HOW_HREF} onDark className="h-[52px] w-full px-7 sm:w-auto">
              See How It Works
            </SecondaryButton>
          </div>
          <ul className="rise delay-3 mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px] text-white/65">
            {["No credit card required", "₹199 per product", "No subscription"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-pink" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* RAW → SHOOTENGINE AI → COMPLETE SELLING ASSETS */}
        <div className="rise delay-4 relative mx-auto mt-14 max-w-[1120px] lg:mt-16">
          <div
            aria-hidden
            className="absolute inset-x-[8%] -bottom-6 top-16 -z-10 rounded-[48px] opacity-80 blur-[70px]"
            style={{ background: "linear-gradient(90deg, rgba(222,136,207,.55), rgba(154,74,149,.5), rgba(222,136,207,.55))" }}
          />
          <div className="rounded-[28px] border border-white/15 bg-white/[.07] p-2 shadow-[0_60px_120px_-40px_rgba(0,0,0,.7)] backdrop-blur-md sm:rounded-[34px] sm:p-2.5">
            <div className="flex items-center gap-2 px-3 pb-2.5 pt-1.5">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              </span>
              <span className="mx-auto truncate whitespace-nowrap rounded-full bg-white/10 px-4 py-1 font-mono text-[10.5px] text-white/60">
                shootengine.ai / new-product
              </span>
              <span className="w-[42px]" aria-hidden />
            </div>

            <div className="grid gap-4 rounded-[22px] bg-gradient-to-b from-white to-blush p-4 sm:rounded-[26px] sm:p-6 lg:grid-cols-[1fr_auto_1.05fr_auto_1.35fr] lg:items-start lg:gap-4">
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
                <div className="overflow-hidden rounded-[20px] bg-plum p-4 text-white shadow-lift ring-1 ring-pink/30">
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
          <p className="mt-5 text-center font-mono text-[11px] text-white/40">
            Illustrative sample product. Replace with real results before launch.
          </p>
        </div>
      </Container>

      {/* capability ticker */}
      <div className="relative mt-14 border-t border-white/10 py-5 sm:mt-16">
        <div className="marquee-mask overflow-hidden">
          <ul className="marquee flex w-max gap-10 pr-10" aria-label="What ShootEngine AI produces">
            {[...TICKER, ...TICKER].map((t, i) => (
              <li
                key={i}
                aria-hidden={i >= TICKER.length}
                className="flex items-center gap-3 whitespace-nowrap text-[15px] font-medium text-white/60"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
