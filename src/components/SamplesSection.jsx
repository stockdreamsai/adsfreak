export default function SamplesSection() {
  return (
    <section className={"section light ugc-wall"} id={"samples"}>
      <div className={"center reveal container"}>
        <div className={"wall-kicker"} aria-hidden={"true"}>
          
                    ALL CLONED · ZERO CAMERAS
                
        </div>
      </div>
      <div className={"ugc-trio reveal container"}>
        <div className={"ugc-tile"}>
          <div className={"ugc-badge"}>
            Shoes • Volcano resistant
          </div>
          <div className={"ugc-frame"}>
            <video data-src={"https://ddufpaulv1kgi.cloudfront.net/videos/ali-volcano.mp4"} muted loop playsInline preload={"none"}>
              <track src={"/captions/sample-2.vtt"} kind={"captions"} srcLang={"en"} label={"English"} default />
            </video>
            <button className={"ugc-mute-btn"} data-onclick={"toggleTileMute(this)"} aria-label={"Unmute"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"16"} height={"16"}>
                <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
              </svg>
            </button>
          </div>
        </div>
        <div className={"ugc-tile"}>
          <div className={"ugc-badge"}>
            Gummies • Free-fall
          </div>
          <div className={"ugc-frame"}>
            <video data-src={"https://ddufpaulv1kgi.cloudfront.net/videos/ali-terminal-velocity.mp4"} muted loop playsInline preload={"none"}>
              <track src={"/captions/sample-1.vtt"} kind={"captions"} srcLang={"en"} label={"English"} default />
            </video>
            <button className={"ugc-mute-btn"} data-onclick={"toggleTileMute(this)"} aria-label={"Unmute"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"16"} height={"16"}>
                <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
              </svg>
            </button>
          </div>
        </div>
        <div className={"ugc-tile"}>
          <div className={"ugc-badge"}>
            Real Estate • Walkthrough story
          </div>
          <div className={"ugc-frame"}>
            <video data-src={"https://ddufpaulv1kgi.cloudfront.net/videos/ali-real-estate.mp4"} muted loop playsInline preload={"none"}></video>
            <button className={"ugc-mute-btn"} data-onclick={"toggleTileMute(this)"} aria-label={"Unmute"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"16"} height={"16"}>
                <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={"narrow center bridge-block reveal container"}>
        <p className={"bridge-text"}>
          
                    Freaky, right?
          {' '}
                    
          <span className={"bridge-emphasis"}>
            One person. A dozen winning formats. Zero
                        cameras.
          </span>
          <br />
          
                    Now swap me out for 
          {' '}
          <strong>
            your product
          </strong>
           {' '}
           — that's a
                    whole ad account's worth of proven creatives, with you
                    showing up consistently
          {' '}
                    
          <em>
            (or never on camera at all).
          </em>
          <br />
          
                    Prefer a different face? Read on.
                
        </p>
      </div>
    </section>
  );
}
