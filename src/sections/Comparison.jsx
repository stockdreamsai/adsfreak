import { SectionTitle } from '../components/Shared.jsx';

export default function Comparison() {
  return (
    <section className="comparison">
      <div className="container">
        <SectionTitle
          kicker="The Difference That Prints Money"
          title="Most AI Generates Random Videos."
          highlight="Ours Clones Proven Winners."
          sub="A perfect-looking clip with a dead hook sells nothing. The money is in the structure — the hook, the pacing, the CTA that already converted. That's what generic AI can't give you, and it's exactly what the Clone Engine does."
        />
        <div className="comparison-grid">
          <div className="comparison-card bad">
            <h3>Generic AI</h3>
            <ul>
              <li>✕ Looks polished</li>
              <li>✕ Feels artificial</li>
              <li>✕ No proven structure</li>
              <li>✕ No emotional pacing</li>
              <li>✕ Low trust → low conversions</li>
            </ul>
          </div>
          <div className="comparison-card good">
            <h3>The Right AI <span className="comparison-tag">Created by Social Ads Freak</span></h3>
            <ul>
              <li>✓ Feels native + real</li>
              <li>✓ Built on proven ad structures</li>
              <li>✓ Human pacing + rhythm</li>
              <li>✓ You or an avatar as the face</li>
              <li>✓ Designed to convert</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
