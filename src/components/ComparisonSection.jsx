export default function ComparisonSection() {
  return (
    <section className={"section light comparison-section"}>
      <div className={"container"}>
        <div className={"section-label center"}>
          Generic AI vs. Clone AI
        </div>
        <h2 className={"center"}>
          
                    Most AI Generates Random Videos.
                    
          <br />
          
                    What If AI Could Clone What Converts?
                
        </h2>
        <p className={"subheadline center"}>
          
                    Creators are slow and expensive. Generic AI is fast — but
                    over-polished, robotic, and nobody trusts it.
                    
          <br />
          
                    The fix isn't more AI. It's AI that clones what converts.
                
        </p>
        <div className={"comparison-grid reveal-stagger"}>
          {/* GENERIC AI */}
          <div className={"comparison-card comparison-muted"}>
            <div className={"comparison-badge muted-badge"}>
              
                            Generic AI
                        
            </div>
            <div className={"video-wrapper-sm"}>
              <video id={"cmpGenericVid"} src={"https://ddufpaulv1kgi.cloudfront.net/videos/0.17462511717398166-web.mp4"} muted autoPlay playsInline preload={"metadata"}></video>
              <button className={"showcase-mute-btn"} data-onclick={"toggleMute('cmpGenericVid', this)"} aria-label={"Unmute"}>
                <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"18"} height={"18"}>
                  <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                  <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                  <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
                </svg>
              </button>
            </div>
            <ul className={"comparison-list"}>
              <li>
                <span className={"list-x"}>
                  ✗
                </span>
                 Looks polished
                            
              </li>
              <li>
                <span className={"list-x"}>
                  ✗
                </span>
                 Feels artificial
                            
              </li>
              <li>
                <span className={"list-x"}>
                  ✗
                </span>
                 No proven
                                structure
                            
              </li>
              <li>
                <span className={"list-x"}>
                  ✗
                </span>
                 No emotional
                                pacing
                            
              </li>
              <li>
                <span className={"list-x"}>
                  ✗
                </span>
                 Low trust → low
                                conversions
                            
              </li>
            </ul>
          </div>
          {/* THE RIGHT AI */}
          <div className={"comparison-card comparison-highlight"}>
            <div className={"comparison-badge accent-badge"}>
              
                            The Right AI
                        
            </div>
            <div className={"video-wrapper-sm"}>
              <video id={"cmpRealVid"} src={"https://ddufpaulv1kgi.cloudfront.net/videos/storycraft-2026-04-20T22_54_17.495Z-web.mp4"} muted autoPlay playsInline preload={"metadata"}></video>
              <span className={"made-by-vidfreak"}>
                <svg viewBox={"0 0 24 24"} fill={"currentColor"} width={"12"} height={"12"} aria-hidden={"true"}>
                  <path d={"M13 2L3 14h7l-1 8 10-12h-7z"}></path>
                </svg>
                
                                Created by Social Ads Freak
                            
              </span>
              <button className={"showcase-mute-btn"} data-onclick={"toggleMute('cmpRealVid', this)"} aria-label={"Unmute"}>
                <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"18"} height={"18"}>
                  <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                  <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                  <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
                </svg>
              </button>
            </div>
            <ul className={"comparison-list"}>
              <li>
                <span className={"list-check"}>
                  ✓
                </span>
                 Feels native +
                                real
                            
              </li>
              <li>
                <span className={"list-check"}>
                  ✓
                </span>
                 Built on
                                proven ad structures
                            
              </li>
              <li>
                <span className={"list-check"}>
                  ✓
                </span>
                 Human pacing +
                                rhythm
                            
              </li>
              <li>
                <span className={"list-check"}>
                  ✓
                </span>
                 You or an
                                avatar as the face
                            
              </li>
              <li>
                <span className={"list-check"}>
                  ✓
                </span>
                 Designed to
                                convert
                            
              </li>
            </ul>
          </div>
        </div>
        <div className={"showcase-nav"}>
          <button className={"showcase-btn compare-play-btn"} id={"comparePlayBtn"} data-onclick={"toggleComparePlay(this)"} aria-label={"Pause"}>
            <svg viewBox={"0 0 24 24"} fill={"currentColor"} width={"20"} height={"20"}>
              <rect x={"6"} y={"5"} width={"4"} height={"14"} rx={"1"}></rect>
              <rect x={"14"} y={"5"} width={"4"} height={"14"} rx={"1"}></rect>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
