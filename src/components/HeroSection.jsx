export default function HeroSection() {
  return (
    <section className={"hero center"} id={"start"} style={{ marginTop: "0px", paddingTop: "20px" }}>
      <div className={"hero-mosaic"} aria-hidden={"true"}></div>
      <div className={"narrow container"} style={{ marginTop: "40px" }}>
        <p className={"micro-copy upper-label"}>
          
                    THE FREAK IS BACK… NOW WITH AI SUPERPOWERS
                
        </p>
        <h1 className={"hero-headline"}>
          Skyrocket Your Conversions, Traffic and Customer Engagement With AI Custom Made Video Ads Starring{' '}
          <span className={"typing-text"}>You</span>
        </h1>
        <p className={"subheadline hero-sub"}>
          Social Ads Freak doesn't generate random AI videos. It clones ads
          that already won — the hook, the pacing, the structure, the CTA —
          and rebuilds them around <strong>your product</strong>.
          <br />
          The face on camera? Your call: <strong>your own photo</strong>, or
          any of <strong>100+ <u>freakishly</u> real AI avatars</strong> —
          with voice, music, and captions done, ready for TikTok, Facebook,
          Instagram, or YouTube.
        </p>
      </div>
      <div className={"showcase"}>
        <div className={"showcase-slide"} id={"showcaseSlide"}>
          {/* Left: The Original */}
          <div className={"showcase-card"}>
            <div className={"showcase-badge"}>
              The Original
            </div>
            <div className={"showcase-frame"}>
              <video id={"showcaseRef"} src={"https://ddufpaulv1kgi.cloudfront.net/videos/rogan-onnit.mp4"} autoPlay muted loop playsInline preload={"auto"}></video>
            </div>
            <button className={"showcase-mute-btn"} data-onclick={"toggleMute('showcaseRef', this)"} aria-label={"Unmute"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"18"} height={"18"}>
                <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
              </svg>
            </button>
          </div>
          {/* Center: Avatar + Product + arrow */}
          <div className={"showcase-center"}>
            <div className={"showcase-avatar-stack"}>
              <img className={"stack-echo s2"} src={"https://ddufpaulv1kgi.cloudfront.net/avatars/Freya.jpg"} alt={""} aria-hidden={"true"} />
              <img className={"stack-echo s1"} src={"https://ddufpaulv1kgi.cloudfront.net/avatars/Marcus.jpg"} alt={""} aria-hidden={"true"} />
              <div className={"showcase-avatar"}>
                <img src={"https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG"} alt={"Avatar"} />
              </div>
            </div>
            <p className={"showcase-face-caption"}>
              
                            your face — or 100+ others
                        
            </p>
            <div className={"showcase-product"} id={"showcaseProduct"}>
              <img src={"https://ddufpaulv1kgi.cloudfront.net/thumbnails/focus-factor.jpg"} alt={"Product"} />
            </div>
            <svg className={"showcase-arrow"} viewBox={"0 0 160 60"} xmlns={"http://www.w3.org/2000/svg"}>
              <defs>
                <marker id={"showcaseArrowHead"} markerWidth={"10"} markerHeight={"10"} refX={"9"} refY={"5"} orient={"auto"}>
                  <path d={"M0,1 L9,5 L0,9"} fill={"none"} stroke={"rgba(200,210,230,0.6)"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                </marker>
              </defs>
              <path d={"M15 12 C50 58, 110 58, 145 12"} fill={"none"} stroke={"rgba(200,210,230,0.6)"} strokeWidth={"3"} strokeLinecap={"round"} markerEnd={"url(#showcaseArrowHead)"}></path>
            </svg>
          </div>
          {/* Right: The Clone */}
          <div className={"showcase-card is-clone"}>
            <div className={"showcase-badge accent"}>
              The Clone
            </div>
            <div className={"clone-status"} aria-hidden={"true"}>
              <span className={"cs-a"}>
                CLONING
                {' '}
                <span className={"cs-dots"}></span>
              </span>
              <span className={"cs-b"}>
                ✓ CLONE READY
              </span>
            </div>
            <div className={"showcase-frame"}>
              <video id={"showcaseRec"} src={"https://ddufpaulv1kgi.cloudfront.net/videos/ali-focus4.mp4"} autoPlay muted loop playsInline preload={"auto"}></video>
            </div>
            <button className={"showcase-mute-btn"} data-onclick={"toggleMute('showcaseRec', this)"} aria-label={"Unmute"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"18"} height={"18"}>
                <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
              </svg>
            </button>
          </div>
        </div>
        <div className={"showcase-nav"}>
          <button className={"showcase-btn"} data-onclick={"changeSlide(-1)"} aria-label={"Previous"}>
            
                        ‹
                    
          </button>
          <button className={"showcase-btn"} id={"showcasePlayBtn"} data-onclick={"toggleShowcasePlay(this)"} aria-label={"Pause"}>
            <svg viewBox={"0 0 24 24"} fill={"currentColor"} width={"20"} height={"20"}>
              <rect x={"6"} y={"5"} width={"4"} height={"14"} rx={"1"}></rect>
              <rect x={"14"} y={"5"} width={"4"} height={"14"} rx={"1"}></rect>
            </svg>
          </button>
          <button className={"showcase-btn"} data-onclick={"changeSlide(1)"} aria-label={"Next"}>
            
                        ›
                    
          </button>
        </div>
      </div>
      <div className={"narrow center container"}>
        <div className={"product-buy-block hero-buy-block"}>
          <p className={"product-price-old"}>
            Regular Price 
            {' '}
            <s>
              $197
            </s>
          </p>
          <p className={"product-price-note"}>
            
                        No monthly fees — 
            {' '}
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
