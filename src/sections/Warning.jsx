import { CTAButton } from '../components/Shared.jsx';

export default function Warning() {
  return (
    <section className="warning">
      <div className="container narrow center">
        <h2>
          <span className="warning-tag">BE WARNED!</span> The Window Closes{' '}
          <span className="grad-text">The Same Way It Did In 2013</span>
        </h2>
        <p>
          2013: people underestimated Facebook Ads. The freaks who paid attention built unfair
          advantages. 2026: people are underestimating AI creative. Feels familiar.
        </p>
        <p>
          Right now most of your competitors still think "AI video" means typing a prompt and
          hoping. They're posting slop and concluding it doesn't work.{' '}
          <strong>That's your head start</strong> — and it's the only part of this you can't buy
          back later.
        </p>
        <p>
          Give it twelve months. Cloning proven ads won't be an edge anymore. It'll just be how ads
          get made, and everyone will be doing it. The people who start now spend that year
          compounding. Everyone else spends it catching up.
        </p>
        <p className="warning-window grad-text"><strong>That hesitation? That's the window.</strong></p>
        <CTAButton large />
      </div>
    </section>
  );
}
