import { useState } from 'react';
import Icon from './icons.jsx';
import {
  TEMPLATES, MY_CLONES, CATEGORIES, PRODUCTS, AVATARS, VOICES, LANGUAGES, CAPTION_STYLES,
  FORMATS, LENGTHS, HOOKS, SCRIPTS, AGENT_EXAMPLES, TRENDS, VARY_BY, MAX_FEATURES,
} from './data.js';
import { MaxBadge, StepHead, Seg, Wave, useTypewriter, fitLength } from './ui.jsx';

const ALL_TEMPLATES = [...TEMPLATES, ...MY_CLONES];

/* ---------- Step 1: starting point ---------- */
const MODES = [
  { id: 'template', title: 'Use a winning template', text: '274 proven ad formats' },
  { id: 'clone', title: 'Clone any ad', text: 'Paste a link, get the same ad' },
  { id: 'describe', title: 'Describe it', text: 'The Ad Agent builds it for you' },
];

function ModeArt({ id }) {
  if (id === 'template') {
    return (
      <span className="mode-art art-templates" aria-hidden="true">
        <img src={TEMPLATES[3].img} alt="" /><img src={TEMPLATES[0].img} alt="" /><img src={TEMPLATES[6].img} alt="" />
      </span>
    );
  }
  if (id === 'clone') {
    return (
      <span className="mode-art art-clone" aria-hidden="true">
        <span className="clone-src"><img src={TEMPLATES[9].img} alt="" /><i className="scanline" /></span>
        <Icon name="arrowRight" size={16} strokeWidth={2.6} />
        <span className="clone-dst"><img src={TEMPLATES[1].img} alt="" /></span>
      </span>
    );
  }
  return (
    <span className="mode-art art-describe" aria-hidden="true">
      <img src={TEMPLATES[7].img} alt="" />
      <span className="prompt-bubble"><Icon name="sparkles" size={13} /> A 15s founder story<i className="caret" /></span>
    </span>
  );
}

function TemplateCard({ t, on, locked, onPick, onPeek }) {
  return (
    <button
      type="button" className={`tpl ${on ? 'is-on' : ''} ${locked ? 'is-locked' : ''}`} aria-pressed={on}
      onClick={() => onPick(t)} onMouseEnter={() => onPeek(t.id)} onMouseLeave={() => onPeek(null)}
      onFocus={() => onPeek(t.id)} onBlur={() => onPeek(null)}
    >
      <img src={t.img} alt="" loading="lazy" />
      <span className="tpl-top">
        <span className="chip-dark">{t.s}s</span>
        {t.hot && <span className="chip-dark hot"><Icon name="flame" size={11} /> Hot</span>}
      </span>
      {locked && <span className="tpl-lock"><MaxBadge locked /></span>}
      {on && <span className="tpl-check"><Icon name="check" size={14} strokeWidth={3} /></span>}
      <span className="tpl-meta">
        <b>{t.title}</b>
        <span className="tpl-sub">
          {t.from ? t.from : t.best ? t.best : t.talk ? <><Icon name="mic" size={11} /> Talking</> : 'No talking · ASMR'}
        </span>
      </span>
    </button>
  );
}

