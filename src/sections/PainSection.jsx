import { MediaPlaceholder } from '../components/Shared.jsx';

export default function PainSection() {
  return (
    <section className="pain">
      <div className="container narrow">
        <h2>
          Creating the Perfect Ads for Your Brand Can Be{' '}
          <span className="grad-text">Costly, Time-Consuming &amp; Extremely Challenging!</span>
        </h2>
        <div className="pain-split">
          {/* PLACEHOLDER: hourglass / frustration image */}
          <MediaPlaceholder label="Image — hourglass / wasted time" ratio="4/3" />
          <div className="pain-copy">
            <p>You need fresh angles, hooks and visuals for every campaign — and you need them yesterday.</p>
            <p>Briefing a designer takes days. Agencies charge monthly retainers. Freelancers disappear mid-project. And stock templates make you look like everyone else.</p>
            <p>Meanwhile your competitors keep testing new creatives daily and eating your market share.</p>
            <p>
              You don't have unlimited time or budget. That's exactly why we built <strong>AdsFreak</strong> — to make winning ad creatives effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
