export default function EdgeSection() {
  return (
    <section className={"section light edge-section"}>
      <div className={"center container"}>
        <div className={"section-label"}>
          Then vs Now
        </div>
        <h2>
          The Edge Moved.
        </h2>
        <p className={"accent-word"} style={{"marginBottom": "10px"}}>
          
                    So Did We.
                
        </p>
        <p className={"subheadline"} style={{"maxWidth": "720px", "margin": "20px auto 60px"}}>
          
                    2013: people underestimated Facebook Ads. The freaks who
                    paid attention built unfair advantages.
                    
          <br />
          
                    2026: people are underestimating AI creative. Feels
                    familiar.
                
        </p>
      </div>
      <div className={"era-grid reveal-stagger container"}>
        <div className={"era-card"}>
          <div className={"era-year-badge muted-badge"}>
            2013
          </div>
          <div className={"era-image-wrap"}>
            <img src={"/BOX-PNG.png"} alt={"Social Lead Freak 2013"} className={"era-box-img"} />
          </div>
          <p className={"era-caption"}>
            
                        Social Lead Freak.
                        
            <br />
            
                        Early Facebook Ads leverage.
                    
          </p>
        </div>
        <div className={"era-arrow"}>
          <img src={"/images/mascot-retro.png"} alt={"The Freak \u2014 same guy since 2013"} className={"era-mascot"} />
          <svg width={"48"} height={"48"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
            <line x1={"5"} y1={"12"} x2={"19"} y2={"12"}></line>
            <polyline points={"12 5 19 12 12 19"}></polyline>
          </svg>
        </div>
        <div className={"era-card highlight-card"}>
          <div className={"era-year-badge accent-badge"}>
            2026
          </div>
          <div className={"era-image-wrap"}>
            <img src={"/brand/png/saf-boxshot.png"} alt={"Social Ads Freak 2026"} className={"era-box-img"} />
          </div>
          <p className={"era-caption"}>
            
                        Social Ads Freak.
                        
            <br />
            
                        AI-powered creative leverage.
                    
          </p>
        </div>
      </div>
      <div className={"narrow center reveal container"} style={{"marginTop": "50px"}}>
        <p className={"micro-copy"}>
          
                    Same mindset.
                    
          <br />
          
                    New weapon.
                
        </p>
        <h3 className={"window-highlight"} style={{"marginTop": "30px"}}>
          
                    That hesitation? That's the window.
                
        </h3>
      </div>
      <div className={"warn-box reveal container"}>
        <div className={"warn-label"}>
          Be Warned
        </div>
        <h3>
          The window closes the same way it did in 2013.
        </h3>
        <p>
          
                    Right now most of your competitors still think "AI video"
                    means typing a prompt and hoping. They're posting slop and
                    concluding it doesn't work. That's your head start — and
                    it's the only part of this you can't buy back later.
                
        </p>
        <p>
          
                    Give it twelve months. Cloning proven ads won't be an edge
                    anymore. It'll just be how ads get made, and everyone will
                    be doing it. The people who start now spend that year
                    compounding. Everyone else spends it catching up.
                
        </p>
      </div>
    </section>
  );
}
