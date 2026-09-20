import { SectionTitle, VideoFrame } from '../components/Shared.jsx';

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
      <div className="container">
        <SectionTitle
          kicker="All Cloned · Zero Cameras"
          title="Freakishly Real Clones,"
          highlight="On the Fly"
        />

        <div className="founder-callout">
          <img className="avatar-img avatar-lg" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Ali G — Social Ads Freak founder" />
          <div className="founder-bubble">
            <p className="founder-name">
              Ali G <span className="founder-title">· Founder, Social Ads Freak · Social Lead Freak (2013)</span>
            </p>
            <p>
              Every video below is me — and I never picked up a camera. I fed{' '}
              <strong>Social Ads Freak</strong> proven formats and let it clone them:{' '}
              <strong>short-form viral</strong> ads that stop the scroll, plus{' '}
              <strong>long-form</strong> talking videos that build trust — no crew, no studio, no editing.
            </p>
          </div>
        </div>

        <div className="samples-grid">
          {SAMPLES.map((s) => (
            <VideoFrame key={s.badge} src={s.src} label={s.badge} track={s.track} />
          ))}
        </div>

        <p className="samples-bridge">
          Freaky, right? <strong>One person. A dozen winning formats. Zero cameras.</strong>
          <br />
          Now swap me out for <strong>your product</strong> — that's a whole ad account's worth of
          proven creatives, with you showing up consistently <em>(or never on camera at all)</em>.
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
          <strong>Want a different face in your ads? Easy.</strong> Pick from 100+ AI avatars that
          don't look AI — or upload one photo of yourself and become your own avatar. Same goes for
          the voice — clone your own, or pick from the library.
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
