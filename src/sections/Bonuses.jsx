import { SectionTitle } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

// Sample month from the bonus tool (topic: "Skincare tips for busy moms").
const DAYS = [
  '60-sec AM routine', '3 drugstore dupes', 'SPF myths', 'Hydration hack', 'Eye-bag fix',
  'Double cleanse 101', 'Stop overspending', 'Retinol basics', 'Maskne fix', 'Glow in 5 min',
  'Ingredient red flags', 'Budget routine', 'Reapply SPF', 'Why niacinamide', 'Travel skincare',
  'Postpartum skin', 'Cleanser mistakes', 'Do you need toner?', 'Vitamin C tips', 'Night routine',
  'Spot-treat acne', 'Hormonal acne', 'Fridge skincare', 'Dewy makeup base', 'Lip care',
  'Under-eye SPF', 'Dry-skin rescue', 'Skincare for kids', '30-day glow recap', 'Myth-busting Q&A',
  'Before & after',
];
const ACTIVE_DAY = 7;

export default function Bonuses() {
  return (
    <section className="bonuses bg-grid">
      <Doodles />
      <div className="container">
        <SectionTitle
          kicker="Fast Action Bonus · $97 Value · Launch Buyers Only"
          title="Order Today And We'll Also Gift You:"
          highlight="31 Days Of Video Content From One Single Topic"
          sub="This bonus is our launch-window 'thank you' for acting fast — it disappears when the timer does."
        />

        <div className="bonus-gift">
          <span className="bonus-ribbon">FREE BONUS · $97 VALUE</span>

          <div className="bonus-app">
            <div className="bonus-app-bar" aria-hidden="true">
              <span></span><span></span><span></span>
              <p>31 Days of Video Content</p>
            </div>

            <div className="bonus-app-body">
              <div className="bonus-topic">
                <span className="bonus-step">Step 1</span>
                <div className="bonus-input">Skincare tips for busy moms</div>
                <div className="bonus-platforms" aria-hidden="true">
                  <span className="is-on">Reels</span><span>Shorts</span><span>TikTok</span><span>FB</span>
                </div>
              </div>

              <div className="bonus-columns">
                <div className="bonus-calendar-wrap">
                  <span className="bonus-step">Step 2 · A full month, planned for you</span>
                  <ol className="bonus-calendar">
                    {DAYS.map((d, i) => (
                      <li key={d} className={i + 1 === ACTIVE_DAY ? 'is-active' : undefined}>
                        <span className="bonus-day-num">{i + 1}</span>
                        <span className="bonus-day-title">{d}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bonus-script">
                  <span className="bonus-step">Step 3 · Day {ACTIVE_DAY} shooting script</span>
                  <dl>
                    <dt>Hook</dt>
                    <dd>"Stop wasting money on 10-step routines — here's all your skin actually needs."</dd>
                    <dt>Scene</dt>
                    <dd>Hold up 3 products to camera in the bathroom. Quick close-ups on each label as you name them.</dd>
                    <dt>Talk</dt>
                    <dd>"Cleanser. Moisturizer. SPF. That's it. Everything else is optional — and I'll prove it in 3 days…"</dd>
                    <dt>CTA</dt>
                    <dd>"Follow so you don't miss the $12 routine that replaced my $200 shelf."</dd>
                  </dl>
                  <span className="bonus-make">Make this a video →</span>
                </div>
              </div>
            </div>
          </div>

          <p className="bonus-caption">
            Never stare at a blank content calendar again. Type a topic → pick any day → get a
            ready-to-shoot script. Then drop it straight into Social Ads Freak and turn it into a
            finished video.
          </p>
        </div>
      </div>
    </section>
  );
}
