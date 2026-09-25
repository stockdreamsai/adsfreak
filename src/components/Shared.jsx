import { useRef, useState, useEffect } from 'react';

// --- Scroll-reveal system -------------------------------------------------
// Tags key elements with .rv, staggers siblings, and adds .in-view when they
// enter the viewport. CSS (guarded by html.js) does the animating.
const REVEAL_SELECTORS = [
  '.hero-kicker', '.hero h1', '.hero-sub', '.hero-showcase > *', '.hero-offer',
  '.section-title', '.bullets-grid li', '.platforms-title', '.platform-pill', '.tool-pill',
  '.step', '.testimonial-card', '.comparison-card', '.audience-card', '.earning-card',
  '.dna-card', '.dna-swap', '.duo-card', '.included-row', '.stat', '.faq-item',
  '.bonus-feature', '.pricing-box', '.founder-callout', '.samples-grid .video-frame',
  '.costs-table', '.costs-tagline', '.costs-chant', '.costs-velocity',
  '.intro-boxshot', '.intro-dna-title', '.intro-duo-title', '.dna-tagline', '.duo-tagline',
  '.intro-steps li', '.intro-nsn', '.problem-copy', '.problem-img', '.problem-bridge',
  '.pain-img', '.pain-copy', '.demo-embed', '.license-badge', '.license p',
  '.samples-bridge', '.avatar-marquee', '.avatar-copy', '.avatar-pills',
  '.earning-tagline', '.pricing-join', '.guarantee-copy', '.guarantee-badge',
  '.warning p', '.warning .cta-button', '.one-click-copy', '.one-click-img',
  '.founders-img', '.founders-copy', '.ps-card', '.footer-top', '.footer-cols',
  '.export-note', '.center > .cta-button',
  '.bullets-card', '.stats-panel', '.alert-list li', '.problem-media', '.road-card', '.pain-fix',
  '.timeline-node', '.timeline-line', '.founders-photo', '.bonus-gift', '.faq-side', '.seal',
  '.vs-card', '.bonus-caption',
].join(',');

export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(REVEAL_SELECTORS));
    els.forEach((el) => el.classList.add('rv'));
    const circles = Array.from(document.querySelectorAll('.circled'));
    const targets = els.concat(circles);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('in-view'));
      return;
    }
    // stagger siblings that reveal together
    const byParent = new Map();
    els.forEach((el) => {
      const p = el.parentElement;
      if (!byParent.has(p)) byParent.set(p, []);
      byParent.get(p).push(el);
    });
    byParent.forEach((list) => {
      if (list.length > 1) {
        list.forEach((el, i) => { el.style.transitionDelay = `${Math.min(i * 80, 560)}ms`; });
      }
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.classList.add('in-view');
          io.unobserve(el);
          // Once the entrance finishes, hand the element back to its own
          // transform/transition rules so hover effects work again.
          if (el.classList.contains('rv')) {
            const delay = parseInt(el.style.transitionDelay, 10) || 0;
            setTimeout(() => {
              el.classList.remove('rv');
              el.style.transitionDelay = '';
            }, delay + 800);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Hand-drawn ellipse that traces itself around a phrase when scrolled into view.
export function Circled({ children, light = false }) {
  return (
    <span className={`circled${light ? ' circled-light' : ''}`}>
      {children}
      <svg className="circle-svg" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M148,8 C55,4 10,26 10,52 C10,82 88,97 158,94 C240,91 291,72 291,44 C291,16 208,1 118,8" />
      </svg>
    </span>
  );
}

// Counts up from 0 when scrolled into view. Keeps prefix/suffix (e.g. "12,000+").
export function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const m = String(value).match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!m || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const [, pre, numStr, post] = m;
    const target = parseFloat(numStr.replace(/,/g, ''));
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    const useCommas = numStr.includes(',');
    setDisplay(pre + (0).toFixed(decimals) + post);
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const frame = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        let n = (target * eased).toFixed(decimals);
        if (useCommas) n = Number(n).toLocaleString('en-US', { minimumFractionDigits: decimals });
        setDisplay(pre + n + post);
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value, duration]);
  return <span ref={ref}>{display}</span>;
}

// TODO: replace with the real JVZoo/checkout link before launch.
export const CHECKOUT_URL = '#buy';

// TODO: set the real launch-discount end date, e.g. '2026-09-30T23:59:59'.
// While null, the timer counts down to local midnight (evergreen).
export const LAUNCH_DEADLINE = null;

function getDeadline() {
  if (LAUNCH_DEADLINE) return new Date(LAUNCH_DEADLINE);
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d;
}

// Live countdown to the launch deadline. compact renders 00:00:00 inline.
export function Countdown({ compact = false }) {
  const [left, setLeft] = useState(() => getDeadline() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(getDeadline() - Date.now(), 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const total = Math.floor(left / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n) => String(n).padStart(2, '0');
  if (compact) {
    return (
      <span className="countdown-compact">
        {d > 0 ? `${d}d ` : ''}{pad(h)}:{pad(m)}:{pad(s)}
      </span>
    );
  }
  const units = [...(d > 0 ? [[d, 'Days']] : []), [h, 'Hours'], [m, 'Mins'], [s, 'Secs']];
  return (
    <div className="countdown" role="timer" aria-label="Launch discount ends in">
      {units.map(([v, label]) => (
        <div className="countdown-unit" key={label}>
          <span className="countdown-num">{pad(v)}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function CTAButton({ children = 'Get Social Ads Freak Now', href = CHECKOUT_URL, large = false }) {
  return (
    <a className={`cta-button${large ? ' cta-large' : ''}`} href={href}>
      {children} <span className="cta-arrow">›</span>
    </a>
  );
}

export function SectionTitle({ kicker, title, highlight, sub }) {
  // A string highlight gets the gradient wrapper; JSX highlights (e.g. a
  // Circled phrase) bring their own gradient span, since background-clip:text
  // doesn't paint into nested inline-blocks.
  const hl = typeof highlight === 'string' ? <span className="grad-text">{highlight}</span> : highlight;
  return (
    <div className="section-title">
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2>
        {title} {hl}
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
