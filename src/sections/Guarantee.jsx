import { Circled } from '../components/Shared.jsx';

function Seal() {
  return (
    <div className="seal" aria-hidden="true">
      <svg className="seal-ring" viewBox="0 0 200 200">
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text>
          {/* textLength = circumference of r=78 (2πr ≈ 490) so the ring closes exactly */}
          <textPath href="#seal-circle" textLength="486" lengthAdjust="spacing">
            30-DAY MONEY-BACK GUARANTEE • RISK FREE •
          </textPath>
        </text>
      </svg>
      <div className="seal-core">
        <span className="seal-num">30</span>
        <span className="seal-label">DAYS<br />RISK-FREE</span>
      </div>
    </div>
  );
}

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
        <Seal />
      </div>
    </section>
  );
}
