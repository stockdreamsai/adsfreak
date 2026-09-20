import { SectionTitle, MediaPlaceholder } from '../components/Shared.jsx';

const STEPS = [
  {
    n: '1',
    title: 'CHOOSE AD TYPE',
    text: 'Pick the kind of ad you need — image ad, banner, social post or product creative.',
  },
  {
    n: '2',
    title: 'DESCRIBE YOUR OFFER',
    text: 'Tell the AI about your product, audience and angle in one simple sentence.',
  },
  {
    n: '3',
    title: 'CLICK GENERATE',
    text: 'Watch AdsFreak produce scroll-stopping, high-converting ad creatives in seconds.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <SectionTitle
          title="Fire Your Ad Agency Today!"
          sub="Create ads that convert in 3 ridiculously easy steps — no design skills, no briefs, no waiting."
        />
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-info">
                <span className="step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {/* PLACEHOLDER: replace with an app screenshot of this step */}
              <MediaPlaceholder label={`Screenshot — step ${s.n}`} ratio="16/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
