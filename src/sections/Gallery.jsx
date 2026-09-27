import { Section, Title, Label, Showcase, VideoTile, AvatarMarquee } from '../ui.jsx';

const CDN = 'https://ddufpaulv1kgi.cloudfront.net/videos/';
const UGC = [
  { src: CDN + 'ali-volcano.mp4', label: 'Shoes • Volcano Resistant', track: '/captions/sample-2.vtt' },
  { src: CDN + 'ali-terminal-velocity.mp4', label: 'Gummies • Free-Fall', track: '/captions/sample-1.vtt' },
  { src: CDN + 'ali-real-estate.mp4', label: 'Real Estate • Walkthrough Story' },
];

export default function Gallery() {
  return (
    <Section tone="dark" className="gallery" id="samples">
      <Label>The Original → The Clone</Label>
      <Title>Unique Cloned Ads <b>on the Fly</b></Title>
      <p className="lead">Same hook. Same pacing. Same structure that already converted — rebuilt with a new face and a new product.</p>
      <Showcase />

      <Label>All Cloned · Zero Cameras</Label>
      <div className="tiles">
        {UGC.map((t) => <VideoTile key={t.src} {...t} />)}
      </div>
      <p className="lead center">One person. A dozen winning formats. Zero cameras. Now picture <b>your product</b> in these videos.</p>

      <Label>Go Global</Label>
      <Title>100+ AI Avatars. <b>30+ Languages.</b></Title>
      <p className="lead">Pick any face. Pick any language. Done. Your ad goes global in minutes.</p>
      <AvatarMarquee />
    </Section>
  );
}
