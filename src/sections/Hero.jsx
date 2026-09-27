import { CTAButton } from '../components/Shared.jsx';

// TODO: paste the sales video embed URL (YouTube / Vimeo / Wistia "embed"
// link) when it's ready. While null, a styled placeholder is shown.
const VSL_EMBED_URL = null;

function SalesVideo() {
  return (
    <div className="glow-frame">
      <div className="vsl-frame">
      {VSL_EMBED_URL ? (
        <iframe
          src={VSL_EMBED_URL}
          title="Social Ads Freak sales video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="vsl-placeholder">
          <span className="vsl-play" aria-hidden="true">▶</span>
          <span className="vsl-label">Sales video coming soon</span>
        </div>
      )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">AI video ads, made simple</p>
          <h1>Make more video ads from the ideas that already work.</h1>
          <p className="hero-punch">
            Adapt proven ad formats for your product—with AI avatars, voice, and editing in one place.
          </p>
          <div className="hero-actions">
            <CTAButton large>Get started for $47</CTAButton>
            <span>One-time payment · 30-day guarantee</span>
          </div>
          <p className="hero-social">Join 2,400+ creators making video ads without a camera crew.</p>
        </div>
        <div className="hero-media">
          <SalesVideo />
          <p className="hero-media-caption">See how a winning ad becomes your next creative.</p>
        </div>
      </div>
    </section>
  );
}
