import { Countdown, CHECKOUT_URL } from '../components/Shared.jsx';

export default function UrgencyBar() {
  return (
    <div className="urgency-bar">
      <p>
        🔥 <strong>LAUNCH SPECIAL:</strong> 76% OFF — price returns to <s>$197</s> when the timer
        hits zero
      </p>
      <Countdown compact />
      <a className="urgency-cta" href={CHECKOUT_URL}>Claim $47 Deal ›</a>
    </div>
  );
}
