// ---------------------------------------------------------------
// Social Ads Freak — Create Ad demo (2026 redesign)
// Everything the screen shows lives here: templates, avatars, voices,
// prices in tokens, and which features are MAX-only. Images are the
// real marketing assets from /public, cropped into tiles.
// ---------------------------------------------------------------
import adSkydive from './img/ad-skydive.webp';
import adFounder from './img/ad-founder.webp';
import ugcLava from './img/ugc-lava.webp';
import ugcBedroom from './img/ugc-bedroom.webp';
import ugcStreet from './img/ugc-street.webp';
import stLamp from './img/st-lamp.webp';
import stMug from './img/st-mug.webp';
import stBoots from './img/st-boots.webp';
import stCozyset from './img/st-cozyset.webp';
import stReaction from './img/st-reaction.webp';
import stTissue from './img/st-tissue.webp';
import stBoxcut from './img/st-boxcut.webp';
import stKeyboard from './img/st-keyboard.webp';
import stGiftwrap from './img/st-giftwrap.webp';
import stSatin from './img/st-satin.webp';
import tplGift from './img/tpl-gift.webp';
import tplMask from './img/tpl-mask.webp';
import tplCarpet from './img/tpl-carpet.webp';
import tplParade from './img/tpl-parade.webp';
import avEmma from './img/av-emma.webp';
import avLiam from './img/av-liam.webp';
import avPriya from './img/av-priya.webp';
import avJake from './img/av-jake.webp';
import avSofia from './img/av-sofia.webp';
import avNoah from './img/av-noah.webp';
import avChloe from './img/av-chloe.webp';
import avArjun from './img/av-arjun.webp';
import productFocus from './img/product-focus.webp';

export const USER = { name: 'Ali G', first: 'Ali', initials: 'AG', balance: 13442 };

// Video length → token cost (same table as the live app)
export const LENGTHS = [
  { s: 6, cost: 225 },
  { s: 8, cost: 225 },
  { s: 10, cost: 225 },
  { s: 15, cost: 325 },
  { s: 20, cost: 425 },
  { s: 30, cost: 625 },
];

export const CATEGORIES = [
  { id: 'all', label: 'All', img: adSkydive },
  { id: 'mine', label: 'My clones', img: ugcLava },
  { id: 'unboxing', label: 'Unboxing', img: stLamp },
  { id: 'beauty', label: 'Beauty', img: tplMask },
  { id: 'fashion', label: 'Fashion', img: stCozyset },
  { id: 'tech', label: 'Tech', img: stKeyboard },
  { id: 'home', label: 'Home', img: stMug },
  { id: 'health', label: 'Health', img: adFounder },
  { id: 'cinematic', label: 'Cinematic', img: tplCarpet },
];

// talk: the template has a presenter speaking; max: only on the MAX plan
export const TEMPLATES = [
  { id: 'skydive', title: 'Skydive Product Drop', img: adSkydive, s: 15, cats: ['health'], talk: true, hot: true },
  { id: 'founder', title: 'Founder Testimonial', img: adFounder, s: 15, cats: ['health'], talk: true, best: 'Best for supplements' },
  { id: 'reaction', title: 'Shocked Reaction Unboxing', img: stReaction, s: 10, cats: ['unboxing', 'beauty'], talk: true, hot: true },
  { id: 'cozyset', title: 'Viral Cozy Set Haul', img: stCozyset, s: 14, cats: ['fashion', 'unboxing'], best: 'Best for clothing' },
  { id: 'keyboard', title: 'Mechanical Keyboard Unboxing', img: stKeyboard, s: 15, cats: ['tech', 'unboxing'], best: 'Best for tech & gadgets' },
  { id: 'lava', title: 'Extreme Location Hook', img: ugcLava, s: 15, cats: ['cinematic'], talk: true, max: true, hot: true },
  { id: 'mask', title: 'Zero Pore Instant Perfector', img: tplMask, s: 10, cats: ['beauty'] },
  { id: 'bedroom', title: 'Honest Bedroom Confession', img: ugcBedroom, s: 12, cats: ['beauty'], talk: true },
  { id: 'mug', title: 'Home & Living Product Unboxing', img: stMug, s: 9, cats: ['home', 'unboxing'] },
  { id: 'street', title: 'Paparazzi Street Hook', img: ugcStreet, s: 10, cats: ['fashion'], talk: true, max: true },
  { id: 'boots', title: 'Cozy Leopard Snow Boots', img: stBoots, s: 9, cats: ['fashion', 'unboxing'] },
  { id: 'carpet', title: 'Magic Carpet Desert Reveal', img: tplCarpet, s: 15, cats: ['cinematic'], max: true },
  { id: 'lamp', title: 'Cozy Night Unboxing', img: stLamp, s: 12, cats: ['home', 'unboxing'] },
  { id: 'gift', title: 'Handmade Gift ASMR', img: tplGift, s: 9, cats: ['home'] },
  { id: 'parade', title: 'Holiday Parade Showstopper', img: tplParade, s: 15, cats: ['cinematic', 'fashion'], max: true },
  { id: 'tissue', title: 'Tissue Paper ASMR Reveal', img: stTissue, s: 11, cats: ['unboxing'] },
  { id: 'boxcut', title: 'Satisfying Box Cut', img: stBoxcut, s: 8, cats: ['unboxing'] },
  { id: 'giftwrap', title: 'Slow Gift-Wrap Reveal', img: stGiftwrap, s: 10, cats: ['home', 'unboxing'] },
  { id: 'satin', title: 'Luxury Satin Box Reveal', img: stSatin, s: 12, cats: ['beauty', 'unboxing'], max: true },
];

