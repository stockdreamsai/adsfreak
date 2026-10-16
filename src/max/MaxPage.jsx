import { useEffect, useRef, useState } from 'react';
import {
  SETTINGS, CHIPS, CAROUSEL, COMPARE, COMPARE_NOTE, FEATURES, VALUE_LIST,
  STANDARD_LIST, MAX_LIST, REVIEWS, FAQ, DOWNSELL, PAY_LOGOS, GRID, VARIANTS,
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

/* draggable before/after comparison, like the reference's BeforeAfterSlider */
function BeforeAfter({ before, after, labels = ['Original', 'Clone'] }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="ba" style={{ '--pos': `${pos}%` }}>
      <img className="ba-after" src={after} alt="" loading="lazy" />
      <img className="ba-before" src={before} alt="" loading="lazy" />
      <span className="ba-line"><b /></span>
      <span className="ba-lbl l">{labels[0]}</span><span className="ba-lbl r">{labels[1]}</span>
      <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Compare before and after" />
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

function Carousel() {
  const items = [...CAROUSEL, ...CAROUSEL];
  return (
    <div className="carousel" aria-hidden="true">
      <div className="carousel-track">
        {items.map((it, i) => (
          <figure key={i} className="carousel-card">
            <img src={it.src} alt="" loading={i < CAROUSEL.length ? 'eager' : 'lazy'} />
            <figcaption>{it.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="fade l" /><div className="fade r" />
    </div>
  );
}

function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
        <div key={q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{q}</span><Chevron />
          </button>
          <div className="faq-a"><p>{a}</p></div>
        </div>
      ))}
    </div>
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
    case 'queue': return (
      <div className="mock-card queue">
        <div className="mc-head"><Rocket size={18} /> Render queue</div>
        <div className="qrow max"><span>MAX · your 10 variants</span><b>rendering now</b></div>
        <div className="qrow"><span>Standard</span><b>in queue</b></div>
        <div className="qrow"><span>Standard</span><b>in queue</b></div>
      </div>);
    default: return <div className="shot"><img src="/images/included-avatars.jpg" alt="New avatars" loading="lazy" /></div>;
  }
}

export default function MaxPage() {
  const { price, totalValue, discount, upgradeUrl, membersUrl } = SETTINGS;

  // scarcity counter: starts at 11, drifts down to 5 at random 8–20s intervals
  const [spots, setSpots] = useState(SETTINGS.spotsStart);
  useEffect(() => {
    if (spots <= SETTINGS.spotsFloor) return;
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
    if (!sticky) return;
    const id = setInterval(() => setLeft((v) => (v <= 1 ? 0 : v - 1)), 1000);
    return () => clearInterval(id);
  }, [sticky]);

  const progress = ((SETTINGS.spotsStart - spots) / SETTINGS.spotsStart) * 100;

  // exit downsell popup: opens from "No thanks", 5-minute countdown, cannot be dismissed by clicking outside
  const [popup, setPopup] = useState(false);
  const [popLeft, setPopLeft] = useState(DOWNSELL.minutes * 60);
  useEffect(() => {
    if (!popup) return;
    document.body.style.overflow = 'hidden';
    const id = setInterval(() => setPopLeft((v) => (v <= 1 ? 0 : v - 1)), 1000);
    return () => { clearInterval(id); document.body.style.overflow = ''; };
  }, [popup]);

  return (
    <div className="max">
      {/* top notice */}
      <div className="notice">✦ WAIT — your order isn't finished yet. <b>Don't close this page.</b></div>
      <Stepbar />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="dots" aria-hidden="true">{[...Array(8)].map((_, i) => <i key={i} />)}</div>
        <div className="float-icons" aria-hidden="true">
          <Lock className="f1" size={46} /><Wand className="f2" size={40} /><Sparkle className="f3" size={32} />
          <Crown className="f4" size={40} /><Layers className="f5" size={36} /><Star className="f6" size={28} />
        </div>
        <div className="wrap center">
          <div className="step-mobile" aria-hidden="true">
            <div className="circles"><span className="ok"><Check size={14} /></span><span className="cur">2</span><span>3</span></div>
            <small>Customize Your Order</small>
          </div>
          <div className="hero-logo"><Logo /></div>
          <p className="thanks">Thank you</p>
          <p className="thanks-sub">for your purchase!</p>
          <p className="step-label">Step 2 of 3 · One-Time Upgrade</p>

          <h1>
            Give Your Social Ads Freak <span className="pill">MAX</span> Superpowers —{' '}
            <br /><em className="cyan">Double The Credits</em> — 400+ Viral Ads,{' '}
            <br />Nothing Holding You Back.
          </h1>

          <p className="hero-lead">
            You just unlocked Social Ads Freak. <b>MAX is for the freaks who actually plan to scale.</b> Double the credits,
            the <b>Variant Factory</b> A/B engine and deep ad-clone analysis — working across both quick viral ads and full
            Pro Studio stories — daily <b>Trend Radar</b>, <b>200+ avatars</b> plus <b>your own custom avatar</b> from a
            photo or a description, <b>60+ languages</b> with captions in any of them, double the UGC videos, priority
            rendering, and first dibs on every new avatar and template — added to the account you just created.
          </p>

          <div className="chips">{CHIPS.map((c) => <span key={c}>{c}</span>)}</div>

          <p className="urgency">
            🔥 Special Offer: <b className="red">{discount} Discount!</b> ⏳ Offer Available For The First
            <span className="count">{spots}</span> Customers
          </p>

          <a className="btn btn-primary btn-xl" href={upgradeUrl}>Yes! Upgrade Me To MAX — Just ${price} Once</a>
          <p className="btn-note">🔒 One-time payment · No monthly fees · 30-day money-back guarantee</p>
        </div>

        <Carousel />

        <div className="wrap center scarcity">
          <p className="strong">If you leave this page, you won't see this <u>offer</u> ever again!</p>
          <p className="muted"><i>You get this special offer because you've purchased the STANDARD version!</i></p>
          <p className="muted"><i>You can not purchase the <span className="tag">MAX UPGRADE</span> without an active Standard Social Ads Freak license!</i></p>
        </div>
      </section>

      <div className="trustbar">
        <span><Shield size={16} /> 30-Day Money Back Guarantee</span>
        <span><Lock size={16} /> Secure 256-bit SSL Checkout</span>
        <span><Check size={16} /> One-Time — No Subscription</span>
      </div>

      {/* ============ COMPARISON ============ */}
      <section id="compare" className="white glow">
        <div className="wrap narrow center">
          <p className="kicker">Here's the freaky truth</p>
          <h2>Your Standard Credits Are A Head Start —<br /><span className="violet">Not A Finish Line.</span></h2>
          <p className="lead">
            47,000 credits feels like plenty… until you find a winner. Then you want 10 variations of it. In 5 languages.
            With 3 different avatars. The whole point of Social Ads Freak is <i>creative velocity</i>. MAX makes sure your
            credit balance is never the thing that slows you down.
          </p>
          <div className="simply">
            <span className="lbl">Simply:</span>
            <span className="s1">Clone</span><Arrow size={18} /><span className="s2">Multiply</span><Arrow size={18} /><span className="s3">Launch</span>
          </div>
        </div>

        <div className="wrap narrow">
          <p className="kicker center">Standard vs MAX · Here's exactly what changes</p>
          <div className="table">
            <div className="thead">
              <div />
              <div className="col-max">MAX 👑</div>
              <div className="col-std">STANDARD</div>
            </div>
            {COMPARE.map((r, i) => (
              <div key={r.feature} className={`trow ${i % 2 ? '' : 'alt'}`}>
                <div className="tfeat"><span className="dot" />{r.feature}</div>
                <div className="col-max"><Check size={16} /><span>{r.max}</span>{r.badge && <b className="x2">{r.badge}</b>}</div>
                <div className="col-std"><span>{r.standard}</span></div>
              </div>
            ))}
          </div>
          <p className="footnote">{COMPARE_NOTE}</p>
          <div className="center">
            <a className="btn btn-primary btn-lg" href={upgradeUrl}><Sparkle size={18} /> Yes! Upgrade My License To MAX</a>
            <p className="small muted">*This is an upgrade for Social Ads Freak. You need an active Standard license before you can upgrade.</p>
          </div>
        </div>
      </section>

      {/* ============ WELCOME ============ */}
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

      {/* ============ 3-COLUMN STORY ============ */}
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

      {/* ============ INTRODUCING ============ */}
      <section className="white">
        <div className="wrap">
          <div className="dark-card intro">
            <div className="grid-ov" />
            <h2>Do you want to put <em className="accent">Social Ads Freak</em><br />on <u className="steroids">STEROIDS?</u></h2>
            <p className="sub">Social Ads Freak MAX is packed with features<br />designed to take things to the <b><u>NEXT LEVEL!</u></b></p>
            <div className="remaining">Only <span className="count light">{spots}</span> MAX Upgrades Remaining</div>
            <div className="bar"><div style={{ width: `${progress}%` }} /></div>
            <img className="intro-img" src="/images/included-trendradar-poster.jpg" alt="Social Ads Freak MAX dashboard" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="white glow">
        <div className="wrap center">
          <p className="kicker">Success stories</p>
          <h2>What Freaks <span className="violet">Are Saying</span></h2>
          <p className="lead">Real members, cloning winners every day.</p>
          <div className="reviews">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="review">
                <div className="who"><span className="ini">{r.initials}</span><div><b>{r.name}</b><small>{r.role}</small></div></div>
                <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={15} />)}</div>
                <blockquote>"{r.text}"</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IMAGE GRID ============ */}
      <section className="white">
        <div className="wrap">
          <div className="dark-card features">
            <div className="grid-ov" />
            <p className="kicker light">Unlock the full engine</p>
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

      {/* ============ REASONS (detailed features) ============ */}
      <section className="white">
        <div className="wrap center">
          <p className="kicker">What MAX unlocks</p>
          <h2>Here Are {FEATURES.length} Reasons To <span className="violet">Upgrade To MAX</span></h2>
        </div>
        <div className="wrap reasons">
          {FEATURES.map((f, i) => (
            <article key={f.title} className={`reason ${i % 2 ? 'flip' : ''}`}>
              <div className="rtext">
                <div className="rbadges"><span className="rnum">Reason {i + 1}</span><span className="worth">Worth ${f.worth}</span></div>
                <h3><span className="femoji sm" aria-hidden="true">{f.icon}</span> {f.title}</h3>
                <p>{f.text}</p>
              </div>
              <div className="rvisual"><ReasonVisual kind={f.visual} /></div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ BONUS ============ */}
      <section className="white">
        <div className="wrap">
          <div className="spark-wrap">
            <div className="dark-card bonus">
              <p className="kicker light outline"><Sparkle size={14} /> Exclusive extras</p>
              <h2>I Haven't Even Told You About The <em className="accent">Bonuses</em> Yet!</h2>
              <p className="sub small">These are included <b>FREE</b> with your MAX upgrade — on top of the credits, the Variant Factory and the doubled avatars and languages.</p>
              <div className="bgrid">
                {[
                  { icon: '🚀', title: 'Priority Render Queue', text: 'Your generations jump the line. When you\'re testing 10 variations before launch, MAX users render first.', visual: <div className="bimg"><img src="/images/step-generated-poster.jpg" alt="" loading="lazy" /></div> },
                  { icon: '🔓', title: 'Early Access To New Avatars & Templates', text: 'Every new AI avatar and proven template lands in your account first, while everyone else waits.', visual: <div className="bimg"><img src="/images/included-avatars.jpg" alt="" loading="lazy" /></div> },
                  { icon: '📚', title: 'Unlimited Template Library', text: 'Every winning format you dissect is saved to your own library, ready to redeploy for any product.', visual: <div className="bimg"><img src="/images/included-templates.jpg" alt="" loading="lazy" /></div> },
                  { icon: '🎬', title: 'Pro Studio Recreate Flow', text: 'The deep breakdown rebuilds a winning ad scene by scene — hook, pacing and CTA intact.', visual: <BeforeAfter before="/images/reference-ad.jpg" after="/images/recreated-ad.jpg" labels={['Original', 'Recreated']} /> },
                ].map((b) => (
                  <div key={b.title} className="bcard">
                    <div className="bvis">{b.visual}</div>
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

      {/* ============ NO BRAINER ============ */}
      <section className="white">
        <div className="wrap narrow">
          <h2 className="center">This is a <span className="caps-h">Complete No Brainer Deal</span></h2>
          <div className="split nb">
            <img src="/brand/png/saf-boxshot.png" alt="Social Ads Freak MAX" loading="lazy" />
            <div className="lead left">
              <p>Here's your <b>ONE CHANCE</b> to upgrade to <b>MAX</b> at a fraction of what it's really worth.</p>
              <p>And you get <b><u>free updates</u></b> and <b><u>support</u></b>, included.</p>
              <p>Double the credits, batch-scored variants and your own custom avatar are powerful — and rightly so, not everyone should get them. At least not at this price.</p>
              <p>If you're serious about scaling your ads, this should be an easy decision to go ahead and click the button.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="white pricing">
        <div className="grid-mask" />
        <div className="wrap narrow center">
          <p className="kicker">The upgrade</p>
          <h2>Upgrade Your License <span className="underline-wavy">RIGHT NOW!</span></h2>
          <h3 className="risk">TRY IT 100% RISK-FREE!</h3>
          <p className="urgency plain">🔥 <b className="violet">{discount} Discount!</b> Offer Available For The First <span className="count dark">{spots}</span> Customers ⏳</p>
          <p className="rating"><span className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={15} />)}</span> Rated <b>4.8</b> by our members</p>

          <div className="price-card">
            <span className="ribbon">🔥 MAX UPGRADE</span>
            <div className="pc-head">
              <div className="pc-name"><span className="gem"><Gem size={18} /></span><h3>Social Ads Freak MAX</h3></div>
              <div className="pc-price"><s>${totalValue.toLocaleString('en-US')} value</s><b>${price}</b><small>One-Time Payment</small></div>
            </div>
            <div className="pc-body">
              <p className="pc-sub">Everything You Unlock Today</p>
              <ul>
                {VALUE_LIST.map(([label, v, bonus]) => (
                  <li key={label}><Check size={16} className="green" /><span>{label}</span>{bonus && <em className="bonus-tag">Bonus</em>}<b>${v}</b></li>
                ))}
                <li className="total"><span>Total Value</span><b className="violet">${totalValue.toLocaleString('en-US')}</b></li>
              </ul>
              <p className="pc-today">One-Time Upgrade — <b>No Monthly Fees</b></p>
              <p className="pc-big">Today: Just ${price}</p>
              <p className="small muted">(added to the account you just created)</p>
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

      {/* ============ GUARANTEE ============ */}
      <section className="white">
        <div className="wrap narrow center">
          <span className="badge-soft"><Shield size={16} /> Full 30-Day Money Back Guarantee</span>
          <h2>Upgrade With <span className="violet">Total Confidence.</span></h2>
        </div>
        <div className="wrap narrow">
          <div className="dark-card guarantee">
            <div className="grid-ov" />
            <div>
              <h3>Give MAX a try with <span className="accent">NO risk</span></h3>
              <p><Check size={16} className="green" /><span>Add MAX, use the extra credits, the Variant Factory and Trend Radar for 30 days. If it doesn't make you faster, just reach out — we'll <b>refund the upgrade in full</b>.</span></p>
              <p><Check size={16} className="green" /><span>This upgrade is <b>only available right now</b> and expires if you leave the page.</span></p>
              <span className="zero"><Shield size={18} /> No hoops. No friction. No risk.</span>
            </div>
            <div className="seal"><span>30 DAYS</span><b>MONEY</b><b className="big">BACK</b><span>GUARANTEED</span></div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="white faq">
        <div className="wrap narrow center">
          <p className="kicker">Quick questions</p>
          <h2>Before You Upgrade</h2>
          <Accordion items={FAQ} />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="white final">
        <div className="wrap narrow center">
          <h2>Add <span className="violet">MAX</span> To Your Account?</h2>
          <p className="lead">
            Double the credits — 400+ viral ads. Batch scored variants on ads and full stories. Daily trend intel. 200+ avatars — or
            your own. 60+ languages, captions in any of them. Double the UGC videos. Priority rendering. First access to
            everything new.<br />
            <b>One time. Just ${price}.</b>
          </p>
          <a className="btn btn-primary btn-xl" href={upgradeUrl}><Sparkle size={18} /> Yes! Upgrade Me To MAX — ${price} <Arrow size={18} /></a>
          <p className="small muted">✓ 30-day money-back guarantee • One-time payment • Lifetime access</p>

          <div className="or"><span>OR</span></div>
          <p className="no-thanks">No thanks — I don't need double the credits, batch testing or daily trend intel.</p>
          <button type="button" className="btn btn-ghost" onClick={() => setPopup(true)}>Click Here To Be Redirected To The Members Area</button>
          <p className="small muted">Important: once this page is closed, we reserve the right to sell this upgrade at a higher price.</p>

          <div className="proof-band">OUR MEMBERS Clone <span className="accent">10× More Variations</span> And Launch <span className="accent">Faster</span> After Upgrading To MAX</div>
        </div>
      </section>

      {/* ============ DOWNSELL POPUP ============ */}
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
              <p>Clone winning video ads with your product, face and voice.</p>
            </div>
            <div>
              <h4>Product</h4>
              <a href="/">Social Ads Freak</a>
              <a href="#pricing">MAX Upgrade</a>
            </div>
            <div>
              <h4>Account</h4>
              <a href={membersUrl}>Members Area</a>
              <a href={upgradeUrl}>Upgrade To MAX</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/terms.html">Terms of Service</a>
              <a href="/privacy.html">Privacy Policy</a>
              <a href="/disclaimer.html">Disclaimer</a>
            </div>
          </div>
          <p className="disclaimer"><b>Earnings &amp; Results Disclaimer:</b> The results and credit-to-output figures shown on this page are illustrative and are not a promise or guarantee of income or specific outcomes. Actual output depends on the video length and type you generate and results will vary.</p>
          <div className="foot-row"><span>© 2026 Social Ads Freak. All rights reserved.</span></div>
        </div>
      </footer>

      {/* ============ STICKY BANNER ============ */}
      <div className={`sticky ${sticky && left > 0 ? 'in' : ''}`} role="status">
        <span className="st-lbl"><Clock size={16} /> Limited Time Offer</span>
        <span className="st-time">{fmtTime(left)}</span>
        <button type="button" className="st-btn" onClick={() => scrollTo('pricing')}>Claim Your Discount <Arrow size={14} /></button>
      </div>
    </div>
  );
}
