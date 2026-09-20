export default function ProductSection() {
  return (
    <section className={"section dark product-section"}>
      <div className={"narrow center reveal container"}>
        <div className={"section-label"}>
          Introducing
        </div>
        <h2 className={"product-hero-title"}>
          Social Ads Freak
        </h2>
        <p className={"product-hero-subtitle"}>
          
                    The AI built to clone winning video ads — and rebuild them
                    around your product. Starring you, your cloned voice, or any
                    of 100+ avatars.
                
        </p>
      </div>
      <div className={"reveal container"}>
        <div className={"clone-swap"}>
          <h3 className={"clone-swap-title"}>
            
                        It Clones The DNA. You Swap The Details.
                    
          </h3>
          <div className={"clone-swap-grid"}>
            <div className={"clone-swap-card cloned"}>
              <div className={"clone-swap-label"}>
                Gets Cloned
              </div>
              <ul>
                <li>
                  The hook that stops the scroll
                </li>
                <li>
                  The structure, scene by scene
                </li>
                <li>
                  The pacing &amp; shot flow
                </li>
                <li>
                  The CTA that converts
                </li>
              </ul>
            </div>
            <div className={"clone-swap-arrow"} aria-hidden={"true"}>
              ⇄
            </div>
            <div className={"clone-swap-card swapped"}>
              <div className={"clone-swap-label"}>
                Gets Swapped
              </div>
              <ul>
                <li>
                  Your product
                </li>
                <li>
                  The face — you, or 100+ avatars
                </li>
                <li>
                  The voice — yours, cloned
                </li>
                <li>
                  The language — any of 30+
                </li>
              </ul>
            </div>
          </div>
          <p className={"clone-swap-caption"}>
            
                        Proven skeleton. Brand-new skin. That's the clone.
                    
          </p>
        </div>
      </div>
    </section>
  );
}
