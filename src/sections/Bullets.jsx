import { Section, Title, FounderCallout } from '../ui.jsx';

const BULLETS = [
  <>Unlock Winning Ads with a <b>One-Time Investment</b></>,
  <>Experience <b>Lightning-Fast</b> Cloning Speeds</>,
  <>Explore <b>274 Proven Templates</b> Now</>,
  <>AI-Powered Versatility Across <b>Every Niche</b></>,
  <>Reclaim Your <b>Valuable Time</b> with AI Efficiency</>,
  <>Star In Every Ad <b>Without Filming</b> — You or 100+ Avatars</>,
];

const PLATFORMS = ['TikTok', 'Facebook', 'Instagram', 'YouTube', 'Reels', 'Shorts'];

export default function Bullets() {
  return (
    <Section tone="dark" className="bullets">
      <p className="kicker">2,400+ People can't be wrong.</p>
      <Title>Let Our AI Do The Magic For You.</Title>
      <ul className="bullet-grid">
        {BULLETS.map((b, i) => (
          <li key={i}><span className="dot" aria-hidden="true" /><span>{b}</span></li>
        ))}
      </ul>
      <Title as="h3" className="platforms-title">Social Ads Freak Videos Work Seamlessly With All Major Platforms</Title>
      <div className="platforms">
        {PLATFORMS.map((p) => <span key={p}>{p}</span>)}
      </div>
      <FounderCallout>
        Every video on this page is me — and <b>I never picked up a camera</b>. I fed Social Ads Freak proven formats and let it clone them: short-form viral ads that stop the scroll, plus long-form talking videos that build trust — no crew, no studio, no editing.
      </FounderCallout>
    </Section>
  );
}
