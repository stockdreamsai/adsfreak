// ---------------------------------------------------------------
// Social Ads Freak MAX — one-time upgrade page (step 2 of 3)
// Launch settings live here so Builder/marketing can change them
// without touching layout code.
// ---------------------------------------------------------------

export const SETTINGS = {
  upgradeUrl: '#upgrade',          // checkout link for the MAX upgrade
  membersUrl: '#members',          // "no thanks" → members area
  price: 67,
  totalValue: 1043,
  discount: '93%',                 // 1 - 67/1043
  spotsStart: 11,                  // scarcity counter starts here…
  spotsFloor: 5,                   // …and never drops below this
  stickyMinutes: 15,               // bottom banner countdown
};

export const CHIPS = [
  '⚡ 94,000 Credits (2×)',
  '🧑‍🎤 200+ Avatars (2×)',
  '🪄 Your Own Custom Avatar',
  '🌍 60+ Languages (2×)',
  '💬 Captions In Any Language',
  '🎬 2× UGC Videos',
  '🧪 Variant Factory + Viral Score',
  '📡 Daily Trend Radar',
  '🔬 Deep Clone Analysis',
  '🚀 Priority Rendering',
  '🔓 Early Access',
];

export const CAROUSEL = [
  { src: '/images/included-ugc-poster.jpg', label: 'Viral UGC Ads' },
  { src: '/images/recreated-ad.jpg', label: 'Cloned Ad' },
  { src: '/images/included-avatars.jpg', label: '200+ AI Avatars' },
  { src: '/images/included-templates.jpg', label: '274 Templates' },
  { src: '/images/included-trendradar-poster.jpg', label: 'Trend Radar' },
  { src: '/images/included-languages.jpg', label: '60+ Languages' },
  { src: '/images/included-prostudio-poster.jpg', label: 'Pro Studio Stories' },
  { src: '/images/included-voice.jpg', label: 'Voice Clone' },
  { src: '/images/included-export.jpg', label: 'Export Anywhere' },
];

export const COMPARE = [
  { feature: 'Credits', standard: '47,000', max: '94,000', badge: '2×' },
  { feature: 'Video ads you can make*', standard: '~213', max: '~427' },
  { feature: 'Variant Factory (A/B testing)', standard: 'One ad at a time', max: 'Batch scored variants — viral ads & Pro Studio stories' },
  { feature: 'Ad Cloner', standard: 'Basic clone · 5 saved templates', max: 'Deep analysis — viral ads & Pro Studio · unlimited library' },
  { feature: 'Trend Radar', standard: '1 niche · weekly scan', max: 'Daily scans · multiple niches' },
  { feature: 'Render queue', standard: 'Standard', max: 'Priority' },
  { feature: 'AI avatars', standard: '100+', max: '200+', badge: '2×' },
  { feature: 'Your own avatar', standard: '—', max: 'Describe it or upload a photo — MAX builds it' },
  { feature: 'Languages', standard: '30+', max: '60+', badge: '2×' },
  { feature: 'Auto-captions', standard: 'English only', max: 'Any language' },
  { feature: 'UGC videos', standard: 'Standard library', max: 'Double the UGC videos', badge: '2×' },
  { feature: 'New avatars & templates', standard: 'On general release', max: 'Early access' },
];
export const COMPARE_NOTE = '*Based on ~220 credits per 8-second viral ad. Actual output varies with video length and type — longer videos and added scenes use more credits.';

