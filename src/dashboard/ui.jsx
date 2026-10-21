import { useEffect, useRef, useState } from 'react';
import Icon from './icons.jsx';

export const fmt = (n) => n.toLocaleString('en-US');

// Smallest offered length that fits the template (a 12s template runs as 15s)
export const fitLength = (s, lengths) => (lengths.find((l) => l.s >= s) || lengths[lengths.length - 1]).s;

/* Gold MAX badge. `locked` adds the padlock used on gated controls. */
export function MaxBadge({ locked = false, label = 'MAX' }) {
  return (
    <span className={`max-badge ${locked ? 'is-locked' : ''}`}>
      {locked ? <Icon name="lock" size={11} strokeWidth={2.6} /> : <Icon name="crown" size={11} strokeWidth={2.6} />}
      {label}
    </span>
  );
}

/* Section header for each step of the builder */
export function StepHead({ n, done, title, hint, tag }) {
  return (
    <header className="step-head">
      <span className={`step-n ${done ? 'is-done' : ''}`} aria-hidden="true">
        {done ? <Icon name="check" size={15} strokeWidth={3} /> : n}
      </span>
      <div className="step-copy">
        <h2>{title}</h2>
        {hint && <p>{hint}</p>}
      </div>
      {tag && <span className={`step-tag ${tag.tone || ''}`}>{tag.label}</span>}
    </header>
  );
}

/* Pill segmented control */
export function Seg({ value, onChange, options, label, size = '' }) {
  return (
    <div className={`seg ${size}`} role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.id} type="button" role="radio" aria-checked={value === o.id}
          className={value === o.id ? 'on' : ''} onClick={() => onChange(o.id)}
        >
          {o.icon && <Icon name={o.icon} size={15} />}
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* Animated voice waveform; bars bounce while `playing` */
export function Wave({ playing, bars = 18 }) {
  const heights = useRef([...Array(bars)].map((_, i) => 0.25 + Math.abs(Math.sin(i * 1.7)) * 0.75));
  return (
    <span className={`wave ${playing ? 'is-playing' : ''}`} aria-hidden="true">
      {heights.current.map((h, i) => <i key={i} style={{ '--h': h, '--d': `${(i % 6) * 0.08}s` }} />)}
    </span>
  );
}

/* Types `text` into a setter, a few characters per frame */
export function useTypewriter() {
  const timer = useRef(null);
  useEffect(() => () => clearInterval(timer.current), []);
  return (setter, text, onDone) => {
    clearInterval(timer.current);
    let i = 0;
    timer.current = setInterval(() => {
      i = Math.min(text.length, i + 4);
      setter(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer.current);
        onDone?.();
      }
    }, 16);
  };
}

/* A counter that ticks every `ms` while `on` */
export function useTicker(ms, on = true) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!on) return undefined;
    const id = setInterval(() => setT((x) => x + 1), ms);
    return () => clearInterval(id);
  }, [ms, on]);
  return t;
}

/* Count smoothly to a new number (token balance) */
export function useCountTo(value) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    const start = performance.now();
    const a = from.current;
    let raf;
    const step = (now) => {
      const p = Math.min(1, (now - start) / 700);
      const eased = 1 - (1 - p) ** 3;
      setShown(Math.round(a + (value - a) * eased));
      if (p < 1) raf = requestAnimationFrame(step);
      else from.current = value;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return shown;
}

/* Brand mark: the gradient "F" coin with its gold ring */
export function LogoMark({ size = 34 }) {
  return (
    <span className="logo-mark" style={{ width: size, height: size, fontSize: size * 0.5 }} aria-hidden="true">F</span>
  );
}
