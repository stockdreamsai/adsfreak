import { SectionTitle } from '../components/Shared.jsx';

export default function Comparison() {
  return (
    <section className="comparison">
      <div className="container">
        <SectionTitle
          title="Most AI Generates Random Videos."
          highlight="What If AI Could Clone What Converts?"
          sub="Creators are slow and expensive. Generic AI is fast — but over-polished, robotic, and nobody trusts it. The fix isn't more AI. It's AI that clones what converts."
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
