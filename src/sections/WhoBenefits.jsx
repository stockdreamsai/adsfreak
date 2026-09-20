import { SectionTitle } from '../components/Shared.jsx';

const AUDIENCES = [
  { icon: '🛍️', title: 'E-com Store Owners', text: 'Test new product angles daily without designer bottlenecks.' },
  { icon: '📈', title: 'Media Buyers', text: 'Beat ad fatigue with an endless supply of fresh creatives.' },
  { icon: '🏢', title: 'Agencies', text: 'Deliver more creatives to more clients at higher margins.' },
  { icon: '🔗', title: 'Affiliate Marketers', text: 'Spin up unique creatives for every offer you promote.' },
  { icon: '📍', title: 'Local Businesses', text: 'Big-brand quality ads without big-brand budgets.' },
  { icon: '🎓', title: 'Coaches & Course Creators', text: 'Fill your funnel with ads that stop the scroll.' },
];

export default function WhoBenefits() {
  return (
    <section className="who-benefits">
      <div className="container">
        <SectionTitle title="Everyone can Benefit from" highlight="AdsFreak" />
        <div className="audience-grid">
          {AUDIENCES.map((a) => (
            <div className="audience-card" key={a.title}>
              <span className="audience-icon" aria-hidden="true">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
