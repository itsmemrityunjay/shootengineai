import { Container, SectionHead } from "./ui";

const TOOLS = [
  { t: "Photographer", rot: "-rotate-2" },
  { t: "Designer", rot: "rotate-1" },
  { t: "Model", rot: "-rotate-1" },
  { t: "Copywriter", rot: "rotate-2" },
  { t: "SEO", rot: "-rotate-1" },
  { t: "Listing creation", rot: "rotate-1" },
  { t: "Manual publishing", rot: "-rotate-2" },
];

export function OldWay() {
  return (
    <section id="old-way" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="The old way"
          title="Your product shouldn’t need five different tools to go live."
          lead="Every handoff costs time and money."
        />

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1.4fr_auto_1fr] lg:gap-6">
          {/* fragmented */}
          <div className="relative overflow-hidden rounded-[28px] border border-dashed border-plum/20 bg-white/70 p-6 sm:p-8">
            <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.14em] text-plum/50">
              <span>7 handoffs</span>
              <span>Days of work</span>
            </div>
            <ol className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
              {TOOLS.map((t, i) => (
                <li
                  key={t.t}
                  className={`flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 shadow-card ${t.rot}`}
                >
                  <span className="font-mono text-[11px] text-pink">0{i + 1}</span>
                  <span className="text-[15px] font-medium text-plum">{t.t}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">Separate people, separate tools, separate invoices.</p>
          </div>

          <div className="flex items-center justify-center" aria-hidden>
            <div className="grid h-11 w-11 rotate-90 place-items-center rounded-full bg-plum text-white shadow-lift lg:rotate-0">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 10h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* unified */}
          <div className="on-dark relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-plum p-7 text-white shadow-lift sm:p-8">
            <div aria-hidden className="bg-grid-dark absolute inset-0" />
            <div className="relative">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-pink">ShootEngine AI</p>
              <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                One input.
                <br />
                <span className="text-pink">One workflow.</span>
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-3 rounded-2xl bg-white/[.08] p-3">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-plum">1 photo</span>
              <span className="flow-bar h-1 flex-1 rounded-full" aria-hidden />
              <span className="rounded-full bg-pink px-3 py-1 text-xs font-semibold text-plum">Live listing</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
