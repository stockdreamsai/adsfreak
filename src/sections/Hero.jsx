import { CTAButton, TypedWords, Circled, Countdown } from '../components/Shared.jsx';
import { DarkDecor } from '../components/Decor.jsx';

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
      <DarkDecor floor />
      <div className="container">
        <p className="hero-kicker">THE FREAK IS BACK… NOW WITH AI SUPERPOWERS</p>
        <h1>
          Skyrocket Your Conversions, Traffic &amp; Sales By{' '}
          <span className="grad-text-light">Cloning Video Ads That Already Won</span> — Starring{' '}
          <TypedWords />
        </h1>
        <p className="hero-punch">
          Zero Cameras. <span className="grad-text-light">Proven Winners.</span>
        </p>

        <SalesVideo />

        <div className="hero-offer">
          <p className="offer-urgency">⏳ Launch discount expires in:</p>
          <Countdown />
          <p className="offer-regular">
            Regular Price <s>$197</s> — <strong className="offer-note-strong">One Time Payment, No Monthly Fees</strong>
          </p>
          <p className="offer-today">
            Today: Just <Circled light><strong>$47</strong></Circled>{' '}
            <span className="offer-discount">(76% Discount)</span>
          </p>
          <CTAButton large>Get Social Ads Freak Now</CTAButton>
          <p className="offer-microcopy">
            ⚡ Instant access &nbsp;·&nbsp; 🛡 30-day money-back guarantee &nbsp;·&nbsp; 🔒 Secure
            256-bit SSL checkout
          </p>
          <p className="offer-social">
            Join <strong>2,400+ creators</strong> already cloning winning ads
          </p>
          <div className="payment-badges">
            {['VISA', 'Mastercard', 'PayPal', 'Amex', 'Discover'].map((p) => (
              <span className="payment-badge" key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
