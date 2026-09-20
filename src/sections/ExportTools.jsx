const TOOLS = ['Facebook Ads Manager', 'Google Ads', 'TikTok Ads', 'Canva', 'Photoshop', 'Figma', 'Shopify', 'WordPress'];

export default function ExportTools() {
  return (
    <section className="export-tools">
      <div className="container center">
        <h2>
          Export Your AdsFreak Creatives Quickly To <span className="grad-text">ANY of The Following Platforms</span>
        </h2>
        <div className="tools-row">
          {TOOLS.map((t) => (
            <span className="tool-pill" key={t}>{t}</span>
          ))}
        </div>
        <p className="export-note">
          <strong>There's Nothing To Install, Just Select, Describe, and Generate.</strong> AdsFreak runs fully in the cloud — download your creatives in ready-to-upload formats.
        </p>
      </div>
    </section>
  );
}
