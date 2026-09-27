import { Section, Title } from '../ui.jsx';
import { REVIEWS } from './Reviews.jsx';

export default function Stories() {
  return (
    <Section narrow className="stories">
      <Title><b>Success Stories</b></Title>
      {REVIEWS.map((r) => (
        <figure className="story-quote" key={r.name}>
          <blockquote>"{r.text}"</blockquote>
          <figcaption>
            <img src={r.img} alt="" loading="lazy" />
            <b>{r.name}</b>
            <span>{r.role}</span>
          </figcaption>
        </figure>
      ))}
    </Section>
  );
}
