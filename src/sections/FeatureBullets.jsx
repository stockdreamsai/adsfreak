const BULLETS = [
  <>Steal the DNA of winning ads — <strong>hook, pacing &amp; CTA cloned</strong> from creatives that already convert</>,
  <>Launch tonight, not in 2 weeks — test <strong>10 angles</strong> before your competitor tests one</>,
  <>Never pay <strong>$500 per video</strong> again — unlimited creatives for one flat payment</>,
  <>Be in every ad <strong>without ever filming</strong> — your face &amp; cloned voice, or 100+ real-looking avatars</>,
  <>Sell in <strong>30+ languages</strong> overnight — open new markets without a reshoot</>,
  <>Never run out of winners — <strong>Trend Radar</strong> hands you what's going viral in your niche</>,
];

export default function FeatureBullets() {
  return (
    <section className="feature-bullets">
      <div className="container">
        <ul className="bullets-grid">
          {BULLETS.map((b, i) => (
            <li key={i}>
              <span className="bullet-num">✓</span> <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
