const PLATFORMS = ['TikTok', 'Facebook', 'Instagram', 'Reels', 'YouTube', 'Shorts'];

export default function PlatformsStrip() {
  return (
    <section className="platforms">
      <div className="container">
        <p className="platforms-title">
          Freakishly real video ads — <strong>ready for every major platform</strong>
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
