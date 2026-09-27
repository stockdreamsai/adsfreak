import { Section, Title, OfferBlock } from '../ui.jsx';

const LEFT = ['Clone Engine — clone any winning ad', '274 Proven Ad Templates', '100+ AI Avatars', 'Voice Cloning', '30+ Languages & 50+ Accents', 'Auto-Captions'];
const RIGHT = [<>Trend <b>Radar</b></>, <><b>Drag-to-Clone</b> Any Ad</>, <>Pro Studio <b>Story Builder</b></>, <>Export to <b>ANY</b> Platform!</>, <>31 Days of <b>Video Content</b></>, <>Free Updates And Support</>];

export default function Pricing() {
  return (
    <Section narrow className="pricing" id="buy">
      <Title>Start Generating <b>High-Converting Video Ads</b> With The Power of AI</Title>
      <div className="price-box">
        <h3>Everything You Get With Your Purchase <b>Today</b></h3>
        <p className="unlimited">UNLIMITED:</p>
        <div className="price-cols">
          <ul>{LEFT.map((i) => <li key={i}>{i}</li>)}</ul>
          <ul>{RIGHT.map((i, k) => <li key={k}>{i}</li>)}</ul>
        </div>
      </div>
      <p className="early">Early bird offer expiring soon!</p>
      <OfferBlock compact />
    </Section>
  );
}
