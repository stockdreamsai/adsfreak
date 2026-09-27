import Doodles, { DarkDecor } from '../components/Decor.jsx';

const ALERTS = [
  { icon: '📣', text: <><strong>10 million businesses</strong> fight for the same 1.7 seconds of attention on Meta alone</> },
  { icon: '📉', text: <>Ad fatigue kills a winning creative <strong>within days</strong> — then your CPA climbs</> },
  { icon: '🏎️', text: <>The brands winning right now simply <strong>out-produce you 50 to 1</strong></> },
];

const ROADS = [
  { icon: '🏢', title: 'Hire an agency', cost: '$1,000–$5,000 / cycle', text: 'Paid whether the ads convert or not.' },
  { icon: '🎥', title: 'Hire creators', cost: '$150–$500 / video', text: '7–14 days per round. The trend is dead by launch.' },
  { icon: '🎬', title: 'Film it yourself', cost: 'Your whole week', text: 'Gear, scripts, retakes, editing — for one clip.' },
  { icon: '🤖', title: 'Generic AI video', cost: 'Zero trust', text: 'Polished, robotic, dead behind the eyes. People scroll.' },
];

export default function ProblemStory() {
  return (
    <section className="problem-story bg-grid">
      <Doodles />
      <div className="container">
        <div className="section-title">
          <p className="section-kicker">Let's Be Honest</p>
          <h2>
            Your Ads Are Dying{' '}
            <span className="grad-text">Faster Than You Can Replace Them</span>
          </h2>
          <p className="section-sub">
            Platforms killed targeting hacks years ago. Today{' '}
            <em className="hl">the creative IS the campaign</em> — and the math is brutal:
          </p>
        </div>

        <div className="problem-split">
          <ul className="alert-list">
            {ALERTS.map((a, i) => (
              <li key={i}>
                <span className="alert-icon" aria-hidden="true">{a.icon}</span>
                <span>{a.text}</span>
              </li>
            ))}
          </ul>
          <div className="problem-media">
            <img className="problem-img" src="/images/reference-ad.jpg" alt="A winning reference ad" loading="lazy" />
            <span className="float-chip chip-bad">📉 Ad fatigue sets in</span>
            <span className="float-chip chip-warn">⏱ 1.7s to hook</span>
          </div>
        </div>

        <h3 className="roads-title">
          So you need a constant stream of fresh video ads. But every road to get them is{' '}
          <em className="hl">rigged against you:</em>
        </h3>
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
              The fix isn't more AI. It's AI that{' '}
              <span className="grad-text-light">clones what already converts.</span>
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
