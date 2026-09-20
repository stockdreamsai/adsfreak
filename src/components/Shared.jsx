// Small shared building blocks used across all landing-page sections.

export function CTAButton({ children = 'GET ADSFREAK NOW', href = '#buy', large = false }) {
  return (
    <a className={`cta-button${large ? ' cta-large' : ''}`} href={href}>
      {children} <span className="cta-arrow">›</span>
    </a>
  );
}

export function SectionTitle({ kicker, title, highlight, sub }) {
  return (
    <div className="section-title">
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2>
        {title} {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

// PLACEHOLDER media box — swap for a real image/video via Builder.io or by
// replacing the component with an <img>/<iframe>.
export function MediaPlaceholder({ label = 'Media placeholder', ratio = '16/9', dark = false }) {
  return (
    <div className={`media-placeholder${dark ? ' media-dark' : ''}`} style={{ aspectRatio: ratio }}>
      <span>{label}</span>
    </div>
  );
}
