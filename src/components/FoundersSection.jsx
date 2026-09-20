export default function FoundersSection() {
  return (
    <section className={"section dark founders-section"} id={"founders"}>
      <div className={"founders-grid reveal-stagger container"}>
        {/* LEFT: IMAGE */}
        <div className={"founders-visual"}>
          <div className={"founders-image-wrap"}>
            {/* TODO: interim photo shows Ali only — replace with a real Ali + Marcus duo photo */}
            <img src={"/images/founders.jpg"} alt={"Ali G \u2014 Social Ads Freak co-founder"} className={"founders-image"} />
          </div>
          <p className={"micro-copy"} style={{"marginTop": "14px", "color": "rgba(255, 255, 255, 0.45)"}}>
            
                        Built in 2013. Rebuilt for 2026.
                    
          </p>
        </div>
        {/* RIGHT: TEXT */}
        <div className={"founders-content"}>
          <div className={"section-label"}>
            Founders
          </div>
          <h2>
            The Original FREAK Duo
          </h2>
          <p className={"lead"}>
            
                        In 2013, Ali G and Marcus Lim built Social Lead Freak
                        during the early Facebook Ads explosion.
                    
          </p>
          <div className={"founders-points"}>
            <div className={"founders-point"}>
              <span className={"founder-dot"}></span>
              <span>
                <strong>
                  2013 edge:
                </strong>
                 {' '}
                 targeting
                                leverage.
              </span>
            </div>
            <div className={"founders-point"}>
              <span className={"founder-dot"}></span>
              <span>
                <strong>
                  2026 edge:
                </strong>
                 {' '}
                 creative
                                velocity.
              </span>
            </div>
            <div className={"founders-point"}>
              <span className={"founder-dot"}></span>
              <span>
                <strong>
                  Same philosophy:
                </strong>
                 {' '}
                 find the
                                leverage early and build the tool.
              </span>
            </div>
          </div>
          <p style={{"marginTop": "22px", "color": "rgba(255, 255, 255, 0.45)"}}>
            
                        Targeting is automated now.
                        
            <br />
            
                        Creative is the battlefield.
                    
          </p>
          <a href={"#start"} className={"btn-secondary"} style={{"marginTop": "26px", "borderColor": "rgba(255, 255, 255, 0.3)", "color": "rgba(255, 255, 255, 0.85)"}}>
            
                        Start Cloning Now
                    
          </a>
          <p style={{"marginTop": "22px", "color": "rgba(255, 255, 255, 0.45)"}}>
            
                        We saw the shift early in 2013.
                        
            <br />
            
                        We're seeing it again now.
                    
          </p>
        </div>
      </div>
    </section>
  );
}
