const PLATFORMS = ['TikTok', 'Facebook', 'Instagram', 'Reels', 'YouTube', 'Shorts'];

export default function PlatformsStrip() {
  return (
    <section className="platforms">
      <div className="container">
        <p className="platforms-title">
          One click. Every format. <strong>Your ads, ready for every platform that prints money:</strong>
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
