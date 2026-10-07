import { CTAButton } from '../components/Shared.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a className="logo footer-logo" href="#top">
            <span className="logo-mark">SA</span> Social Ads <em className="logo-freak">FREAK</em>
          </a>
          <CTAButton>Get Social Ads Freak Now</CTAButton>
        </div>

        <div className="footer-cols">
          <div className="footer-guarantee">
            <h3>30 Days No-Questions-Asked Moneyback Guarantee.</h3>
            <p>
              If in the next 30 days you are not satisfied with your Social Ads Freak results, we
              will refund all your money. No hoops. No friction. No risk.
            </p>
            <h3>The AI Video Ad App made for entrepreneurs.</h3>
            <p>Clone winning ads effortlessly, save money, and elevate your brand.</p>
          </div>

          <div className="footer-disclaimer">
            <h4>EARNINGS &amp; RESULTS DISCLAIMER</h4>
            <p>
              The results shown on this page are illustrative and are not a promise or guarantee of
              income or specific outcomes. Video ad performance depends on your product, offer,
              audience, and effort. Examples are not typical and your results will vary.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Social Ads Freak</p>
          <nav className="footer-links">
            <a href="/terms.html">TERMS</a>
            <a href="/privacy.html">PRIVACY</a>
            <a href="/disclaimer.html">DISCLAIMER</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
