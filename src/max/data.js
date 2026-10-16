// ---------------------------------------------------------------
// Social Ads Freak MAX — one-time upgrade page (step 2 of 3)
// Launch settings live here so Builder/marketing can change them
// without touching layout code.
// ---------------------------------------------------------------

export const SETTINGS = {
  upgradeUrl: '#upgrade',          // checkout link for the MAX upgrade
  membersUrl: '#members',          // "no thanks" → members area
  price: 67,
  totalValue: 1043,                // crossed-out value shown on the price card
  discount: '93%',                 // 1 - 67/1043
  spotsStart: 11,                  // scarcity counter starts here…
  spotsFloor: 5,                   // …and never drops below this
  stickyMinutes: 15,               // bottom banner countdown
};

// Hero image showcase carousel (aspect = width / height, like the reference)
export const CAROUSEL = [
  { src: '/images/included-ugc-poster.jpg', label: 'Viral UGC Ads', aspect: 1 },
  { src: '/images/recreated-ad.jpg', label: 'Cloned Ad', aspect: 0.56 },
  { src: '/images/included-avatars.jpg', label: '200+ AI Avatars', aspect: 1 },
  { src: '/images/included-templates.jpg', label: '274 Templates', aspect: 0.71 },
  { src: '/images/included-trendradar-poster.jpg', label: 'Trend Radar', aspect: 1.6 },
  { src: '/images/included-languages.jpg', label: '60+ Languages', aspect: 1 },
  { src: '/images/included-prostudio-poster.jpg', label: 'Pro Studio Stories', aspect: 1.6 },
  { src: '/images/included-voice.jpg', label: 'Voice Clone', aspect: 0.78 },
  { src: '/images/included-export.jpg', label: 'Export Anywhere', aspect: 1 },
];

// Comparison table: everything MAX adds on top of Standard (MAX ✓ / Standard ✕)
export const COMPARE = [
  '94,000 Credits — Double Your Plan',
  '200+ AI Avatars — Double Standard',
  'Your Own Custom Avatar (Photo Or Description)',
  '60+ Languages — Double Standard',
  'Auto-Captions In Any Language',
  'Double The UGC Videos',
  'Variant Factory + Viral Score',
  'Deep Clone Analysis',
  'Unlimited Template Library',
  'Daily Trend Radar — Multiple Niches',
  'Pro Studio Recreate Flow',
  'Priority Render Queue',
  'Early Access To New Avatars & Templates',
];

// Detailed reasons: a bold lead sentence, a supporting paragraph, and the mock visual to show
export const FEATURES = [
  {
    icon: '⚡', visual: 'credits', title: '94,000 Credits — Double Your Plan',
    lead: 'We instantly top your brand-new account up to 94,000 credits — double what you just bought.',
    text: 'That\'s roughly 400+ viral ads, 200+ more than Standard alone — enough to test relentlessly, localize winners, and never pause a campaign because you ran dry.',
  },
  {
    icon: '🧑‍🎤', visual: 'avatars', title: '200+ AI Avatars — Plus Your Own Custom Avatar',
    lead: 'Standard gives you 100+ avatars. MAX doubles it to 200+ hyper-realistic presenters — and adds the one Standard can\'t: your own.',
    text: 'Describe the person you want ("woman in her 30s, gym outfit, warm smile") or upload a photo, and MAX builds a custom avatar that\'s yours alone. No more running the same face your competitors use.',
  },
  {
    icon: '🌍', visual: 'languages', title: '60+ Languages + Captions In Any Language',
    lead: 'Standard speaks 30+ languages with English captions. MAX doubles the languages to 60+ and lets Auto-Captions follow the voice in any of them.',
    text: 'A winner you cloned in English ships to Spanish, German, Japanese or Arabic markets fully subtitled, word-timed, in one click.',
  },
  {
    icon: '🎬', visual: 'ugc', title: 'Double The UGC Videos',
    lead: 'Twice the UGC video formats of Standard — more talking-head angles, product demos, testimonials and unboxings to clone from.',
    text: 'More proven starting points means more winners to find, and fewer ads that look like everyone else\'s.',
  },
  {
    icon: '🧪', visual: 'variants', title: 'Variant Factory + Viral Score',
    lead: 'Find a winner, then multiply it. Generate a whole batch of variations — different hooks, dialogue and CTAs — in one click, each with an AI viral score.',
    text: 'Works on quick viral ads and full multi-scene Pro Studio stories: pick any saved story and spin out scored A/B scripts. Standard makes one ad at a time.',
  },
  {
    icon: '🔬', visual: 'clone', title: 'Deep Clone Analysis + Unlimited Template Library',
    lead: 'Standard clones an ad. MAX dissects it — full hook breakdown, shot list, structure timeline and pacing.',
    text: 'Every winning format is saved to your own unlimited template library so you can redeploy it for any product, any time. The same deep breakdown powers Pro Studio\'s Recreate flow, scene by scene.',
  },
  {
    icon: '📡', visual: 'trend', title: 'Daily Trend Radar',
    lead: 'Wake up to fresh, ready-to-generate ad concepts based on what\'s trending in your niches right now — scanned daily, across multiple niches.',
    text: 'Standard gets a single niche, once a week. MAX never runs out of ideas.',
  },
];

