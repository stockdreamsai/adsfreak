import { Countdown, CHECKOUT_URL } from '../components/Shared.jsx';

// Sticky bottom bar: launch discount + live countdown, always in view.
export default function UrgencyBar() {
  return (
    <div className="urgency-bar">
      <p>
        🔥 <strong>LAUNCH SPECIAL:</strong> 76% OFF
        <span className="urgency-long"> — price returns to <s>$197</s> when the timer hits zero</span>
      </p>
      <Countdown compact />
      <a className="urgency-cta" href={CHECKOUT_URL}>Claim $47 Deal ›</a>
    </div>
  );
}
