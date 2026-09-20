import { SectionTitle } from '../components/Shared.jsx';

const TESTIMONIALS = [
  {
    name: 'Marcus R.',
    role: 'Ecom Brand Owner',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Marcus.jpg',
    text: 'I cloned a competitor’s winning TikTok ad with my own product in about 10 minutes. First version we ran beat our agency creative on CPA. Wild.',
  },
  {
    name: 'Maya T.',
    role: 'Agency Founder',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Maya.jpg',
    text: 'We deliver UGC ads to 9 clients now without a single videographer. The avatar + language combos let us localize the same winner across markets in a day.',
  },
  {
    name: 'Aria L.',
    role: 'Solo Marketer',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Aria.jpg',
    text: 'I hate being on camera. Picked an avatar, cloned my voice, and now I’m “in” 30 ads a week. Nobody can tell. Freakishly good.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <SectionTitle title="What our customers have to say about" highlight="Social Ads Freak" />
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-stars" aria-label="5 stars">★★★★★</p>
              <p className="testimonial-text">“{t.text}”</p>
              <div className="testimonial-author">
                <img className="avatar-img" src={t.img} alt={t.name} loading="lazy" />
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
