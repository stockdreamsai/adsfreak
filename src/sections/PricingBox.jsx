import { SectionTitle, CHECKOUT_URL, Circled, Countdown } from '../components/Shared.jsx';

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
          kicker="Your Move"
          title="Get Everything Below For Less Than"
          highlight="One-Tenth The Cost Of A Single 'Old Way' Video"
          sub="One freelance video: $150–$500. One agency testing cycle: $1,000–$5,000. Social Ads Freak: one payment of $47 — for unlimited creatives, forever."
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
            Total value <s>$766</s> &nbsp;·&nbsp; Regular price <s>$197</s>
          </p>
          <p className="pricing-launch">No monthly fees — <strong>One Time Payment</strong></p>
          <p className="pricing-price">Today: Just <Circled>$47</Circled></p>
          <p className="pricing-deadline">⏳ Launch price disappears in:</p>
          <Countdown />
          <a className="buy-button" href={CHECKOUT_URL}>
            YES! GIVE ME INSTANT ACCESS ›
          </a>
          <p className="pricing-secure">🛡 30-Day Money-Back Guarantee &nbsp;·&nbsp; 🔒 Secure 256-bit SSL checkout &nbsp;·&nbsp; ⚡ Instant access</p>
          <div className="payment-badges">
            {['VISA', 'Mastercard', 'PayPal', 'Amex', 'Discover'].map((p) => (
              <span className="payment-badge" key={p}>{p}</span>
            ))}
          </div>
        </div>
        <p className="pricing-join">
          JOIN 2,400+ CREATORS ALREADY CLONING WINNERS — WHILE YOUR COMPETITORS KEEP PAYING $500 A VIDEO.
        </p>
      </div>
    </section>
  );
}
