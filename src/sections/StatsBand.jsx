// PLACEHOLDER stats — replace with your real, current numbers before launch.
const STATS = [
  { icon: '🖼️', value: '[00,000]+', label: 'Generations', text: 'Our members are generating thousands of ad creatives every day.' },
  { icon: '👥', value: '[0,000]+', label: 'Members', text: 'Users and companies are already creating with AdsFreak.' },
  { icon: '⬇️', value: '[00,000]+', label: 'Downloads', text: 'Members already used their creatives in real campaigns.' },
  { icon: '⭐', value: '★★★★★', label: 'Star Rating', text: 'Rated by our members.' },
];

export default function StatsBand({ title }) {
  return (
    <section className="stats-band">
      <div className="container">
        {title && <h2 className="stats-title">{title}</h2>}
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-icon" aria-hidden="true">{s.icon}</span>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
              <p className="stat-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
