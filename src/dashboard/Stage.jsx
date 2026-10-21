import { useEffect, useRef } from 'react';
import Icon from './icons.jsx';
import { RENDER_STEPS, VOICES, LANGUAGES, CAPTION_STYLES, HOOKS } from './data.js';
import { MaxBadge, fmt, useTicker } from './ui.jsx';

const scrollToStep = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

/* Live caption: three words at a time, cycling through the script */
function Caption({ text, style }) {
  const t = useTicker(380);
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (!words.length || style === 'off') return null;
  const chunks = Math.ceil(words.length / 3);
  const at = Math.floor(t / 3) % chunks;
  const active = t % 3;
  const chunk = words.slice(at * 3, at * 3 + 3);
  return (
    <div className={`caption cs-${style}`} key={at}>
      {chunk.map((w, i) => <span key={i} className={i === Math.min(active, chunk.length - 1) ? 'hit' : ''}>{w} </span>)}
    </div>
  );
}

function AdScreen({ c, tpl, done }) {
  const product = c.product;
  const avatar = c.avatar;
  const vertical = c.format === '9:16';
  return (
    <div className={`screen f-${c.format.replace(':', 'x')} ${done ? 'is-done' : ''}`}>
      {tpl ? <img className="screen-bg" src={tpl.img} alt="" key={tpl.id} /> : <div className="screen-empty"><Icon name="layout" size={28} /><b>Pick a starting point</b></div>}
      {tpl && (
        <div className="screen-ui">
          <div className="story-bar"><i style={{ animationDuration: `${c.length}s` }} key={`${c.length}-${tpl.id}`} /></div>
          <div className="screen-top"><span>Sponsored</span><span className="tnum">0:{String(c.length).padStart(2, '0')}</span></div>
          {vertical && (
            <div className="rail" aria-hidden="true">
              <span><Icon name="heart" size={20} /><em>24.1k</em></span>
              <span><Icon name="message" size={19} /><em>812</em></span>
              <span><Icon name="send" size={18} /><em>3.4k</em></span>
            </div>
          )}
          <Caption text={c.script || HOOKS[0].text} style={c.captionStyle} />
          <div className="screen-bottom">
            <div className="who">
              <span className="who-av">{avatar ? <img src={avatar.img} alt="" /> : <Icon name="sparkles" size={13} />}</span>
              <b>{product ? `@${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '')}` : '@yourbrand'}</b>
              <span className="ad-tag">Ad</span>
            </div>
            <div className="cta-bar">Shop now <Icon name="chevronRight" size={14} strokeWidth={2.6} /></div>
          </div>
          <div className={`pip ${product ? '' : 'empty'}`}>
            {product ? <img src={product.img} alt="" /> : <><Icon name="upload" size={16} /><span>Your product</span></>}
          </div>
        </div>
      )}
    </div>
  );
}

function RenderOverlay({ r, priority }) {
  if (r.state === 'queued') {
    return (
      <div className="render-veil">
        <span className="spinner" />
        <b>In line</b>
        <span>3 ads ahead of you</span>
      </div>
    );
  }
  const deg = Math.round(r.pct * 3.6);
  return (
    <div className="render-veil">
      <span className="ring" style={{ '--deg': `${deg}deg` }}><b className="tnum">{Math.round(r.pct)}%</b></span>
      <b>{RENDER_STEPS[Math.min(RENDER_STEPS.length - 1, Math.floor(r.pct / 20))]}…</b>
      {priority && <span className="prio"><Icon name="zap" size={12} /> Priority queue</span>}
      <ol className="render-steps">
        {RENDER_STEPS.map((s, i) => (
          <li key={s} className={r.pct >= (i + 1) * 20 ? 'ok' : Math.floor(r.pct / 20) === i ? 'now' : ''}>{s}</li>
        ))}
      </ol>
    </div>
  );
}

function Confetti() {
  const colors = ['#8b3dff', '#f043c1', '#ffd951', '#3ddc97', '#5ac8ff'];
  return (
    <div className="confetti" aria-hidden="true">
      {[...Array(36)].map((_, i) => (
        <i key={i} style={{ '--x': `${(i * 37) % 100}%`, '--r': `${(i * 53) % 360}deg`, '--d': `${(i % 9) * 0.05}s`, '--c': colors[i % colors.length], '--dx': `${((i * 29) % 80) - 40}px` }} />
      ))}
    </div>
  );
}

