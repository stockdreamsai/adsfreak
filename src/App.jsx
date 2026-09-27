// Social Ads Freak landing page — direct-response flow, trimmed to what
// moves a visitor from "curious" to "buying":
// hook + offer → proof → problem → old way vs new → story → the mechanism →
// how it works → demo → what you get → social proof → who it's for →
// bonus → price → guarantee → scarcity → FAQ → final close.
import { useScrollReveal } from './components/Shared.jsx';
import UrgencyBar from './sections/UrgencyBar.jsx';
import Hero from './sections/Hero.jsx';
import FeatureBullets from './sections/FeatureBullets.jsx';
import CloneShowcase from './sections/CloneShowcase.jsx';
import Gallery from './sections/Gallery.jsx';
import ProblemStory from './sections/ProblemStory.jsx';
import Comparison from './sections/Comparison.jsx';
import SuccessStories from './sections/SuccessStories.jsx';
import Introducing from './sections/Introducing.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import WatchDemo from './sections/WatchDemo.jsx';
import EverythingIncluded from './sections/EverythingIncluded.jsx';
import Testimonials from './sections/Testimonials.jsx';
import StatsBand from './sections/StatsBand.jsx';
import WhoBenefits from './sections/WhoBenefits.jsx';
import Bonuses from './sections/Bonuses.jsx';
import PricingBox from './sections/PricingBox.jsx';
import Guarantee from './sections/Guarantee.jsx';
import Warning from './sections/Warning.jsx';
import OneClickAway from './sections/OneClickAway.jsx';
import FAQ from './sections/FAQ.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  useScrollReveal();
  return (
    <>
      {/* 1. HOOK — promise, sales video, offer */}
      <Hero />
      <FeatureBullets />
      {/* 2. PROOF — see it work before we explain anything */}
      <CloneShowcase />
      <Gallery />
      {/* 3. PROBLEM — why the old ways are rigged against you */}
      <ProblemStory />
      <Comparison />
      {/* 4. STORY — we've seen this window before */}
      <SuccessStories />
      {/* 5. SOLUTION — the Clone Engine, in 3 steps, on video */}
      <Introducing />
      <HowItWorks />
      <WatchDemo />
      {/* 6. VALUE — everything included */}
      <EverythingIncluded />
      {/* 7. SOCIAL PROOF */}
      <Testimonials />
      <StatsBand />
      <WhoBenefits />
      {/* 8. OFFER — bonus, price, guarantee, scarcity */}
      <Bonuses />
      <PricingBox />
      <Guarantee />
      <Warning />
      {/* 9. OBJECTIONS + CLOSE */}
      <FAQ />
      <OneClickAway />
      <Footer />
      <UrgencyBar />
    </>
  );
}
