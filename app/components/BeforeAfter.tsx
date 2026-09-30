import { SeoCard, Shot } from "./art";
import { CompareSlider } from "./CompareSlider";
import { Container, SectionHead } from "./ui";

export function BeforeAfter() {
  return (
    <section id="results" className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Before / after"
          title={<>One input. <span className="text-gradient">An entire content system.</span></>}
          lead="Drag the slider. Then look at everything else you get."
        />

        <div data-reveal className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_1fr] lg:gap-5">
          <div className="rounded-[30px] border border-line bg-white p-2.5 shadow-lift">
            <CompareSlider className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" />
            <p className="px-2 pb-1 pt-3 text-sm text-muted">Raw phone photo → studio image</p>
          </div>

          <div className="grid grid-cols-2 content-center gap-4">
            <figure className="spotlight rounded-[26px] border border-line bg-white p-2.5 shadow-card">
              <Shot kind="white" className="aspect-[4/5] rounded-2xl border border-line" />
              <figcaption className="px-1.5 pb-1 pt-2.5 text-[13.5px] font-medium text-plum">Product image</figcaption>
            </figure>
            <figure className="spotlight rounded-[26px] border border-line bg-white p-2.5 shadow-card">
              <Shot kind="model" className="aspect-[4/5] rounded-2xl" />
              <figcaption className="px-1.5 pb-1 pt-2.5 text-[13.5px] font-medium text-plum">Model photo</figcaption>
            </figure>
            <figure className="spotlight col-span-2 rounded-[26px] border border-line bg-blush p-3 shadow-card sm:p-4">
              <SeoCard />
              <figcaption className="px-1 pt-3 text-[13.5px] font-medium text-plum">SEO listing</figcaption>
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
