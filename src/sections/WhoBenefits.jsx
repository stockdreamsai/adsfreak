import { SectionTitle } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

const AUDIENCES = [
  { icon: '📢', title: 'Marketing Agencies', text: 'Scale creative output 10x — without hiring videographers.' },
  { icon: '🛒', title: 'Ecom Brands', text: 'Test 50 variations in the time it takes to shoot one.' },
  { icon: '🏪', title: 'Local Businesses', text: 'Pro video ads on a shoestring budget. No crew, no studio.' },
  { icon: '📱', title: 'Influencers', text: 'Sponsored content and promos without burning out on camera.' },
  { icon: '🎯', title: 'Lead Gen', text: 'High-performing video ads tailored to every niche.' },
  { icon: '💼', title: 'Freelancers', text: 'Deliver pro-quality video ads to clients in minutes.' },
];

export default function WhoBenefits() {
  return (
    <section className="who-benefits bg-grid">
      <Doodles />
      <div className="container">
        <SectionTitle
          kicker="Who It's For"
          title="If You Sell Anything Online,"
          highlight="This Was Built For You"
        />
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
