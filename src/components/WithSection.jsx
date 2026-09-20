export default function WithSection() {
  return (
    <section className={"section dark bg-glow with-section"}>
      <div className={"narrow center reveal container"}>
        <div className={"section-label"}>
          The Shift
        </div>
        <h2>
          The Math Changes.
        </h2>
        <p className={"subheadline"}>
          
                    The old way: $150–$500 per video. 7–14 days per round.
                    $1,000–$5,000 per testing cycle — before you even find a
                    winner.
                    
          <br />
          
                    With Social Ads Freak, creative becomes output. Not
                    overhead.
                
        </p>
      </div>
      <div className={"benefits-grid reveal-stagger container"}>
        <div className={"benefit-pill"}>
          No paying per video
        </div>
        <div className={"benefit-pill"}>
          No waiting on creators
        </div>
        <div className={"benefit-pill"}>
          No filming required
        </div>
        <div className={"benefit-pill"}>
          No creative bottleneck
        </div>
      </div>
      {/* THE LEDGER — side-by-side cost/speed reality check */}
      <div className={"ledger-grid reveal-stagger container"}>
        <div className={"ledger-card"}>
          <div className={"ledger-head"}>
            <div className={"ledger-name"}>
              The Old Way
            </div>
            <div className={"ledger-tag"}>
              Creators, crews, schedules
            </div>
          </div>
          <ul className={"ledger-rows"}>
            <li>
              <span>
                Cost per video
              </span>
              <b>
                $150 – $500
              </b>
            </li>
            <li>
              <span>
                Turnaround
              </span>
              <b>
                7 – 14 days
              </b>
            </li>
            <li>
              <span>
                Variations per round
              </span>
              <b>
                3 – 5
              </b>
            </li>
            <li>
              <span>
                Revisions
              </span>
              <b>
                Ask and wait
              </b>
            </li>
            <li>
              <span>
                Who's in control
              </span>
              <b>
                Their calendar
              </b>
            </li>
          </ul>
          <div className={"ledger-total"}>
            <span>
              One testing cycle
            </span>
            <b className={"ledger-total-bad"}>
              $1,000 – $5,000
            </b>
          </div>
        </div>
        <div className={"ledger-vs"} aria-hidden={"true"}>
          vs
        </div>
        <div className={"ledger-card ledger-card-win"}>
          <div className={"ledger-head"}>
            <div className={"ledger-name"}>
              Social Ads Freak
            </div>
            <div className={"ledger-tag"}>
              You, a laptop, tonight
            </div>
          </div>
          <ul className={"ledger-rows"}>
            <li>
              <span>
                Cost per video
              </span>
              <b>
                Pennies
              </b>
            </li>
            <li>
              <span>
                Turnaround
              </span>
              <b>
                Minutes
              </b>
            </li>
            <li>
              <span>
                Variations per round
              </span>
              <b>
                As many as you want
              </b>
            </li>
            <li>
              <span>
                Revisions
              </span>
              <b>
                Re-render, done
              </b>
            </li>
            <li>
              <span>
                Who's in control
              </span>
              <b>
                You. Entirely.
              </b>
            </li>
          </ul>
          <div className={"ledger-total"}>
            <span>
              One testing cycle
            </span>
            <b className={"ledger-total-good"}>
              Included
            </b>
          </div>
        </div>
      </div>
      <p className={"ledger-caption reveal container"}>
        
                Same ad budget. Ten times the shots on goal.
            
      </p>
      <div className={"narrow center reveal container"} style={{"marginTop": "70px"}}>
        <p className={"strong-close"}>
          
                    Clone.
                    
          <br />
          
                    Insert face or avatar.
                    
          <br />
          
                    Translate.
                    
          <br />
          
                    Launch.
                
        </p>
      </div>
      <div className={"narrow center reveal container"} style={{"marginTop": "60px"}}>
        <div className={"with-highlight-box"}>
          <h3>
            Test 5–10 cloned variations tonight.
          </h3>
          <p>
            Wake up to data.
          </p>
        </div>
      </div>
      <div className={"narrow center reveal container"} style={{"marginTop": "50px"}}>
        <p className={"strong-close gradient-text"}>
          
                    Creative velocity is the new unfair advantage.
                
        </p>
      </div>
    </section>
  );
}
