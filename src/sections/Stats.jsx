import { Section, Title } from '../ui.jsx';

const STATS = [
  { icon: '🎬', value: '12,000+', label: 'Ads Generated', text: 'Our members are cloning thousands of ads every day.' },
  { icon: '👥', value: '2,400+', label: 'Members', text: 'Users and companies are already using Social Ads Freak.' },
  { icon: '🌍', value: '30+', label: 'Languages', text: 'Members launch the same winner across markets.' },
  { icon: '⭐', value: '★★★★★', label: 'Star Rating', text: 'We have a 4.8 star rating from our members.' },
];

export default function Stats({ title }) {
  return (
    <Section tone="dark" className="stats">
      {title && <Title>{title}</Title>}
      <div className="stat-grid">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-icon" aria-hidden="true">{s.icon}</span>
            <h3>{s.value}<br />{s.label}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
