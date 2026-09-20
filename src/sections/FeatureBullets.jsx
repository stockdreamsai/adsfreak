const BULLETS = [
  'Unlock Credibility With AI Ad Creatives In Over 100+ Styles & Formats',
  'Skyrocket Your Click-Through Rates With Scroll-Stopping Visuals',
  'Replace Expensive Designers & Slow Agencies Forever',
  'Full Commercial Rights — Sell The Ads You Create To Clients',
  '24/7 Instant Generation — No Waiting, No Revisions, No Excuses',
  'Beginner Friendly: No Design Or Copywriting Skills Needed',
];

export default function FeatureBullets() {
  return (
    <section className="feature-bullets">
      <div className="container">
        <ul className="bullets-grid">
          {BULLETS.map((b) => (
            <li key={b}>
              <span className="bullet-num">✓</span> {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
