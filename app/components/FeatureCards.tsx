import type { ReactNode } from "react";
import { SeoCard, Shot } from "./art";
import { Container, SectionHead } from "./ui";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-plum/10 bg-white px-3 py-1.5 text-[12.5px] font-medium text-plum/85">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Card({
  n,
  title,
  lead,
  tags,
  visual,
  className = "",
  horizontal = false,
}: {
  n: string;
  title: string;
  lead: string;
  tags: string[];
  visual: ReactNode;
  className?: string;
  horizontal?: boolean;
}) {
  return (
    <article
      className={`group flex overflow-hidden rounded-[28px] border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift ${
        horizontal ? "flex-col md:flex-row" : "flex-col"
      } ${className}`}
    >
      <div className={`bg-blush/70 p-5 sm:p-6 ${horizontal ? "md:flex md:w-[55%] md:items-center" : ""}`}>{visual}</div>
      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${horizontal ? "md:justify-center" : ""}`}>
        <p className="font-mono text-xs text-pink">{n}</p>
        <h3 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.025em] text-plum sm:text-2xl">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{lead}</p>
        <Tags items={tags} />
      </div>
    </article>
  );
}

export function FeatureCards() {
  return (
    <section id="outputs" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="What you get"
          title={<>Three outputs. <span className="text-gradient">One system.</span></>}
          lead="Made in the same run, so everything matches."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5">
          <Card
            horizontal
            className="lg:col-span-2"
            n="01"
            title="Professional product images"
            lead="Ordinary photos, turned ecommerce-ready."
            tags={["White background", "Pro lighting", "Clean edges"]}
            visual={
              <div className="grid w-full grid-cols-2 gap-3">
                <Shot kind="raw" className="aspect-[4/5] rounded-2xl" />
                <Shot kind="white" className="aspect-[4/5] rounded-2xl border border-line" />
              </div>
            }
          />
          <Card
            className="lg:row-span-2"
            n="02"
            title="AI model photoshoots"
            lead="Realistic models. Your product stays the focus."
            tags={["Choose gender", "Choose market"]}
            visual={
              <div className="space-y-3">
                <Shot kind="model" className="aspect-[4/5] rounded-2xl" />
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <span className="rounded-full bg-plum px-3 py-1.5 text-white">Female</span>
                  <span className="rounded-full bg-white px-3 py-1.5 text-plum">Male</span>
                  <span className="rounded-full bg-white px-3 py-1.5 text-plum">Market: India</span>
                </div>
              </div>
            }
          />
          <Card
            horizontal
            className="lg:col-span-2"
            n="03"
            title="SEO + listing"
            lead="Listing copy written for you, then published."
            tags={["Title", "Description", "Tags", "Bullets", "Publish"]}
            visual={
              <div className="flex h-full items-center">
                <SeoCard className="w-full" />
              </div>
            }
          />
        </div>
      </Container>
    </section>
  );
}