// "My Cloned Templates" from the live app
export const MY_CLONES = [
  { id: 'clone-outdoor', title: 'Outdoor hook, deep', img: ugcLava, s: 15, cats: ['mine'], talk: true, from: 'From upload' },
  { id: 'clone-shocked', title: 'Shocked reaction', img: stReaction, s: 10, cats: ['mine'], talk: true, from: 'From upload' },
];

export const PRODUCTS = [
  {
    id: 'focus', name: 'Focus Factor', img: productFocus,
    desc: 'Focus Factor Extra Strength: a daily brain supplement for memory, concentration and focus. 120 tablets, patented formula, plus a complete multivitamin.',
  },
];

export const AVATARS = [
  { id: 'emma', name: 'Emma', g: 'f', img: avEmma, vibe: 'Warm' },
  { id: 'liam', name: 'Liam', g: 'm', img: avLiam, vibe: 'Friendly' },
  { id: 'priya', name: 'Priya', g: 'f', img: avPriya, vibe: 'Calm' },
  { id: 'jake', name: 'Jake', g: 'm', img: avJake, vibe: 'Hype' },
  { id: 'sofia', name: 'Sofia', g: 'f', img: avSofia, vibe: 'Excited' },
  { id: 'noah', name: 'Noah', g: 'm', img: avNoah, vibe: 'Genuine' },
  { id: 'chloe', name: 'Chloe', g: 'f', img: avChloe, vibe: 'Playful' },
  { id: 'arjun', name: 'Arjun', g: 'm', img: avArjun, vibe: 'Techy' },
];

export const VOICES = [
  { id: 'auto', name: 'Match the avatar', note: 'AI picks' },
  { id: 'warm', name: 'Warm & friendly', note: 'Female · US' },
  { id: 'hype', name: 'High energy', note: 'Male · US' },
  { id: 'calm', name: 'Calm expert', note: 'Female · UK' },
  { id: 'mine', name: 'My own voice', note: 'Clone in 30 sec', mine: true },
];

