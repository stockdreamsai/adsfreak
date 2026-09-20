import { SectionTitle, MediaPlaceholder } from '../components/Shared.jsx';

const FEATURES = [
  {
    title: 'Social Media Ads',
    text: 'Thumb-stopping image ads sized and styled for Facebook, Instagram and TikTok — generated from a single prompt.',
  },
  {
    title: 'Banner & Display Ads',
    text: 'Full sets of display banners in every standard size, ready for Google Ads and retargeting campaigns.',
  },
  {
    title: 'Product Ad Shots',
    text: 'Place your product in scroll-stopping scenes and backgrounds without a photographer or studio.',
  },
  {
    title: 'Ad Hooks & Angles',
    text: 'Fresh creative angles and visual hooks so you never run out of ideas to test.',
  },
  {
    title: 'Brand Styles',
    text: 'Keep every creative on-brand with your colors, fonts and vibe applied automatically.',
  },
  {
    title: 'Seasonal Campaign Packs',
    text: 'Holiday, sale and launch-themed creatives generated on demand for every promo on your calendar.',
  },
];

export default function EverythingIncluded() {
  return (
    <section className="included">
      <div className="container">
        <SectionTitle
          title="Here's Everything Included With"
          highlight="AdsFreak"
          sub="Unleash the full power of AI on your ad campaigns."
        />
        <div className="included-list">
          {FEATURES.map((f, i) => (
            <div className={`included-row${i % 2 ? ' reverse' : ''}`} key={f.title}>
              <div className="included-copy">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
              {/* PLACEHOLDER: example output image for this feature */}
              <MediaPlaceholder label={`Examples — ${f.title}`} ratio="16/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
