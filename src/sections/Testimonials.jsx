import { SectionTitle } from '../components/Shared.jsx';

// PLACEHOLDER testimonials — replace every entry with a real, verifiable
// customer quote before launch.
const TESTIMONIALS = [
  { name: '[Customer Name]', role: 'E-com Store Owner', text: '[Real customer quote goes here — describe the result they got with AdsFreak.]' },
  { name: '[Customer Name]', role: 'Media Buyer', text: '[Real customer quote goes here.]' },
  { name: '[Customer Name]', role: 'Agency Founder', text: '[Real customer quote goes here.]' },
  { name: '[Customer Name]', role: 'Affiliate Marketer', text: '[Real customer quote goes here.]' },
  { name: '[Customer Name]', role: 'Local Business Owner', text: '[Real customer quote goes here.]' },
  { name: '[Customer Name]', role: 'Freelancer', text: '[Real customer quote goes here.]' },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <SectionTitle title="What our customers have to say about" highlight="AdsFreak" />
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">“{t.text}”</p>
              <div className="testimonial-author">
                <span className="avatar" aria-hidden="true">👤</span>
                <div>
                  <strong>{t.name}</strong>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
