// Social Ads Freak landing page — StockDreams.ai visual structure filled
// with the real product content. One component per section (Builder-friendly).
import { useScrollReveal } from './components/Shared.jsx';
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
import Introducing from './sections/Introducing.jsx';
import WatchDemo from './sections/WatchDemo.jsx';
import EverythingIncluded from './sections/EverythingIncluded.jsx';
import Gallery from './sections/Gallery.jsx';
import License from './sections/License.jsx';
import ExportTools from './sections/ExportTools.jsx';
import WhoBenefits from './sections/WhoBenefits.jsx';
import EarningPotential from './sections/EarningPotential.jsx';
import DragToClone from './sections/DragToClone.jsx';
import Bonuses from './sections/Bonuses.jsx';
import StatsBand from './sections/StatsBand.jsx';
import PricingBox from './sections/PricingBox.jsx';
import Guarantee from './sections/Guarantee.jsx';
import Warning from './sections/Warning.jsx';
import OneClickAway from './sections/OneClickAway.jsx';
import FAQ from './sections/FAQ.jsx';
import SuccessStories from './sections/SuccessStories.jsx';
import Footer from './sections/Footer.jsx';
import StickyCta from './sections/StickyCta.jsx';

export default function App() {
  useScrollReveal();
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
      <Introducing />
      <WatchDemo />
      <EverythingIncluded />
      <Gallery />
      <License />
      <ExportTools />
      <WhoBenefits />
      <EarningPotential />
      <DragToClone />
      <Bonuses />
      <StatsBand title="Freaks Are Already Winning With It" />
      <PricingBox />
      <Guarantee />
      <Warning />
      <OneClickAway />
      <FAQ />
      <SuccessStories />
      <StatsBand />
      <Footer />
      <StickyCta />
    </>
  );
}
