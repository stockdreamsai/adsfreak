export default function ContentSection05() {
  return (
    <section className={"section dark"}>
      <div className={"narrow center reveal container"}>
        <div className={"section-label"}>
          Any Face You Want
        </div>
        <h2>
          Want A Different Face In Your Ads?
        </h2>
        <p className={"lead"}>
          
                    Maybe you don't love your own face on camera. Maybe a
                    different look (or gender) fits your brand better. Maybe you
                    just want variety.
                
        </p>
        <p className={"accent-word"}>
          Easy.
        </p>
        <p className={"strong-close"}>
          
                    Pick from 100+ AI avatars that don't look AI — or upload one
                    photo of yourself and become your own avatar. Either way,
                    the clone stars the face you pick. Same goes for the voice —
                    clone your own, or pick from the library.
                
        </p>
      </div>
      <div className={"showcase"}>
        <div className={"showcase-slide"} id={"avatarShowcaseSlide"}>
          {/* Left: Your Face */}
          <div className={"showcase-card"}>
            <div className={"showcase-badge"}>
              Same Ad — Your Face
            </div>
            <div className={"showcase-frame"}>
              <video id={"avatarRef"} data-src={"https://ddufpaulv1kgi.cloudfront.net/videos/ali-terminal-velocity.mp4"} muted loop playsInline preload={"none"}>
                <track src={"/captions/avatar-ref.vtt"} kind={"captions"} srcLang={"en"} label={"English"} default />
              </video>
            </div>
            <button className={"showcase-mute-btn"} data-onclick={"toggleMute('avatarRef', this)"} aria-label={"Unmute"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"18"} height={"18"}>
                <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
              </svg>
            </button>
          </div>
          {/* Center: arrow */}
          <div className={"showcase-center"}>
            <div className={"showcase-or"}>
              or
            </div>
            <svg className={"showcase-arrow"} viewBox={"0 0 160 60"} xmlns={"http://www.w3.org/2000/svg"}>
              <defs>
                <marker id={"avatarArrowHead"} markerWidth={"10"} markerHeight={"10"} refX={"9"} refY={"5"} orient={"auto"}>
                  <path d={"M0,1 L9,5 L0,9"} fill={"none"} stroke={"rgba(200,210,230,0.6)"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                </marker>
              </defs>
              <path d={"M15 12 C50 58, 110 58, 145 12"} fill={"none"} stroke={"rgba(200,210,230,0.6)"} strokeWidth={"3"} strokeLinecap={"round"} markerEnd={"url(#avatarArrowHead)"}></path>
            </svg>
          </div>
          {/* Right: Avatar version */}
          <div className={"showcase-card is-clone"}>
            <div className={"showcase-badge accent"}>
              
                            Same Ad — Any Avatar
                        
            </div>
            <div className={"clone-status"} aria-hidden={"true"}>
              <span className={"cs-a"}>
                CLONING
                <span className={"cs-dots"}></span>
              </span>
              <span className={"cs-b"}>
                ✓ CLONE READY
              </span>
            </div>
            <div className={"showcase-frame"}>
              <video id={"avatarRec"} data-src={"https://ddufpaulv1kgi.cloudfront.net/videos/amelia-terminal-velocity.mp4"} muted loop playsInline preload={"none"}>
                <track src={"/captions/avatar-rec.vtt"} kind={"captions"} srcLang={"en"} label={"English"} default />
              </video>
            </div>
            <button className={"showcase-mute-btn"} data-onclick={"toggleMute('avatarRec', this)"} aria-label={"Unmute"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} width={"18"} height={"18"}>
                <path d={"M11 5L6 9H2v6h4l5 4V5z"}></path>
                <line x1={"23"} y1={"9"} x2={"17"} y2={"15"}></line>
                <line x1={"17"} y1={"9"} x2={"23"} y2={"15"}></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
