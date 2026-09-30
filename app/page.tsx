import { Enhancements } from "./components/Enhancements";
import { AudienceSegments } from "./components/AudienceSegments";
import { BeforeAfter } from "./components/BeforeAfter";
import { Comparison } from "./components/Comparison";
import { FeatureCards } from "./components/FeatureCards";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { OldWay } from "./components/OldWay";
import { Platforms } from "./components/Platforms";
import { Pricing } from "./components/Pricing";
import { ProductIntegrity } from "./components/ProductIntegrity";
import { Workflow } from "./components/Workflow";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OldWay />
        <Workflow />
        <ProductIntegrity />
        <BeforeAfter />
        <FeatureCards />
        <Platforms />
        <Pricing />
        <AudienceSegments />
        <Comparison />
        <FinalCTA />
      </main>
      <Footer />
      <Enhancements />
    </>
  );
}
