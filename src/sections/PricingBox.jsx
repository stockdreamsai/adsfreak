import { SectionTitle, CHECKOUT_URL } from '../components/Shared.jsx';

const STACK = [
  'Social Ads Freak — clone winning video ads',
  '100+ AI Avatars',
  'Voice Cloning Engine',
  '30+ Language & 50+ Accent Pack',
  'Proven Ad Template Library',
  'Pro Studio — Multi-Scene Story Builder',
  '"Drag-to-Clone" Any Ad',
  'BONUS: 31 Days of Video Content',
];

export default function PricingBox() {
  return (
    <section className="pricing band-tint" id="buy">
      <div className="container narrow">
        <SectionTitle
          kicker="Simple pricing"
          title="Everything you need to make your next ad"
          sub="Get the full toolkit for a one-time payment. No monthly subscription."
        />
        <div className="pricing-box">
          <span className="pricing-ribbon">76% OFF</span>
          <img className="pricing-boxshot" src="/brand/png/saf-boxshot.png" alt="Social Ads Freak" />
          <h3>Everything included</h3>
          <ul className="pricing-list stack">
            {STACK.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <p className="pricing-price">$47 <small>one time</small></p>
          <a className="buy-button" href={CHECKOUT_URL}>
            Get instant access
          </a>
          <p className="pricing-secure">🛡 30-Day Money-Back Guarantee &nbsp;·&nbsp; 🔒 Secure 256-bit SSL checkout &nbsp;·&nbsp; ⚡ Instant access</p>
          <div className="payment-badges">
            {['VISA', 'Mastercard', 'PayPal', 'Amex', 'Discover'].map((p) => (
              <span className="payment-badge" key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
