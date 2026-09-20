export default function OrderSection() {
  return (
    <section className={"section final-cta-section"} id={"order"}>
      <div className={"narrow center reveal container"}>
        <div className={"founder-callout-hero"} style={{"marginBottom": "48px"}}>
          <img src={"https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG"} alt={"Ali G \u2014 Social Ads Freak founder"} className={"founder-avatar-lg"} />
          <div className={"speech-bubble"}>
            <h3 className={"founder-name"}>
              
                            Ali G
                            
              <span className={"founder-title"}>
                · Founder, Social Ads Freak
              </span>
            </h3>
            <p className={"founder-quote-lg"}>
              
                            You missed the first Freak — Social Lead Freak back
                            in 2013. It changed everything for the people who
                            got in early. 
              <strong>
                Don't miss this one.
              </strong>
            </p>
          </div>
        </div>
        <p className={"subheadline"} style={{"marginTop": "0"}}>
          <span className={"clone-word"}>
            Clone
          </span>
           freakishly real video
                    ads.
                    
          <br />
          
                    Star in them yourself — or cast any of 100+ avatars.
                    
          <br />
          
                    Launch across markets.
                    
          <br />
          
                    Scale what works.
                
        </p>
        <div className={"product-buy-block reveal"} style={{"marginTop": "40px"}}>
          <img src={"/images/sticker-coin.png"} alt={""} aria-hidden={"true"} className={"mascot-accent mascot-coin"} />
          <p className={"product-price-old"}>
            Regular Price 
            <s>
              $197
            </s>
          </p>
          <p className={"product-price-note"}>
            
                        No monthly fees — 
            <strong>
              One Time Payment
            </strong>
          </p>
          <p className={"product-price-now"}>
            Today: Just $47
          </p>
          <p className={"product-price-discount"}>
            (76% Discount)
          </p>
          {/* TODO: replace YOUR_JVZOO_CHECKOUT_URL with the real JVZoo/checkout link */}
          <a href={"YOUR_JVZOO_CHECKOUT_URL"} className={"btn-buy"}>
            
                        Get Social Ads Freak Now
                    
          </a>
          <p className={"product-guarantee"}>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"}>
              <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}></path>
            </svg>
            
                        30-Day Money-Back Guarantee
                    
          </p>
          <p className={"secure-checkout"}>
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"}>
              <rect x={"3"} y={"11"} width={"18"} height={"11"} rx={"2"}></rect>
              <path d={"M7 11V7a5 5 0 0 1 10 0v4"}></path>
            </svg>
            
                        Secure 256-bit SSL checkout
                    
          </p>
          <div className={"product-payment-badges"}>
            <span className={"payment-badge"}>
              VISA
            </span>
            <span className={"payment-badge"}>
              Mastercard
            </span>
            <span className={"payment-badge"}>
              PayPal
            </span>
            <span className={"payment-badge"}>
              Amex
            </span>
            <span className={"payment-badge"}>
              Discover
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
