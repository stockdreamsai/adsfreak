import { Circled } from '../components/Shared.jsx';

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="container narrow guarantee-inner">
        <div className="guarantee-copy">
          <h2 className="on-dark">
            Try It For <Circled light><span className="grad-text-light">30 Days.</span></Circled>
          </h2>
          <p className="on-dark">
            If you don't launch faster… test more… and feel the difference… cancel.
          </p>
          <p className="on-dark">
            <strong>No hoops. No friction. No risk.</strong> If Social Ads Freak doesn't blow your
            mind, just reach out and we'll refund you — no questions asked.
          </p>
        </div>
        <div className="guarantee-badge" aria-hidden="true">
          <span>30-DAY<br />MONEY<br />BACK</span>
        </div>
      </div>
    </section>
  );
}
