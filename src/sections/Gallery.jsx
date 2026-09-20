import { SectionTitle, MediaPlaceholder } from '../components/Shared.jsx';

const EXAMPLES = [
  'E-com Product Ads', 'Local Business Ads', 'App Install Ads', 'Course & Coaching Ads',
  'Fashion & Beauty Ads', 'Food & Restaurant Ads', 'Real Estate Ads', 'Fitness Ads',
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <SectionTitle title="Unique Ad Creatives" highlight="On the Fly" sub="A few of the endless styles AdsFreak generates:" />
        <div className="gallery-grid">
          {EXAMPLES.map((e) => (
            <figure className="gallery-item" key={e}>
              {/* PLACEHOLDER: real generated example */}
              <MediaPlaceholder label={e} ratio="1/1" />
              <figcaption>{e}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
