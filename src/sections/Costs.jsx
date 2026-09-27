import { Section, Title } from '../ui.jsx';

const COSTS = [
  { what: 'a Freelance UGC Creator', cost: '$150-$500 per video', img: '/images/recreated-ad.jpg', tone: 'a' },
  { what: 'an Agency Testing Cycle', cost: '$1,000-$5,000 per round', img: '/images/pro-step-scenario.jpg', tone: 'b' },
  { what: 'One Round of Revisions', cost: '7-14 days of waiting', img: '/images/pro-step-storyboard-poster.jpg', tone: 'c' },
  { what: 'a DIY Generic-AI Stack', cost: '4 subscriptions + weeks of learning', img: '/images/pro-step-editor-poster.jpg', tone: 'd' },
];

export default function Costs() {
  return (
    <Section className="costs">
      <Title>What Are the Real Costs of Video Ads?</Title>
      <p className="lead">You can expect to <b>spend a lot of money</b> on things like TikTok ads, Reels, product demos and testimonial videos</p>
      <p className="tiny grad">Sadly, the more ads you need to test, the more it will cost!</p>
      {COSTS.map((c, i) => (
        <div className={`cost-row${i % 2 ? ' reverse' : ''}`} key={c.what}>
          <div className="cost-copy">
            <p className="cost-label">What You Can Expect to Pay for {c.what}:</p>
            <p className="cost-value">{c.cost}</p>
          </div>
          <div className={`cost-img tone-${c.tone}`}>
            <img src={c.img} alt="" loading="lazy" />
          </div>
        </div>
      ))}
    </Section>
  );
}
