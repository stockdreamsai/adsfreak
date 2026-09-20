import { SectionTitle, MediaPlaceholder } from '../components/Shared.jsx';

const COSTS = [
  { what: 'Hire an Ad Agency', cost: '$1,000–$5,000+ per month' },
  { what: 'Hire a Freelance Designer', cost: '$50–$300 per creative' },
  { what: 'Buy Premium Templates', cost: '$20–$100 per pack (and you still edit them)' },
  { what: 'Hire an In-House Designer', cost: '$3,000+ per month' },
  { what: 'DIY in Design Tools', cost: 'Hours of your time — per ad' },
];

export default function RealCosts() {
  return (
    <section className="real-costs">
      <div className="container">
        <SectionTitle title="What Are the Real Costs of" highlight="Ad Creatives?" sub="You can keep paying a premium price for every single ad… or generate unlimited ads yourself." />
        <div className="costs-list">
          {COSTS.map((c, i) => (
            <div className="cost-card" key={c.what}>
              <div className="cost-copy">
                <span className="cost-index">{i + 1}</span>
                <h3>When You {c.what}</h3>
                <p className="cost-amount">{c.cost}</p>
              </div>
              {/* PLACEHOLDER: illustrative screenshot for this cost example */}
              <MediaPlaceholder label={`Image — ${c.what}`} ratio="16/9" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
