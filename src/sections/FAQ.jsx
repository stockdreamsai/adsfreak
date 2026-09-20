import { useState } from 'react';
import { SectionTitle } from '../components/Shared.jsx';

const FAQS = [
  {
    q: 'What exactly is AdsFreak?',
    a: 'AdsFreak is an AI-powered platform that generates high-converting ad creatives — social ads, banners, and product visuals — from a simple text description, in under 60 seconds.',
  },
  {
    q: 'Do I need any design or copywriting skills?',
    a: 'None at all. You choose the ad format, describe your offer in plain language, and the AI does the rest.',
  },
  {
    q: 'Is this a one-time payment or a subscription?',
    a: 'Your purchase today is a one-time payment at the special launch price. No hidden monthly fees.',
  },
  {
    q: 'Can I use the ads for client work?',
    a: 'Yes — the free commercial license upgrade included today lets you create and sell ads to clients and keep 100% of the profits.',
  },
  {
    q: 'Which platforms do the creatives work with?',
    a: 'AdsFreak exports ready-to-upload formats for Facebook, Instagram, TikTok, YouTube, Google Ads and more.',
  },
  {
    q: 'What if it does not work for me?',
    a: 'You are covered by our 30-day no-questions-asked money-back guarantee. If you are not satisfied, we refund every cent within 24 hours.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq">
      <div className="container narrow">
        <SectionTitle title="Frequently Asked" highlight="Questions" />
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q} <span className="faq-toggle">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
