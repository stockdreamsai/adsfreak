export default function SiteFooter() {
  return (
    <footer className={"site-footer"}>
      <div className={"container"}>
        <p className={"footer-disclaimer"}>
          <strong>
            Earnings &amp; Results Disclaimer:
          </strong>
           The
                    results shown on this page are illustrative and are not a
                    promise or guarantee of income or specific outcomes. Video
                    ad performance depends on your product, offer, audience, and
                    effort. Examples are not typical and your results will vary.
                
        </p>
      </div>
      <div className={"footer-inner container"}>
        <div className={"footer-logo"}>
          <em>
            Social Ads
          </em>
          <span>
            FREAK
          </span>
        </div>
        <p className={"footer-copy"}>
          © 2026 Social Ads Freak
        </p>
        <div className={"footer-links"}>
          <a href={"/terms.html"}>
            Terms
          </a>
          <a href={"/privacy.html"}>
            Privacy
          </a>
          <a href={"/disclaimer.html"}>
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}
