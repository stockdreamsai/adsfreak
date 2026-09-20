// StockDreams-style platforms strip — your cloned ads work everywhere.
const PLATFORMS = [
  'TikTok',
  'Facebook',
  'Instagram',
  'Reels',
  'YouTube',
  'Shorts',
];

export default function PlatformsStripSection() {
  return (
    <section className={"section dark platforms-strip-section"}>
      <div className={"narrow center reveal container"}>
        <p className={"platforms-strip-title"}>
          Freakishly real video ads — <strong>ready for every major platform</strong>
        </p>
        <div className={"platforms-strip-row"}>
          {PLATFORMS.map((p) => (
            <span className={"payment-badge platform-strip-badge"} key={p}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
