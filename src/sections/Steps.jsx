import { Section, Title, Panel } from '../ui.jsx';

export const STEPS = [
  { n: 1, title: 'PICK AN AD TO CLONE', text: 'Drop in a winner you found in the wild — or start from 274 proven templates.', img: '/images/step-templates-poster.jpg' },
  { n: 2, title: 'SWAP IN YOUR DETAILS', text: 'Your product, your face (or an avatar), your cloned voice — in 30+ languages.', img: '/images/step-upload.jpg' },
  { n: 3, title: 'CLICK GENERATE', text: 'And let our AI do the rest. One scroll-stopping vertical ad, ready to post tonight.', img: '/images/step-generated-poster.jpg' },
];

export default function Steps() {
  return (
    <Section className="steps">
      <Panel>
        <Title><b>Fire Your Video Crew Today!</b></Title>
        <p className="lead">Generate AI High-Converting Video Ads Today!</p>
        <p className="lead-strong">Ready to use - no learning or filming needed!</p>
        {STEPS.map((s) => (
          <div className="step" key={s.n}>
            <img src={s.img} alt={s.title} loading="lazy" />
            <div>
              <span className="step-tag">Step {s.n}:</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </Panel>
    </Section>
  );
}
