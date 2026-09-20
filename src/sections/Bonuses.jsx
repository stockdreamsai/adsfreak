import { SectionTitle, MediaPlaceholder } from '../components/Shared.jsx';

// PLACEHOLDER bonuses — swap titles/descriptions for your real bonus stack.
const BONUSES = [
  { n: 1, title: '[Bonus #1 Title]', text: '[Describe the bonus and the value it adds.]' },
  { n: 2, title: '[Bonus #2 Title]', text: '[Describe the bonus and the value it adds.]' },
  { n: 3, title: '[Bonus #3 Title]', text: '[Describe the bonus and the value it adds.]' },
  { n: 4, title: '[Bonus #4 Title]', text: '[Describe the bonus and the value it adds.]' },
];

export default function Bonuses() {
  return (
    <section className="bonuses">
      <div className="container">
        <SectionTitle
          title="We'll Also Gift You These"
          highlight="EXCLUSIVE Bonuses"
          sub="With Your One-Time Investment In AdsFreak Today"
        />
        <div className="bonus-grid">
          {BONUSES.map((b) => (
            <div className="bonus-card" key={b.n}>
              <MediaPlaceholder label={`Bonus #${b.n} mockup`} ratio="4/3" />
              <h3>
                <span className="bonus-tag">BONUS #{b.n}</span> {b.title}
              </h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
