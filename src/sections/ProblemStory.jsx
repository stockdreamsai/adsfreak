export default function ProblemStory() {
  return (
    <section className="problem-story">
      <div className="container narrow">
        <h2>
          We all know that a business without video ads is a drag.{' '}
          <span className="grad-text">But slow, uninspiring video ads?</span>
        </h2>
        <p className="problem-kicker">That's a conversion killer.</p>

        <div className="problem-split">
          <div className="problem-copy">
            <p>
              Every business needs a steady stream of fresh, high-converting video creatives.
              If the ad can't hook the audience in the first seconds, they simply scroll away:
            </p>
            <ul className="check-list">
              <li>Social platforms are flooded with content competing for attention</li>
              <li>Over 10 million businesses advertise on Meta alone</li>
              <li>Ad fatigue kills a winning creative within days</li>
              <li>Tired templates and stock footage make your brand invisible</li>
              <li>Whether you sell products, services or content — your ads are your first impression</li>
            </ul>
            <p>Which brings us to the problem with the old way of getting video ads made…</p>
          </div>
          <img className="problem-img" src="/images/reference-ad.jpg" alt="A winning reference ad" loading="lazy" />
        </div>

        <p className="problem-bridge">but… here's just one problem…</p>
      </div>
    </section>
  );
}
