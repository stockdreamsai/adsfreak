import { Section, Title } from '../ui.jsx';

// StockDreams gives a free commercial license here; Social Ads Freak's
// equivalent over-delivery is Pro Studio, a second product included free.
export default function ProStudio() {
  return (
    <Section narrow className="prostudio">
      <Title>You'll Also Receive <b>Pro Studio — A Second Product</b> FREE Today!</Title>
      <p className="lead">Use This To Build <b>Full Multi-Scene Video Stories</b> — Not Just Quick Ads.</p>
      <div className="split">
        <div>
          <p>As a way of over delivering, we want to upgrade your investment in Social Ads Freak with <b>Pro Studio, included free</b>.</p>
          <p>This means that not only can you clone quick viral ads, but you can also build <b>full video stories</b>: AI writes the script, generates up to 20 scenes with multi-shot cuts, voiceover and music, and hands you a timeline editor to polish it.</p>
          <p>One login. Two studios. You flip between them with a single switch — <b>Viral Ads</b> when you need an ad tonight, <b>Pro Studio</b> when one clip isn't enough.</p>
          <p>And with the launch-window pricing, you get both for <b>one single payment</b>.</p>
        </div>
        <video className="split-img" src="/videos/pro-step-storyboard.mp4" poster="/images/pro-step-storyboard-poster.jpg" muted autoPlay loop playsInline preload="metadata" />
      </div>
    </Section>
  );
}
