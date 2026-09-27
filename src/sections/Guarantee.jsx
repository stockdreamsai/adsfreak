import { Circled } from '../components/Shared.jsx';
import { DarkDecor } from '../components/Decor.jsx';

function Seal() {
  return (
    <div className="seal" aria-hidden="true">
      <svg className="seal-ring" viewBox="0 0 200 200">
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text>
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
      <DarkDecor />
      <div className="container narrow guarantee-inner">
        <div className="guarantee-copy">
          <h2 className="on-dark">
            Launch Faster &amp; Test More In{' '}
            <Circled light><span className="grad-text-light">30 Days</span></Circled> — Or Pay Nothing.
          </h2>
          <p className="on-dark">
            Get inside, clone your first ads tonight, run them for a full month. If you don't feel
            the difference in your campaigns, one email gets you <em className="hl hl-dark">every cent back</em>.
            No hoops. No questions. All the risk is on us.
          </p>
        </div>
        <Seal />
      </div>
    </section>
  );
}