// Price card feature list (bonus flag → "Bonus" badge)
export const PLAN_LIST = [
  ['94,000 Credits (Double Your Plan)'],
  ['200+ AI Avatars'],
  ['Your Own Custom Avatar'],
  ['60+ Languages'],
  ['Captions In Any Language'],
  ['Double The UGC Videos'],
  ['Variant Factory + Viral Score'],
  ['Deep Clone Analysis'],
  ['Daily Trend Radar — Multiple Niches'],
  ['Priority Render Queue', true],
  ['Early Access To New Avatars & Templates', true],
  ['Unlimited Template Library', true],
  ['Pro Studio Recreate Flow', true],
];

export const STANDARD_LIST = [
  'One ad at a time — no batch testing',
  '47,000 credits, then you stop',
  '100+ avatars — no custom avatar',
  '30+ languages, English captions only',
  'Standard UGC video library',
  'One niche, one trend scan a week',
];
export const MAX_LIST = [
  ['Double the credits', ' — 94,000, roughly 400+ viral ads'],
  ['200+ avatars + your own custom avatar', ' — from a photo or a description'],
  ['60+ languages', ' + captions in any language'],
  ['Double the UGC videos', ' to clone from'],
  ['Batch scored variants', ' on ads and full Pro Studio stories'],
  ['Daily Trend Radar', ' across multiple niches'],
];

// The three real member quotes used across the site.
export const REVIEWS = [
  { name: 'Marcus R.', role: 'Ecom Brand Owner', initials: 'MR', img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Marcus.jpg', text: 'I cloned a competitor\'s winning TikTok ad with my own product in about 10 minutes. First version we ran beat our agency creative on CPA. Wild.' },
  { name: 'Maya T.', role: 'Agency Founder', initials: 'MT', img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Maya.jpg', text: 'We deliver UGC ads to 9 clients now without a single videographer. The avatar + language combos let us localize the same winner across markets in a day.' },
  { name: 'Aria L.', role: 'Solo Marketer', initials: 'AL', img: 'https://ddufpaulv1kgi.cloudfront.net/avatars/Aria.jpg', text: 'I hate being on camera. Picked an avatar, cloned my voice, and now I\'m "in" 30 ads a week. Nobody can tell. Freakishly good.' },
];

// Exit downsell popup
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
  { src: '/images/included-export.jpg', title: 'Export Anywhere' },
];

// Bonus cards: before/after pairs, like the reference's compact sliders
export const BONUSES = [
  { icon: '🚀', title: 'Priority Render Queue', text: 'Your generations jump the line. When you\'re testing 10 variations before launch, MAX users render first.', before: '/images/step-upload.jpg', after: '/images/step-generated-poster.jpg', labels: ['Queued', 'Rendered'] },
  { icon: '🔓', title: 'Early Access To New Avatars & Templates', text: 'Every new AI avatar and proven template lands in your account first, while everyone else waits.', before: '/images/included-templates.jpg', after: '/images/included-avatars.jpg', labels: ['Templates', 'New avatars'] },
  { icon: '📚', title: 'Unlimited Template Library', text: 'Every winning format you dissect is saved to your own library, ready to redeploy for any product.', before: '/images/pro-step-storyboard-poster.jpg', after: '/images/pro-step-editor-poster.jpg', labels: ['Storyboard', 'Saved template'] },
  { icon: '🎬', title: 'Pro Studio Recreate Flow', text: 'The deep breakdown rebuilds a winning ad scene by scene — hook, pacing and CTA intact.', before: '/images/reference-ad.jpg', after: '/images/recreated-ad.jpg', labels: ['Original', 'Recreated'] },
];

// Variant Factory mock widget rows (hooks + viral score)
export const VARIANTS = [
  ['"Stop scrolling if your ads die in 3 days…"', 92],
  ['"I replaced my $500 videographer with this"', 88],
  ['"POV: your competitor out-tests you 50 to 1"', 85],
  ['"Nobody can tell this isn\'t me"', 81],
  ['"The $47 ad that beat our agency"', 77],
];
