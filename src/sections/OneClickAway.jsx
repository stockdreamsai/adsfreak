import { CTAButton } from '../components/Shared.jsx';

export default function OneClickAway() {
  return (
    <section className="one-click">
      <div className="container narrow one-click-inner">
        <div className="one-click-copy">
          <div className="founder-line">
            <img className="avatar-img" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Ali G" />
            <p className="on-dark"><strong>Ali G</strong> · Founder, Social Ads Freak</p>
          </div>
          <h2 className="on-dark">
            You Missed The First Freak. <span className="grad-text-light">Don't Miss This One.</span>
          </h2>
          <p className="on-dark">
            Social Lead Freak, back in 2013, changed everything for the people who got in early.
            This is the same shape of moment — and the same short window.
          </p>
          <p className="on-dark">
            Clone <strong>freakishly real video ads</strong>. Star in them yourself — or cast any
            of 100+ avatars. Launch across markets. Scale what works.
          </p>
          <CTAButton large>Get Social Ads Freak Now</CTAButton>
        </div>
        <img className="one-click-img" src="/BOX-PNG.png" alt="Social Ads Freak box" loading="lazy" />
      </div>
    </section>
  );
}
