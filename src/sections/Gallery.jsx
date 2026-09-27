import { Section, Title, VideoTile } from '../ui.jsx';

const CDN = 'https://ddufpaulv1kgi.cloudfront.net/videos/';
const TILES = [
  { src: CDN + 'rogan-onnit.mp4', label: 'The Original Ad' },
  { src: CDN + 'ali-focus4.mp4', label: 'The Clone — New Product, Your Face' },
  { src: CDN + 'amelia-terminal-velocity.mp4', label: 'Same Ad — Any Avatar' },
  { src: CDN + 'ali-volcano.mp4', label: 'Shoes • Volcano Resistant', track: '/captions/sample-2.vtt' },
  { src: CDN + 'ali-terminal-velocity.mp4', label: 'Gummies • Free-Fall', track: '/captions/sample-1.vtt' },
  { src: CDN + 'ali-real-estate.mp4', label: 'Real Estate • Walkthrough Story' },
];

export default function Gallery() {
  return (
    <Section className="gallery" id="samples">
      <Title>Unique Cloned Ads on the Fly</Title>
      <p className="lead">Each Unique And Distinct Every Time — every video below was made without touching a camera</p>
      <div className="tiles">
        {TILES.map((t) => <VideoTile key={t.src} {...t} />)}
      </div>
      <p className="lead center">All just one click of the button away.</p>
    </Section>
  );
}
