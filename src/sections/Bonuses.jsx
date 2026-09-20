import { SectionTitle } from '../components/Shared.jsx';

export default function Bonuses() {
  return (
    <section className="bonuses">
      <div className="container narrow">
        <SectionTitle
          kicker="Fast Action Bonus · $97 Value · Launch Buyers Only"
          title="Order Today And We'll Also Gift You:"
          highlight="31 Days Of Video Content From One Single Topic"
          sub="This bonus is our launch-window 'thank you' for acting fast — it disappears when the timer does."
        />
        <div className="bonus-feature">
          <div className="bonus-copy">
            <p>
              Never stare at a blank content calendar again. With this bonus tool, just drop in{' '}
              <strong>one topic</strong>, pick your platform, and it hands you a{' '}
              <strong>full month of short-form video ideas</strong> — plus a complete,
              ready-to-shoot script for any day you tap.
            </p>
            <ol className="bonus-steps">
              <li><strong>Step 1</strong> — Type your topic (e.g. “Skincare tips for busy moms”) and pick Reels, Shorts, TikTok or FB</li>
              <li><strong>Step 2</strong> — Get a full month, planned for you: 31 hooks, angles and ideas</li>
              <li><strong>Step 3</strong> — Tap any day for a ready-to-shoot script: hook, scene, talking points, CTA</li>
            </ol>
            <p>
              Then bring those scripts to life with Social Ads Freak and turn them into finished videos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
