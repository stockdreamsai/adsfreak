export default function StickyCta() {
  return (
    <div className={"sticky-cta"} id={"stickyCta"} aria-hidden={"true"}>
      <div className={"sticky-cta-inner container"}>
        <div className={"sticky-cta-copy"}>
          <span className={"sticky-cta-name"}>
            Social Ads Freak
          </span>
          <span className={"sticky-cta-price"}>
            <s>
              $197
            </s>
             Today $47
          </span>
        </div>
        {/* TODO: replace YOUR_JVZOO_CHECKOUT_URL with the real JVZoo/checkout link */}
        <a href={"YOUR_JVZOO_CHECKOUT_URL"} className={"btn-buy sticky-cta-btn"}>
          Get Social Ads Freak Now
        </a>
      </div>
    </div>
  );
}
