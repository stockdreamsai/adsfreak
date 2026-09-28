const PLATFORMS = ['TikTok', 'Facebook', 'Instagram', 'Reels', 'YouTube', 'Shorts'];

export default function PlatformsStrip() {
  const loop = [...PLATFORMS, ...PLATFORMS];
  return (
    <section className="platforms">
      <div className="container">
        <p className="platforms-title">
          One click. Every format. <strong>Your ads, ready for every platform that prints money:</strong>
        </p>
      </div>
      <div className="platforms-marquee">
        <div className="platforms-track">
          {loop.map((p, i) => (
            <span className="platform-logo" key={i} aria-hidden={i >= PLATFORMS.length}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
