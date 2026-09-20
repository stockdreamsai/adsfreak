export default function HowItWorksSection() {
  return (
    <section className={"section light"} id={"how-it-works"}>
      <div className={"container"}>
        <div className={"section-label center"}>
          How It Works
        </div>
        <h2 className={"center"}>
          Two Tracks. One Clone Engine.
        </h2>
        <p className={"subheadline center"}>
          
                    Every project starts the same — clone a winner, swap in your
                    details. Then pick how far you take it.
                
        </p>
        <div className={"how-toggle"} role={"group"} aria-label={"Choose your studio"}>
          <button type={"button"} className={"active"} data-track={"viral"} aria-pressed={"true"}>
            
                        ⚡ Viral Ads
                    
          </button>
          <button type={"button"} data-track={"pro"} aria-pressed={"false"}>
            
                        🎬 Pro Studio
                    
          </button>
        </div>
        <p className={"how-toggle-note"}>
          
                    Pick a studio to see its flow — same switch you get inside
                    the app.
                
        </p>
        <div className={"how-panels"}>
          {/* VIRAL TRACK: 3 steps */}
          <div className={"track viral active"} id={"trackViral"}>
            <div className={"track-head"}>
              <span className={"track-badge"}>
                ⚡ Viral Ads
              </span>
              <h3>
                Clone an ad in minutes
              </h3>
            </div>
            <ol className={"track-steps"}>
              <li className={"track-step"}>
                <span className={"track-step-num"}>
                  1
                </span>
                <div className={"track-step-text"}>
                  <strong>
                    Pick an ad to clone
                  </strong>
                  <p>
                    
                                        Drop in a winner or start from 274
                                        proven, scroll-stopping templates.
                                    
                  </p>
                </div>
                <div className={"track-step-shot"}>
                  <video data-src={"videos/step-templates.mp4"} poster={"/images/step-templates-poster.jpg"} width={"1080"} height={"752"} muted loop playsInline preload={"none"} aria-label={"A grid of proven ad templates from the library"}></video>
                </div>
              </li>
              <li className={"track-step"}>
                <span className={"track-step-num"}>
                  2
                </span>
                <div className={"track-step-text"}>
                  <strong>
                    Swap in your details
                  </strong>
                  <p>
                    
                                        Your product, your face (or 100+
                                        avatars), your cloned voice — in 30+
                                        languages.
                                    
                  </p>
                </div>
                <div className={"track-step-shot"}>
                  <img src={"/images/step-upload.jpg"} alt={"Your photo and your product, side by side"} loading={"lazy"} />
                </div>
              </li>
              <li className={"track-step"}>
                <span className={"track-step-num"}>
                  3
                </span>
                <div className={"track-step-text"}>
                  <strong>
                    Generate &amp; launch
                  </strong>
                  <p>
                    
                                        One scroll-stopping vertical clip, ready
                                        to post tonight.
                                    
                  </p>
                </div>
                <div className={"track-step-shot"}>
                  <video data-src={"videos/step-generated.mp4"} poster={"/images/step-generated-poster.jpg"} width={"1080"} height={"640"} muted loop playsInline preload={"none"} aria-label={"Three scenes from a generated ad starring the uploaded face and product"}></video>
                </div>
              </li>
            </ol>
          </div>
          {/* PRO TRACK: 4 steps */}
          <div className={"track pro"} id={"trackPro"}>
            <div className={"track-head"}>
              <span className={"track-badge alt"}>
                🎬 Pro Studio
              </span>
              <span className={"track-free"}>
                Included free
              </span>
              <h3>
                Build the full video story
              </h3>
            </div>
            <ol className={"track-steps"}>
              <li className={"track-step"}>
                <span className={"track-step-num"}>
                  1
                </span>
                <div className={"track-step-text"}>
                  <strong>
                    Pitch your story
                  </strong>
                  <p>
                    
                                        Describe your idea (or recreate a
                                        reference video), pick your avatar &amp;
                                        voice, and set up to 20 scenes.
                                    
                  </p>
                </div>
                <div className={"track-step-shot"}>
                  <img src={"/images/pro-step-pitch.jpg"} alt={"Pro Studio pitch screen \u2014 describe your story or paste a reference video"} loading={"lazy"} />
                </div>
              </li>
              <li className={"track-step"}>
                <span className={"track-step-num"}>
                  2
                </span>
                <div className={"track-step-text"}>
                  <strong>
                    Review the scenario
                  </strong>
                  <p>
                    
                                        AI drafts the story, characters,
                                        settings &amp; props — tweak anything
                                        before it builds.
                                    
                  </p>
                </div>
                <div className={"track-step-shot"}>
                  <img src={"/images/pro-step-scenario.jpg"} alt={"Pro Studio scenario review \u2014 AI-drafted story and characters"} loading={"lazy"} />
                </div>
              </li>
              <li className={"track-step"}>
                <span className={"track-step-num"}>
                  3
                </span>
                <div className={"track-step-text"}>
                  <strong>
                    Generate the storyboard
                  </strong>
                  <p>
                    
                                        It renders each scene's image and video
                                        clip — regenerate or swap any you like.
                                    
                  </p>
                </div>
                <div className={"track-step-shot"}>
                  <video data-src={"videos/pro-step-storyboard.mp4"} poster={"/images/pro-step-storyboard-poster.jpg"} width={"1080"} height={"720"} muted loop playsInline preload={"none"} aria-label={"Pro Studio storyboard \u2014 every scene rendered with version history"}></video>
                </div>
              </li>
              <li className={"track-step"}>
                <span className={"track-step-num"}>
                  4
                </span>
                <div className={"track-step-text"}>
                  <strong>
                    Produce &amp; export
                  </strong>
                  <p>
                    
                                        Add music, captions, stickers &amp; your
                                        logo on the timeline editor, then export
                                        your movie.
                                    
                  </p>
                </div>
                <div className={"track-step-shot"}>
                  <video data-src={"videos/pro-step-editor.mp4"} poster={"/images/pro-step-editor-poster.jpg"} width={"1080"} height={"688"} muted loop playsInline preload={"none"} aria-label={"Pro Studio timeline editor with captions, audio waveform, and export"}></video>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <p className={"tracks-caption center"}>
          
                    One clone engine. Pick how far you take it.
                
        </p>
      </div>
      {/* VISUAL FLOW DEMO */}
      <div className={"container"} style={{"marginTop": "70px"}}>
        <div className={"flow-card reveal"}>
          {/* LEFT: Reference */}
          <div className={"flow-side"}>
            <div className={"flow-chip"}>
              Winning Template
            </div>
            <div className={"flow-media"}>
              <video data-src={"https://ddufpaulv1kgi.cloudfront.net/videos/rogan-onnit.mp4"} poster={"/images/reference-ad.jpg"} muted loop playsInline preload={"none"} aria-label={"Winning template example \u2014 click to watch with sound"}></video>
            </div>
            <p className={"flow-caption"}>
              Pick a winning video UGC ad
            </p>
          </div>
          {/* CENTER: Product */}
          <div className={"flow-center"}>
            <div className={"flow-product"}>
              <img src={"/images/product.png"} alt={"Your product"} />
            </div>
            <div className={"flow-arrow-svg"}>
              <svg viewBox={"0 0 260 140"} xmlns={"http://www.w3.org/2000/svg"}>
                <defs>
                  <marker id={"arrowHead"} markerWidth={"10"} markerHeight={"10"} refX={"9"} refY={"5"} orient={"auto"} markerUnits={"strokeWidth"}>
                    <path d={"M0,0 L10,5 L0,10"} fill={"none"} stroke={"rgba(100,125,238,0.65)"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                  </marker>
                </defs>
                <path d={"M20 52 C95 132, 165 132, 240 52"} fill={"none"} stroke={"rgba(100,125,238,0.65)"} strokeWidth={"4"} strokeLinecap={"round"} markerEnd={"url(#arrowHead)"}></path>
              </svg>
            </div>
            <p className={"flow-caption"}>
              Select your product
            </p>
          </div>
          {/* RIGHT: AI-Recreated */}
          <div className={"flow-side"}>
            <div className={"flow-chip glow"}>
              Your Clone
            </div>
            <div className={"flow-media"}>
              <video data-src={"https://ddufpaulv1kgi.cloudfront.net/videos/ali-focus4.mp4"} poster={"/images/recreated-ad.jpg"} muted loop playsInline preload={"none"} aria-label={"AI recreated ad example \u2014 click to watch with sound"}></video>
            </div>
            <p className={"flow-caption"}>
              
                            Generate a fresh clone — your product, your face or
                            any avatar
                        
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
