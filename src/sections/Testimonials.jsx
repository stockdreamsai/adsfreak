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
  {
    name: 'Devin P.',
    role: 'DTC Founder',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Marcus.jpg',
    result: 'Creative testing made easier',
    text: 'We can explore new hooks and angles without rebuilding every video from scratch. It has made testing fresh creative feel much more manageable.',
  },
  {
    name: 'Sofia K.',
    role: 'Growth Marketer',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Maya.jpg',
    result: 'More concepts, less waiting',
    text: 'I can turn a strong ad concept into a polished variation quickly. It gives our team more options to review and test.',
  },
  {
    name: 'Theo B.',
    role: 'Small Business Owner',
    img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Aria.jpg',
    result: 'No filming setup needed',
    text: 'Getting started was straightforward, and I didn’t need to set up a shoot just to try a new video ad idea. A useful tool for a lean team.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials bg-grid" id="testimonials">
      <Doodles />
      <div className="container">
        <SectionTitle
          kicker="Don't Just Take Our Word"
          title="Freaks Are Already"
          highlight="Winning With It"
        />
        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {[0, 1].map((copy) => (
              <div className="testimonial-grid" key={copy} aria-hidden={copy === 1}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