function TemplatePicker({ c }) {
  const [cat, setCat] = useState('all');
  const [talk, setTalk] = useState('any');
  const [more, setMore] = useState(false);
  const base = cat === 'mine' ? MY_CLONES : TEMPLATES.filter((t) => cat === 'all' || t.cats.includes(cat));
  const list = base.filter((t) => talk === 'any' || (talk === 'talk' ? t.talk : !t.talk));
  const shown = more ? list : list.slice(0, 8);
  return (
    <div className="tpl-picker">
      <div className="tpl-tools">
        <div className="cat-row" role="group" aria-label="Category">
          {CATEGORIES.map((k) => (
            <button key={k.id} type="button" className={`cat ${cat === k.id ? 'on' : ''}`} aria-pressed={cat === k.id} onClick={() => { setCat(k.id); setMore(false); }}>
              <img src={k.img} alt="" />{k.label}
            </button>
          ))}
        </div>
        <Seg
          size="sm" label="Dialogue" value={talk} onChange={setTalk}
          options={[{ id: 'any', label: 'All' }, { id: 'talk', label: 'Talking', icon: 'mic' }, { id: 'quiet', label: 'No talking', icon: 'volume' }]}
        />
      </div>
      {shown.length ? (
        <div className="tpl-grid">
          {shown.map((t) => (
            <TemplateCard key={t.id} t={t} on={c.tplId === t.id} locked={t.max && !c.isMax} onPick={c.pickTemplate} onPeek={c.setPeekId} />
          ))}
        </div>
      ) : (
        <p className="empty">No templates match these filters. Try <button type="button" className="link" onClick={() => setTalk('any')}>all dialogue types</button>.</p>
      )}
      {list.length > 8 && (
        <button type="button" className="btn-soft more" onClick={() => setMore(!more)}>
          {more ? 'Show fewer' : `Show all ${list.length} in this demo`} <Icon name="chevronDown" size={16} className={more ? 'flip' : ''} />
        </button>
      )}
    </div>
  );
}

