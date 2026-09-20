import { SectionTitle, Circled } from '../components/Shared.jsx';

const FEATURES = [
  { icon: '🔗', title: 'Drag In Any Ad', text: "Found a scroll-stopper in the wild? Just drag it in. Social Ads Freak instantly analyzes the ad's structure, timing, and persuasion framework." },
  { icon: '📜', title: 'AI Script Extraction', text: 'It deconstructs the winning script — the hook, the pain point, the solution, and the CTA — then rewrites it for your product.' },
  { icon: '🧬', title: 'Structure Cloning', text: 'The pacing, scene transitions, b-roll timing, and visual rhythm are all replicated. Same proven flow — completely new creative.' },
  { icon: '🎭', title: 'Your Brand, Your Face', text: 'Swap in your product shots, choose your avatar or use your own face, select a voice — and generate a brand-new ad that’s 100% yours.' },
  { icon: '📈', title: 'Clone At Scale', text: 'Spin up dozens of variations from one winning ad — test 50 in the time it used to take to produce one. Scale what works, fast.' },
  { icon: '⚡', title: 'Ready In Minutes', text: 'From paste to publish in under 5 minutes. No editing software, no production team, no waiting. Just results — fast.' },
];

export default function DragToClone() {
  return (
    <section className="drag-clone">
      <div className="container">
        <SectionTitle
          kicker="The Freakiest Feature"
          title="Clone Any Video Ad With"
          highlight={<Circled><span className="grad-text">One Drag</span></Circled>}
          sub="See a freakishly good ad on TikTok, Instagram, or Facebook? Drag it in. Social Ads Freak reverse-engineers the structure, hook, pacing, and CTA — then rebuilds the entire ad with your product and your face."
        />
        <div className="audience-grid">
          {FEATURES.map((f) => (
            <div className="audience-card" key={f.title}>
              <span className="audience-icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
