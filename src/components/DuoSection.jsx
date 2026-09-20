export default function DuoSection() {
  return (
    <section className={"section dark duo-section"}>
      <div className={"narrow center reveal container"}>
        <div className={"section-label"}>
          One Login. Two Engines.
        </div>
        <h2>
          
                    Two Studios. One
                    
          <span className={"gradient-text"}>
            Freak
          </span>
          .
                
        </h2>
        <p className={"subheadline"}>
          
                    Most tools do quick ads 
          <em>
            or
          </em>
           full videos. Social Ads
                    Freak ships both — and you flip between them with one
                    switch.
                
        </p>
      </div>
      <div className={"reveal container"}>
        <div className={"duo"}>
          <div className={"duo-toggle"} role={"group"} aria-label={"Choose studio"}>
            <button type={"button"} className={"active"} data-mode={"viral"} aria-pressed={"true"}>
              
                            VIRAL
                        
            </button>
            <button type={"button"} data-mode={"pro"} aria-pressed={"false"}>
              
                            PRO
                        
            </button>
          </div>
          <p className={"duo-toggle-note"}>
            
                        ↑ the actual switch from inside the app — flip it
                    
          </p>
          <div className={"duo-grid"}>
            <div className={"duo-card active"} id={"duoViral"}>
              <div className={"duo-badge"}>
                ⚡ Viral Ads
              </div>
              <h4>
                Clone An Ad In Minutes
              </h4>
              <p>
                
                                Pick from 274 proven templates, drop in your
                                product and face, hit generate. Scroll-stopping
                                vertical ads ready to launch tonight.
                            
              </p>
              <div className={"duo-tags"}>
                <span>
                  274 templates
                </span>
                <span>
                  Ready in minutes
                </span>
                <span>
                  Built for TikTok &amp; Reels
                </span>
              </div>
            </div>
            <div className={"duo-card"} id={"duoPro"}>
              <div className={"duo-badge alt"}>
                🎬 Pro Studio
              </div>
              <h4>
                Build Full Video Stories
              </h4>
              <p>
                
                                When one clip isn't enough: AI writes the
                                script, then builds your video scene by scene —
                                up to 20 scenes with multi-shot cuts, voiceover,
                                and music — on a full timeline editor.
                            
              </p>
              <div className={"duo-tags"}>
                <span>
                  Up to 20 scenes
                </span>
                <span>
                  Multi-shot cuts
                </span>
                <span>
                  Voiceover + music
                </span>
              </div>
            </div>
          </div>
          <p className={"duo-caption"}>
            
                        Same clone DNA. Two ways to deploy it.
                    
          </p>
        </div>
      </div>
    </section>
  );
}
