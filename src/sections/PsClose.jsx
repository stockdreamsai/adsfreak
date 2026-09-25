import { CTAButton } from '../components/Shared.jsx';

export default function PsClose() {
  return (
    <section className="ps-close">
      <div className="container narrow">
        <div className="ps-card ps-letter">
          <span className="ps-tape" aria-hidden="true"></span>
          <p className="ps-kicker">P.S.</p>
          <p>
            Scrolled straight to the bottom? I respect it. Here's the whole thing in ten seconds:{' '}
            <strong>Social Ads Freak clones video ads that already won</strong> — the hook, the
            pacing, the structure, the CTA — and rebuilds them around your product, starring your
            own face or any of 100+ freakishly real AI avatars.
          </p>
          <ul className="ps-list">
            <li><s>$150–$500 a video</s> <span className="ps-arrow">→</span> <strong>pennies</strong></li>
            <li><s>7–14 day turnaround</s> <span className="ps-arrow">→</span> <strong>minutes</strong></li>
            <li><s>3–5 variations</s> <span className="ps-arrow">→</span> <strong>as many as you want</strong></li>
            <li><s>Waiting on a creator</s> <span className="ps-arrow">→</span> <strong>launching tonight</strong></li>
            <li><s>One market, one language</s> <span className="ps-arrow">→</span> <strong>30+ languages</strong></li>
          </ul>
          <p>
            Nothing to install. Works in your browser. One payment of <strong>$47</strong> (goes
            back to $197 after launch), no monthly fees, and a full 30 days to change your mind.
          </p>
          <p>
            The people who moved early on Facebook Ads in 2013 got <em>years</em> of advantage out
            of it. This is the same shape of moment — and the same short window.
          </p>
          <div className="ps-signoff">
            <img className="avatar-img" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="" aria-hidden="true" loading="lazy" />
            <div>
              <span className="ps-signature">Ali G</span>
              <span className="ps-sign-role">Founder, Social Ads Freak</span>
            </div>
          </div>
          <div className="ps-cta">
            <CTAButton large>Get Social Ads Freak For $47</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
