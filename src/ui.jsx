import { useEffect, useRef, useState } from 'react';

// ---- launch settings -------------------------------------------------------
// TODO: real JVZoo/checkout link. "#buy" scrolls to the price box until then.
export const CHECKOUT_URL = '#buy';
// TODO: sales video embed URL (YouTube / Vimeo / Wistia embed link).
export const VSL_EMBED_URL = null;

export const PRICE = { regular: 197, today: 47, discount: '76%' };

// ---- layout ---------------------------------------------------------------
export function Section({ id, tone = 'white', narrow = false, className = '', children }) {
  return (
    <section id={id} className={`section tone-${tone} ${className}`.trim()}>
      <div className={narrow ? 'wrap narrow' : 'wrap'}>{children}</div>
    </section>
  );
}

// Light headline with bold/gradient spans, StockDreams style.
export function Title({ as = 'h2', children, className = '' }) {
  const Tag = as;
  return <Tag className={`title ${className}`.trim()}>{children}</Tag>;
}

export function Panel({ tone = 'tint', className = '', children }) {
  return <div className={`panel panel-${tone} ${className}`.trim()}>{children}</div>;
}

// ---- conversion elements --------------------------------------------------
export function CTA({ children = 'Get Social Ads Freak Now', href = CHECKOUT_URL, note = true }) {
  return (
    <div className="cta-block">
      <a className="cta" href={href}>
        {children} <span aria-hidden="true">›</span>
      </a>
      {note && <p className="cta-note">30 Days Money Back Guarantee</p>}
    </div>
  );
}

export function OfferBlock({ compact = false }) {
  return (
    <div className={`offer${compact ? ' offer-compact' : ''}`}>
      <p className="offer-regular">Regular Price <s>${PRICE.regular}</s></p>
      <p className="offer-note">No monthly fees - <b className="grad">One Time Payment</b></p>
      <p className="offer-today grad">Today: Just ${PRICE.today}</p>
      <p className="offer-discount">({PRICE.discount} Discount)</p>
      <CTA />
      <div className="badges">
        {['VISA', 'PayPal', 'Mastercard', 'AMEX', 'Discover'].map((b) => <span key={b}>{b}</span>)}
      </div>
      <p className="compat">🔒 Secure checkout &nbsp;·&nbsp; Works on Mac, Windows, tablet &amp; phone</p>
    </div>
  );
}

// ---- media ----------------------------------------------------------------
export function VideoTile({ src, label, track }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  return (
    <figure className="vtile">
      <div className="vtile-frame">
        <video ref={ref} src={src} muted={muted} autoPlay loop playsInline preload="metadata">
          {track && <track src={track} kind="captions" srcLang="en" label="English" default />}
        </video>
        <button
          className="vtile-mute"
          aria-label={muted ? 'Unmute' : 'Mute'}
          onClick={() => { setMuted(!muted); if (ref.current) ref.current.muted = !muted; }}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      </div>
      {label && <figcaption>{label}</figcaption>}
    </figure>
  );
}

export function SalesVideo() {
  return (
    <div className="vsl">
      {VSL_EMBED_URL ? (
        <iframe src={VSL_EMBED_URL} title="Social Ads Freak" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      ) : (
        <div className="vsl-placeholder">
          <span className="vsl-play" aria-hidden="true">▶</span>
          <span>Sales video coming soon</span>
        </div>
      )}
    </div>
  );
}

// Rotating word: erases and retypes the cast of your ads.
export function TypedWords({ words = ['You', 'Your Client', 'Anyone', 'Everybody', 'Your Team', '100+ AI Avatars'] }) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let word = 0, len = words[0].length, deleting = true, timer;
    const tick = () => {
      const current = words[word];
      len += deleting ? -1 : 1;
      setText(current.slice(0, len));
      let delay = deleting ? 45 : 75;
      if (!deleting && len === current.length) { deleting = true; delay = 1800; }
      else if (deleting && len === 0) { deleting = false; word = (word + 1) % words.length; delay = 400; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, []);
  return <span className="typed">{text}</span>;
}

// Gentle fade-up on scroll for anything marked .reveal (the only animation on the page).
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.wrap > *, .panel > *');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    els.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ---- design elements carried over from the original Social Ads Freak page ----

// Small uppercase label above a section title.
export function Label({ children }) {
  return <p className="label">{children}</p>;
}

