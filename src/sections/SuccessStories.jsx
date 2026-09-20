import { SectionTitle, CTAButton } from '../components/Shared.jsx';

// The hero story: 2013 discovery → the pattern repeats in 2026.
export default function SuccessStories() {
  return (
    <section className="founders-story">
      <div className="container narrow">
        <SectionTitle
          kicker="A Quick Story — And Why It's Worth $1,000s To You"
          title="The Last Time We Spotted This Window,"
          highlight="The People Who Listened Won Big"
        />
        <div className="founders-split">
          <img className="founders-img" src="/images/founders.jpg" alt="Ali G and Marcus Lim" loading="lazy" />
          <div className="founders-copy">
            <p>
              Back in <strong>2013</strong>, everyone "serious" laughed at Facebook Ads. Too new.
              Too weird. Not for real businesses.
            </p>
            <p>
              Ali G and Marcus Lim didn't laugh. They built <strong>Social Lead Freak</strong> —
              and the marketers who grabbed it early rode the cheapest, most profitable traffic
              window the internet had ever seen. By the time everyone else caught on, the edge was
              gone and the costs had tripled.
            </p>
            <ul className="check-list">
              <li><strong>2013 edge:</strong> targeting leverage — automated away since.</li>
              <li><strong>2026 edge:</strong> creative velocity — and it's wide open right now.</li>
              <li><strong>Same playbook:</strong> spot the leverage early, build the tool, move first.</li>
            </ul>
            <p>
              Today, targeting is a checkbox. <strong>Creative is the battlefield.</strong> That's
              why the same duo spent the last year rebuilding the Freak — this time for AI video.
            </p>
            <p className="founders-quote">
              "We saw the shift early in 2013. We're seeing the exact same shape again now. This
              time, you get to be early."
            </p>
            <CTAButton>I Want In Early ›</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
