import { useState } from 'react';
import { SectionTitle } from '../components/Shared.jsx';

const FAQS = [
  {
    q: 'Why not just use Sora, Veo or Kling myself?',
    a: "You can. Plenty of people do. Here's what it actually looks like: a subscription to a video model, another one for voice, another for lip-sync, another for upscaling — then weeks of learning which settings stop the output looking like AI slop. And at the end of all that, you still have the hard part left over: knowing what to actually say. Social Ads Freak isn't a prompt box. It starts from an ad that already worked, pulls apart the hook, the pacing and the structure, and rebuilds it around your product — with the avatar, voice, music and captions already wired together.",
  },
  {
    q: 'Do I need a separate app to add captions?',
    a: 'No. Auto-Captions is built in. It listens to the finished ad, times every word to the voice, and lets you pick from six looks. The words come from your own script, so product names are spelled the way you wrote them. Captions are placed above the area where TikTok, Reels and Shorts show their own buttons, and they’re baked into the video you download.',
  },
  {
    q: "Will people be able to tell it's AI?",
    a: 'Bad AI video looks like AI video: dead eyes, gliding hands, that plastic over-polished sheen. We built Social Ads Freak specifically to avoid those tells — natural pacing, real speech rhythm, the slight imperfection that makes footage read as human. That’s the whole reason we clone real ads instead of generating from a blank prompt: real ads already move like humans move. Don’t take our word for it — watch the samples with the sound on, then decide.',
  },
  {
    q: 'Is this real AI technology or just templates?',
    a: 'Social Ads Freak uses cutting-edge AI to generate original video ads from scratch. It’s not a template library — the AI analyzes winning ad structures, clones the hook and pacing, then rebuilds the entire video with your product, your avatar, and your voice. Every output is unique.',
  },
  {
    q: 'How soon can I see results?',
    a: 'You can generate your first video ad within minutes of signing up. Most users have ads running on Facebook, TikTok, or Instagram the same day. The speed advantage is the whole point — test more creatives, find winners faster.',
  },
  {
    q: 'Do I need to be on camera?',
    a: 'Not at all. You can choose from 100+ AI avatars that look and speak like real people. Or use your own face via a photo — Social Ads Freak will animate it. You never need to sit in front of a camera.',
  },
  {
    q: 'Can I use this for client work?',
    a: 'Your Standard license covers your own brands and products. If you want to create ads for clients, the MAX upgrade includes a full commercial license — charge whatever you want and keep 100% of the profits. The Agency upgrade goes even further, with separate logins for clients and your team.',
  },
  {
    q: 'What languages are supported?',
    a: 'Social Ads Freak supports 30+ languages including English, Spanish, French, German, Japanese, Chinese, Arabic, Hindi, Portuguese, Korean, and many more. Any avatar can speak any language with native-sounding pronunciation.',
  },
  {
    q: 'Is there anything to install?',
    a: 'Nothing. Social Ads Freak is 100% cloud-based. It works in your browser on Mac, PC, tablet, or phone. No downloads, no plugins, no technical setup.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Absolutely. You get a full 30-day money-back guarantee. If Social Ads Freak doesn’t blow your mind, just reach out and we’ll refund you — no questions asked, no hoops to jump through.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq bg-grid">
      <div className="container faq-layout">
        <aside className="faq-side">
          <SectionTitle kicker="Support" title="Frequently Asked" highlight="Questions" />
          <div className="faq-help">
            <img className="avatar-img" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Ali G" loading="lazy" />
            <div>
              <strong>Still on the fence?</strong>
              <p>
                You get a full 30 days to try everything. If it's not for you, one email gets
                you a full refund.
              </p>
            </div>
          </div>
        </aside>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q} <span className="faq-toggle">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
