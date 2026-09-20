// Social Ads Freak landing page.
// Section order follows the proven StockDreams.ai long-form sales structure:
// hero + offer → benefit bullets → platforms → proof (founder + samples) →
// how it works → testimonials → cost/agitation → comparison → introducing →
// product depth (studios, faces, avatars, captions, demo) → everything
// included → cloud → audiences → paths → bonuses → pricing → guarantee →
// origin story → FAQ → P.S. → final CTA.
import SiteHeader from "./components/SiteHeader.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HeroBenefitsSection from "./components/HeroBenefitsSection.jsx";
import PlatformsStripSection from "./components/PlatformsStripSection.jsx";
import ContentSection03 from "./components/ContentSection03.jsx";
import SamplesSection from "./components/SamplesSection.jsx";
import HowItWorksSection from "./components/HowItWorksSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import WithSection from "./components/WithSection.jsx";
import ComparisonSection from "./components/ComparisonSection.jsx";
import ProductSection from "./components/ProductSection.jsx";
import DuoSection from "./components/DuoSection.jsx";
import ContentSection05 from "./components/ContentSection05.jsx";
import AvatarLanguagesSection from "./components/AvatarLanguagesSection.jsx";
import CaptionsSection from "./components/CaptionsSection.jsx";
import DemoSection from "./components/DemoSection.jsx";
import IncludedSection from "./components/IncludedSection.jsx";
import ContentSection15 from "./components/ContentSection15.jsx";
import BenefitSection from "./components/BenefitSection.jsx";
import PathSection from "./components/PathSection.jsx";
import BonusSection from "./components/BonusSection.jsx";
import BonusSection2 from "./components/BonusSection2.jsx";
import ProductSection2 from "./components/ProductSection2.jsx";
import ZeroSection from "./components/ZeroSection.jsx";
import MemoryDividerSection from "./components/MemoryDividerSection.jsx";
import EdgeSection from "./components/EdgeSection.jsx";
import FoundersSection from "./components/FoundersSection.jsx";
import FaqSection from "./components/FaqSection.jsx";
import PsSection from "./components/PsSection.jsx";
import OrderSection from "./components/OrderSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import StickyCta from "./components/StickyCta.jsx";
import LegacyRuntime from "./LegacyRuntime.jsx";

export default function App() {
  return (
    <div id="saf-app">
      <SiteHeader />
      {/* 1. Hero: headline, live clone showcase, price + CTA */}
      <HeroSection />
      {/* 2. Benefit bullets under the offer */}
      <HeroBenefitsSection />
      {/* 3. Works with every major platform */}
      <PlatformsStripSection />
      {/* 4. Proof: founder callout + cloned samples wall */}
      <ContentSection03 />
      <SamplesSection />
      {/* 5. How it works — 3 easy steps, two tracks */}
      <HowItWorksSection />
      {/* 6. Social proof: stats + customer quotes */}
      <TestimonialsSection />
      {/* 7. Agitation: the real costs of video ads */}
      <WithSection />
      {/* 8. Comparison: generic AI vs clone AI */}
      <ComparisonSection />
      {/* 9. Introducing the product */}
      <ProductSection />
      <DuoSection />
      {/* 10. Product depth: faces, avatars, languages, captions, demo */}
      <ContentSection05 />
      <AvatarLanguagesSection />
      <CaptionsSection />
      <DemoSection />
      {/* 11. Everything included + cloud-based */}
      <IncludedSection />
      <ContentSection15 />
      {/* 12. Who benefits + which path fits you */}
      <BenefitSection />
      <PathSection />
      {/* 13. Bonuses */}
      <BonusSection />
      <BonusSection2 />
      {/* 14. Pricing: value stack + order box */}
      <ProductSection2 />
      {/* 15. Guarantee */}
      <ZeroSection />
      {/* 16. Origin story + scarcity window */}
      <MemoryDividerSection />
      <EdgeSection />
      <FoundersSection />
      {/* 17. FAQ, P.S., final CTA */}
      <FaqSection />
      <PsSection />
      <OrderSection />
      <SiteFooter />
      <StickyCta />
      <LegacyRuntime />
    </div>
  );
}
