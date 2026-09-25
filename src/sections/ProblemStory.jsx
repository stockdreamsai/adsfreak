import Doodles from '../components/Decor.jsx';

const ALERTS = [
  { icon: '📣', text: <>Over <strong>10 million businesses</strong> advertise on Meta alone — all fighting for the same 1.7 seconds of attention</> },
  { icon: '📉', text: <>Ad fatigue kills even a winning creative <strong>within days</strong> — then your CPA starts climbing</> },
  { icon: '💸', text: <>Platforms reward fresh creatives with <strong>cheaper clicks</strong> — and punish stale ones with dying reach</> },
  { icon: '🙈', text: <>Tired templates and stock footage make your brand <strong>invisible</strong> — people smell "ad" and scroll</> },
  { icon: '🏎️', text: <>The brands winning right now aren't smarter — they just <strong>out-produce you 50 to 1</strong></> },
];

export default function ProblemStory() {
  return (
    <section className="problem-story">
      <Doodles />
      <div className="container narrow">
        <h2>
          Let's Be Brutally Honest:{' '}
          <span className="grad-text">Your Ads Are Dying Faster Than You Can Replace Them.</span>
        </h2>
        <p className="problem-kicker">And every day without a fresh winner, you're paying for it.</p>

        <div className="problem-split">
          <div className="problem-copy">
            <p>
              It's not your product. It's not your targeting. Platforms killed targeting hacks
              years ago — today <strong>the creative IS the campaign</strong>. And the math is
              brutal:
            </p>
            <ul className="alert-list">
              {ALERTS.map((a, i) => (
                <li key={i}>
                  <span className="alert-icon" aria-hidden="true">{a.icon}</span>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
            <p>
              So you know you need a constant stream of fresh video ads. And that's exactly where
              the trap snaps shut…
            </p>
          </div>
          <div className="problem-media">
            <img className="problem-img" src="/images/reference-ad.jpg" alt="A winning reference ad" loading="lazy" />
            <span className="float-chip chip-bad">📉 Ad fatigue sets in</span>
            <span className="float-chip chip-warn">⏱ 1.7s to hook</span>
          </div>
        </div>

        <p className="problem-bridge">because here's what nobody tells you about getting them made…</p>
      </div>
    </section>
  );
}
