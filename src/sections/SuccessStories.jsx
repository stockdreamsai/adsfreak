import { SectionTitle, CTAButton } from '../components/Shared.jsx';

export default function SuccessStories() {
  return (
    <section className="founders-story">
      <div className="container narrow">
        <SectionTitle
          kicker="Built in 2013. Rebuilt for 2026."
          title="The Original"
          highlight="FREAK Duo"
        />
        <div className="founders-split">
          <img className="founders-img" src="/images/founders.jpg" alt="Ali G and Marcus Lim" loading="lazy" />
          <div className="founders-copy">
            <p>
              In 2013, Ali G and Marcus Lim built <strong>Social Lead Freak</strong> during the
              early Facebook Ads explosion.
            </p>
            <ul className="check-list">
              <li><strong>2013 edge:</strong> targeting leverage.</li>
              <li><strong>2026 edge:</strong> creative velocity.</li>
              <li><strong>Same philosophy:</strong> find the leverage early and build the tool.</li>
            </ul>
            <p>
              Targeting is automated now. <strong>Creative is the battlefield.</strong>
            </p>
            <p className="founders-quote">
              “We saw the shift early in 2013. We're seeing it again now.”
            </p>
            <CTAButton>Start Cloning Now</CTAButton>
          </div>
        </div>

        <div className="ps-card">
          <p className="ps-kicker">P.S.</p>
          <p>
            If you scrolled straight to the bottom, I respect it. Here's the whole thing in ten
            seconds: <strong>Social Ads Freak clones video ads that already won</strong> — the
            hook, the pacing, the structure, the CTA — and rebuilds them around your product,
            starring your own face or any of 100+ freakishly real AI avatars.
          </p>
          <ul className="ps-list">
            <li><s>$150–$500 a video</s> → <strong>pennies</strong></li>
            <li><s>7–14 day turnaround</s> → <strong>minutes</strong></li>
            <li><s>3–5 variations</s> → <strong>as many as you want</strong></li>
            <li><s>Waiting on a creator</s> → <strong>launching tonight</strong></li>
            <li><s>One market, one language</s> → <strong>30+ languages</strong></li>
          </ul>
          <p>
            Nothing to install. Works in your browser. One payment, no monthly fees, and a full 30
            days to change your mind.
          </p>
          <p>
            The people who moved early on Facebook Ads in 2013 got years of advantage out of it.
            This is the same shape of moment, and the same short window.
          </p>
          <p className="ps-sign">— Ali G</p>
        </div>
      </div>
    </section>
  );
}
