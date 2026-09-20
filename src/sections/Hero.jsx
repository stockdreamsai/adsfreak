import { CTAButton, MediaPlaceholder } from '../components/Shared.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <h1>
          Skyrocket Your Conversions, Traffic &amp; Customer Engagement{' '}
          <span className="grad-text-light">With AI-Driven Ad Creatives in Under 60 Seconds.</span>
        </h1>
        <p className="hero-sub">Outpace Your Competition.</p>
        <p className="hero-note">2 Big Brand Discount — Limited Time Special Launch Pricing</p>

        {/* PLACEHOLDER: replace with your VSL embed (YouTube/Vimeo/Wistia iframe) */}
        <div className="hero-video">
          <MediaPlaceholder label="▶ Sales video — replace with your VSL embed" dark />
        </div>

        <div className="hero-offer">
          <p className="offer-regular">
            Regular Price <s>$197</s>
          </p>
          <p className="offer-today">
            Today Just <strong>$37</strong> <span className="offer-discount">(81% Discount)</span>
          </p>
          <CTAButton large>GET ADSFREAK NOW</CTAButton>
          <p className="offer-people">
            <span className="offer-avatars" aria-hidden="true">👤👤👤👤👤</span>
            500+ people can't be wrong. Let Our AI Do The Magic For You.
          </p>
        </div>
      </div>
    </section>
  );
}
