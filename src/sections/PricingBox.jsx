import { SectionTitle } from '../components/Shared.jsx';

const INCLUDED = [
  'Unlimited AI Ad Creative Generations',
  'Social Media Ads for Every Platform',
  'Banner & Display Ad Sets',
  'Product Ad Shots & Backgrounds',
  'Brand Styles & Seasonal Packs',
  'FREE Commercial License Upgrade',
  'All Exclusive Launch Bonuses',
  '30-Day Money-Back Guarantee',
];

export default function PricingBox() {
  return (
    <section className="pricing" id="buy">
      <div className="container narrow">
        <SectionTitle
          title="Start Generating High-Converting Ads"
          highlight="With The Power of AI"
        />
        <div className="pricing-box">
          <h3>Everything You Get With Your Purchase Today</h3>
          <ul className="pricing-list">
            {INCLUDED.map((i) => (
              <li key={i}>✓ {i}</li>
            ))}
          </ul>
          <p className="pricing-regular">
            Regular Price <s>$197</s>
          </p>
          <p className="pricing-launch">Grab your copy at the special launch price:</p>
          <p className="pricing-price">Only $37.00</p>
          {/* Hook this button to your checkout URL */}
          <a className="buy-button" href="#buy">
            BUY NOW ›
          </a>
          <p className="pricing-secure">🔒 Secure one-time payment — no monthly fees</p>
        </div>
        <p className="pricing-join">JOIN THOUSANDS OF SATISFIED CUSTOMERS.</p>
      </div>
    </section>
  );
}
