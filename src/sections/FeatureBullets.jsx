const BULLETS = [
  <>Clone the <em className="hl">hook, pacing &amp; CTA</em> of ads that already sell</>,
  <>Launch <em className="hl">tonight</em> — not in 2 weeks</>,
  <>Star in every ad <em className="hl">without filming</em> — you, or 100+ AI avatars</>,
  <>One payment. <em className="hl">Unlimited ads.</em> No monthly fees</>,
];

const PLATFORMS = ['TikTok', 'Instagram', 'Facebook', 'YouTube', 'Reels', 'Shorts'];

export default function FeatureBullets() {
  return (
    <section className="feature-bullets">
      <div className="container">
        <div className="bullets-card">
          <p className="bullets-card-kicker">What you walk away with</p>
          <ul className="bullets-grid">
            {BULLETS.map((b, i) => (
              <li key={i}>
                <span className="bullet-num">✓</span> <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="bullets-platforms">
            Ready for{' '}
            {PLATFORMS.map((p, i) => (
              <span key={p}>
                <strong>{p}</strong>
                {i < PLATFORMS.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
