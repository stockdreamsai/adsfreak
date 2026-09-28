import { MediaPlaceholder } from '../components/Shared.jsx';

export default function RightAds() {
  return (
    <section className="right-ads">
      <div className="container narrow">
        <h2>
          Without The <span className="grad-text">“RIGHT”</span> Ads and Creatives, You Won't Be Able To Attract Attention
        </h2>
        <div className="right-ads-split">
          <div>
            <p>As digital marketing evolves, one thing stays true: attention is the currency. The ad creative decides whether your campaign prints money or burns budget.</p>
            <p>Platforms reward fresh, engaging creatives with cheaper clicks. Stale, generic ads get punished with rising costs and falling reach.</p>
            <p>The brands that win are the ones that can produce more high-quality creative variations, faster, than everyone else.</p>
          </div>
          {/* PLACEHOLDER: before/after or VS comparison image */}
          <MediaPlaceholder label="Image — boring ad VS AdsFreak ad" ratio="4/3" />
        </div>
      </div>
    </section>
  );
}
