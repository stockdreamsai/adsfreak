// StockDreams-style benefit bullets right under the hero offer.
// Copy pulled from the checkmark list that also appears near the order stack.
export default function HeroBenefitsSection() {
  return (
    <section className={"section dark hero-benefits-section"}>
      <div className={"narrow center reveal container"}>
        <div className={"feature-list feature-list-grid reveal-stagger"}>
          <div className={"feature-item"}>
            <span className={"feature-icon"}>✓</span>
            <span>Clones proven video structure — the hook, pacing, and CTA flow that already converts</span>
          </div>
          <div className={"feature-item"}>
            <span className={"feature-icon"}>✓</span>
            <span>Two studios in one: quick Viral Ads + full Pro Studio stories</span>
          </div>
          <div className={"feature-item"}>
            <span className={"feature-icon"}>✓</span>
            <span>Star in your ads yourself — with your own cloned voice</span>
          </div>
          <div className={"feature-item"}>
            <span className={"feature-icon"}>✓</span>
            <span>Or choose from 100+ freakishly real AI avatars instantly</span>
          </div>
          <div className={"feature-item"}>
            <span className={"feature-icon"}>✓</span>
            <span>Generates natural-sounding versions in 30+ languages</span>
          </div>
          <div className={"feature-item"}>
            <span className={"feature-icon"}>✓</span>
            <span>Trend Radar finds what's going viral in your niche</span>
          </div>
        </div>
      </div>
    </section>
  );
}