export const FEATURES = [
  {
    icon: '⚡', worth: 147, visual: 'credits', title: '94,000 Credits — Double Your Plan',
    text: 'We instantly top your brand-new account up to 94,000 credits — double what you just bought. That\'s roughly 400+ viral ads, 200+ more than Standard alone — enough to test relentlessly, localize winners, and never pause a campaign because you ran dry.',
  },
  {
    icon: '🧪', worth: 147, visual: 'variants', title: 'Variant Factory + Viral Score',
    text: 'Find a winner, then multiply it. Generate a whole batch of variations — different hooks, dialogue and CTAs — in one click, each with an AI viral score so you know which one to run before you spend a cent on ads. Works on quick viral ads and full multi-scene Pro Studio stories: pick any saved story and spin out scored A/B scripts. Standard makes one ad at a time.',
  },
  {
    icon: '🔬', worth: 97, visual: 'clone', title: 'Deep Clone Analysis + Unlimited Template Library',
    text: 'Standard clones an ad. MAX dissects it — full hook breakdown, shot list, structure timeline and pacing — and saves every winning format to your own unlimited template library so you can redeploy it for any product, any time. The same deep breakdown powers Pro Studio\'s Recreate flow, so it rebuilds the ad scene by scene — hook, pacing and CTA intact.',
  },
  {
    icon: '📡', worth: 97, visual: 'trend', title: 'Daily Trend Radar',
    text: 'Wake up to fresh, ready-to-generate ad concepts based on what\'s trending in your niches right now — scanned daily, across multiple niches. Standard gets a single niche, once a week. MAX never runs out of ideas.',
  },
  {
    icon: '🧑‍🎤', worth: 197, visual: 'avatars', title: '200+ AI Avatars — Plus Your Own Custom Avatar',
    text: 'Standard gives you 100+ avatars. MAX doubles it to 200+ hyper-realistic presenters — and adds the one Standard can\'t: your own. Describe the person you want ("woman in her 30s, gym outfit, warm smile") or upload a photo, and MAX builds a custom avatar that\'s yours alone. No more running the same face your competitors use.',
  },
  {
    icon: '🌍', worth: 97, visual: 'languages', title: '60+ Languages + Captions In Any Language',
    text: 'Standard speaks 30+ languages with English captions. MAX doubles the languages to 60+ and lets Auto-Captions follow the voice in any of them — so a winner you cloned in English ships to Spanish, German, Japanese or Arabic markets fully subtitled, word-timed, in one click.',
  },
  {
    icon: '🎬', worth: 97, visual: 'ugc', title: 'Double The UGC Videos',
    text: 'Twice the UGC video formats of Standard — more talking-head angles, product demos, testimonials and unboxings to clone from. More proven starting points means more winners to find, and fewer ads that look like everyone else\'s.',
  },
  {
    icon: '🚀', worth: 67, visual: 'queue', title: 'Priority Render Queue', bonus: true,
    text: 'Your generations jump the line. When you\'re testing 10 variations before a campaign goes live, minutes matter — MAX users render first.',
  },
  {
    icon: '🔓', worth: 97, visual: 'early', title: 'Early Access To New Avatars & Templates', bonus: true,
    text: 'Every new AI avatar and proven ad template lands in your account first — so you\'re cloning fresh, un-saturated formats while everyone else waits.',
  },
];

export const VALUE_LIST = [
  ['94,000 Credits (double your plan)', 147],
  ['Variant Factory + Viral Score', 147],
  ['Deep Clone Analysis + Unlimited Template Library', 97],
  ['Daily Trend Radar — Multiple Niches', 97],
  ['200+ AI Avatars + Your Own Custom Avatar', 197],
  ['60+ Languages + Captions In Any Language', 97],
  ['Double The UGC Videos', 97],
  ['Priority Render Queue', 67, true],
  ['Early Access — New Avatars & Templates', 97, true],
];

export const STANDARD_LIST = [
  'One ad at a time — no batch testing',
  '47,000 credits, then you stop',
  'One niche, one trend scan a week',
  '100+ avatars — no custom avatar',
  '30+ languages, English captions only',
  'Standard UGC video library',
  'Standard render queue',
];
export const MAX_LIST = [
  ['Double the credits', ' — 94,000, roughly 400+ viral ads'],
  ['Batch scored variants', ' on ads and full Pro Studio stories'],
  ['Deep clone analysis', ' + unlimited template library'],
  ['Daily Trend Radar', ' across multiple niches'],
  ['200+ avatars + your own custom avatar', ' — from a photo or a description'],
  ['60+ languages', ' + captions in any language'],
  ['Double the UGC videos', ' to clone from'],
  ['Priority rendering', ' — MAX users render first'],
];

