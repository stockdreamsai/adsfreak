import { Section, Title } from '../ui.jsx';

export default function Challenge() {
  return (
    <Section tone="tint" narrow className="challenge">
      <p className="lead center muted">but...there's just one problem...</p>
      <Title>Creating the Perfect Video Ads for Your Brand Can Be <b>Costly</b>, <b>Time-Consuming</b>, &amp; <b>Extremely Challenging</b>!</Title>
      <div className="split">
        <div>
          <p>You brief a creator for one ad for your store, your offer or your social posts, and when it finally lands two weeks later, you find out it cost <u>anywhere from $150 to $500</u>.</p>
          <p>And on top of that it delivers <b>disappointing engagement and conversion</b> results?</p>
          <p>I can't even begin to imagine having to work my way through all the steps it would take just to get one high-quality video done for every product I wanted to test.</p>
          <p>Maybe you've been there, too?</p>
          <p>Not to mention that paying an agency for quality creative <b>can be just as costly</b> — <u>$1,000 to $5,000 per testing cycle</u>, whether the ads convert or not.</p>
          <p>And if you think it's just easier to make the video yourself with generic AI tools, you're looking at a subscription for the video model, another for voice, another for lip-sync, another for upscaling — and <b>weeks of learning</b> which settings stop it looking like AI slop!</p>
        </div>
        <img className="split-img" src="/images/pro-step-pitch.jpg" alt="Producing a video ad" loading="lazy" />
      </div>

      <Title as="h3" className="options-title">When it comes to sourcing video ads, you only have <u>these options</u>…</Title>
      <div className="options">
        <div className="option bad">
          <h4>Traditional Ad Creation</h4>
          <ul>
            <li>Film it yourself</li>
            <li>Hire freelance creators</li>
            <li>Hire an agency</li>
            <li>Prompt generic AI and hope</li>
          </ul>
        </div>
        <div className="option good">
          <h4>AI High-Converting Clones</h4>
          <ul>
            <li>Getting noticed in the first second</li>
            <li>Human pacing, real speech rhythm</li>
            <li>More views, clicks, conversions</li>
            <li>Building a recognizable brand — with your face</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
