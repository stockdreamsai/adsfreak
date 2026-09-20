import { CTAButton } from '../components/Shared.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a className="logo footer-logo" href="#top">
            <span className="logo-mark">A</span> AdsFreak
          </a>
          <CTAButton>GET ADSFREAK NOW</CTAButton>
        </div>

        <div className="footer-cols">
          <div className="footer-guarantee">
            <h3>30 Days No-Questions-Asked Moneyback Guarantee.</h3>
            <p>
              If in the next 30 days you are not satisfied with your AdsFreak results, we will refund all your money in maximum 24 hours.
            </p>
            <h3>The AI Ad Creative App made for entrepreneurs.</h3>
            <p>Create stunning ad creatives effortlessly, save money, and elevate your brand.</p>
          </div>

          <div className="footer-disclaimer">
            <h4>DISCLAIMER</h4>
            <p>
              <strong>Google</strong>: We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Google, or any of its subsidiaries or its affiliates.
            </p>
            <p>
              <strong>Facebook</strong>: This site is not a part of the Facebook website or Facebook INC. Additionally, this site is NOT endorsed by Facebook in ANY WAY. FACEBOOK is a trademark of Facebook INC.
            </p>
            <p>
              Every effort has been made to accurately represent the product(s) sold through this website and their potential. Any claims made or examples given are believed to be accurate, however, should not be relied on in any way in making a decision whether or not to purchase. Any testimonials and examples used are exceptional results, don't apply to the average purchaser and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on his or her background, dedication, desire and motivation as well as other factors not always known and sometimes beyond control. There is no guarantee you will duplicate the results stated here. You recognise any business endeavour has inherent risk for loss of capital. We cannot promise success.
            </p>
            <p>
              Disclaimer: each client testimonial that you see is based on what our clients tell us. We don't verify their financial statements, we take their word on it. Getting results in building a business is hard, and each of our clients works really hard to get results. We don't guarantee any results.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright @2026 AdsFreak</p>
          <nav className="footer-links">
            <a href="/privacy">PRIVACY POLICY</a>
            <a href="/terms">TERMS OF SERVICE</a>
            <a href="/disclaimer">DISCLAIMER</a>
            <a href="/cookies">COOKIE POLICY</a>
            <a href="/support">SUPPORT DESK</a>
            <a href="/login">LOGIN</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
