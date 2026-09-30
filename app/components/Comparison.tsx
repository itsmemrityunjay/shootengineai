import { Check, Container, Cross, SectionHead } from "./ui";

const OLD = [
  "Photographer",
  "Designer",
  "Model",
  "Copywriter",
  "SEO specialist",
  "Listing manager",
  "Multiple tools",
  "Multiple payments",
  "Days of turnaround",
];

const NEW = [
  "One product photo",
  "Professional images",
  "Model photos",
  "SEO content",
  "Listing",
  "Publish",
];

export function Comparison() {
  return (
    <section id="compare" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Side by side"
          title={<>The old way vs. <span className="text-gradient">ShootEngine AI.</span></>}
          center
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[28px] border border-line bg-white p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-plum/50">Old way</p>
            <ul className="mt-4">
              {OLD.map((o) => (
                <li key={o} className="flex items-center gap-3 border-b border-line py-[11px] text-[15px] last:border-0 text-muted line-through decoration-plum/25">
                  <Cross className="text-plum/40" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="on-dark relative overflow-hidden rounded-[28px] bg-plum p-7 text-white shadow-lift sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40"
              style={{ background: "radial-gradient(closest-side, #de88cf, transparent)" }}
            />
            <p className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-pink">ShootEngine AI</p>
            <ol className="relative mt-5">
              {NEW.map((n, i) => (
                <li key={n} className="relative flex items-center gap-4 py-2.5">
                  {i < NEW.length - 1 && (
                    <span className="absolute left-[11px] top-[38px] h-[calc(100%-14px)] w-px bg-gradient-to-b from-pink to-pink/20" aria-hidden />
                  )}
                  <span className="relative grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pink text-plum">
                    <Check className="h-6 w-6 text-plum [&>circle]:opacity-0" />
                  </span>
                  <span className="text-[17px] font-medium tracking-tight">{n}</span>
                </li>
              ))}
              <li className="mt-3 flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-plum">
                <span className="text-xl font-semibold tracking-tight">Done.</span>
                <span className="font-mono text-xs uppercase tracking-wider text-plum/60">One workflow · One payment</span>
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