function ClonePanel({ c }) {
  const [url, setUrl] = useState('https://www.tiktok.com/@shapiro/video/7312');
  const [state, setState] = useState('idle');
  const analyze = () => {
    if (!url.trim()) { c.notify('Paste a link to an ad first.'); return; }
    setState('analyzing');
    setTimeout(() => setState('done'), 1600);
  };
  const src = TEMPLATES.find((t) => t.id === 'street');
  return (
    <div className="clone">
      <form className="clone-input" onSubmit={(e) => { e.preventDefault(); analyze(); }}>
        <Icon name="link" size={18} />
        <input id="clone-url" type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste a TikTok, Reels, Shorts or Meta Ad Library link" aria-label="Ad link" />
        <button type="submit" className="btn-grad sm">Clone it</button>
      </form>
      <div className="clone-hint">
        <span className="plat"><Icon name="tiktok" size={14} /><Icon name="instagram" size={14} /><Icon name="youtube" size={15} /><Icon name="meta" size={14} /></span>
        Works with TikTok, Reels, Shorts and the Meta Ad Library
        <label className="link upload-link"><Icon name="upload" size={14} /> or upload a video<input type="file" accept="video/*" className="sr-only" onChange={() => { setState('analyzing'); setTimeout(() => setState('done'), 1600); }} /></label>
      </div>

      {state !== 'idle' && (
        <div className={`clone-result ${state}`}>
          <div className="clone-thumb">
            <img src={src.img} alt="" />
            {state === 'analyzing' && <i className="scanline" />}
          </div>
          <div className="clone-info">
            {state === 'analyzing' ? (
              <>
                <b>Reading the ad…</b>
                <p className="muted">Finding the hook, the cuts and the call to action.</p>
                <span className="bar"><i /></span>
              </>
            ) : (
              <>
                <b>Paparazzi street hook</b>
                <div className="facts">
                  <span>Talking head</span><span>10 seconds</span><span>6 cuts</span><span>Hook lands at 1.2s</span>
                </div>
                <button type="button" className="btn-grad sm" onClick={() => c.pickTemplate({ ...src, max: false })}>
                  <Icon name="check" size={15} strokeWidth={2.6} /> Use as my template
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className={`deep ${c.isMax ? '' : 'is-locked'}`}>
        <div className="deep-head">
          <h3><Icon name="scan" size={16} /> Deep Clone Analysis</h3>
          <MaxBadge locked={!c.isMax} />
        </div>
        <div className="deep-body" aria-hidden={!c.isMax}>
          <div className="timeline">
            <span style={{ '--w': 20 }} className="t-hook">Hook</span>
            <span style={{ '--w': 22 }} className="t-prob">Problem</span>
            <span style={{ '--w': 36 }} className="t-prod">Product</span>
            <span style={{ '--w': 22 }} className="t-cta">CTA</span>
          </div>
          <ol className="shots">
            <li><b>0.0s</b> Close-up, walking toward camera, flash pops</li>
            <li><b>1.2s</b> Hook line on screen: "Paparazzi don't create celebrities"</li>
            <li><b>4.0s</b> Product held at chest height, eye contact</li>
            <li><b>8.5s</b> CTA with pointing gesture, text "Link below"</li>
          </ol>
        </div>
        {!c.isMax && (
          <button type="button" className="lock-cover" onClick={() => c.upsell('deepClone')}>
            <MaxBadge locked /> See the full hook, shot list and pacing
          </button>
        )}
      </div>

      <div className="my-clones">
        <h3>Your cloned templates</h3>
        {MY_CLONES.map((t) => (
          <div key={t.id} className={`clone-row ${c.tplId === t.id ? 'on' : ''}`}>
            <img src={t.img} alt="" />
            <div><b>{t.title}</b><span>{t.from} · {t.s}s</span></div>
            <button type="button" className="btn-soft sm" onClick={() => c.pickTemplate(t)}>{c.tplId === t.id ? 'In use' : 'Use'}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function DescribePanel({ c }) {
  const [brief, setBrief] = useState('');
  const [plan, setPlan] = useState(null);
  const build = () => {
    const text = brief.trim() || AGENT_EXAMPLES[0];
    if (!brief.trim()) setBrief(text);
    setPlan('thinking');
    setTimeout(() => {
      const t = TEMPLATES.find((x) => x.id === 'founder');
      c.pickTemplate(t, { quiet: true });
      c.setAvatarId('noah');
      c.setVoiceId('calm');
      c.setScript(SCRIPTS[2]);
      setPlan('ready');
    }, 1400);
  };
  return (
    <div className="describe">
      <div className="agent-box">
        <label htmlFor="agent-brief" className="sr-only">Describe the ad you want</label>
        <textarea id="agent-brief" rows={3} value={brief} onChange={(e) => setBrief(e.target.value)} placeholder="Describe the ad you want: the product, the vibe, the length, the language…" />
        <div className="agent-foot">
          <div className="examples">
            {AGENT_EXAMPLES.map((x) => <button key={x} type="button" className="example" onClick={() => setBrief(x)}>{x}</button>)}
          </div>
          <button type="button" className="btn-grad sm" onClick={build} disabled={plan === 'thinking'}>
            <Icon name="sparkles" size={15} /> {plan === 'thinking' ? 'Building…' : 'Build my ad'}
          </button>
        </div>
      </div>
      {plan === 'ready' && (
        <div className="agent-plan">
          <Icon name="bot" size={18} />
          <p><b>Done.</b> I picked <b>Founder Testimonial</b>, cast <b>Noah</b> with a calm expert voice and wrote a 15s script. Check the preview, then hit Generate.</p>
        </div>
      )}
      <div className="trends">
        <div className="trends-head">
          <h3><Icon name="radar" size={16} /> Trending for brain &amp; focus supplements</h3>
          <span className="muted">{c.isMax ? 'Updated this morning' : 'Updated weekly'}</span>
          {!c.isMax && <button type="button" className="mini-max" onClick={() => c.upsell('dailyTrends')}>Daily ideas <MaxBadge locked /></button>}
        </div>
        <div className="trend-grid">
          {TRENDS.map((t) => (
            <article key={t.title} className="trend">
              <img src={t.img} alt="" />
              <div className="trend-body">
                <span className="trend-tag">{t.tag}</span>
                <h4>{t.title}</h4>
                <p>{t.hook}</p>
                <button type="button" className="btn-soft sm" onClick={() => c.pickTemplate(TEMPLATES.find((x) => x.id === t.tpl))}>Use this idea</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Toggle switch ---------- */
function Toggle({ on, onClick, label }) {
  return (
    <button type="button" role="switch" aria-checked={on} aria-label={label} className={`toggle ${on ? 'on' : ''}`} onClick={onClick}>
      <i />
    </button>
  );
}

export default function Builder({ c }) {
  const type = useTypewriter();
  const [writing, setWriting] = useState(false);
  const product = c.product;
  const tpl = c.tpl;
  const avatars = AVATARS.filter((a) => c.gender === 'any' || a.g === c.gender);
  const words = c.script.trim() ? c.script.trim().split(/\s+/).length : 0;
  const fitWords = Math.round(c.length * 2.6);

  const rewriteScript = () => {
    const next = SCRIPTS[(SCRIPTS.indexOf(c.script) + 1) % SCRIPTS.length] || SCRIPTS[0];
    setWriting(true);
    type(c.setScript, next, () => setWriting(false));
  };
  const rewriteDesc = () => {
    if (!product) { c.notify('Add a product photo first, then I can describe it.'); return; }
    type(c.setDesc, product.desc || `${product.name}: describe the main benefit, who it is for and one detail people must hear.`);
  };
  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => c.addUpload({ id: 'upload', name: file.name.replace(/\.[^.]+$/, '').slice(0, 18) || 'My product', img: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <div className="builder">
      <div className="intro">
        {c.modeSwitch}
        <div>
          <p className="eyebrow"><Icon name="zap" size={13} /> Viral ad · about 2 minutes</p>
          <h1>What are we making today, <span className="grad-text">{c.user.first}</span>?</h1>
          <p className="intro-sub">Only two things are required: a starting point and your product. AI fills in the rest, and you can change anything.</p>
        </div>
      </div>

      {/* 1 — starting point */}
      <section className="panel step" id="step-style" aria-labelledby="h-style">
        <StepHead n={1} done={!!tpl} title={<span id="h-style">Choose a starting point</span>} hint="Hover or tap a template to see it in the preview." tag={{ label: 'Required' }} />
        <div className="modes" role="radiogroup" aria-label="Starting point">
          {MODES.map((m) => (
            <button key={m.id} type="button" role="radio" aria-checked={c.mode === m.id} className={`mode ${c.mode === m.id ? 'on' : ''}`} onClick={() => c.setMode(m.id)}>
              <ModeArt id={m.id} />
              <span className="mode-copy"><b>{m.title}</b><span>{m.text}</span></span>
              <span className="mode-dot" aria-hidden="true"><Icon name="check" size={12} strokeWidth={3.2} /></span>
            </button>
          ))}
        </div>
        {c.mode === 'template' && <TemplatePicker c={c} />}
        {c.mode === 'clone' && <ClonePanel c={c} />}
        {c.mode === 'describe' && <DescribePanel c={c} />}
      </section>

      {/* 2 — product */}
      <section className="panel step" id="step-product" aria-labelledby="h-product">
        <StepHead n={2} done={!!product} title={<span id="h-product">Add your product</span>} hint="A clear photo on a plain background works best." tag={{ label: 'Required' }} />
        <div className="prod-row">
          <label className="prod-tile upload" htmlFor="prod-file">
            <span className="prod-art"><Icon name="upload" size={22} /></span>
            <b>Upload photo</b><span>PNG or JPG</span>
            <input id="prod-file" type="file" accept="image/*" className="sr-only" onChange={onUpload} />
          </label>
          {c.products.map((p) => (
            <button key={p.id} type="button" className={`prod-tile ${c.productId === p.id ? 'on' : ''}`} aria-pressed={c.productId === p.id} onClick={() => c.pickProduct(p.id)}>
              <span className="prod-art"><img src={p.img} alt="" /></span>
              <b>{p.name}</b><span>{p.id === 'upload' ? 'Just uploaded' : 'My products'}</span>
              {c.productId === p.id && <span className="tile-check"><Icon name="check" size={12} strokeWidth={3.2} /></span>}
            </button>
          ))}
          <button type="button" className="prod-tile studio" onClick={() => c.notify('Product Studio turns one photo into clean studio shots. It opens in the full app.')}>
            <span className="prod-art"><img src={PRODUCTS[0].img} alt="" /><Icon name="sparkles" size={16} className="spark-ic" /></span>
            <b>Studio shots</b><span>Product Studio</span>
          </button>
        </div>
        <div className="field">
          <div className="field-head">
            <label htmlFor="prod-desc">What should the ad say about it?</label>
            <button type="button" className="ai-btn" onClick={rewriteDesc}><Icon name="sparkles" size={14} /> Write it from the photo</button>
          </div>
          <textarea id="prod-desc" rows={3} value={c.desc} onChange={(e) => c.setDesc(e.target.value)} placeholder="What is it, who is it for, and the one detail people must hear?" />
        </div>
      </section>

      {/* 3 — presenter */}
      <section className="panel step" id="step-cast" aria-labelledby="h-cast">
        <StepHead n={3} done title={<span id="h-cast">Pick who's in it</span>} hint="Leave it on AI picks and we cast the best match for this template." tag={{ label: 'Optional', tone: 'soft' }} />
        <div className="sub-head">
          <h3>Presenter</h3>
          <Seg size="sm" label="Presenter gender" value={c.gender} onChange={c.setGender} options={[{ id: 'any', label: 'Anyone' }, { id: 'f', label: 'Women' }, { id: 'm', label: 'Men' }]} />
        </div>
        <div className="avatar-row">
          <button type="button" className={`av ai ${c.avatarId === 'auto' ? 'on' : ''}`} aria-pressed={c.avatarId === 'auto'} onClick={() => c.setAvatarId('auto')}>
            <span className="av-img"><Icon name="dice" size={24} /></span><b>AI picks</b>
          </button>
          {avatars.map((a) => (
            <button key={a.id} type="button" className={`av ${c.avatarId === a.id ? 'on' : ''}`} aria-pressed={c.avatarId === a.id} onClick={() => c.setAvatarId(a.id)}>
              <span className="av-img"><img src={a.img} alt="" /></span><b>{a.name}</b>
            </button>
          ))}
          <button type="button" className="av custom" onClick={() => c.gate('customAvatar', () => c.notify('Upload a photo or describe the person in Talent Studio.'))}>
            <span className="av-img"><Icon name="upload" size={20} /></span><b>Your own</b><MaxBadge locked={!c.isMax} />
          </button>
          <button type="button" className="av more" onClick={() => c.gate('avatars200', () => c.notify('Opening all 200+ avatars in Talent Studio.'))}>
            <span className="av-img"><span className="av-stack"><img src={AVATARS[4].img} alt="" /><img src={AVATARS[5].img} alt="" /></span></span>
            <b>{c.isMax ? '200+ more' : '100+ more'}</b>
            {!c.isMax && <span className="av-note">200+ on MAX</span>}
          </button>
        </div>

        <div className="sub-head"><h3>Voice</h3><button type="button" className="link" onClick={() => c.notify('Record 30 seconds and your voice is ready in about a minute.')}><Icon name="mic" size={14} /> Clone my voice</button></div>
        <div className="voice-row">
          {VOICES.map((v) => (
            <div key={v.id} className={`voice ${c.voiceId === v.id ? 'on' : ''}`}>
              <button type="button" className="voice-main" aria-pressed={c.voiceId === v.id} onClick={() => c.setVoiceId(v.id)}>
                <b>{v.name}</b><span>{v.note}</span>
                <Wave playing={c.playingVoice === v.id} />
              </button>
              <button type="button" className="voice-play" aria-label={`Play a sample of ${v.name}`} onClick={() => c.playVoice(v.id)}>
                <Icon name={c.playingVoice === v.id ? 'pause' : 'play'} size={13} />
              </button>
            </div>
          ))}
        </div>

        <div className="sub-head"><h3>Language</h3><span className="muted">{c.isMax ? '60+ languages' : '30+ languages'}</span></div>
        <div className="lang-row">
          {LANGUAGES.map((l) => (
            <button key={l.id} type="button" className={`lang ${c.lang === l.id ? 'on' : ''}`} aria-pressed={c.lang === l.id} onClick={() => c.setLang(l.id)}>
              <span className="flag" aria-hidden="true">{l.flag}</span>{l.name}
            </button>
          ))}
          <button type="button" className="lang" onClick={() => c.notify(c.isMax ? 'All 60+ languages are in the full list.' : 'All 30+ languages are in the full list.')}>{c.isMax ? '+52 more' : '+22 more'}</button>
          {!c.isMax && (
            <button type="button" className="lang max" onClick={() => c.upsell('languages60')}><Icon name="globe" size={15} /> 60+ languages <MaxBadge locked /></button>
          )}
        </div>
      </section>

      {/* 4 — script & look */}
      <section className="panel step" id="step-look" aria-labelledby="h-look">
        <StepHead n={4} done title={<span id="h-look">Script &amp; look</span>} hint="We wrote a script from your product. Edit anything or keep it as is." tag={{ label: 'Optional', tone: 'soft' }} />
        <div className="field">
          <div className="field-head">
            <label htmlFor="script">What they say</label>
            <span className={`fit ${words > fitWords ? 'over' : ''}`}>{words} words · {words > fitWords ? `long for ${c.length}s` : `fits ${c.length}s`}</span>
          </div>
          <textarea id="script" rows={4} value={c.script} onChange={(e) => c.setScript(e.target.value)} placeholder="Type what the presenter says, or let AI write it." />
          <div className="script-tools">
            <button type="button" className="ai-btn" onClick={rewriteScript} disabled={writing}><Icon name="refresh" size={14} /> {writing ? 'Writing…' : 'Write a new version'}</button>
          </div>
        </div>
        <div className="hooks">
          <div className="hooks-head">
            <span>Hook ideas, tap one to use it</span>
            {!c.isMax && <button type="button" className="mini-max" onClick={() => c.upsell('viralScore')}>Show viral scores <MaxBadge locked /></button>}
          </div>
          <div className="hook-row">
            {HOOKS.map((h) => (
              <button key={h.text} type="button" className="hook" onClick={() => c.applyHook(h.text)}>
                <span className={`score ${c.isMax ? '' : 'is-hidden'}`} aria-label={c.isMax ? `Viral score ${h.score}` : 'Viral score hidden'}>{c.isMax ? h.score : '88'}</span>
                {h.text}
              </button>
            ))}
          </div>
        </div>

        <div className="sub-head">
          <h3>Captions</h3>
          <span className="cap-lang">
            in <b>{c.isMax ? 'the voice language' : 'English'}</b>
            {!c.isMax && <button type="button" className="mini-max" onClick={() => c.upsell('captionsAny')}>Any language <MaxBadge locked /></button>}
          </span>
        </div>
        <div className="cap-row">
          {CAPTION_STYLES.map((s) => (
            <button key={s.id} type="button" className={`cap ${c.captionStyle === s.id ? 'on' : ''}`} aria-pressed={c.captionStyle === s.id} onClick={() => c.setCaptionStyle(s.id)}>
              <span className="cap-art">
                <img src={tpl ? tpl.img : TEMPLATES[0].img} alt="" />
                {s.id !== 'off' && <span className={`cap-sample cs-${s.id}`}>Stop <em>scrolling</em></span>}
                {s.id === 'off' && <span className="cap-off"><Icon name="x" size={16} /></span>}
              </span>
              <b>{s.name}</b>
            </button>
          ))}
        </div>

        <div className="look-cols">
          <div>
            <div className="sub-head"><h3>Format</h3></div>
            <div className="fmt-row">
              {FORMATS.map((f) => (
                <button key={f.id} type="button" className={`fmt ${c.format === f.id ? 'on' : ''}`} aria-pressed={c.format === f.id} onClick={() => c.setFormat(f.id)}>
                  <span className={`fmt-shape s-${f.id.replace(':', 'x')}`} aria-hidden="true" />
                  <b>{f.id}</b><span>{f.where}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="sub-head"><h3>Length</h3><span className="muted">{tpl ? `Template runs ${tpl.s}s` : ''}</span></div>
            <div className="len-row" role="radiogroup" aria-label="Video length">
              {LENGTHS.map((l) => (
                <button key={l.s} type="button" role="radio" aria-checked={c.length === l.s} className={`len ${c.length === l.s ? 'on' : ''} ${tpl && fitLength(tpl.s, LENGTHS) === l.s ? 'is-native' : ''}`} onClick={() => c.setLength(l.s)}>
                  <b>{l.s}s</b><span><Icon name="coin" size={10} strokeWidth={2.6} />{l.cost}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* power-ups */}
      <section className="panel step boosts" id="step-boost" aria-labelledby="h-boost">
        <header className="step-head">
          <span className="step-n boost-n" aria-hidden="true"><Icon name="rocket" size={15} /></span>
          <div className="step-copy"><h2 id="h-boost">Power-ups</h2><p>Extras for testing at scale. Turn them on per ad.</p></div>
          <MaxBadge locked={!c.isMax} />
        </header>
        <div className="boost-grid">
          <article className={`boost ${c.isMax ? '' : 'is-locked'} ${c.variantsOn ? 'is-on' : ''}`}>
            <div className="boost-art art-variants" aria-hidden="true">
              {[92, 88, 85, 81].map((s, i) => (
                <span key={s} className="mini" style={{ '--i': i }}><img src={tpl ? tpl.img : TEMPLATES[0].img} alt="" /><em>{s}</em></span>
              ))}
            </div>
            <div className="boost-body">
              <div className="boost-title">
                <h3>Variant Factory</h3>
                <Toggle label="Variant Factory" on={c.variantsOn} onClick={() => c.gate('variants', () => c.setVariantsOn(!c.variantsOn))} />
              </div>
              <p>Fan this ad out into scored A/B versions, rendered side by side.</p>
              <div className="boost-opts">
                <span className="opt-label">Versions</span>
                <Seg size="sm" label="Number of variants" value={c.variantCount} onChange={(v) => c.gate('variants', () => { c.setVariantCount(v); c.setVariantsOn(true); })} options={[2, 4, 6].map((n) => ({ id: n, label: String(n) }))} />
                <span className="opt-label">Change the</span>
                <div className="vary">
                  {VARY_BY.map((v) => (
                    <button key={v} type="button" className={`vary-chip ${c.varyBy.includes(v) ? 'on' : ''}`} aria-pressed={c.varyBy.includes(v)} onClick={() => c.gate('variants', () => c.toggleVary(v))}>{v}</button>
                  ))}
                </div>
              </div>
            </div>
          </article>
          <article className={`boost ${c.isMax ? '' : 'is-locked'} ${c.priority ? 'is-on' : ''}`}>
            <div className="boost-art art-queue" aria-hidden="true">
              <span className="lane"><i /><i /><i /><i /></span>
              <span className="lane fast"><Icon name="rocket" size={16} /></span>
            </div>
            <div className="boost-body">
              <div className="boost-title">
                <h3>Priority render</h3>
                <Toggle label="Priority render" on={c.priority} onClick={() => c.gate('priority', () => c.setPriority(!c.priority))} />
              </div>
              <p>{MAX_FEATURES.priority.text}</p>
              <div className="boost-stat"><b>~40s</b> instead of ~2 min at peak hours</div>
            </div>
          </article>
        </div>
        {!c.isMax && (
          <button type="button" className="boost-cta" onClick={() => c.upsell('variants')}>
            <Icon name="crown" size={16} /> Unlock Power-ups with MAX <Icon name="arrowRight" size={16} />
          </button>
        )}
      </section>
    </div>
  );
}
