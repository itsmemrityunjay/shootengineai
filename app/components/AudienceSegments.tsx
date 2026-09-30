import { Container, SectionHead } from "./ui";

const SEGMENTS = [
  {
    t: "Amazon sellers",
    d: "Listing-ready images, no photo team.",
    flow: ["Photo", "Listing images", "Amazon"],
  },
  {
    t: "Shopify & WooCommerce stores",
    d: "One workflow instead of four vendors.",
    flow: ["Photo", "Images + copy", "Your store"],
  },
  {
    t: "Dropshippers & resellers",
    d: "Supplier photo to sell-ready listing.",
    flow: ["Supplier photo", "Sell-ready content", "Live"],
  },
  {
    t: "Agencies & freelancers",
    d: "Client content at scale, no coordination.",
    flow: ["Client photos", "Batch content", "Delivered"],
  },
];

export function AudienceSegments() {
  return (
    <section id="for-sellers" className="py-20 sm:py-28">
      <Container>
        <SectionHead eyebrow="Who it’s for" title="Built for people who sell online." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SEGMENTS.map((s, i) => (
            <article
              key={s.t}
              className={`group flex flex-col rounded-[28px] border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${
                i === 0 || i === 3
                  ? "border-plum/10 bg-blush/70 hover:bg-blush"
                  : "border-line bg-mist hover:bg-white"
              }`}
            >
              <p className="font-mono text-xs text-pink">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold sm:text-2xl leading-tight tracking-[-0.02em] text-plum">{s.t}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.d}</p>
              <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-6 text-[11.5px] font-medium text-plum">
                {s.flow.map((f, j) => (
                  <span key={f} className="flex items-center gap-2">
                    <span className="rounded-full border border-plum/15 bg-white px-2.5 py-1">{f}</span>
                    {j < s.flow.length - 1 && (
                      <span aria-hidden className="text-plum/40">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
