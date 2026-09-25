import { SectionTitle } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

const TESTIMONIALS = [
  {
    name: 'Marcus R.',
    role: 'Ecom Brand Owner',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Marcus.jpg',
    result: 'Beat agency CPA',
    text: 'I cloned a competitor’s winning TikTok ad with my own product in about 10 minutes. First version we ran beat our agency creative on CPA. Wild.',
  },
  {
    name: 'Maya T.',
    role: 'Agency Founder',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Maya.jpg',
    result: '9 clients, 0 videographers',
    text: 'We deliver UGC ads to 9 clients now without a single videographer. The avatar + language combos let us localize the same winner across markets in a day.',
  },
  {
    name: 'Aria L.',
    role: 'Solo Marketer',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Aria.jpg',
    result: '30 ads a week',
    text: 'I hate being on camera. Picked an avatar, cloned my voice, and now I’m “in” 30 ads a week. Nobody can tell. Freakishly good.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials bg-grid">
      <Doodles />
      <div className="container">
        <SectionTitle
          kicker="Don't Just Take Our Word"
          title="Freaks Are Already"
          highlight="Winning With It"
        />
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <span className="testimonial-quote-mark" aria-hidden="true">“</span>
              <div className="testimonial-top">
                <p className="testimonial-stars" aria-label="5 stars">★★★★★</p>
                <span className="testimonial-result">{t.result}</span>
              </div>
              <blockquote className="testimonial-text">{t.text}</blockquote>
              <figcaption className="testimonial-author">
                <span className="avatar-ring">
                  <img className="avatar-img" src={t.img} alt={t.name} loading="lazy" />
                </span>
                <div>
                  <strong>{t.name}</strong>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
