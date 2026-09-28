import { CTAButton, Circled, Countdown } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

export default function Warning() {
  return (
    <section className="warning">
      <Doodles />
      <div className="container narrow center">
        <h2>
          <span className="warning-tag">BE WARNED:</span> This Window Closes{' '}
          <span className="grad-text">The Same Way It Did In 2013</span>
        </h2>
        <p>
          Right now, most of your competitors still think "AI video" means typing a prompt and
          hoping. They're posting slop, watching it flop, and concluding it doesn't work.{' '}
          <strong>That's your head start — and it's the only part of this you can't buy back
          later.</strong>
        </p>
        <p>
          Give it twelve months. Cloning proven ads won't be an edge anymore — it'll just be how
          ads get made. The people who start now spend that year compounding winners. Everyone
          else spends it catching up. On top of that, when this launch window closes, the price
          returns to <strong>$197</strong> and the fast-action bonus disappears.
        </p>
        <p className="warning-window">
          <strong>That hesitation you're feeling? <Circled><span className="grad-text">That's the window.</span></Circled></strong>
        </p>
        <Countdown />
        <CTAButton large>Lock In $47 Before It's Gone</CTAButton>
      </div>
    </section>
  );
}
