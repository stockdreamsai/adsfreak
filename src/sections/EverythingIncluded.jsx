import { SectionTitle } from '../components/Shared.jsx';

const FEATURES = [
  {
    title: 'Freakishly Real UGC Ads',
    text: <>Talking-head, demo, testimonial and unboxing formats — <em className="hl">generated in minutes</em>.</>,
    video: '/videos/included-ugc.mp4',
    poster: '/images/included-ugc-poster.jpg',
  },
  {
    title: '100+ AI Avatars',
    text: <>Don't want your face on camera? Pick from <em className="hl">100+ hyper-realistic avatars</em>.</>,
    img: '/images/included-avatars.jpg',
  },
  {
    title: '30+ Languages',
    text: <>Go global instantly, with <em className="hl">native-sounding voices</em> in every market.</>,
    img: '/images/included-languages.jpg',
  },
  {
    title: 'Voice Cloning',
    text: <>Upload a short sample and your avatar speaks in <em className="hl">your voice</em> — in any language.</>,
    img: '/images/included-voice.jpg',
  },
  {
    title: 'Auto-Captions',
    text: <>Word-by-word captions timed to the voice, in six looks, <em className="hl">baked into your download</em>.</>,
    img: '/images/included-captions.jpg',
  },
  {
    title: 'Proven Ad Templates',
    text: <>Battle-tested formats: hook + problem + solution, demos, before/after, testimonials.</>,
    img: '/images/included-templates.jpg',
  },
  {
    title: 'Export Anywhere',
    text: <>HD downloads ready for <em className="hl">Facebook, Instagram, TikTok, YouTube</em> — any format.</>,
    img: '/images/included-export.jpg',
  },
  {
    title: 'Trend Radar',
    text: <>Finds what's going viral in your niche and hands you <em className="hl">3 ready-to-generate concepts</em>.</>,
    video: '/videos/included-trendradar.mp4',
    poster: '/images/included-trendradar-poster.jpg',
  },
  {
    title: 'Pro Studio — A Second Product, Free',
    text: <>Full multi-scene videos: AI script, up to 20 scenes, voiceover, music and a <em className="hl">timeline editor</em>.</>,
    video: '/videos/included-prostudio.mp4',
    poster: '/images/included-prostudio-poster.jpg',
  },
];

export default function EverythingIncluded() {
  return (
    <section className="included">
      <div className="container">
        <SectionTitle
          kicker="$766 Of Value · One Login · $47 Today"
          title="Here's Everything Included With"
          highlight="Social Ads Freak"
        />

        <div className="included-hero">
          <span className="included-hero-tag">The Freakiest Feature</span>
          <h3>
            Clone <em className="hl hl-dark">Any</em> Video Ad With One Drag
          </h3>
          <p>
            See a scroll-stopper on TikTok, Instagram or Facebook? Drag it in. The Clone Engine
            reverse-engineers its hook, pacing and CTA — then rebuilds the whole ad around{' '}
            <strong>your product and your face</strong>. Their winning ad becomes yours, in under 5 minutes.
          </p>
        </div>

        <div className="included-list">
          {FEATURES.map((f, i) => (
            <div className={`included-row${i % 2 ? ' reverse' : ''}`} key={f.title}>
              <div className="included-copy">
                <span className="included-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
              <div className="included-media-wrap">
                {f.video ? (
                  <video className="included-media" src={f.video} poster={f.poster} muted autoPlay loop playsInline preload="metadata"></video>
                ) : (
                  <img className="included-media" src={f.img} alt={f.title} loading="lazy" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
