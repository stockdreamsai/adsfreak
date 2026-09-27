// Social Ads Freak — sales page rebuilt on the stockdreams.ai blueprint,
// block for block, with a clean white layout and a single purple→pink accent.
import { useReveal } from './ui.jsx';
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import Bullets from './sections/Bullets.jsx';
import Steps from './sections/Steps.jsx';
import Reviews from './sections/Reviews.jsx';
import Problem from './sections/Problem.jsx';
import Challenge from './sections/Challenge.jsx';
import Costs from './sections/Costs.jsx';
import Story from './sections/Story.jsx';
import Introducing from './sections/Introducing.jsx';
import Demo from './sections/Demo.jsx';
import Included from './sections/Included.jsx';
import Gallery from './sections/Gallery.jsx';
import ProStudio from './sections/ProStudio.jsx';
import Export from './sections/Export.jsx';
import Audiences from './sections/Audiences.jsx';
import Earning from './sections/Earning.jsx';
import Bonuses from './sections/Bonuses.jsx';
import Stats from './sections/Stats.jsx';
import Pricing from './sections/Pricing.jsx';
import Guarantee from './sections/Guarantee.jsx';
import Warning from './sections/Warning.jsx';
import OneClick from './sections/OneClick.jsx';
import FAQ from './sections/FAQ.jsx';
import Stories from './sections/Stories.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <Hero />
      <Bullets />
      <Steps />
      <Reviews />
      <Problem />
      <Challenge />
      <Costs />
      <Story />
      <Introducing />
      <Demo />
      <Included />
      <Gallery />
      <ProStudio />
      <Export />
      <Audiences />
      <Earning />
      <Bonuses />
      <Stats title={<>Tons of Social Ads Freak Users <b>Can't Be Wrong</b></>} />
      <Pricing />
      <Guarantee />
      <Warning />
      <OneClick />
      <FAQ />
      <Stories />
      <Stats />
      <Footer />
    </>
  );
}
