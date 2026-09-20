import { CTAButton } from '../components/Shared.jsx';

export default function PsClose() {
  return (
    <section className="ps-close">
      <div className="container narrow">
        <div className="ps-card">
          <p className="ps-kicker">P.S.</p>
          <p>
            Scrolled straight to the bottom? I respect it. Here's the whole thing in ten seconds:{' '}
            <strong>Social Ads Freak clones video ads that already won</strong> — the hook, the
            pacing, the structure, the CTA — and rebuilds them around your product, starring your
            own face or any of 100+ freakishly real AI avatars.
          </p>
          <ul className="ps-list">
            <li><s>$150–$500 a video</s> → <strong>pennies</strong></li>
            <li><s>7–14 day turnaround</s> → <strong>minutes</strong></li>
            <li><s>3–5 variations</s> → <strong>as many as you want</strong></li>
            <li><s>Waiting on a creator</s> → <strong>launching tonight</strong></li>
            <li><s>One market, one language</s> → <strong>30+ languages</strong></li>
          </ul>
          <p>
            Nothing to install. Works in your browser. One payment of <strong>$47</strong> (goes
            back to $197 after launch), no monthly fees, and a full 30 days to change your mind.
          </p>
          <p>
            The people who moved early on Facebook Ads in 2013 got <em>years</em> of advantage out
            of it. This is the same shape of moment — and the same short window.
          </p>
          <p className="ps-sign">— Ali G</p>
          <div className="ps-cta">
            <CTAButton large>Get Social Ads Freak For $47 ›</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
