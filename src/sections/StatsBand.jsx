import { CountUp } from '../components/Shared.jsx';

const STATS = [
  { icon: '🎬', value: '12,000+', label: 'Ads Generated' },
  { icon: '👥', value: '2,400+', label: 'Active Creators' },
  { icon: '🌍', value: '30+', label: 'Languages' },
  { icon: '⭐', value: '4.8/5', label: 'Avg. Rating' },
];

export default function StatsBand({ title }) {
  return (
    <section className="stats-band">
      <div className="container">
        {title && <h2 className="stats-title">{title}</h2>}
        <div className="stats-panel">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-icon" aria-hidden="true">{s.icon}</span>
              <p className="stat-value"><CountUp value={s.value} /></p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
