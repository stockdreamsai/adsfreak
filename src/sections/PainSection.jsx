export default function PainSection() {
  return (
    <section className="pain">
      <div className="container narrow">
        <h2>
          Every Road To "More Video Ads" Is{' '}
          <span className="grad-text">Rigged Against You</span>
        </h2>
        <div className="pain-split">
          <img className="pain-img" src="/images/recreated-ad.jpg" alt="Producing a video ad" loading="lazy" />
          <div className="pain-copy">
            <p>
              <strong>Hire an agency?</strong> $1,000–$5,000 per testing cycle, monthly retainers,
              and they get paid whether the ads convert or not.
            </p>
            <p>
              <strong>Hire freelance creators?</strong> $150–$500 <em>per video</em>, 7–14 days of
              back-and-forth, and 3–5 variations if you're lucky. By the time the ad lands, the
              trend it was chasing is dead.
            </p>
            <p>
              <strong>Film it yourself?</strong> Gear, scripts, retakes, editing software — and
              your whole week gone for one clip.
            </p>
            <p>
              <strong>Generic AI video?</strong> Fast, sure. But over-polished, robotic, dead
              behind the eyes. People scroll past it because nobody trusts it.
            </p>
            <p className="pain-punch">
              The fix isn't more AI. It's AI that <strong>clones what already converts</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
