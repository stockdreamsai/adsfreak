import { useRef, useState, useEffect } from 'react';

// TODO: replace with the real JVZoo/checkout link before launch.
export const CHECKOUT_URL = '#buy';

export function CTAButton({ children = 'Get Social Ads Freak Now', href = CHECKOUT_URL, large = false }) {
  return (
    <a className={`cta-button${large ? ' cta-large' : ''}`} href={href}>
      {children} <span className="cta-arrow">›</span>
    </a>
  );
}

export function SectionTitle({ kicker, title, highlight, sub }) {
  return (
    <div className="section-title">
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2>
        {title} {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

// Autoplaying, muted, looping video with a tap-to-unmute toggle.
export function VideoFrame({ src, poster, label, ratio = '9/16', track }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  return (
    <div className="video-frame" style={{ aspectRatio: ratio }}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={muted}
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        {track && <track src={track} kind="captions" srcLang="en" label="English" default />}
      </video>
      {label && <span className="video-badge">{label}</span>}
      <button
        className="video-mute-btn"
        aria-label={muted ? 'Unmute' : 'Mute'}
        onClick={() => {
          setMuted(!muted);
          if (ref.current) ref.current.muted = !muted;
        }}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}

// Rotating typed word with gradient + blinking caret (Typed.js-style).
export function TypedWords({ words = ['You', 'Any Of 100+ Avatars', 'Your Custom Avatar'] }) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let word = 0, len = words[0].length, deleting = false, timer;
    const tick = () => {
      const current = words[word];
      len += deleting ? -1 : 1;
      setText(current.slice(0, len));
      let delay = deleting ? 35 : 50;
      if (!deleting && len === current.length) { deleting = true; delay = 1600; }
      else if (deleting && len === 0) { deleting = false; word = (word + 1) % words.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 1600);
    return () => clearTimeout(timer);
  }, []);
  return <span className="typing-text">{text}</span>;
}
