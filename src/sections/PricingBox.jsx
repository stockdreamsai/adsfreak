import { SectionTitle, CHECKOUT_URL, Circled } from '../components/Shared.jsx';

const STACK = [
  ['Social Ads Freak — clone winning video ads', '$197'],
  ['100+ AI Avatars', '$97'],
  ['Voice Cloning Engine', '$67'],
  ['30+ Language & 50+ Accent Pack', '$67'],
  ['Proven Ad Template Library', '$47'],
  ['Pro Studio — Multi-Scene Story Builder', '$97'],
  ['"Drag-to-Clone" Any Ad', '$97'],
  ['BONUS: 31 Days of Video Content', '$97'],
];

export default function PricingBox() {
  return (
    <section className="pricing" id="buy">
      <div className="container narrow">
        <SectionTitle
          title="Start Generating High-Converting Video Ads"
          highlight="With The Power of AI"
        />
        <div className="pricing-box">
          <span className="pricing-ribbon">76% OFF</span>
          <img className="pricing-boxshot" src="/brand/png/saf-boxshot.png" alt="Social Ads Freak" />
          <h3>Here's Everything You Get Today</h3>
          <ul className="pricing-list stack">
            {STACK.map(([item, value]) => (
              <li key={item}>
                <span>✓ {item}</span>
                <span className="stack-value">{value}</span>
              </li>
            ))}
            <li className="stack-total">
              <span>Total Value</span>
              <span className="stack-value">$766</span>
            </li>
          </ul>
          <p className="pricing-regular">
            Regular Price <s>$197</s>
          </p>
          <p className="pricing-launch">No monthly fees — <strong>One Time Payment</strong></p>
          <p className="pricing-price">Today: Just <Circled>$47</Circled></p>
          <a className="buy-button" href={CHECKOUT_URL}>
            BUY NOW ›
          </a>
          <p className="pricing-secure">🛡 30-Day Money-Back Guarantee &nbsp;·&nbsp; 🔒 Secure 256-bit SSL checkout</p>
          <div className="payment-badges">
            {['VISA', 'Mastercard', 'PayPal', 'Amex', 'Discover'].map((p) => (
              <span className="payment-badge" key={p}>{p}</span>
            ))}
          </div>
        </div>
        <p className="pricing-join">JOIN THOUSANDS OF SATISFIED CREATORS.</p>
      </div>
    </section>
  );
}
