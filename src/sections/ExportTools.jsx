const TOOLS = ['Facebook', 'Instagram', 'TikTok', 'YouTube', 'Reels', 'Shorts', 'Any platform, any format'];

export default function ExportTools() {
  return (
    <section className="export-tools">
      <div className="container center">
        <h2>
          Export Your Finished Ads Quickly To <span className="grad-text">ANY of The Following Platforms</span>
        </h2>
        <div className="tools-row">
          {TOOLS.map((t) => (
            <span className="tool-pill" key={t}>{t}</span>
          ))}
        </div>
        <p className="export-note">
          <strong>Download your finished ads in HD</strong> and deploy them straight to Facebook,
          Instagram, TikTok, YouTube — ready-to-upload formats for every placement.
        </p>
      </div>
    </section>
  );
}
