import { CTAButton } from '../components/Shared.jsx';
import { DarkDecor } from '../components/Decor.jsx';

export default function OneClickAway() {
  return (
    <section className="one-click">
      <DarkDecor floor />
      <div className="container narrow one-click-inner">
        <div className="one-click-copy">
          <div className="founder-line">
            <img className="avatar-img" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Ali G" />
            <p className="on-dark"><strong>Ali G</strong> · Founder, Social Ads Freak</p>
          </div>
          <h2 className="on-dark">
            You're Standing At A Fork. <span className="grad-text-light">There Are Only Two Roads.</span>
          </h2>
          <p className="on-dark">
            <strong>Road #1:</strong> close this page, keep paying $150–$500 a video, keep waiting
            two weeks per round, and keep watching competitors out-test you 50 to 1. In twelve
            months, you'll buy a tool like this anyway — at full price, with the edge gone.
          </p>
          <p className="on-dark">
            <strong>Road #2:</strong> invest $47 once — less than a single boosted post — and
            tonight you're cloning <strong>freakishly real video ads</strong>: starring you or any
            of 100+ avatars, in 30+ languages, launched across every platform. Protected by a full
            30-day guarantee.
          </p>
          <p className="on-dark">
            You missed the first Freak in 2013. <strong>Don't miss this one.</strong>
          </p>
          <CTAButton large>Take Road #2 — Get Instant Access</CTAButton>
        </div>
        <img className="one-click-img" src="/brand/png/saf-boxshot.png" alt="Social Ads Freak" loading="lazy" />
      </div>
    </section>
  );
}
