import { Section, Title } from '../ui.jsx';

export const REVIEWS = [
  {
    name: 'Marcus R.', role: 'Ecom Brand Owner', img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Marcus.jpg',
    head: 'Beat our agency creative on CPA',
    text: 'I cloned a competitor’s winning TikTok ad with my own product in about 10 minutes. First version we ran beat our agency creative on CPA. Wild.',
  },
  {
    name: 'Maya T.', role: 'Agency Founder', img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Maya.jpg',
    head: '9 clients, zero videographers',
    text: 'We deliver UGC ads to 9 clients now without a single videographer. The avatar + language combos let us localize the same winner across markets in a day.',
  },
  {
    name: 'Aria L.', role: 'Solo Marketer', img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Aria.jpg',
    head: 'I’m “in” 30 ads a week',
    text: 'I hate being on camera. Picked an avatar, cloned my voice, and now I’m “in” 30 ads a week. Nobody can tell. Freakishly good.',
  },
];

export default function Reviews() {
  return (
    <Section className="reviews">
      <Title>What our customers have to say about <b>Social Ads Freak</b></Title>
      <div className="review-grid">
        {REVIEWS.map((r) => (
          <figure className="review" key={r.name}>
            <p className="stars" aria-label="5 stars">★★★★★</p>
            <p className="review-head">{r.head}</p>
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <img src={r.img} alt="" loading="lazy" />
              <span><b>{r.name}</b><br />{r.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
