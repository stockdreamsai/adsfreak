import { useEffect, useRef, useState } from 'react';
import {
  SETTINGS, CAROUSEL, COMPARE, FEATURES, PLAN_LIST, STANDARD_LIST, MAX_LIST,
  REVIEWS, DOWNSELL, PAY_LOGOS, GRID, BONUSES, VARIANTS,
} from './data.js';

/* ---------- tiny inline icon set (lucide-style strokes) ---------- */
const I = ({ d, className = '', size = 20, fill = 'none' }) => (
  <svg className={`ic ${className}`} width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);
const Check = (p) => <I d="M20 6 9 17l-5-5" {...p} />;
const Cross = (p) => <I d={['M18 6 6 18', 'm6 6 12 12']} {...p} />;
const Arrow = (p) => <I d={['M5 12h14', 'm12 5 7 7-7 7']} {...p} />;
const Sparkle = (p) => <I d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z" {...p} />;
const Crown = (p) => <I d={['m3 8 4 9h10l4-9-5 3-4-6-4 6z', 'M7 20h10']} {...p} />;
const Shield = (p) => <I d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" {...p} />;
const Clock = (p) => <I d={['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 6v6l4 2']} {...p} />;
const Rocket = (p) => <I d={['M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.7a2 2 0 0 0-3-.3', 'm12 15-3-3a22 22 0 0 1 2-3.95A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.4-6 11a22 22 0 0 1-4 2z', 'M9 12H4s.5-3.5 2-5c1.7-1.7 5 0 5 0', 'M12 15v5s3.5-.5 5-2c1.7-1.7 0-5 0-5']} {...p} />;
const Gem = (p) => <I d={['M6 3h12l4 6-10 13L2 9z', 'M11 3 8 9l4 13 4-13-3-6', 'M2 9h20']} {...p} />;
const Star = (p) => <I d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" fill="currentColor" {...p} />;
const Chevron = (p) => <I d="m6 9 6 6 6-6" {...p} />;
const Globe = (p) => <I d={['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z']} {...p} />;
const Zap = (p) => <I d="M13 2 3 14h9l-1 8 10-12h-9z" {...p} />;
const Wand = (p) => <I d={['m15 4 5 5', 'M3 21 14.5 9.5', 'M9 3v3', 'M7.5 4.5h3', 'M19 11v3', 'M17.5 12.5h3']} {...p} />;
const Lock = (p) => <I d={['M5 11h14v10H5z', 'M8 11V7a4 4 0 0 1 8 0v4']} {...p} />;
const Layers = (p) => <I d={['m12 2 10 5-10 5L2 7z', 'm2 12 10 5 10-5', 'm2 17 10 5 10-5']} {...p} />;
const Camera = (p) => <I d={['M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z']} {...p} />;
const Instagram = (p) => <I d={['M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M17.5 6.5h.01']} {...p} />;
const Facebook = (p) => <I d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" {...p} />;
const XIcon = (p) => <I d={['M4 4l16 16', 'M20 4 4 20']} {...p} />;

const fmtTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Logo({ className = '' }) {
  return <span className={`logo ${className}`}><em>Social Ads</em> <b>FREAK</b></span>;
}

function PayLogos({ small = false, note }) {
  return (
    <div className={`pay ${small ? 'small' : ''}`}>
      {PAY_LOGOS.map(([src, alt]) => <img key={alt} src={src} alt={alt} loading="lazy" />)}
      {note && <><i>|</i><small>{note}</small></>}
    </div>
  );
}

/* floating decorative icons + pulsing particle dots (hero and bonus panel) */
function Decor({ dim = false }) {
  return (
    <>
      <div className="dots" aria-hidden="true">{[...Array(8)].map((_, i) => <i key={i} />)}</div>
      <div className={`float-icons ${dim ? 'dim' : ''}`} aria-hidden="true">
        <Lock className="f1" size={46} /><Wand className="f2" size={40} /><Sparkle className="f3" size={32} />
        <Crown className="f4" size={40} /><Camera className="f5" size={36} /><Star className="f6" size={28} />
      </div>
    </>
  );
}

