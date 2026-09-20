import { SectionTitle } from '../components/Shared.jsx';

export default function Comparison() {
  return (
    <section className="comparison">
      <div className="container">
        <SectionTitle title="When it comes to getting ad creatives, you only have" highlight="these options…" />
        <div className="comparison-grid">
          <div className="comparison-card bad">
            <h3>Traditional Ad Creation</h3>
            <ul>
              <li>✕ $50–$500+ per single creative</li>
              <li>✕ Days (or weeks) of back-and-forth</li>
              <li>✕ Limited revisions, extra fees</li>
              <li>✕ Same recycled templates as everyone</li>
              <li>✕ Scaling tests = scaling costs</li>
            </ul>
          </div>
          <div className="comparison-card good">
            <h3>AI High-Converting Ads</h3>
            <ul>
              <li>✓ Unlimited creatives, one low price</li>
              <li>✓ Ready in under 60 seconds</li>
              <li>✓ Iterate as many times as you like</li>
              <li>✓ Unique, on-brand visuals every time</li>
              <li>✓ Test dozens of angles per day</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
