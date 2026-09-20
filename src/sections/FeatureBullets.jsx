const BULLETS = [
  'Clones proven video structure — the hook, pacing, and CTA flow that already converts',
  'Two studios in one: quick Viral Ads + full Pro Studio stories',
  'Star in your ads yourself — with your own cloned voice',
  'Or choose from 100+ freakishly real AI avatars instantly',
  'Generates natural-sounding versions in 30+ languages',
  'Trend Radar finds what’s going viral in your niche',
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