export const LANGUAGES = [
  { id: 'en', flag: '🇺🇸', name: 'English' },
  { id: 'es', flag: '🇪🇸', name: 'Español' },
  { id: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { id: 'fr', flag: '🇫🇷', name: 'Français' },
  { id: 'pt', flag: '🇧🇷', name: 'Português' },
  { id: 'it', flag: '🇮🇹', name: 'Italiano' },
  { id: 'ro', flag: '🇷🇴', name: 'Română' },
  { id: 'ja', flag: '🇯🇵', name: '日本語' },
];

export const CAPTION_STYLES = [
  { id: 'pop', name: 'Bold pop' },
  { id: 'clean', name: 'Clean' },
  { id: 'karaoke', name: 'Karaoke' },
  { id: 'off', name: 'No captions' },
];

export const FORMATS = [
  { id: '9:16', name: 'Vertical', where: 'TikTok · Reels · Shorts' },
  { id: '1:1', name: 'Square', where: 'Feed posts' },
  { id: '16:9', name: 'Wide', where: 'YouTube · Web' },
];

export const SCRIPTS = [
  'Stop scrolling if your brain quits by 3pm. I tried every focus supplement out there, and Focus Factor is the only one I actually feel. Memory, concentration, focus, one tablet a day. Grab yours before the sale ends.',
  'POV: you finally finished your to-do list before lunch. My secret? Focus Factor. Patented formula, a full multivitamin, and I stopped forgetting where I put my keys. Link is below.',
  'My doctor asked what I changed. Honestly, just this. Focus Factor every morning, and my focus is back. 120 tablets, so it lasts. Try it for yourself.',
];

// Hook ideas with the AI viral score (score is MAX-only)
export const HOOKS = [
  { text: 'Stop scrolling if your brain quits by 3pm', score: 92 },
  { text: 'I tried every focus supplement so you don\'t have to', score: 88 },
  { text: 'POV: you finished your to-do list before lunch', score: 85 },
  { text: 'My doctor asked what I changed. This.', score: 81 },
];

export const AGENT_EXAMPLES = [
  'A 15s founder story for my brain supplement',
  'Unboxing for a skincare serum, no talking',
  'Problem → solution ad for back pain, in Spanish',
];

// Trend Radar concepts for the user's niche (weekly on Standard, daily on MAX)
export const TRENDS = [
  { title: 'The 3pm Brain Crash', tag: 'Relatable confession', hook: 'Creator slumps at the desk at 3:00pm, then holds up the bottle: "This is what fixed my afternoons."', img: adFounder, tpl: 'founder' },
  { title: 'Finals Week POV', tag: 'Chaotic inner monologue', hook: 'Rapid cuts of flashcards and cold coffee, then calm: "Finals week, but I actually remember things."', img: ugcBedroom, tpl: 'bedroom' },
  { title: 'Extreme Focus Challenge', tag: 'Pattern interrupt', hook: 'Creator does a to-do list in a ridiculous place: "If I can focus here, you can focus at work."', img: adSkydive, tpl: 'skydive' },
];

export const VARY_BY = ['Hook', 'Dialogue', 'CTA', 'Tone'];

export const RENDER_STEPS = ['Writing the hook', 'Casting your presenter', 'Filming the scenes', 'Syncing the voice', 'Adding captions'];

export const RECENT = [
  { id: 'r1', title: 'alpha brain — Ali G', img: adFounder, when: '2h ago', s: 15 },
  { id: 'r2', title: 'goli skydive', img: adSkydive, when: 'Yesterday', s: 15 },
  { id: 'r3', title: 'shapiro — paparazzi', img: ugcStreet, when: 'Mon', s: 10 },
];

// Each MAX feature the screen can lock, with the line shown in the upgrade sheet
export const MAX_FEATURES = {
  maxTemplates: { title: 'Double the UGC templates', text: 'Twice the talking-head, cinematic and unboxing formats to clone from.', img: ugcLava },
  avatars200: { title: '200+ AI avatars', text: 'Double the presenters, so your ads never share a face with a competitor.', img: avSofia },
  customAvatar: { title: 'Your own custom avatar', text: 'Upload a photo or describe the person. MAX builds a presenter that is yours alone.', img: avNoah },
  languages60: { title: '60+ languages', text: 'Ship one winner to Spanish, German, Japanese or Arabic markets in one click.', img: adSkydive },
  captionsAny: { title: 'Captions in any language', text: 'Word-timed captions follow the voice in every language, not only English.', img: stReaction },
  viralScore: { title: 'Viral Score', text: 'Every hook gets an AI score so you test the strongest ideas first.', img: adFounder },
  variants: { title: 'Variant Factory', text: 'Turn one ad into 2, 4 or 6 scored A/B versions, rendered side by side.', img: stCozyset },
  deepClone: { title: 'Deep Clone Analysis', text: 'Hook breakdown, shot list, structure timeline and pacing for any ad you clone.', img: ugcStreet },
  dailyTrends: { title: 'Daily Trend Radar', text: 'Fresh ad concepts every morning, across all of your niches.', img: stLamp },
  priority: { title: 'Priority render queue', text: 'Your ads render first, even when everyone is generating.', img: tplParade },
};

export const MAX_LIST = [
  '94,000 credits, double your plan',
  '200+ avatars + your own custom avatar',
  '60+ languages, captions in any language',
  'Double the UGC templates',
  'Variant Factory with Viral Score',
  'Deep Clone Analysis',
  'Daily Trend Radar, multiple niches',
  'Priority render queue',
];

export const NAV = [
  { group: null, items: [{ id: 'home', label: 'Home', icon: 'home', hue: 'blue' }] },
  {
    group: 'Make', items: [
      { id: 'create', label: 'Create Ad', icon: 'sparkles', hue: 'brand' },
      { id: 'agent', label: 'Ad Agent', icon: 'bot', hue: 'cyan' },
      { id: 'studio', label: 'Ad Studio', icon: 'sliders', hue: 'violet' },
    ],
  },
  {
    group: 'Library', items: [
      { id: 'templates', label: 'Templates', icon: 'layout', hue: 'pink', count: '274' },
      { id: 'projects', label: 'Projects', icon: 'folder', hue: 'slate' },
    ],
  },
  {
    group: 'Studios', items: [
      { id: 'talent', label: 'Talent Studio', icon: 'users', hue: 'orange' },
      { id: 'product', label: 'Product Studio', icon: 'package', hue: 'amber' },
      { id: 'location', label: 'Location Studio', icon: 'pin', hue: 'green' },
    ],
  },
  { group: 'Ideas', items: [{ id: 'radar', label: 'Trend Radar', icon: 'radar', hue: 'red', max: 'Daily' }] },
];
