import { SectionTitle } from '../components/Shared.jsx';

const WAYS = [
  { color: 'c1', icon: '🛒', title: 'Marketplaces', text: 'Sell ready-made ad creative packs on digital marketplaces.' },
  { color: 'c2', icon: '💼', title: 'Freelancing', text: 'Offer done-for-you ad design gigs on Fiverr and Upwork.' },
  { color: 'c3', icon: '📣', title: 'Client Campaigns', text: 'Run full creative testing campaigns for paying clients.' },
  { color: 'c4', icon: '✍️', title: 'Content & Blogging', text: 'Power your posts, thumbnails and promos with fresh visuals.' },
  { color: 'c5', icon: '🤝', title: 'Affiliate Promos', text: 'Create unique creatives that outperform swipe files.' },
  { color: 'c6', icon: '🚀', title: 'Your Own Offers', text: 'Launch and scale your own products with unlimited creatives.' },
];

export default function EarningPotential() {
  return (
    <section className="earning">
      <div className="container">
        <SectionTitle
          title="Unlock Unlimited Earning Potential With"
          highlight="AdsFreak"
          sub="Turn a one-time investment into brand-new income streams — this is just the tip of the AI iceberg:"
        />
        <div className="earning-grid">
          {WAYS.map((w) => (
            <div className={`earning-card ${w.color}`} key={w.title}>
              <span className="earning-icon" aria-hidden="true">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
