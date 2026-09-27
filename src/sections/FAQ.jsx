import { useState } from 'react';
import { Section, Title, Label } from '../ui.jsx';

const FAQS = [
  ['Is this TRUE A.I. technology or is it just templates?', 'Social Ads Freak uses cutting-edge AI to generate original video ads. It is not a template library — the AI analyzes winning ad structures, clones the hook and pacing, then rebuilds the entire video with your product, your avatar and your voice. Every output is unique.'],
  ['Is there a Money Back Guarantee Policy?', 'Absolutely. You get a full 30-day money-back guarantee. If Social Ads Freak doesn’t blow your mind, just reach out and we’ll refund you — no questions asked, no hoops to jump through.'],
  ['How soon can I see results?', 'You can generate your first video ad within minutes of signing up. Most users have ads running on Facebook, TikTok or Instagram the same day.'],
  ['Can I get support and tutorials?', 'Yes — you get access to our support team, video tutorials, and a private community of Social Ads Freak users.'],
  ['Do I need to be on camera?', 'Not at all. Choose from 100+ AI avatars that look and speak like real people, or use your own face via a photo — Social Ads Freak animates it. You never need to sit in front of a camera.'],
  ['Will people be able to tell it’s AI?', 'We built Social Ads Freak specifically to avoid the usual AI tells — natural pacing, real speech rhythm, the slight imperfection that reads as human. That’s why we clone real ads instead of generating from a blank prompt.'],
  ['Which languages are supported?', 'Social Ads Freak supports 30+ languages including English, Spanish, French, German, Japanese, Chinese, Arabic, Hindi, Portuguese and Korean. Any avatar can speak any language with native-sounding pronunciation.'],
  ['Can I use this for client work?', 'Your Standard license covers your own brands and products. To create ads for clients, the MAX upgrade includes a full commercial license — charge whatever you want and keep 100% of the profits.'],
  ['Is there anything to install?', 'Nothing. Social Ads Freak is 100% cloud-based and works in your browser on Mac, PC, tablet or phone.'],
  ['Do I need a separate app to add captions?', 'No. Auto-Captions is built in: it times every word to the voice, offers six looks, keeps captions clear of the platform buttons, and bakes them into your download.'],
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);
  return (
    <Section tone="dark" className="faq">
      <div className="center">
        <Label>Support</Label>
        <Title><b>Frequently Asked Questions</b></Title>
        <span className="title-rule" aria-hidden="true" />
        <div className="faq-grid">
          {FAQS.map(([q, a], i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {q} <span aria-hidden="true">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a"><p>{a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
