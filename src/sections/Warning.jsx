import { CTAButton, Circled, Countdown } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

export default function Warning() {
  return (
    <section className="warning">
      <Doodles />
      <div className="container narrow center">
        <h2>
          <span className="warning-tag">Be Warned:</span> This Window Closes{' '}
          <span className="grad-text">The Same Way It Did In 2013</span>
        </h2>
        <p>
          Most of your competitors still think "AI video" means typing a prompt and hoping.
          That's your head start — and <em className="hl">it's the only part of this you can't buy back later</em>.
        </p>
        <p>
          When this launch window closes, the price returns to <strong>$197</strong> and the
          fast-action bonus disappears.
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
