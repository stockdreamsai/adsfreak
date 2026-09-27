import { Section, Title } from '../ui.jsx';

const WAYS = [
  { tone: 'a', title: 'Faceless Creator', text: 'No product, no camera, no audience yet? Build content channels around an AI persona you cast once and keep forever.' },
  { tone: 'b', title: 'Affiliate Marketing', text: 'Create video reviews and promos for any offer you promote and make sales through your affiliate links.' },
  { tone: 'c', title: 'Ecom Testing', text: 'Clone the ads already winning in your niche and have ten angles live before your next creative call.' },
  { tone: 'd', title: 'Influencing', text: 'Turn yourself into an influencer by consistently sharing scroll-stopping video content — in 30+ languages.' },
  { tone: 'e', title: 'Local Promotions', text: 'Give your shop, clinic or restaurant big-brand video ads on a shoestring budget.' },
  { tone: 'f', title: 'Agency Work', text: 'Deliver UGC-style ads for clients in a day, not weeks (client work needs the commercial upgrade).' },
];

export default function Earning() {
  return (
    <Section className="earning">
      <Title>Unlock Unlimited Earning Potential With <b>Social Ads Freak</b></Title>
      <p className="lead">Our versatile platform not only <b>amplifies your ad output</b> but opens <b>a world of monetization</b> opportunities.</p>
      <div className="ways">
        {WAYS.map((w) => (
          <div className={`way tone-${w.tone}`} key={w.title}>
            <h3>{w.title}</h3>
            <p>{w.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