// Founder speech-bubble callout.
export function FounderCallout({ children }) {
  return (
    <div className="founder">
      <img className="founder-avatar" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Ali G — Social Ads Freak founder" loading="lazy" />
      <div className="bubble">
        <p className="bubble-name">Ali G <span>· Founder, Social Ads Freak · Social Lead Freak (2013)</span></p>
        <p>{children}</p>
      </div>
    </div>
  );
}

// The Original → The Clone showcase.
function ShowVideo({ src, badge, accent, status }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  return (
    <div className={`show-card${accent ? ' is-clone' : ''}`}>
      <span className={`show-badge${accent ? ' accent' : ''}`}>{badge}</span>
      {status && <span className="clone-status" aria-hidden="true"><i className="cs-a">CLONING<b className="cs-dots" /></i><i className="cs-b">✓ CLONE READY</i></span>}
      <video ref={ref} src={src} muted={muted} autoPlay loop playsInline preload="metadata" />
      <button className="vtile-mute" aria-label={muted ? 'Unmute' : 'Mute'} onClick={() => { setMuted(!muted); if (ref.current) ref.current.muted = !muted; }}>{muted ? '🔇' : '🔊'}</button>
    </div>
  );
}

export function Showcase() {
  const CDN = 'https://ddufpaulv1kgi.cloudfront.net/';
  return (
    <div className="showcase">
      <ShowVideo src={CDN + 'videos/rogan-onnit.mp4'} badge="The Original" />
      <div className="show-center">
        <div className="avatar-stack">
          <img src={CDN + 'avatars/Freya.jpg'} alt="" aria-hidden="true" />
          <img src={CDN + 'avatars/Marcus.jpg'} alt="" aria-hidden="true" />
          <img className="main" src={CDN + 'avatars/ali.JPG'} alt="Avatar" />
        </div>
        <p className="show-caption">your face — or 100+ others</p>
        <img className="show-product" src={CDN + 'thumbnails/focus-factor.jpg'} alt="Product" />
        <svg className="show-arrow" viewBox="0 0 160 60" aria-hidden="true">
          <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,1 L9,5 L0,9" fill="none" stroke="rgba(200,210,230,0.7)" strokeWidth="1.8" strokeLinecap="round" /></marker></defs>
          <path d="M15 12 C50 58, 110 58, 145 12" fill="none" stroke="rgba(200,210,230,0.7)" strokeWidth="3" strokeLinecap="round" markerEnd="url(#ah)" />
        </svg>
      </div>
      <ShowVideo src={CDN + 'videos/ali-focus4.mp4'} badge="The Clone" accent status />
    </div>
  );
}

// Avatar marquee (two rows, opposite directions) + language row.
const AVATARS = ['Aria', 'Marcus', 'Anisa', 'Lian', 'Betania', 'Arnav', 'Freya', 'Maya', 'Kaison', 'Luciana', 'Jibran', 'Rumi', 'Aiden', 'Rina', 'Leonard', 'Colton', 'Valeria', 'Shaun', 'Journey', 'Kumar'];
const LANGS = ['English', 'Español', 'Português', 'Italiano', 'Deutsch', 'Français', '한국어', 'हिन्दी', 'ไทย', 'Tiếng Việt', 'Polski', 'Русский', 'Bahasa', '日本語', '中文', 'العربية'];
export function AvatarMarquee() {
  const row = (list, cls) => (
    <div className={`marquee ${cls}`}>
      <div className="marquee-track">
        {[...list, ...list].map((a, i) => (
          <span className="avatar-face" key={i} aria-hidden={i >= list.length}>
            <img src={`https://ddufpaulv1kgi.cloudfront.net/avatars/${a}.jpg`} alt={i < list.length ? a : ''} loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <div className="avatar-marquee">
      {row(AVATARS.slice(0, 10), 'left')}
      {row(AVATARS.slice(10), 'right')}
      <div className="lang-row">{LANGS.map((l) => <span key={l}>{l}</span>)}</div>
      <div className="pills"><span>100+ Avatars</span><span>30+ Languages</span><span>50+ Accents</span></div>
    </div>
  );
}

// Sticky bottom CTA, shown after the hero scrolls away.
export function StickyCta() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(window.scrollY > 900);
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <div className={`sticky${on ? ' on' : ''}`}>
      <div className="wrap sticky-inner">
        <div><b>Social Ads Freak</b><span><s>${PRICE.regular}</s> Today ${PRICE.today}</span></div>
        <a className="cta" href={CHECKOUT_URL}>Get Social Ads Freak Now <span aria-hidden="true">›</span></a>
      </div>
    </div>
  );
}
