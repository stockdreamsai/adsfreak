import { VideoFrame } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

const OLD_WAY = [
  '$150–$500 per video, every video',
  '7–14 days per round of edits',
  '3–5 variations if you’re lucky',
  'Retainers &amp; invoices — paid whether it converts or not'.replace('&amp;', '&'),
  'Generic AI "shortcut": robotic, zero trust',
];

const SAF_WAY = [
  <>Clones <strong>structures that already convert</strong> — no guesswork</>,
  <>Finished vertical ad in <strong>minutes, not weeks</strong></>,
  <>One-time <strong>$47</strong> — unlimited creatives, no retainers</>,
  <>You star — or any of <strong>100+ real-looking avatars</strong></>,
  <>Revisions? <strong>Re-render instantly</strong>, free</>,
  <>One click into <strong>30+ languages</strong></>,
];

// Stylized "old way" receipt — what one testing cycle used to cost.
const RECEIPT = [
  ['Videographer (1 clip)', '$500'],
  ['Editor, 2 revisions', '$300'],
  ['Agency retainer', '$2,000/mo'],
  ['Turnaround', '14 days'],
];

export default function Comparison() {
  return (
    <section className="comparison vs-section">
      <Doodles />
      <div className="container">
        <div className="section-title">
          <p className="section-kicker">No Contest</p>
          <h2>
            The Old Way <span className="vs-inline">vs</span>{' '}
            <span className="vs-pill">Social Ads Freak</span>
          </h2>
          <p className="section-sub">
            Social Ads Freak isn't just a cheaper way to get video ads —
            it's a <strong>faster, scalable, fully controllable evolution</strong> of the whole process.
          </p>
        </div>

        <div className="vs-grid">
          <div className="vs-card vs-old">
            <h3>The Old Way</h3>
            <div className="receipt" aria-hidden="true">
              <p className="receipt-head">INVOICE #0041 — "one test cycle"</p>
              {RECEIPT.map(([item, cost]) => (
                <p className="receipt-row" key={item}>
                  <span>{item}</span>
                  <span className="receipt-dots"></span>
                  <span>{cost}</span>
                </p>
              ))}
              <p className="receipt-row receipt-total">
                <span>TOTAL</span>
                <span className="receipt-dots"></span>
                <span>$1,000 – $5,000</span>
              </p>
              <p className="receipt-stamp">PAID (again)</p>
            </div>
            <ul>
              {OLD_WAY.map((item, i) => (
                <li key={i}>✕ {item}</li>
              ))}
            </ul>
          </div>

          <div className="vs-mark" aria-hidden="true">VS</div>

          <div className="vs-card vs-new">
            <img className="vs-mascot" src="/images/mascot-retro.png" alt="" aria-hidden="true" />
            <h3>
              AI Clones with <span className="logo-freak">Social Ads FREAK</span>
            </h3>
            <div className="vs-video">
              <VideoFrame
                src="https://ddufpaulv1kgi.cloudfront.net/videos/ali-focus4.mp4"
                label="✓ Clone ready"
              />
            </div>
            <ul>
              {SAF_WAY.map((item, i) => (
                <li key={i}>
                  <span className="vs-check">✓</span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
