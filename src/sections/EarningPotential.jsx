import { SectionTitle } from '../components/Shared.jsx';

export default function EarningPotential() {
  return (
    <section className="earning">
      <div className="container">
        <SectionTitle
          kicker="Two Ways In"
          title={'"But What If I Don’t Have A Product Yet?"'}
          sub="Fair question. Cloning winning ads pays off whether you already sell something or you're starting from a blank page. Pick the lane you're actually in."
        />
        <div className="earning-grid two">
          <div className="earning-card c1">
            <span className="earning-icon" aria-hidden="true">🎭</span>
            <p className="earning-kicker">Starting from scratch</p>
            <h3>The Faceless Creator</h3>
            <p>
              No product. No camera. No audience. Build content channels around an AI persona you
              cast once and keep forever — then point that attention at affiliate offers, brand
              deals, or your own thing when you're ready.
            </p>
            <ul className="check-list">
              <li>Never appear on camera</li>
              <li>Same face, every single video</li>
              <li>No creator fees, no scheduling, no drama</li>
              <li>Post in 30+ languages from one script</li>
            </ul>
          </div>
          <div className="earning-card c3">
            <span className="earning-icon" aria-hidden="true">🚀</span>
            <p className="earning-kicker">Already selling something</p>
            <h3>Brand Velocity</h3>
            <p>
              You don't have a traffic problem. You have a creative problem. Every week you wait on
              an editor is a week your competitor is testing hooks you haven't tried yet.
            </p>
            <ul className="check-list">
              <li>Clone the ads already winning in your niche</li>
              <li>Ten angles live before your next creative call</li>
              <li>Refresh creative the day fatigue hits</li>
              <li>Open new markets without a reshoot</li>
            </ul>
          </div>
        </div>
        <p className="earning-tagline">Or run both. <strong>It's the same engine either way.</strong></p>
      </div>
    </section>
  );
}
