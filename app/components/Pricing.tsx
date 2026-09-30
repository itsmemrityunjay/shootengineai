import { CTA_HREF } from "./site";
import { Check, Container, PrimaryButton, SectionHead } from "./ui";

const INCLUDED = [
  "Product & studio images",
  "AI model photos",
  "SEO title, description, tags, bullets",
  "Listing, ready to publish",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-blush/60 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHead
            eyebrow="Pricing"
            title={<>One payment per product. <span className="text-gradient">Nothing recurring.</span></>}
            lead="No subscription. No usage caps. No “pay until it’s live” fees."
          />

          <div data-reveal className="ring-gradient relative rounded-[32px] bg-white p-7 shadow-lift sm:p-9">
            <div className="flex items-end gap-3">
              <span className="text-[64px] font-semibold leading-none tracking-[-0.05em] text-plum sm:text-[80px]">
                ₹199
              </span>
              <span className="pb-2 text-lg text-muted">/ product</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl bg-mist px-4 py-3">
                <p className="text-lg font-semibold tracking-tight text-plum">₹150</p>
                <p className="text-xs text-muted">with volume</p>
              </div>
              <div className="rounded-2xl bg-mist px-4 py-3">
                <p className="text-lg font-semibold tracking-tight text-plum">$2.5</p>
                <p className="text-xs text-muted">global pricing</p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] text-plum/90">
                  <Check className="mt-0.5 text-plum" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-plum">
              {["One payment", "No recurring charges", "No usage-limit plan"].map((t) => (
                <span key={t} className="rounded-full bg-blush px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>

            <PrimaryButton href={CTA_HREF} className="mt-8 w-full">
              Start With 1 Free Product
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
