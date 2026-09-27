import { Section, Title } from '../ui.jsx';

const PLATFORMS = ['TikTok', 'Facebook', 'Instagram', 'YouTube', 'Reels', 'Shorts', 'Snapchat', 'Pinterest', 'LinkedIn', 'Any HD download'];

export default function Export() {
  return (
    <Section tone="tint" narrow className="export">
      <Title>Export Your Social Ads Freak Videos Quickly To <b>ANY</b> of The Following Platforms!</Title>
      <div className="platform-grid">
        {PLATFORMS.map((p) => <span key={p}>{p}</span>)}
      </div>
      <p className="lead-strong">There's Nothing To Install.<br />Just Select, Describe, and Generate.</p>
      <p className="center">Social Ads Freak is <b>100% cloud based</b> so there's no frustrating software for you to download and install on your computer. This way you can use it on Mac, PC, Android, and your Apple devices.</p>
    </Section>
  );
}
