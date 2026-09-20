import { CTAButton, VideoFrame, TypedWords } from '../components/Shared.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-kicker">THE FREAK IS BACK… NOW WITH AI SUPERPOWERS</p>
        <h1>
          Skyrocket Your Conversions, Traffic and Customer Engagement{' '}
          <span className="grad-text-light">With AI Custom Made Video Ads</span> Starring <TypedWords />
        </h1>
        <p className="hero-sub">
          Social Ads Freak doesn't generate random AI videos. It clones ads that already won — the
          hook, the pacing, the structure, the CTA — and rebuilds them around{' '}
          <strong>your product</strong>. The face on camera? Your call:{' '}
          <strong>your own photo</strong>, or any of <strong>100+ freakishly real AI avatars</strong>{' '}
          — with voice, music, and captions done, ready for TikTok, Facebook, Instagram, or YouTube.
        </p>

        <div className="hero-showcase">
          <div className="showcase-col">
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
          <div className="showcase-col">
            <VideoFrame
              src="https://ddufpaulv1kgi.cloudfront.net/videos/ali-focus4.mp4"
              label="✓ The Clone"
            />
          </div>
        </div>

        <div className="hero-offer">
          <p className="offer-regular">
            Regular Price <s>$197</s>
          </p>
          <p className="offer-note">
            No monthly fees — <strong>One Time Payment</strong>
          </p>
          <p className="offer-today">
            Today: Just <strong>$47</strong> <span className="offer-discount">(76% Discount)</span>
          </p>
          <CTAButton large>Get Social Ads Freak Now</CTAButton>
          <p className="offer-guarantee">🛡 30-Day Money-Back Guarantee</p>
          <p className="offer-secure">🔒 Secure 256-bit SSL checkout</p>
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
