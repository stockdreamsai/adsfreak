import { SectionTitle, Circled } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

const STEPS = [
  {
    n: '1',
    title: 'PICK AN AD TO CLONE',
    text: <>Drop in a winner you found in the wild — or start from <em className="hl">274 proven templates</em>.</>,
    img: '/images/step-templates-poster.jpg',
  },
  {
    n: '2',
    title: 'SWAP IN YOUR DETAILS',
    text: <>Your product, your face (or an avatar), your cloned voice — in <em className="hl">30+ languages</em>.</>,
    img: '/images/step-upload.jpg',
  },
  {
    n: '3',
    title: 'GENERATE & LAUNCH',
    text: <>One scroll-stopping vertical ad, <em className="hl">ready to post tonight</em>.</>,
    img: '/images/step-generated-poster.jpg',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <Doodles />
      <div className="container">
        <SectionTitle
          kicker="3 Simple Steps"
          title={<><Circled>Fire</Circled> Your Video Crew Today</>}
          sub="If you can copy-paste, you can do this. No camera, no studio, no learning curve."
        />
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-info">
                <span className="step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <img className="step-img" src={s.img} alt={s.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
