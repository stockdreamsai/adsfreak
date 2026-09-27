import { SectionTitle, CTAButton } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

// The hero story: 2013 discovery → the pattern repeats in 2026.
export default function SuccessStories() {
  return (
    <section className="founders-story">
      <Doodles />
      <div className="container narrow">
        <SectionTitle
          kicker="A Quick Story — And Why It's Worth $1,000s To You"
          title="The Last Time We Spotted This Window,"
          highlight="The People Who Listened Won Big"
        />

        <div className="timeline" aria-label="From Social Lead Freak in 2013 to Social Ads Freak in 2026">
          <div className="timeline-node">
            <span className="timeline-year">2013</span>
            <span className="timeline-name">Social Lead Freak</span>
            <span className="timeline-edge">Edge: targeting leverage</span>
          </div>
          <div className="timeline-line" aria-hidden="true">
            <span>targeting gets automated…</span>
          </div>
          <div className="timeline-node is-now">
            <span className="timeline-here">You are here</span>
            <span className="timeline-year">2026</span>
            <span className="timeline-name">Social Ads Freak</span>
            <span className="timeline-edge">Edge: creative velocity</span>
          </div>
        </div>

        <div className="founders-split">
          <div className="founders-photo">
            <img className="founders-img" src="/images/founders.jpg" alt="Ali G and Marcus Lim" loading="lazy" />
            <span className="float-chip chip-good">Built in 2013 · Rebuilt for 2026</span>
          </div>
          <div className="founders-copy">
            <p>
              In <strong>2013</strong>, everyone "serious" laughed at Facebook Ads. Ali G and Marcus
              Lim didn't — they built <strong>Social Lead Freak</strong>, and the marketers who
              grabbed it early rode the <em className="hl">most profitable traffic window</em> the
              internet had ever seen. Then the edge was gone and the costs tripled.
            </p>
            <p>
              Today targeting is a checkbox. <em className="hl">Creative is the battlefield.</em>{' '}
              That's why the same duo rebuilt the Freak — this time for AI video.
            </p>
            <p className="founders-quote">
              "We saw the shift early in 2013. We're seeing the exact same shape again. This time,
              you get to be early."
            </p>
            <CTAButton>I Want In Early</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
