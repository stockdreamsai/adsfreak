import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from './icons.jsx';
import Builder from './Builder.jsx';
import Stage from './Stage.jsx';
import {
  USER, LENGTHS, TEMPLATES, MY_CLONES, PRODUCTS, AVATARS, SCRIPTS, RECENT, MAX_FEATURES, MAX_LIST, NAV,
} from './data.js';
import { MaxBadge, LogoMark, fmt, fitLength, useCountTo } from './ui.jsx';

const initialTheme = () => {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

/* ---------- Sidebar ---------- */
function Sidebar({ c }) {
  return (
    <nav className={`sidebar ${c.drawer ? 'is-open' : ''}`} aria-label="Main">
      <div className="brand">
        <LogoMark />
        <span className="wordmark"><em>Social Ads</em> <b>Freak</b></span>
        <button type="button" className="icon-btn drawer-close" aria-label="Close menu" onClick={() => c.setDrawer(false)}><Icon name="x" size={18} /></button>
      </div>
      <button type="button" className="new-ad" onClick={() => { c.setDrawer(false); c.newAd(); }}>
        <Icon name="plus" size={18} strokeWidth={2.6} /> <span className="nav-text">New ad</span>
      </button>
      <div className="nav-scroll">
        {NAV.map((g, gi) => (
          <div key={gi} className="nav-group">
            {g.group && <span className="nav-label">{g.group}</span>}
            {g.items.map((it) => (
              <button
                key={it.id} type="button" title={it.label} className={`nav-item ${it.id === 'create' ? 'on' : ''}`} aria-current={it.id === 'create' ? 'page' : undefined}
                onClick={() => { if (it.id !== 'create') c.notify(`${it.label} is part of the full app. This demo covers Create Ad.`); c.setDrawer(false); }}
              >
                <span className={`nav-ic hue-${it.hue}`}><Icon name={it.icon} size={16} strokeWidth={2.2} /></span>
                <span className="nav-text">{it.label}</span>
                {it.count && <span className="nav-count">{it.count}</span>}
                {it.max && !c.isMax && <MaxBadge locked label={it.max} />}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="side-foot">
        {c.isMax ? (
          <div className="plan-card is-max"><Icon name="crown" size={18} /><div><b>MAX member</b><span>Every feature unlocked</span></div></div>
        ) : (
          <button type="button" className="plan-card" onClick={() => c.upsell(null)}>
            <span className="plan-crown"><Icon name="crown" size={18} /></span>
            <span className="plan-copy nav-text"><b>Go MAX</b><span>2× tokens, 200+ avatars, Variant Factory</span></span>
            <Icon name="chevronRight" size={16} />
          </button>
        )}
        <DemoSwitch c={c} className="in-drawer" />
      </div>
    </nav>
  );
}

/* ---------- Demo-only control: preview the screen as either plan ---------- */
function DemoSwitch({ c, className = '' }) {
  return (
    <div className={`demo-switch ${className}`} role="group" aria-label="Demo: view as plan">
      <span>Demo</span>
      <div className="seg sm">
        <button type="button" className={!c.isMax ? 'on' : ''} aria-pressed={!c.isMax} onClick={() => c.setPlan('standard')}>Standard</button>
        <button type="button" className={c.isMax ? 'on' : ''} aria-pressed={c.isMax} onClick={() => c.setPlan('max')}>MAX</button>
      </div>
    </div>
  );
}

/* Viral ad / Pro Studio switch (top bar on desktop, top of the page on phones) */
function ModeSwitch({ c, className = '' }) {
  return (
    <div className={`seg mode-switch ${className}`} role="radiogroup" aria-label="Ad type">
      <button type="button" role="radio" aria-checked="true" className="on"><Icon name="zap" size={15} /> Viral ad</button>
      <button type="button" role="radio" aria-checked="false" onClick={() => c.notify('Pro Studio builds multi-scene stories: Pitch → Scenario → Storyboard → Editor.')}><Icon name="layers" size={15} /> Pro Studio</button>
    </div>
  );
}

/* ---------- Top bar ---------- */
function Topbar({ c }) {
  return (
    <header className="topbar">
      <button type="button" className="icon-btn menu-btn" aria-label="Open menu" onClick={() => c.setDrawer(true)}><Icon name="menu" size={20} /></button>
      <span className="top-logo"><LogoMark size={30} /></span>
      <ModeSwitch c={c} className="in-top" />
      <button type="button" className="search" onClick={() => c.setPalette(true)}>
        <Icon name="search" size={16} />
        <span>Search templates, tools, ads…</span>
        <kbd>⌘K</kbd>
      </button>
      <div className="top-right">
        <button type="button" className="tokens" onClick={() => c.notify('Token packs and plans live in Billing.')}>
          <span className="coin"><Icon name="coin" size={14} strokeWidth={2.6} /></span>
          <b className="tnum">{fmt(c.balanceShown)}</b>
          <span className="get">Get more</span>
        </button>
        <button type="button" className="icon-btn" aria-label="Clone your voice" onClick={() => c.notify('Record 30 seconds and your voice is ready in about a minute.')}><Icon name="mic" size={18} /></button>
        <button type="button" className="icon-btn" aria-label={c.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} onClick={c.toggleTheme}><Icon name={c.theme === 'dark' ? 'sun' : 'moon'} size={18} /></button>
        <button type="button" className="icon-btn has-dot" aria-label="Notifications" onClick={() => c.notify('Your ad “alpha brain — Ali G” finished rendering.')}><Icon name="bell" size={18} /></button>
        <button type="button" className="me" onClick={() => c.notify('Account, team and billing.')}>
          <span className="me-av">{USER.initials}</span>
          <span className="me-copy"><b>{USER.name}</b><span className={c.isMax ? 'plan-max' : ''}>{c.isMax ? 'MAX' : 'Standard'}</span></span>
          <Icon name="chevronDown" size={15} />
        </button>
      </div>
    </header>
  );
}

/* ---------- Upgrade sheet ---------- */
function Upgrade({ c }) {
  const f = c.upsellKey ? MAX_FEATURES[c.upsellKey] : null;
  const ref = useRef(null);
  useEffect(() => { ref.current?.focus(); }, []);
  return (
    <div className="modal-back" onClick={(e) => { if (e.target === e.currentTarget) c.closeUpsell(); }}>
      <div className="upgrade" role="dialog" aria-modal="true" aria-labelledby="up-title" tabIndex={-1} ref={ref}>
        <button type="button" className="icon-btn up-close" aria-label="Close" onClick={c.closeUpsell}><Icon name="x" size={18} /></button>
        <div className="up-art" aria-hidden="true">
          <img src={TEMPLATES[5].img} alt="" /><img src={(f || MAX_FEATURES.variants).img} alt="" className="mid" /><img src={TEMPLATES[11].img} alt="" />
          <span className="seal"><Icon name="crown" size={26} /></span>
        </div>
        <p className="up-kicker">Social Ads Freak MAX</p>
        <h2 id="up-title">{f ? <>Unlock <span className="grad-text">{f.title}</span></> : <>Make ads with <span className="grad-text">everything unlocked</span></>}</h2>
        <p className="up-lead">{f ? f.text : 'Double the tokens, twice the avatars and templates, and the tools for testing at scale.'}</p>
        <ul className="up-list">
          {MAX_LIST.map((x) => <li key={x}><Icon name="check" size={14} strokeWidth={3} />{x}</li>)}
        </ul>
        <button type="button" className="btn-gold" onClick={c.upgrade}><Icon name="crown" size={18} /> Upgrade to MAX</button>
        <button type="button" className="up-later" onClick={c.closeUpsell}>Not now</button>
      </div>
    </div>
  );
}

/* ---------- ⌘K palette ---------- */
function Palette({ c }) {
  const [q, setQ] = useState('');
  const [i, setI] = useState(0);
  const actions = [
    { label: 'Clone an ad from a link', icon: 'link', run: () => { c.setMode('clone'); document.getElementById('step-style')?.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'Describe it to the Ad Agent', icon: 'bot', run: () => { c.setMode('describe'); document.getElementById('step-style')?.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'Upload a product photo', icon: 'upload', run: () => document.getElementById('prod-file')?.click() },
    { label: 'Open Trend Radar', icon: 'radar', run: () => c.notify('Trend Radar is part of the full app.') },
    { label: c.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode', icon: c.theme === 'dark' ? 'sun' : 'moon', run: c.toggleTheme },
  ];
  const tpls = [...TEMPLATES, ...MY_CLONES].map((t) => ({ label: t.title, img: t.img, max: t.max && !c.isMax, run: () => c.pickTemplate(t) }));
  const needle = q.trim().toLowerCase();
  const items = [...actions, ...tpls].filter((x) => !needle || x.label.toLowerCase().includes(needle)).slice(0, 9);
  const go = (x) => { c.setPalette(false); x?.run(); };
  return (
    <div className="modal-back top" onClick={(e) => { if (e.target === e.currentTarget) c.setPalette(false); }}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Search">
        <div className="pal-input">
          <Icon name="search" size={18} />
          <input
            id="palette-q" autoFocus value={q} placeholder="Search templates and tools…" aria-label="Search templates and tools"
            onChange={(e) => { setQ(e.target.value); setI(0); }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') { e.preventDefault(); setI((x) => Math.min(items.length - 1, x + 1)); }
              if (e.key === 'ArrowUp') { e.preventDefault(); setI((x) => Math.max(0, x - 1)); }
              if (e.key === 'Enter') go(items[i]);
            }}
          />
          <kbd>esc</kbd>
        </div>
        <ul className="pal-list">
          {items.map((x, k) => (
            <li key={x.label}>
              <button type="button" className={k === i ? 'on' : ''} onMouseEnter={() => setI(k)} onClick={() => go(x)}>
                {x.img ? <img src={x.img} alt="" /> : <span className="pal-ic"><Icon name={x.icon} size={16} /></span>}
                <span>{x.label}</span>
                {x.max ? <MaxBadge locked /> : <span className="pal-kind">{x.img ? 'Template' : 'Action'}</span>}
              </button>
            </li>
          ))}
          {!items.length && <li className="pal-empty">Nothing matches “{q}”.</li>}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme);
  const [plan, setPlan] = useState('standard');
  const isMax = plan === 'max';
  const [mode, setMode] = useState('template');
  const [tpl, setTpl] = useState(TEMPLATES[0]);
  const [peekId, setPeekId] = useState(null);
  const [products, setProducts] = useState(PRODUCTS);
  const [productId, setProductId] = useState('focus');
  const [desc, setDesc] = useState(PRODUCTS[0].desc);
  const [gender, setGender] = useState('any');
  const [avatarId, setAvatarId] = useState('auto');
  const [voiceId, setVoiceId] = useState('auto');
  const [playingVoice, setPlayingVoice] = useState(null);
  const [lang, setLang] = useState('en');
  const [script, setScript] = useState(SCRIPTS[0]);
  const [captionStyle, setCaptionStyle] = useState('pop');
  const [format, setFormat] = useState('9:16');
  const [length, setLength] = useState(15);
  const [variantsOn, setVariantsOn] = useState(false);
  const [variantCount, setVariantCount] = useState(4);
  const [varyBy, setVaryBy] = useState(['Hook', 'Dialogue']);
  const [priority, setPriority] = useState(false);
  const [balance, setBalance] = useState(USER.balance);
  const [render, setRender] = useState({ state: 'idle', pct: 0 });
  const [confetti, setConfetti] = useState(false);
  const [recent, setRecent] = useState(RECENT);
  const [upsellOpen, setUpsellOpen] = useState(false);
  const [upsellKey, setUpsellKey] = useState(null);
  const [palette, setPalette] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [stageOpen, setStageOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const voiceTimer = useRef(null);
  const balanceShown = useCountTo(balance);

  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPalette((p) => !p); }
      if (e.key === 'Escape') { setPalette(false); setUpsellOpen(false); setDrawer(false); setStageOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const notify = useCallback((msg) => {
    clearTimeout(toastTimer.current);
    setToast({ msg, id: Date.now() });
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  }, []);
  const upsell = (key) => { setUpsellKey(key); setUpsellOpen(true); };
  const gate = (key, fn) => (isMax ? fn() : upsell(key));

  const product = products.find((p) => p.id === productId) || null;
  const avatar = AVATARS.find((a) => a.id === avatarId) || null;
  const cost = LENGTHS.find((l) => l.s === length).cost;
  const total = cost * (variantsOn && isMax ? variantCount : 1);
  const peek = useMemo(() => [...TEMPLATES, ...MY_CLONES].find((t) => t.id === peekId) || null, [peekId]);

  const pickTemplate = (t, opts = {}) => {
    if (!t) return;
    if (t.max && !isMax) { upsell('maxTemplates'); return; }
    setTpl(t);
    setLength(fitLength(t.s, LENGTHS));
    if (render.state === 'done') setRender({ state: 'idle', pct: 0 });
    if (!opts.quiet) notify(`“${t.title}” is your starting point.`);
  };

  const generate = () => {
    if (!tpl || !product) return;
    if (balance < total) { notify('Not enough tokens for this ad. Get more tokens or pick a shorter length.'); return; }
    setStageOpen(true);
    const fast = priority && isMax;
    setRender({ state: fast ? 'rendering' : 'queued', pct: 0 });
  };

  // queue → render → done, driven by one timer
  useEffect(() => {
    if (render.state === 'queued') {
      const id = setTimeout(() => setRender({ state: 'rendering', pct: 0 }), 1500);
      return () => clearTimeout(id);
    }
    if (render.state === 'rendering') {
      const step = priority && isMax ? 3.2 : 1.8;
      const id = setTimeout(() => {
        const pct = Math.min(100, render.pct + step);
        if (pct >= 100) {
          setRender({ state: 'done', pct: 100 });
          setBalance((b) => b - total);
          setRecent((r) => [{ id: `n${Date.now()}`, title: `${product.name} — ${tpl.title}`, img: tpl.img, when: 'Just now', s: length }, ...r].slice(0, 4));
          setConfetti(true);
          setTimeout(() => setConfetti(false), 2200);
        } else {
          setRender({ state: 'rendering', pct });
        }
      }, 70);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [render, priority, isMax, total, product, tpl, length]);

  const c = {
    user: USER, isMax, plan, setPlan, theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    mode, setMode, tpl, tplId: tpl?.id, pickTemplate, peek, setPeekId,
    products, product, productId,
    pickProduct: (id) => { setProductId(id); const p = products.find((x) => x.id === id); if (p?.desc) setDesc(p.desc); },
    addUpload: (p) => { setProducts((list) => [...list.filter((x) => x.id !== 'upload'), p]); setProductId('upload'); setDesc(''); notify('Photo added. Describe the product, or let AI write it.'); },
    desc, setDesc, gender, setGender: (g) => { setGender(g); if (avatar && g !== 'any' && avatar.g !== g) setAvatarId('auto'); },
    avatar, avatarId, setAvatarId, voiceId, setVoiceId, playingVoice,
    playVoice: (id) => {
      clearTimeout(voiceTimer.current);
      if (playingVoice === id) { setPlayingVoice(null); return; }
      setPlayingVoice(id);
      voiceTimer.current = setTimeout(() => setPlayingVoice(null), 2600);
    },
    lang, setLang, script, setScript,
    applyHook: (h) => { setScript((s) => `${h}. ${s.replace(/^[^.!?]*[.!?]\s*/, '')}`); notify('Hook added to the start of your script.'); },
    captionStyle, setCaptionStyle, format, setFormat, length, setLength,
    variantsOn, setVariantsOn, variantCount, setVariantCount, varyBy,
    toggleVary: (v) => setVaryBy((list) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v])),
    priority, setPriority,
    balance, balanceShown, total, render, confetti, recent, generate,
    resetRender: () => setRender({ state: 'idle', pct: 0 }),
    newAd: () => { setRender({ state: 'idle', pct: 0 }); setMode('template'); window.scrollTo({ top: 0, behavior: 'smooth' }); },
    gate, upsell, upsellKey, closeUpsell: () => setUpsellOpen(false),
    upgrade: () => { setPlan('max'); setUpsellOpen(false); notify('MAX unlocked. Every feature on this screen is open now.'); },
    setPalette, drawer, setDrawer, stageOpen, setStageOpen, notify,
  };
  c.modeSwitch = <ModeSwitch c={c} className="in-page" />;

  return (
    <div className="app">
      <Sidebar c={c} />
      {drawer && <div className="scrim" onClick={() => setDrawer(false)} aria-hidden="true" />}
      <div className="main">
        <Topbar c={c} />
        <div className="workspace">
          <Builder c={c} />
          <Stage c={c} />
        </div>
      </div>

      <div className="mobile-bar">
        <button type="button" className="mb-preview" onClick={() => setStageOpen(true)}>
          {tpl && <img src={tpl.img} alt="" />}
          <span><b>Preview</b><em>{length}s · {format}</em></span>
        </button>
        <button type="button" className="generate sm" disabled={!tpl || !product || render.state === 'queued' || render.state === 'rendering'} onClick={generate}>
          <span className="gen-label"><Icon name="sparkles" size={16} /> Generate</span>
          <span className="gen-cost tnum"><Icon name="coin" size={12} strokeWidth={2.6} />{fmt(total)}</span>
        </button>
      </div>

      <DemoSwitch c={c} />
      {upsellOpen && <Upgrade c={c} />}
      {palette && <Palette c={c} />}
      <div className="toast-zone" aria-live="polite">
        {toast && <div className="toast" key={toast.id}><Icon name="sparkles" size={15} />{toast.msg}</div>}
      </div>
    </div>
  );
}
