const PLATFORMS = ['Facebook', 'Instagram', 'TikTok', 'YouTube', 'Google Ads', 'Shopify', 'WordPress', 'X'];

export default function PlatformsStrip() {
  return (
    <section className="platforms">
      <div className="container">
        <p className="platforms-title">
          Brand-new AI ad creatives <strong>Work Seamlessly With All Major Platforms</strong>
        </p>
        <div className="platforms-row">
          {PLATFORMS.map((p) => (
            <span className="platform-pill" key={p}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
