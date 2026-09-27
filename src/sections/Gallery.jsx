import { SectionTitle, VideoFrame } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

const SAMPLES = [
  {
    badge: 'Shoes • Volcano resistant',
    src: 'https://ddufpaulv1kgi.cloudfront.net/videos/ali-volcano.mp4',
    track: '/captions/sample-2.vtt',
  },
  {
    badge: 'Gummies • Free-fall',
    src: 'https://ddufpaulv1kgi.cloudfront.net/videos/ali-terminal-velocity.mp4',
    track: '/captions/sample-1.vtt',
  },
  {
    badge: 'Real Estate • Walkthrough story',
    src: 'https://ddufpaulv1kgi.cloudfront.net/videos/ali-real-estate.mp4',
  },
];

const AVATARS = ['Aria', 'Marcus', 'Anisa', 'Lian', 'Betania', 'Arnav', 'Freya', 'Maya'];

export default function Gallery() {
  return (
    <section className="gallery" id="samples">
      <Doodles />
      <div className="container">
        <SectionTitle
          kicker="Seeing Is Believing · All Cloned · Zero Cameras"
          title="Every Single Video Below Was Made"
          highlight="Without Touching A Camera"
        />

        <div className="founder-callout">
          <img className="avatar-img avatar-lg" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Ali G — Social Ads Freak founder" />
          <div className="founder-bubble">
            <p className="founder-name">
              Ali G <span className="founder-title">· Founder, Social Ads Freak · Social Lead Freak (2013)</span>
            </p>
            <p>
              Every video below is me — and <em className="hl">I never picked up a camera</em>.
              No crew, no studio, no editing.
            </p>
          </div>
        </div>

        <div className="samples-grid">
          {SAMPLES.map((s) => (
            <VideoFrame key={s.badge} src={s.src} label={s.badge} track={s.track} />
          ))}
        </div>

        <p className="samples-bridge">
          One person. A dozen winning formats. Zero cameras. Now picture{' '}
          <em className="hl">your product</em> in these videos.
        </p>

        <div className="avatar-marquee" aria-hidden="false">
          <div className="avatar-track">
            {[...AVATARS, ...AVATARS].map((a, i) => (
              <img
                key={`${a}-${i}`}
                className="avatar-img"
                src={`https://ddufpaulv1kgi.cloudfront.net/avatars/${a}.jpg`}
                alt={i < AVATARS.length ? a : ''}
                aria-hidden={i >= AVATARS.length}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <p className="avatar-copy">
          Don't want your face on camera? Pick from <em className="hl">100+ avatars that don't look AI</em>{' '}
          — or upload one photo and become your own.
        </p>
        <div className="avatar-pills">
          <span>100+ Avatars</span>
          <span>30+ Languages</span>
          <span>50+ Accents</span>
        </div>
      </div>
    </section>
  );
}