/* before/after comparison: auto-sweeps between 20% and 80% until the user drags, like the reference */
function BeforeAfter({ before, after, labels = ['Original', 'Clone'], compact = false }) {
  const [pos, setPos] = useState(50);
  const touched = useRef(false);
  useEffect(() => {
    if (touched.current) return undefined;
    let dir = 1; let last = 0; let raf;
    const tick = (t) => {
      if (touched.current) return;
      const dt = last ? (t - last) / 1000 : 0; last = t;
      setPos((p) => { let n = p + dir * 16.5 * dt; if (n >= 80) { n = 80; dir = -1; } else if (n <= 20) { n = 20; dir = 1; } return n; });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className={`ba ${compact ? 'compact' : ''}`} style={{ '--pos': `${pos}%` }}>
      <img className="ba-after" src={after} alt="" loading="lazy" />
      <img className="ba-before" src={before} alt="" loading="lazy" />
      <span className="ba-line"><b /></span>
      <span className="ba-lbl l">{labels[0]}</span><span className="ba-lbl r">{labels[1]}</span>
      <input type="range" min="0" max="100" value={pos} onPointerDown={() => { touched.current = true; }} onChange={(e) => { touched.current = true; setPos(+e.target.value); }} aria-label="Compare before and after" />
    </div>
  );
}

function Stepbar() {
  return (
    <div className="stepbar" aria-label="Order progress">
      <div className="done">Step 1: Completed</div>
      <div className="now">Step 2: Customize Your Order</div>
      <div>Step 3: Access Social Ads Freak</div>
    </div>
  );
}

/* image showcase carousel: fixed height, width from each image's aspect ratio */
function Carousel() {
  const items = [...CAROUSEL, ...CAROUSEL];
  return (
    <div className="carousel" aria-hidden="true">
      <div className="carousel-track">
        {items.map((it, i) => (
          <figure key={i} className="carousel-card" style={{ aspectRatio: it.aspect || 1 }}>
            <img src={it.src} alt="" loading={i < CAROUSEL.length ? 'eager' : 'lazy'} />
            <figcaption>{it.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="fade l" /><div className="fade r" />
    </div>
  );
}

function Review({ r, photo = false }) {
  return (
    <figure className="review">
      <div className="who">
        {photo ? <img className="ini" src={r.img} alt="" loading="lazy" /> : <span className="ini">{r.initials}</span>}
        <div><b>{r.name}</b><small>{r.role}</small></div>
      </div>
      <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={15} />)}</div>
      <blockquote>"{r.text}"</blockquote>
    </figure>
  );
}

function ReasonVisual({ kind }) {
  switch (kind) {
    case 'credits': return (
      <div className="mock-card credits">
        <div className="mc-head"><Zap size={18} /> Credit balance</div>
        <div className="meter"><div className="std"><span>Standard</span><b>47,000</b></div><div className="mx"><span>MAX</span><b>94,000</b></div></div>
        <p>≈ 427 viral ads · 2× your plan</p>
      </div>);
    case 'variants': return (
      <div className="mock-card variants">
        <div className="mc-head"><Wand size={18} /> Variant Factory · viral score</div>
        {VARIANTS.map(([t, sc]) => <div key={t} className="vrow"><span>{t}</span><b style={{ '--sc': sc }}>{sc}</b></div>)}
      </div>);
    case 'clone': return <BeforeAfter before="/images/reference-ad.jpg" after="/images/recreated-ad.jpg" labels={['Winning ad', 'Deep clone']} />;
    case 'trend': return <div className="shot"><img src="/images/included-trendradar-poster.jpg" alt="Trend Radar" loading="lazy" /></div>;
    case 'avatars': return (
      <div className="mock-card avatar">
        <div className="mc-head"><Wand size={18} /> Create your own avatar</div>
        <div className="arow"><span className="aico">📷</span><div><b>Upload a photo</b><small>MAX turns it into a presenter</small></div></div>
        <div className="aor">or</div>
        <div className="arow"><span className="aico">✍️</span><div><b>Describe it</b><small>"woman in her 30s, gym outfit, warm smile"</small></div></div>
        <div className="meter"><div className="std"><span>Standard</span><b>100+</b></div><div className="mx"><span>MAX · 2×</span><b>200+ &amp; yours</b></div></div>
      </div>);
    case 'languages': return (
      <div className="mock-card langs">
        <div className="mc-head"><Globe size={18} /> Languages &amp; captions</div>
        <div className="meter"><div className="std"><span>Standard</span><b>30+</b></div><div className="mx"><span>MAX</span><b>60+</b></div></div>
        <div className="qrow"><span>Captions · Standard</span><b>English only</b></div>
        <div className="qrow max"><span>Captions · MAX</span><b>Any language</b></div>
      </div>);
    case 'ugc': return (
      <div className="shot ugc">
        <img src="/images/included-ugc-poster.jpg" alt="UGC video formats" loading="lazy" />
        <span className="x2-tag">2× UGC videos</span>
      </div>);
    default: return <div className="shot"><img src="/images/included-avatars.jpg" alt="New avatars" loading="lazy" /></div>;
  }
}

export default function MaxPage() {
  const { price, totalValue, discount, upgradeUrl, membersUrl } = SETTINGS;

  // scarcity counter: starts at 11, drifts down to 5 at random 8–20s intervals
  const [spots, setSpots] = useState(SETTINGS.spotsStart);
  useEffect(() => {
    if (spots <= SETTINGS.spotsFloor) return undefined;
    const t = setTimeout(() => setSpots((s) => s - 1), 8000 + Math.random() * 12000);
    return () => clearTimeout(t);
  }, [spots]);

  // sticky bottom banner with a 15-minute countdown, shown after the first scroll
  const [sticky, setSticky] = useState(false);
  const [left, setLeft] = useState(SETTINGS.stickyMinutes * 60);
  const started = useRef(false);
  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 300 && !started.current) { started.current = true; setSticky(true); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!sticky) return undefined;
    const id = setInterval(() => setLeft((v) => (v <= 1 ? 0 : v - 1)), 1000);
    return () => clearInterval(id);
  }, [sticky]);

  const progress = ((SETTINGS.spotsStart - spots) / SETTINGS.spotsStart) * 100;

  // exit downsell popup: opens from "No thanks", 5-minute countdown, cannot be dismissed by clicking outside
  const [popup, setPopup] = useState(false);
  const [popLeft, setPopLeft] = useState(DOWNSELL.minutes * 60);
  useEffect(() => {
    if (!popup) return undefined;
    document.body.style.overflow = 'hidden';
    const id = setInterval(() => setPopLeft((v) => (v <= 1 ? 0 : v - 1)), 1000);
    return () => { clearInterval(id); document.body.style.overflow = ''; };
  }, [popup]);

  return (
    <div className="max">
      {/* ============ STICKY LIMITED TIME BANNER ============ */}
      <div className={`sticky ${sticky && left > 0 ? 'in' : ''}`} role="status">
        <span className="st-lbl"><Clock size={16} /> Limited Time Offer</span>
        <span className="st-time">{fmtTime(left)}</span>
        <button type="button" className="st-btn" onClick={() => scrollTo('pricing')}>Claim Your Discount <Arrow size={14} /></button>
      </div>

      {/* ============ STEP INDICATOR BAR (desktop) ============ */}
      <Stepbar />

      {/* ============ HERO ============ */}
      <section className="hero">
        <Decor />
        <div className="wrap center">
          {/* step indicator (mobile) */}
          <div className="step-mobile" aria-hidden="true">
            <div className="circles"><span className="ok"><Check size={14} /></span><span className="cur">2</span><span>3</span></div>
            <small>Customize Your Order</small>
          </div>

          {/* logo */}
          <div className="hero-logo"><Logo /></div>

          {/* thank you */}
          <p className="thanks">Thank you</p>
          <p className="thanks-sub">for your purchase!</p>

          {/* big headline */}
          <h1>
            Get <span className="violet">DOUBLE</span> The Credits, Avatars &amp; Languages —<br />
            <span className="violet">2× EVERYTHING</span> You Just Unlocked When You Upgrade To{' '}
            <span className="pill">MAX</span>
          </h1>

          {/* urgency line */}
          <div className="urgency-wrap">
            <p className="urgency">
              🔥 Special Offer: <b className="red">{discount} Discount!</b> ⏳ Offer Available For The First
              <span className="count">{spots}</span> Customers
            </p>
          </div>

          {/* CTA */}
          <span className="btn btn-primary btn-xl static">See How Below 👇</span>
        </div>

        {/* image showcase carousel */}
        <Carousel />

        {/* scarcity text */}
        <div className="wrap center scarcity">
          <p className="strong">If you leave this page, you won't see this <u>offer</u> ever again!</p>
          <p className="muted"><i>You get this special offer because you've purchased the STANDARD version!</i></p>
          <p className="muted"><i>You can not purchase the <span className="tag">MAX UPGRADE</span> without an active Standard Social Ads Freak license!</i></p>
        </div>
      </section>

      {/* ============ SECTION 2 — FEATURE COMPARISON TABLE ============ */}
      <section id="features-comparison" className="white glow">
        <div className="wrap narrow center">
          <h2 className="quote">
            "People Think I Hired A Video Crew. <span className="violet">NOPE!</span><br />
            <span className="violet">I Just Use Social Ads Freak!"</span>
          </h2>
          <div className="simply">
            <span className="lbl">Simply:</span>
            <span className="s1">Clone</span><Arrow size={18} /><span className="s2">Multiply</span><Arrow size={18} /><span className="s3">Launch</span>
          </div>
        </div>

        <div className="wrap narrow">
          <div className="table">
            <div className="thead">
              <div />
              <div className="col-max">MAX 👑</div>
              <div className="col-std">STANDARD</div>
            </div>
            {COMPARE.map((feature, i) => (
              <div key={feature} className={`trow ${i % 2 ? '' : 'alt'}`}>
                <div className="tfeat"><span className="dot" />{feature}</div>
                <div className="col-max"><Check size={18} /></div>
                <div className="col-std"><Cross size={18} className="red" /></div>
              </div>
            ))}
          </div>
          <div className="center cta-after">
            <a className="btn btn-primary btn-lg" href={upgradeUrl}><Sparkle size={18} /> Yes! Upgrade My License To MAX</a>
            <p className="small muted">*This is an upgrade for Social Ads Freak. You need an active Standard license before you can upgrade.</p>
          </div>
        </div>
      </section>

      {/* ============ TEAM WELCOME ============ */}
      <section className="white welcome">
        <div className="wrap split">
          <div className="photo"><img src="/images/founders.jpg" alt="Ali G and Marcus Lim, Social Ads Freak founders" loading="lazy" /></div>
          <div>
            <span className="badge-soft">🎉 Welcome to the Freak Family</span>
            <h2 className="huge">Thank you</h2>
            <p className="caps">For Your Purchase</p>
            <p className="lead left">
              On behalf of the hard-working team behind Social Ads Freak, I would like to congratulate you on your smart
              purchase and extend a very warm welcome to the <b>Freak family</b>!
            </p>
          </div>
        </div>
      </section>

      {/* ============ 3-CARD UPGRADE STORY ============ */}
      <section className="white story">
        <div className="wrap">
          <div className="cols3">
            <div>
              <p className="ital">The Standard version of Social Ads Freak you just purchased is extremely powerful…</p>
              <img className="mock" src="/images/step-templates-poster.jpg" alt="Social Ads Freak Standard" loading="lazy" />
            </div>
            <div>
              <p className="ital">You'll be cloning winning video ads with only <b className="violet">3 clicks</b>.</p>
              <div className="steps">
                <span><Layers size={18} /> Pick a winning ad</span><Chevron size={16} />
                <span><Wand size={18} /> Swap your product, face &amp; voice</span><Chevron size={16} />
                <span className="hot"><Zap size={18} /> Generate &amp; launch</span>
              </div>
            </div>
            <div>
              <p className="ital">But we've got a <b className="violet">very special upgrade</b> for you that will take things to the next level.</p>
              <img className="mock box" src="/brand/png/saf-boxshot.png" alt="Social Ads Freak MAX" loading="lazy" />
            </div>
          </div>

          <div className="lavender">
            If you're only planning on making a couple of video ads every now and then, then <b>you should skip this offer</b>,
            because you already have everything you need in your Standard license.
          </div>

          <div className="center cta-block">
            <h3 className="ital-h">But if you plan to get the very best out of Social Ads Freak…</h3>
            <p className="lead">Click the button below and profit from this amazing offer right now!</p>
            <a className="btn btn-grad btn-xl" href={upgradeUrl}>Yes! Upgrade My License To MAX! &nbsp;→</a>
            <PayLogos note="30 Day Money Back Guarantee" />
            <p className="small"><b className="red">PLEASE NOTE:</b> This upgrade is <b>100% optional</b> and it's not for everybody, and we reserve the right to remove this page at any time.</p>
          </div>
        </div>
      </section>

      {/* ============ INTRODUCING MAX ============ */}
      <section className="white">
        <div className="wrap">
          <div className="dark-card intro">
            <div className="grid-ov" />
            <h2>Do you want to put <em className="accent">Social Ads Freak</em><br />on <u className="steroids">STEROIDS?</u></h2>
            <p className="sub">Social Ads Freak MAX Is Packed With Features<br />Designed To Take Things To The <b><u>NEXT LEVEL!</u></b></p>
            <div className="remaining">Only <span className="count light">{spots}</span> MAX Upgrades Remaining</div>
            <div className="bar"><div style={{ width: `${progress}%` }} /></div>
            <img className="intro-img" src="/images/included-trendradar-poster.jpg" alt="Social Ads Freak MAX dashboard" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="white glow">
        <div className="wrap center">
          <p className="kicker">Success Stories</p>
          <h2>What MAX Users <span className="violet">Are Saying</span></h2>
          <p className="lead">Join the brands and agencies already cloning winners with Social Ads Freak.</p>
          <div className="reviews">{REVIEWS.map((r) => <Review key={r.name} r={r} />)}</div>
        </div>
      </section>

      {/* ============ MAX FEATURES GRID ============ */}
      <section className="white">
        <div className="wrap">
          <div className="dark-card features">
            <div className="grid-ov" />
            <p className="kicker light">Unlock The Full Engine</p>
            <h2>Check out what you can create with <span className="accent">Social Ads Freak MAX</span></h2>
            <div className="igrid">
              {GRID.map((g) => (
                <figure key={g.title} className="itile">
                  <div className="ith"><img src={g.src} alt={g.title} loading="lazy" /></div>
                  <figcaption>{g.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ STANDARD VS MAX ============ */}
      <section className="white glow">
        <div className="wrap narrow center">
          <h2>Standard <i>vs</i> <span className="violet">Social Ads Freak MAX</span></h2>
          <p className="lead">Stop pausing campaigns because you ran out of credits —<br /><b>test ten angles tonight and keep the winners coming.</b></p>
        </div>
        <div className="wrap narrow vs">
          <div className="vs-card std">
            <h3>Standard</h3>
            <img src="/images/step-generated-poster.jpg" alt="" loading="lazy" />
            <ul>{STANDARD_LIST.map((t) => <li key={t}><Cross size={18} className="red" />{t}</li>)}</ul>
          </div>
          <div className="vs-card pro">
            <h3 className="violet">Social Ads Freak MAX</h3>
            <img src="/images/recreated-ad.jpg" alt="" loading="lazy" />
            <ul>{MAX_LIST.map(([b, rest]) => <li key={b}><Check size={18} className="violet" /><span><b>{b}</b>{rest}</span></li>)}</ul>
          </div>
          <div className="vs-badge">VS</div>
        </div>
      </section>

      {/* ============ DETAILED FEATURES (7 Reasons to Upgrade) ============ */}
      <section className="white">
        <div className="wrap center">
          <p className="kicker">Do You Want To Put Social Ads Freak On STEROIDS?</p>
          <h2>Here Are {FEATURES.length} Reasons To <span className="violet">Upgrade To MAX</span></h2>
        </div>
        <div className="wrap reasons">
          {FEATURES.map((f, i) => (
            <article key={f.title} className={`reason ${i % 2 ? 'flip' : ''}`}>
              <div className="rtext">
                <span className="rnum">Reason {i + 1}</span>
                <h3><span className="femoji sm" aria-hidden="true">{f.icon}</span> {f.title}</h3>
                <p><b>{f.lead}</b></p>
                <p>{f.text}</p>
              </div>
              <div className="rvisual"><ReasonVisual kind={f.visual} /></div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ BONUS ============ */}
      <section className="white bonus-sec">
        <div className="wrap wide">
          <div className="spark-wrap">
            <div className="dark-card bonus">
              <Decor dim />
              <p className="kicker light outline"><Sparkle size={14} /> Exclusive Extras</p>
              <h2>I Haven't Even Told You About The <em className="accent">Bonus</em> Yet!</h2>
              <p className="sub small">These powerful tools are included <b>FREE</b> with your MAX upgrade — designed to give you complete control over every ad you clone.</p>
              <div className="bgrid">
                {BONUSES.map((b) => (
                  <div key={b.title} className="bcard">
                    <div className="bvis"><BeforeAfter before={b.before} after={b.after} labels={b.labels} compact /></div>
                    <div className="bbody">
                      <div className="bhead"><span className="bemoji" aria-hidden="true">{b.icon}</span><h3>{b.title}</h3></div>
                      <p>{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-white btn-lg" href={upgradeUrl}><Crown size={18} /> Claim Your MAX Bonuses Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NO BRAINER DEAL ============ */}
      <section className="white">
        <div className="wrap narrow">
          <h2 className="center">This is a <span className="caps-h">Complete No Brainer Deal</span></h2>
          <div className="split nb">
            <img src="/brand/png/saf-boxshot.png" alt="Social Ads Freak MAX" loading="lazy" />
            <div className="lead left">
              <p>Here's your <b>ONE CHANCE</b> to upgrade to <b>MAX</b> at a fraction of what it's really worth.</p>
              <p>And you get <b><u>free updates</u></b> and <b><u>support</u></b>, included.</p>
              <p>This upgrade is powerful, and rightly so, not everyone should be granted access. At least not at this price.</p>
              <p>If you're serious about scaling your ads, this should be an easy decision to go ahead and click the button.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAX PRICING ============ */}
      <section id="pricing" className="white pricing">
        <div className="grid-mask" />
        <div className="wrap narrow center">
          <h2>Upgrade Your License <span className="underline-wavy">RIGHT NOW!</span></h2>
          <h3 className="risk">TRY IT 100% RISK-FREE!</h3>
          <p className="urgency plain">🔥 <b className="violet">{discount} Discount!</b> Offer Available For The First <span className="count dark">{spots}</span> Customers ⏳</p>
          <p className="rating"><span className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={15} />)}</span> Rated <b>4.8</b> by our members</p>

          <div className="price-card">
            <span className="ribbon">🔥 MAX UPGRADE</span>
            <div className="pc-head">
              <div className="pc-name"><span className="gem"><Gem size={18} /></span><h3>MAX</h3></div>
              <div className="pc-price"><s>${totalValue.toLocaleString('en-US')} value</s><b>${price}</b><small>One-Time Payment</small></div>
            </div>
            <div className="pc-body">
              <p className="pc-sub">Everything In Standard, Plus:</p>
              <ul>
                {PLAN_LIST.map(([label, bonus]) => (
                  <li key={label}><Check size={16} className="green" /><span>{label}</span>{bonus && <em className="bonus-tag">Bonus</em>}</li>
                ))}
              </ul>
              <a className="btn btn-primary btn-block" href={upgradeUrl}><Rocket size={18} /> Upgrade to MAX — ${price} <Arrow size={18} /></a>
              <p className="pc-note violet">✓ Lifetime access | One Time Payment</p>
              <PayLogos small />
              <p className="small muted"><Shield size={14} className="green" /> Secure Checkout • SSL Encrypted</p>
              <p className="small muted">✓ 30-day money-back guarantee</p>
            </div>
          </div>
          <p className="small">*This is an upgrade for Social Ads Freak. You need an active Standard license before you can upgrade to MAX.</p>
        </div>
      </section>

      {/* ============ ADDITIONAL TESTIMONIALS ============ */}
      <section className="white glow">
        <div className="wrap center">
          <p className="kicker">Real Results</p>
          <h2>Freaks Are <span className="violet">Crushing It</span></h2>
          <p className="lead">See why brands and agencies trust Social Ads Freak for their video ads.</p>
          <div className="reviews">{REVIEWS.map((r) => <Review key={r.name} r={r} photo />)}</div>
        </div>
      </section>

      {/* ============ GUARANTEE ============ */}
      <section className="white">
        <div className="wrap narrow center">
          <span className="badge-soft"><Shield size={16} /> Full 30-Day Money Back Guarantee</span>
          <h2>You're Protected By Our <span className="violet">No Risk Guarantee.</span></h2>
        </div>
        <div className="wrap narrow">
          <div className="dark-card guarantee">
            <div className="grid-ov" />
            <div>
              <h3>Give the MAX version a try with <span className="accent">NO risk</span></h3>
              <p><Check size={16} className="green" /><span>If it doesn't make you money… just let us know and we'll <b>refund 100%</b> of your purchase, no hassle.</span></p>
              <p><Check size={16} className="green" /><span>This upgrade is <b>only available right now</b> and expires if you leave the page.</span></p>
              <span className="zero"><Shield size={18} /> You have ZERO risk here!</span>
            </div>
            <div className="seal"><span>30 DAYS</span><b>MONEY</b><b className="big">BACK</b><span>GUARANTEED</span></div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="white final">
        <div className="wrap narrow center">
          <h2>Ready to Go <span className="violet">MAX</span>?</h2>
          <p className="lead">Don't miss this exclusive one-time offer. Upgrade now and unlock the full power of Social Ads Freak.</p>
          <a className="btn btn-primary btn-xl" href={upgradeUrl}><Sparkle size={18} /> Yes! Upgrade to MAX — ${price} <Arrow size={18} /></a>
          <p className="small muted">✓ 30-day money-back guarantee • One-time payment • Lifetime access</p>

          <div className="or"><span>OR</span></div>
          <p className="no-thanks">No thanks, I'll just use the standard features and<br />miss out on the special discount</p>
          <button type="button" className="btn btn-ghost" onClick={() => setPopup(true)}>Click Here To Be Redirected To The Members Area</button>
          <p className="small muted">Important: "Once this page is closed, we reserve the right to sell you this upgrade at a higher price point."</p>

          <div className="proof-band">OUR MEMBERS Clone <span className="accent">10× More Variations</span> And Launch <span className="accent">Faster</span> After Upgrading To MAX</div>
        </div>
      </section>

      {/* ============ DISCOUNT POPUP ============ */}
      {popup && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="ds-title">
          <div className="modal-card">
            <div className="modal-timer">
              <p>⏰ LIMITED TIME OFFER EXPIRES IN</p>
              <b>{fmtTime(popLeft)}</b>
            </div>
            <div className="modal-body">
              <h3 id="ds-title">WAIT! Don't Leave Yet!</h3>
              <p className="lead">We have a special one-time discount just for you…</p>
              <div className="ds-price"><s>${price}</s><b>${DOWNSELL.price}</b></div>
              <p className="save">You save ${price - DOWNSELL.price}!</p>
              <a className="btn btn-primary btn-block btn-lg" href={DOWNSELL.url}><Sparkle size={20} /> Claim My ${DOWNSELL.price} MAX Upgrade</a>
              <a className="ds-no" href={membersUrl}>No thanks, take me to the members area</a>
            </div>
          </div>
        </div>
      )}

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap">
          <div className="fcols">
            <div>
              <Logo className="small" />
              <p>Clone winning video ads with your product, face and voice — in minutes.</p>
            </div>
            <div>
              <h4>Product</h4>
              <a href="/">Features</a>
              <a href="/#buy">Pricing</a>
              <a href="/#examples">Examples</a>
              <a href="#pricing">MAX Upgrade</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="/#story">About</a>
              <a href={membersUrl}>Members Area</a>
              <a href="/#faq">FAQ</a>
              <a href="mailto:support@socialadsfreak.com">Contact</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/privacy.html">Privacy Policy</a>
              <a href="/terms.html">Terms of Service</a>
              <a href="/disclaimer.html">Refund Policy</a>
              <a href="/disclaimer.html">Disclaimer</a>
            </div>
          </div>
          <div className="foot-row">
            <span>© 2026 Social Ads Freak. All rights reserved.</span>
            <span className="socials">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="X"><XIcon size={18} /></a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
