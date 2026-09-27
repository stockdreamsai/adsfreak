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
