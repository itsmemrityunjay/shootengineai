import { Container, SectionHead } from "./ui";

const PLATFORMS = [
  { name: "Amazon", note: "Images, title, bullets" },
  { name: "Shopify", note: "Images, description, tags" },
  { name: "WooCommerce", note: "Images, content, tags" },
];

export function Platforms() {
  return (
    <section id="platforms" className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Platforms"
          title={<>From photo to <span className="text-gradient">publishable listing.</span></>}
          lead="It doesn’t stop at images. Your listing goes straight to your store."
        />

        <div data-reveal className="relative mt-12 overflow-hidden rounded-[32px] border border-line bg-gradient-to-b from-blush/70 to-white p-5 sm:p-8">
          <div className="grid items-center gap-5 lg:grid-cols-[auto_minmax(24px,1fr)_auto_minmax(24px,1fr)_minmax(0,1.5fr)] lg:gap-4">
            <div className="rounded-2xl bg-plum px-6 py-5 text-center text-white">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-pink">Input</p>
              <p className="mt-1 text-lg font-semibold tracking-tight">1 raw photo</p>
            </div>

            <span className="flow-bar mx-auto h-8 w-1 rounded-full lg:h-1 lg:w-full" aria-hidden />

            <div className="rounded-2xl border border-plum/15 bg-white px-6 py-5 text-center shadow-card">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-plum/60">Output</p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-plum">Publishable listing</p>
            </div>

            <span className="flow-bar mx-auto h-8 w-1 rounded-full lg:h-1 lg:w-full" aria-hidden />

            <div className="grid gap-3">
              {PLATFORMS.map((p) => (
                <div key={p.name} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-card">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blush text-base font-semibold text-plum">
                    {p.name[0]}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-plum">{p.name}</p>
                    <p className="text-sm text-muted">{p.note}</p>
                  </div>
                  <span className="ml-auto hidden rounded-full bg-plum px-3 py-1 text-[11px] font-medium text-white sm:inline">
                    Publish
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
