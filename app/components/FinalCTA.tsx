import { CTA_HREF, EXAMPLE_HREF } from "./site";
import { Container, PrimaryButton, SecondaryButton } from "./ui";

export function FinalCTA() {
  return (
    <section id="get-started" className="py-20 sm:py-28">
      <Container>
        <div data-reveal className="on-dark relative overflow-hidden rounded-[36px] px-6 py-16 text-center text-white shadow-[0_40px_100px_-40px_rgba(75,22,76,.8)] sm:px-12 sm:py-24"
          style={{ background: "radial-gradient(90% 90% at 50% 0%, #7a2f7b 0%, #4b164c 45%, #2a0a2b 100%)" }}
        >
          <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 100%, rgba(222,136,207,.38) 0%, rgba(222,136,207,0) 100%)",
            }}
          />
          <h2 className="relative mx-auto max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.04em]">
            Stop stitching together tools to <span className="text-shimmer">sell one product.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Upload one photo. See how much of your workflow disappears.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href={CTA_HREF} glow className="h-[52px] w-full px-7 sm:w-auto">
              Try ShootEngine AI Free
            </PrimaryButton>
            <SecondaryButton href={EXAMPLE_HREF} onDark className="h-[52px] w-full px-7 sm:w-auto">
              See a Real Example
            </SecondaryButton>
          </div>
          <p className="relative mt-4 text-sm text-white/60">No credit card required.</p>
        </div>
      </Container>
    </section>
  );
}
