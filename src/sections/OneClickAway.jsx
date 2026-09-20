import { CTAButton, MediaPlaceholder } from '../components/Shared.jsx';

export default function OneClickAway() {
  return (
    <section className="one-click">
      <div className="container narrow one-click-inner">
        <div className="one-click-copy">
          <h2 className="on-dark">
            You're Just <span className="grad-text-light">One Click Away</span> From Getting Unlimited High-Converting Ads for Any Business.
          </h2>
          <p className="on-dark">
            When you consider the time and cost it takes to create winning ad creatives the traditional way — AdsFreak pays for itself with your very first campaign.
          </p>
          <p className="on-dark">
            To get instant access, click the button below and complete your order. Your login details arrive in your inbox within minutes.
          </p>
          <CTAButton large>GET INSTANT ACCESS</CTAButton>
        </div>
        {/* PLACEHOLDER: product mockup */}
        <MediaPlaceholder label="Image — AdsFreak mockup" ratio="4/3" dark />
      </div>
    </section>
  );
}
