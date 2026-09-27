import { CHECKOUT_URL } from '../ui.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <a className="logo" href="#top">Social Ads <b>Freak</b></a>
          <a className="cta" href={CHECKOUT_URL}>GET SOCIAL ADS FREAK NOW <span aria-hidden="true">›</span></a>
        </div>
        <div className="footer-cols">
          <div>
            <p><b>30 Days No-Questions-Asked Moneyback Guarantee.</b></p>
            <p>If in the next 30 days you are not satisfied with your Social Ads Freak results, we will refund all your money in maximum 24 hours.</p>
            <p><b>The AI Video Ad App made for entrepreneurs.</b></p>
            <p>Clone winning ads effortlessly, save money, and elevate your brand.</p>
          </div>
          <div className="disclaimer">
            <p><b>DISCLAIMER</b></p>
            <p><b>Google</b>: We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Google, or any of its subsidiaries or its affiliates.</p>
            <p><b>Facebook</b>: This site is not a part of the Facebook website or Facebook INC. Additionally, this site is NOT endorsed by Facebook in ANY WAY. FACEBOOK is a trademark of Facebook INC.</p>
            <p><b>Earnings &amp; Results</b>: The results shown on this page are illustrative and are not a promise or guarantee of income or specific outcomes. Video ad performance depends on your product, offer, audience, and effort. Examples are not typical and your results will vary. Each testimonial is based on what our clients tell us; we don't verify their financial statements.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright @2026 Social Ads Freak</p>
          <nav>
            <a href="/privacy.html">PRIVACY POLICY</a>
            <a href="/terms.html">TERMS OF SERVICE</a>
            <a href="/disclaimer.html">DISCLAIMER</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
