import { CTAButton } from './components/Shared.jsx';
import Hero from './sections/Hero.jsx';
import FeatureBullets from './sections/FeatureBullets.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Testimonials from './sections/Testimonials.jsx';
import PricingBox from './sections/PricingBox.jsx';
import FAQ from './sections/FAQ.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <header className="simple-header">
        <div className="container simple-header-inner">
          <a className="simple-brand" href="#top">Social Ads <strong>Freak</strong></a>
          <nav aria-label="Main navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#testimonials">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>
          <CTAButton href="#buy">Get started</CTAButton>
        </div>
      </header>
      <main>
        <Hero />
        <FeatureBullets />
        <HowItWorks />
        <Testimonials />
        <PricingBox />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
