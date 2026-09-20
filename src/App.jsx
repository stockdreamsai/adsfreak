// Social Ads Freak landing page — direct-response structure:
// hook + offer → proof → how it works → social proof → problem/agitation →
// cost math → failed alternatives → hero story → mechanism/solution →
// demo → value stack → audiences → bonuses → price (anchored) → risk
// reversal → scarcity → crossroads close → FAQ → P.S.
import { useScrollReveal } from './components/Shared.jsx';
import UrgencyBar from './sections/UrgencyBar.jsx';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import FeatureBullets from './sections/FeatureBullets.jsx';
import PlatformsStrip from './sections/PlatformsStrip.jsx';
import Gallery from './sections/Gallery.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Testimonials from './sections/Testimonials.jsx';
import StatsBand from './sections/StatsBand.jsx';
import ProblemStory from './sections/ProblemStory.jsx';
import PainSection from './sections/PainSection.jsx';
import RealCosts from './sections/RealCosts.jsx';
import Comparison from './sections/Comparison.jsx';
import SuccessStories from './sections/SuccessStories.jsx';
import Introducing from './sections/Introducing.jsx';
import WatchDemo from './sections/WatchDemo.jsx';
import EverythingIncluded from './sections/EverythingIncluded.jsx';
import DragToClone from './sections/DragToClone.jsx';
import License from './sections/License.jsx';
import ExportTools from './sections/ExportTools.jsx';
import WhoBenefits from './sections/WhoBenefits.jsx';
import EarningPotential from './sections/EarningPotential.jsx';
import Bonuses from './sections/Bonuses.jsx';
import PricingBox from './sections/PricingBox.jsx';
import Guarantee from './sections/Guarantee.jsx';
import Warning from './sections/Warning.jsx';
import OneClickAway from './sections/OneClickAway.jsx';
import FAQ from './sections/FAQ.jsx';
import PsClose from './sections/PsClose.jsx';
import Footer from './sections/Footer.jsx';
import StickyCta from './sections/StickyCta.jsx';

export default function App() {
  useScrollReveal();
  return (
    <>
      {/* URGENCY: launch discount countdown, visible from second one */}
      <UrgencyBar />
      <Navbar />
      {/* HOOK: big promise + live proof + offer for hot traffic */}
      <Hero />
      <FeatureBullets />
      <PlatformsStrip />
      {/* PROOF FIRST: real cloned videos, zero cameras */}
      <Gallery />
      {/* EASE: 3 steps anyone can do */}
      <HowItWorks />
      {/* SOCIAL PROOF: quotes + numbers */}
      <Testimonials />
      <StatsBand />
      {/* PROBLEM → AGITATION: dying creatives, rigged alternatives, the math */}
      <ProblemStory />
      <PainSection />
      <RealCosts />
      <Comparison />
      {/* STORY: 2013 window → 2026 window */}
      <SuccessStories />
      {/* SOLUTION: the Clone Engine mechanism */}
      <Introducing />
      <WatchDemo />
      {/* VALUE STACK: everything included + the freakiest feature */}
      <EverythingIncluded />
      <DragToClone />
      <License />
      <ExportTools />
      {/* IDENTIFICATION: who it's for, which path */}
      <WhoBenefits />
      <EarningPotential />
      {/* BONUSES → PRICE (anchored) → RISK REVERSAL → SCARCITY → CLOSE */}
      <Bonuses />
      <PricingBox />
      <Guarantee />
      <Warning />
      <OneClickAway />
      <FAQ />
      <PsClose />
      <Footer />
      <StickyCta />
    </>
  );
}
