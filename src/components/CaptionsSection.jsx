export default function CaptionsSection() {
  return (
    <section className={"section dark captions-section"} id={"captions"}>
      <div className={"captions-grid container"}>
        <div className={"captions-demo reveal"}>
          <div className={"cap-phone"}>
            <video id={"capVideo"} data-src={"https://ddufpaulv1kgi.cloudfront.net/videos/ali-terminal-velocity.mp4"} poster={"/images/captions-demo-poster.jpg"} muted loop playsInline preload={"none"} aria-label={"Sample AI ad with word-by-word captions"}></video>
            <div className={"cap-overlay cap-look-freak-pop"} id={"capOverlay"} aria-hidden={"true"}></div>
            <div className={"cap-band cap-band-top"} aria-hidden={"true"}></div>
            <div className={"cap-band cap-band-bottom"} aria-hidden={"true"}></div>
            <div className={"cap-guide"} id={"capGuide"} aria-hidden={"true"}></div>
            <button className={"cap-grip"} id={"capGrip"} type={"button"} aria-label={"Drag to move captions up or down"} title={"Drag to move captions up or down"}>
              <svg width={"10"} height={"16"} viewBox={"0 0 10 16"} fill={"currentColor"} aria-hidden={"true"}>
                <circle cx={"2.5"} cy={"3"} r={"1.5"}></circle>
                <circle cx={"7.5"} cy={"3"} r={"1.5"}></circle>
                <circle cx={"2.5"} cy={"8"} r={"1.5"}></circle>
                <circle cx={"7.5"} cy={"8"} r={"1.5"}></circle>
                <circle cx={"2.5"} cy={"13"} r={"1.5"}></circle>
                <circle cx={"7.5"} cy={"13"} r={"1.5"}></circle>
              </svg>
            </button>
            <button className={"cap-sound"} id={"capSound"} type={"button"} aria-pressed={"false"}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <polygon points={"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}></polygon>
                <path className={"cap-sound-on"} d={"M15.5 8.5a5 5 0 0 1 0 7"}></path>
                <path className={"cap-sound-on"} d={"M18.5 5.5a9 9 0 0 1 0 13"}></path>
                <line className={"cap-sound-off"} x1={"22"} y1={"9"} x2={"16"} y2={"15"}></line>
                <line className={"cap-sound-off"} x1={"16"} y1={"9"} x2={"22"} y2={"15"}></line>
              </svg>
              <span>
                Tap for sound
              </span>
            </button>
          </div>
        </div>
        <div className={"captions-copy reveal"}>
          <div className={"section-label"}>
            New: Auto-Captions
          </div>
          <h2>
            
                        Captions That Land On
                        
            <span className={"gradient-text"}>
              Every Word
            </span>
          </h2>
          <p className={"subheadline"}>
            
                        Plenty of people scroll with the sound off. Social Ads
                        Freak listens to your finished ad and captions it word
                        by word, in time with the voice. No caption app. No
                        retyping.
                    
          </p>
          <div className={"cap-looks"} id={"capLooks"} role={"group"} aria-label={"Caption look"}>
            <button type={"button"} className={"cap-look is-active"} data-look={"freak-pop"}>
              
                            Freak Pop
                        
            </button>
            <button type={"button"} className={"cap-look"} data-look={"karaoke"}>
              
                            Karaoke
                        
            </button>
            <button type={"button"} className={"cap-look"} data-look={"boxed"}>
              
                            Boxed
                        
            </button>
            <button type={"button"} className={"cap-look"} data-look={"outline"}>
              
                            Outline
                        
            </button>
            <button type={"button"} className={"cap-look"} data-look={"clean"}>
              
                            Clean
                        
            </button>
            <button type={"button"} className={"cap-look"} data-look={"band"}>
              
                            One Word
                        
            </button>
          </div>
          <p className={"cap-hint"}>
            
                        Try it. Tap a look and the captions change live. Drag
                        the captions, or the gold grip, to move them up or down.
                    
          </p>
          <ul className={"cap-points"}>
            <li>
              <strong>
                Timed to the voice, not guessed.
              </strong>
              
                            Each word lights up as it's spoken.
                        
            </li>
            <li>
              <strong>
                Six looks, one click.
              </strong>
               Switch styles
                            any time after captioning, free.
                        
            </li>
            <li>
              <strong>
                Your spelling wins.
              </strong>
               Brand and
                            product names come from your script, not a best
                            guess.
                        
            </li>
            <li>
              <strong>
                Clear of the buttons.
              </strong>
               Captions sit
                            above where TikTok, Reels and Shorts put their own
                            controls.
                        
            </li>
            <li>
              <strong>
                Baked into the download.
              </strong>
               On quick
                            ads and full Pro Studio videos alike.
                        
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
