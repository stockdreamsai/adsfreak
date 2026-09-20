import { CTAButton, MediaPlaceholder } from '../components/Shared.jsx';

export default function Warning() {
  return (
    <section className="warning">
      <div className="container narrow center">
        <h2>
          <span className="warning-tag">WARNING!</span> The Discount For AdsFreak is Only Available For A{' '}
          <span className="grad-text">VERY SHORT Limited Time</span>
        </h2>
        <p>
          The special launch price and the free commercial license upgrade disappear when the launch period ends. After that, AdsFreak moves to its regular price — lock in your lifetime access now.
        </p>
        {/* PLACEHOLDER: product bundle mockup */}
        <MediaPlaceholder label="Image — AdsFreak bundle mockup" ratio="16/9" />
        <CTAButton large />
      </div>
    </section>
  );
}
