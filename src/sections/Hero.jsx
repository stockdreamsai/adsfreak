import { CTAButton, VideoFrame, TypedWords, Circled, Countdown } from '../components/Shared.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-kicker">THE FREAK IS BACK… NOW WITH AI SUPERPOWERS</p>
        <h1>
          Skyrocket Your Conversions, Traffic &amp; Sales By{' '}
          <span className="grad-text-light">Cloning Video Ads That Already Won</span> — Starring{' '}
          <TypedWords />
        </h1>
        <p className="hero-sub">
          While your competitors burn <strong>$500 per video</strong> and wait{' '}
          <strong>2 weeks</strong> on editors, you'll clone the exact hook, pacing and structure of
          proven winners — rebuilt around <strong>your product</strong>, in{' '}
          <strong>under 10 minutes</strong>. Star in them with your own face and cloned voice, or
          cast any of <strong>100+ freakishly real AI avatars</strong>. No camera. No crew. No
          design skills.
        </p>

        <div className="hero-showcase">
          <div className="showcase-col tilt-left">
            <VideoFrame
              src="https://ddufpaulv1kgi.cloudfront.net/videos/rogan-onnit.mp4"
              label="The Original"
            />
          </div>
          <div className="showcase-middle">
            <div className="showcase-avatars">
              <img src="https://ddufpaulv1kgi.cloudfront.net/avatars/Freya.jpg" alt="" aria-hidden="true" />
              <img src="https://ddufpaulv1kgi.cloudfront.net/avatars/Marcus.jpg" alt="" aria-hidden="true" />
              <img className="showcase-avatar-main" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Avatar" />
            </div>
            <p className="showcase-caption">your face — or 100+ others</p>
            <img className="showcase-product" src="https://ddufpaulv1kgi.cloudfront.net/thumbnails/focus-factor.jpg" alt="Product" />
            <span className="showcase-arrow" aria-hidden="true">⤳</span>
          </div>
          <div className="showcase-col tilt-right">
            <VideoFrame
              src="https://ddufpaulv1kgi.cloudfront.net/videos/ali-focus4.mp4"
              label="✓ The Clone"
            />
          </div>
        </div>

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