// The three real member quotes used across the site.
export const REVIEWS = [
  { name: 'Marcus R.', role: 'Ecom Brand Owner', initials: 'MR', text: 'I cloned a competitor\'s winning TikTok ad with my own product in about 10 minutes. First version we ran beat our agency creative on CPA. Wild.' },
  { name: 'Maya T.', role: 'Agency Founder', initials: 'MT', text: 'We deliver UGC ads to 9 clients now without a single videographer. The avatar + language combos let us localize the same winner across markets in a day.' },
  { name: 'Aria L.', role: 'Solo Marketer', initials: 'AL', text: 'I hate being on camera. Picked an avatar, cloned my voice, and now I\'m "in" 30 ads a week. Nobody can tell. Freakishly good.' },
];

export const FAQ = [
  ['What\'s actually different from Standard?',
   'Standard keeps working exactly as it does today. MAX adds on top: double the credits (94,000 vs 47,000), the Variant Factory that batch-generates scored A/B variants, deep clone analysis with an unlimited template library, daily Trend Radar across multiple niches, 200+ avatars (double Standard) plus your own custom avatar built from a photo or a description, 60+ languages with captions in any of them, double the UGC videos, priority rendering, and early access to every new avatar and template.'],
  ['I already used some of my Standard credits — do I still get the full 94,000?',
   'Yes. MAX adds the full 47,000 extra credits to whatever balance your account has, so you end up with the same total as if you had started on MAX. Nothing you have already generated is lost or counted against the upgrade.'],
  ['Is this really one-time, or a subscription?',
   'One-time. You pay $67 once and MAX stays on your account for the life of your license. No monthly fees, no rebills, nothing to cancel.'],
  ['Can I upgrade later instead?',
   'You can, but not at this price. This page is the only place the $67 one-time offer appears. Once you leave, the upgrade is only available at full price.'],
];

// ---- parity with the reference page ----
export const DOWNSELL = {
  price: 47,                       // one-time discounted price shown in the exit popup
  url: '#upgrade-47',              // checkout link for the discounted upgrade
  minutes: 5,                      // popup countdown
};

export const PAY_LOGOS = [
  ['/images/pay/paypal.avif', 'PayPal'],
  ['/images/pay/visa.avif', 'Visa'],
  ['/images/pay/american-express.avif', 'American Express'],
  ['/images/pay/mastercard.avif', 'Mastercard'],
  ['/images/pay/discover.avif', 'Discover'],
];

// "Check out what you can create" image grid
export const GRID = [
  { src: '/images/included-ugc-poster.jpg', title: 'Viral UGC Ads' },
  { src: '/images/recreated-ad.jpg', title: 'Cloned Ads' },
  { src: '/images/step-generated-poster.jpg', title: 'A/B Variants' },
  { src: '/images/included-prostudio-poster.jpg', title: 'Pro Studio Stories' },
  { src: '/images/included-avatars.jpg', title: '200+ Avatars' },
  { src: '/images/included-languages.jpg', title: '60+ Languages' },
  { src: '/images/included-trendradar-poster.jpg', title: 'Trend Concepts' },
  { src: '/images/included-templates.jpg', title: 'Template Library' },
  { src: '/images/included-export.jpg', title: 'Client-Ready Exports' },
];

// Variant Factory mock widget rows (hooks + viral score)
export const VARIANTS = [
  ['"Stop scrolling if your ads die in 3 days…"', 92],
  ['"I replaced my $500 videographer with this"', 88],
  ['"POV: your competitor out-tests you 50 to 1"', 85],
  ['"Nobody can tell this isn\'t me"', 81],
  ['"The $47 ad that beat our agency"', 77],
];
