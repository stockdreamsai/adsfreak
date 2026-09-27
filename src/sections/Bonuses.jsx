import { Section, Title, Panel } from '../ui.jsx';

const BONUSES = [
  '31 Days of Video Content (Fast-Action Bonus · $97 value)',
  'Pro Studio — Multi-Scene Story Builder',
  'Trend Radar — 3 viral concepts for your niche',
  'Auto-Captions in six looks',
  '274 Proven Ad Templates',
  'Voice Cloning Engine',
];

export default function Bonuses() {
  return (
    <Section tone="tint" className="bonuses">
      <Title>We'll Also Gift You These <b className="grad">EXCLUSIVE Bonuses</b> With Your One-Time Investment In Social Ads Freak Today</Title>
      <Panel className="bonus-panel">
        <img src="/brand/png/saf-boxshot.png" alt="Social Ads Freak bonuses" loading="lazy" />
        <ul>
          {BONUSES.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </Panel>
    </Section>
  );
}
