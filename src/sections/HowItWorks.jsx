import { SectionTitle } from '../components/Shared.jsx';

const STEPS = [
  {
    n: '1',
    title: 'PICK AN AD TO CLONE',
    text: 'Drop in a winner you found in the wild — or start from 274 proven, scroll-stopping templates.',
    img: '/images/step-templates-poster.jpg',
  },
  {
    n: '2',
    title: 'SWAP IN YOUR DETAILS',
    text: 'Your product, your face (or 100+ avatars), your cloned voice — in 30+ languages.',
    img: '/images/step-upload.jpg',
  },
  {
    n: '3',
    title: 'GENERATE & LAUNCH',
    text: 'One scroll-stopping vertical clip, ready to post tonight.',
    img: '/images/step-generated-poster.jpg',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <SectionTitle
          title="Fire Your Video Crew Today!"
          sub="Clone an ad that already won — in 3 ridiculously easy steps. No camera, no studio, no editing."
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