export default function Stage({ c }) {
  const r = c.render;
  const busy = r.state === 'queued' || r.state === 'rendering';
  const done = r.state === 'done';
  const peeking = c.peek && c.peek.id !== c.tpl?.id && !busy && !done;
  const shownTpl = peeking ? c.peek : c.tpl;
  const voice = VOICES.find((v) => v.id === c.voiceId);
  const lang = LANGUAGES.find((l) => l.id === c.lang);
  const cap = CAPTION_STYLES.find((s) => s.id === c.captionStyle);
  const ready = !!(c.tpl && c.product);
  const inner = useRef(null);
  // bring the phone back into view whenever the render state changes
  useEffect(() => { inner.current?.scrollTo({ top: 0, behavior: 'smooth' }); }, [r.state]);

  const recipe = [
    { k: 'Style', v: c.tpl?.title || 'Not picked', step: 'step-style', missing: !c.tpl },
    { k: 'Product', v: c.product?.name || 'Missing', step: 'step-product', missing: !c.product },
    { k: 'Presenter', v: c.avatar ? c.avatar.name : 'AI picks', step: 'step-cast' },
    { k: 'Voice', v: `${voice.name} · ${lang.name}`, step: 'step-cast' },
    { k: 'Captions', v: cap.name, step: 'step-look' },
    { k: 'Format', v: `${c.format} · ${c.length}s`, step: 'step-look' },
  ];

  return (
    <aside className={`stage ${c.stageOpen ? 'is-open' : ''}`} aria-label="Live preview">
      <div className="stage-glow" aria-hidden="true" />
      <div className="stars" aria-hidden="true">{[...Array(14)].map((_, i) => <i key={i} />)}</div>
      <div className="stage-inner" ref={inner}>
        <div className="stage-head">
          <span className={`live-dot ${busy ? 'busy' : ''}`} />
          <b>{done ? 'Your ad is ready' : busy ? 'Generating' : peeking ? 'Peeking' : 'Live preview'}</b>
          <span className="stage-sub">{peeking ? c.peek.title : done ? `${c.length}s · ${c.format}` : 'Updates as you choose'}</span>
          <button type="button" className="icon-btn stage-close" aria-label="Close preview" onClick={() => c.setStageOpen(false)}><Icon name="x" size={18} /></button>
        </div>

        <div className="podium">
          <div className={`device ${busy ? 'is-busy' : ''}`}>
            <AdScreen c={c} tpl={shownTpl} done={done} />
            {busy && <RenderOverlay r={r} priority={c.priority && c.isMax} />}
            {done && <span className="ready-badge"><Icon name="check" size={13} strokeWidth={3} /> Ready</span>}
          </div>
          <div className="floor-wrap" aria-hidden="true"><div className="floor" /></div>
          {done && c.confetti && <Confetti />}
        </div>

        {done ? (
          <div className="result">
            {c.variantsOn && c.isMax && (
              <div className="variant-strip">
                {HOOKS.concat(HOOKS).slice(0, c.variantCount).map((h, i) => (
                  <div key={i} className="v-card"><img src={c.tpl.img} alt="" /><em>{h.score - i}</em><span>{h.text}</span></div>
                ))}
              </div>
            )}
            <div className="result-actions">
              <button type="button" className="btn-grad" onClick={() => c.notify('Downloaded MP4, 1080×1920.')}><Icon name="download" size={16} /> Download</button>
              <button type="button" className="btn-glass" onClick={() => c.notify('Ad Studio opens with this ad on the timeline.')}><Icon name="pencil" size={15} /> Edit</button>
              <button type="button" className="btn-glass" onClick={() => c.gate('variants', () => c.notify('Variant Factory queued 4 scored versions.'))}><Icon name="layers" size={15} /> Variants {!c.isMax && <MaxBadge locked />}</button>
            </div>
            <div className="post-row">
              <span>Post to</span>
              {[['tiktok', 'TikTok'], ['instagram', 'Instagram'], ['youtube', 'YouTube'], ['meta', 'Facebook']].map(([ic, name]) => (
                <button key={ic} type="button" className="post-btn" aria-label={`Post to ${name}`} onClick={() => c.notify(`Connect ${name} once, then post in one click.`)}><Icon name={ic} size={16} /></button>
              ))}
            </div>
            <button type="button" className="btn-again" onClick={c.resetRender}><Icon name="plus" size={15} /> Make another ad</button>
          </div>
        ) : (
          <>
            <div className="gen-wrap">
              <button type="button" className="generate" disabled={!ready || busy} onClick={c.generate}>
                <span className="gen-label">
                  <Icon name="sparkles" size={18} />
                  {busy ? `Generating ${Math.round(r.pct)}%` : c.variantsOn && c.isMax ? `Generate ${c.variantCount} versions` : 'Generate ad'}
                </span>
                <span className="gen-cost tnum"><Icon name="coin" size={13} strokeWidth={2.6} />{fmt(c.total)}</span>
              </button>
              {ready ? (
                <p className="gen-note">Balance after: <b className="tnum">{fmt(c.balance - c.total)}</b> tokens · {c.priority && c.isMax ? 'priority queue' : 'about 2 min'}</p>
              ) : (
                <p className="gen-note warn">
                  <Icon name="upload" size={13} /> Add {!c.tpl ? 'a starting point' : 'your product'} to generate.
                  <button type="button" className="link" onClick={() => { c.setStageOpen(false); scrollToStep(!c.tpl ? 'step-style' : 'step-product'); }}>Go there</button>
                </p>
              )}
            </div>
            <ul className="recipe">
              {recipe.map((x) => (
                <li key={x.k}>
                  <button type="button" className={x.missing ? 'missing' : ''} onClick={() => { c.setStageOpen(false); scrollToStep(x.step); }}>
                    <span>{x.k}</span><b>{x.v}</b>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="recent">
          <div className="recent-head"><b>Recent ads</b><button type="button" className="link" onClick={() => c.notify('Projects keeps every ad you make.')}>See all</button></div>
          {c.recent.map((x) => (
            <button type="button" key={x.id} className="recent-row" onClick={() => c.notify(`Opening “${x.title}”.`)}>
              <img src={x.img} alt="" />
              <span><b>{x.title}</b><em>{x.when} · {x.s}s</em></span>
              <Icon name="play" size={12} />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
