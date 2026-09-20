import { Circled } from '../components/Shared.jsx';

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="container narrow guarantee-inner">
        <div className="guarantee-copy">
          <h2 className="on-dark">
            Launch Faster &amp; Test More In{' '}
            <Circled light><span className="grad-text-light">30 Days</span></Circled> — Or Pay
            Nothing.
          </h2>
          <p className="on-dark">
            Here's the deal: get inside, clone your first ads tonight, run them for a full month.
            If you don't launch faster, test more angles, and feel the difference in your
            campaigns — email us and every cent comes back to you.
          </p>
          <p className="on-dark">
            <strong>No hoops. No friction. No questions. No risk.</strong> Either it works for
            you, or it's free. All the risk is on us — the only way you lose is by not trying it.
          </p>
        </div>
        <div className="guarantee-badge" aria-hidden="true">
          <span>30-DAY<br />MONEY<br />BACK</span>
        </div>
      </div>
    </section>
  );
}
