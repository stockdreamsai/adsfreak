import { SectionTitle } from '../components/Shared.jsx';

const ROWS = [
  ['Cost per video', '$150 – $500', 'Pennies'],
  ['Turnaround', '7 – 14 days', 'Minutes'],
  ['Variations per round', '3 – 5', 'As many as you want'],
  ['Revisions', 'Ask and wait', 'Re-render, done'],
  ["Who's in control", 'Their calendar', 'You. Entirely.'],
  ['One testing cycle', '$1,000 – $5,000', 'Included'],
];

export default function RealCosts() {
  return (
    <section className="real-costs">
      <div className="container narrow">
        <SectionTitle
          kicker="The Shift"
          title="The Math"
          highlight="Changes."
          sub="With Social Ads Freak, creative becomes output. Not overhead. No paying per video, no waiting on creators, no filming required, no creative bottleneck."
        />
        <div className="costs-table">
          <div className="costs-head">
            <span></span>
            <span className="costs-col-old">The Old Way<br /><small>creators, crews, schedules</small></span>
            <span className="costs-col-new">Social Ads Freak<br /><small>you, a laptop, tonight</small></span>
          </div>
          {ROWS.map(([label, oldv, newv]) => (
            <div className="costs-row" key={label}>
              <span className="costs-label">{label}</span>
              <span className="costs-old">{oldv}</span>
              <span className="costs-new">{newv}</span>
            </div>
          ))}
        </div>
        <p className="costs-tagline">Same ad budget. <strong>Ten times the shots on goal.</strong></p>
        <p className="costs-chant">
          Clone. Insert face or avatar. Translate. Launch.{' '}
          <span className="grad-text">Test 5–10 cloned variations tonight. Wake up to data.</span>
        </p>
        <p className="costs-velocity">Creative velocity is the new unfair advantage.</p>
      </div>
    </section>
  );
}
