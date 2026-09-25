import { DarkDecor } from '../components/Decor.jsx';

const ROADS = [
  {
    icon: '🏢',
    title: 'Hire an agency?',
    cost: '$1,000–$5,000 / cycle',
    text: 'Monthly retainers — and they get paid whether the ads convert or not.',
  },
  {
    icon: '🎥',
    title: 'Hire freelance creators?',
    cost: '$150–$500 / video',
    text: '7–14 days of back-and-forth, 3–5 variations if you’re lucky. By the time it lands, the trend is dead.',
  },
  {
    icon: '🎬',
    title: 'Film it yourself?',
    cost: 'Your whole week',
    text: 'Gear, scripts, retakes, editing software — all for one clip.',
  },
  {
    icon: '🤖',
    title: 'Generic AI video?',
    cost: 'Zero trust',
    text: 'Fast, sure. But over-polished, robotic, dead behind the eyes. People scroll past it.',
  },
];

export default function PainSection() {
  return (
    <section className="pain bg-grid">
      <div className="container">
        <div className="section-title">
          <h2>
            Every Road To "More Video Ads" Is{' '}
            <span className="grad-text">Rigged Against You</span>
          </h2>
        </div>

        <div className="roads-grid">
          {ROADS.map((r) => (
            <div className="road-card" key={r.title}>
              <div className="road-head">
                <span className="road-icon" aria-hidden="true">{r.icon}</span>
                <span className="road-blocked" aria-hidden="true">✕</span>
              </div>
              <h3>{r.title}</h3>
              <span className="road-cost">{r.cost}</span>
              <p>{r.text}</p>
            </div>
          ))}
        </div>

        <div className="pain-fix">
          <DarkDecor />
          <div className="pain-fix-copy">
            <p className="pain-fix-kicker">The way out</p>
            <p className="pain-fix-title">
              The fix isn't more AI. It's AI that <span className="grad-text-light">clones what already converts</span>.
            </p>
          </div>
          <div className="pain-fix-media">
            <img className="pain-fix-img" src="/images/recreated-ad.jpg" alt="A cloned ad starring Ali G" loading="lazy" />
            <span className="float-chip chip-good pf-chip-a">✓ Hook cloned</span>
            <span className="float-chip chip-good pf-chip-b">⚡ Ready in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
