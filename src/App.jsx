// AdsFreak landing page — section order mirrors the proven StockDreams.ai
// long-form sales page structure. Each section is its own component so it
// can be edited independently (e.g. visually via Builder.io).
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import FeatureBullets from './sections/FeatureBullets.jsx';
import PlatformsStrip from './sections/PlatformsStrip.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Testimonials from './sections/Testimonials.jsx';
import ProblemStory from './sections/ProblemStory.jsx';
import PainSection from './sections/PainSection.jsx';
import Comparison from './sections/Comparison.jsx';
import RealCosts from './sections/RealCosts.jsx';
import RightAds from './sections/RightAds.jsx';
import Introducing from './sections/Introducing.jsx';
import WatchDemo from './sections/WatchDemo.jsx';
import EverythingIncluded from './sections/EverythingIncluded.jsx';
import Gallery from './sections/Gallery.jsx';
import License from './sections/License.jsx';
import ExportTools from './sections/ExportTools.jsx';
import WhoBenefits from './sections/WhoBenefits.jsx';
import EarningPotential from './sections/EarningPotential.jsx';
import Bonuses from './sections/Bonuses.jsx';
import StatsBand from './sections/StatsBand.jsx';
import PricingBox from './sections/PricingBox.jsx';
import Guarantee from './sections/Guarantee.jsx';
import Warning from './sections/Warning.jsx';
import OneClickAway from './sections/OneClickAway.jsx';
import FAQ from './sections/FAQ.jsx';
import SuccessStories from './sections/SuccessStories.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureBullets />
      <PlatformsStrip />
      <HowItWorks />
      <Testimonials />
      <ProblemStory />
      <PainSection />
      <Comparison />
      <RealCosts />
      <RightAds />
      <Introducing />
      <WatchDemo />
      <EverythingIncluded />
      <Gallery />
      <License />
      <ExportTools />
      <WhoBenefits />
      <EarningPotential />
      <Bonuses />
      <StatsBand title="Tons of AdsFreak Users Can't Be Wrong" />
      <PricingBox />
      <Guarantee />
      <Warning />
      <OneClickAway />
      <FAQ />
      <SuccessStories />
      <StatsBand />
      <Footer />
    </>
  );
}
