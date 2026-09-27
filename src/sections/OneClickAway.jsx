import { CTAButton } from '../components/Shared.jsx';
import { DarkDecor } from '../components/Decor.jsx';

// Final close: the two roads, then a short P.S. recap from the founder.
export default function OneClickAway() {
  return (
    <section className="one-click">
      <DarkDecor floor />
      <div className="container narrow">
        <div className="one-click-inner">
          <div className="one-click-copy">
            <div className="founder-line">
              <img className="avatar-img" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Ali G" />
              <p className="on-dark"><strong>Ali G</strong> · Founder, Social Ads Freak</p>
            </div>
            <h2 className="on-dark">
              You're Standing At A Fork. <span className="grad-text-light">There Are Only Two Roads.</span>
            </h2>
            <p className="on-dark">
              <strong>Road #1:</strong> close this page and keep paying $150–$500 a video, waiting
              two weeks a round, watching competitors out-test you 50 to 1.
            </p>
            <p className="on-dark">
              <strong>Road #2:</strong> invest <em className="hl hl-dark">$47 once</em> and tonight
              you're cloning freakishly real video ads — starring you or any of 100+ avatars, in
              30+ languages, protected by a full 30-day guarantee.
            </p>
            <CTAButton large>Take Road #2 — Get Instant Access</CTAButton>
          </div>
          <img className="one-click-img" src="/brand/png/saf-boxshot.png" alt="Social Ads Freak" loading="lazy" />
        </div>

        <div className="close-ps">
          <p className="close-ps-kicker">P.S.</p>
          <p className="on-dark">
            Scrolled straight to the bottom? Here's the whole thing in ten seconds:{' '}
            <strong>Social Ads Freak clones video ads that already won</strong> and rebuilds them
            around your product. <s>$500 a video</s> → pennies. <s>2 weeks</s> → minutes.{' '}
            <s>One language</s> → 30+. One payment of <strong>$47</strong>, no monthly fees, 30 days
            to change your mind. The people who moved early in 2013 got years out of it.{' '}
            <em className="hl hl-dark">This is the same window.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
