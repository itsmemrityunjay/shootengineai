import { Shot } from "./art";
import { Check, Container, Cross, SectionHead } from "./ui";

const COLS = [
  {
    tag: "Original",
    title: "Your product photo",
    variant: "original" as const,
    kind: "raw" as const,
    tone: "neutral",
    points: ["Real label and shape"],
  },
  {
    tag: "Typical AI generator",
    title: "Generic image tools",
    variant: "distorted" as const,
    kind: "studio" as const,
    tone: "bad",
    points: ["Garbled text: “LUMEE”, “SERAM”", "Warped shape, broken edges"],
  },
  {
    tag: "ShootEngine AI",
    title: "Your product, preserved",
    variant: "preserved" as const,
    kind: "studio" as const,
    tone: "good",
    points: ["Text and logo unchanged", "Clean edges, true shape"],
  },
];

export function ProductIntegrity() {
  return (
    <section id="trust" className="bg-blush/60 py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Product integrity"
          title="Your product shouldn’t change just because AI does."
          lead="We change everything around your product. Never the product itself."
        />

        <div className="no-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {COLS.map((c) => (
            <article
              key={c.tag}
              className={`w-[82%] shrink-0 snap-center rounded-[28px] border bg-white p-2.5 shadow-card sm:w-[60%] md:w-auto ${
                c.tone === "good" ? "ring-gradient border-transparent shadow-lift md:-translate-y-3" : "border-line"
              }`}
            >
              <div className="relative">
                <Shot kind={c.kind} variant={c.variant} className="aspect-[4/5] rounded-2xl" />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wider ${
                    c.tone === "good"
                      ? "bg-plum text-white"
                      : c.tone === "bad"
                        ? "bg-white text-[#a3262a]"
                        : "bg-white text-plum"
                  }`}
                >
                  {c.tag}
                </span>
              </div>
              <div className="px-2 pb-2 pt-4">
                <h3 className="text-lg font-semibold tracking-tight text-plum">{c.title}</h3>
                <ul className="mt-3 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[14.5px] text-muted">
                      {c.tone === "bad" ? (
                        <Cross className="mt-0.5 text-[#a3262a]" />
                      ) : (
                        <Check className={`mt-0.5 ${c.tone === "good" ? "text-plum" : "text-plum/50"}`} />
                      )}
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted/80">
          Illustrative sample. Middle column shows common failures of general image generators, not a named tool.
          Replace with real results before launch.
        </p>
      </Container>
    </section>
  );
}
