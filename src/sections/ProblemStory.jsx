export default function ProblemStory() {
  return (
    <section className="problem-story">
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
            <ul className="check-list">
              <li>Over <strong>10 million businesses</strong> advertise on Meta alone — all fighting for the same 1.7 seconds of attention</li>
              <li>Ad fatigue kills even a winning creative <strong>within days</strong> — then your CPA starts climbing</li>
              <li>Platforms reward fresh creatives with <strong>cheaper clicks</strong> — and punish stale ones with dying reach</li>
              <li>Tired templates and stock footage make your brand <strong>invisible</strong> — people smell "ad" and scroll</li>
              <li>The brands winning right now aren't smarter — they just <strong>out-produce you 50 to 1</strong></li>
            </ul>
            <p>
              So you know you need a constant stream of fresh video ads. And that's exactly where
              the trap snaps shut…
            </p>
          </div>
          <img className="problem-img" src="/images/reference-ad.jpg" alt="A winning reference ad" loading="lazy" />
        </div>

        <p className="problem-bridge">because here's what nobody tells you about getting them made…</p>
      </div>
    </section>
  );
}
