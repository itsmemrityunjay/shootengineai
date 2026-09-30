import { SeoCard, Shot } from "./art";
import { Container, SectionHead } from "./ui";

const AFTER = [
  { label: "Professional product image", kind: "white" as const },
  { label: "Studio image", kind: "studio" as const },
  { label: "Model image", kind: "model" as const },
];

export function BeforeAfter() {
  return (
    <section id="results" className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Before / after"
          title="One input. An entire ecommerce content system."
          lead="One phone photo in. Everything a listing needs out."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_auto_2.2fr] lg:items-start">
          <figure className="mx-auto w-full max-w-[320px] lg:max-w-none">
            <div className="relative rounded-3xl border border-line bg-white p-3 shadow-card">
              <span className="absolute left-5 top-5 z-10 rounded-full bg-white px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wider text-plum">
                Before
              </span>
              <Shot kind="raw" className="aspect-[4/5] rounded-2xl" />
              <figcaption className="px-2 pb-1 pt-3 text-sm text-muted">Raw phone photo</figcaption>
            </div>
          </figure>

          <div className="flex items-center justify-center self-center text-plum/40" aria-hidden>
            <svg className="rotate-90 lg:rotate-0" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M6 20h28m0 0l-9-9m9 9l-9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:items-start lg:overflow-visible lg:px-0">
            {AFTER.map((a) => (
              <figure
                key={a.label}
                className="relative w-[68%] shrink-0 snap-center rounded-3xl border border-line bg-white p-2.5 shadow-card sm:w-[40%] lg:w-auto"
              >
                <span className="absolute left-4 top-4 z-10 rounded-full bg-plum px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wider text-white">
                  After
                </span>
                <Shot kind={a.kind} className={`aspect-[4/5] rounded-2xl ${a.kind === "white" ? "border border-line" : ""}`} />
                <figcaption className="px-1.5 pb-1 pt-2.5 text-[13.5px] font-medium text-plum">{a.label}</figcaption>
              </figure>
            ))}
            <figure className="relative flex w-[68%] shrink-0 snap-center flex-col rounded-3xl border border-line bg-blush p-2.5 shadow-card sm:w-[40%] lg:w-auto">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-plum px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wider text-white">
                After
              </span>
              <div className="flex flex-1 items-center pt-10">
                <SeoCard className="w-full" />
              </div>
              <figcaption className="px-1.5 pb-1 pt-2.5 text-[13.5px] font-medium text-plum">SEO listing</figcaption>
            </figure>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] text-muted/80">
          Illustrative sample. Replace with a real example before launch.
        </p>
      </Container>
    </section>
  );
}
