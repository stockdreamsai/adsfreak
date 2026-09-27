import { Section, Title, Panel } from '../ui.jsx';

const STATS = [
  <>Over <b>10 million businesses</b> advertise on Meta alone — all fighting for the same 1.7 seconds of attention.</>,
  <>Ad fatigue kills a winning creative <b>within days</b> — then your cost per result starts climbing.</>,
  <>Platforms reward fresh creatives with <b>cheaper clicks</b> and punish stale ones with dying reach.</>,
  <>The brands winning right now aren't smarter. They <b>out-produce you 50 to 1</b>.</>,
];

export default function Problem() {
  return (
    <Section narrow className="problem">
      <Title>We all know that a business without video ads is a drag. But a business with bad, uninspiring ads?</Title>
      <p className="lead-strong">That's a <u>conversion killer.</u></p>
      <div className="split">
        <div>
          <p>Every business out there is running ads. But only a select few know the secret sauce of using the right, <u>high-converting video ads that turn casual scrollers into eager buyers.</u></p>
          <p>Wondering if it's all just hype? The facts speak for themselves.</p>
          <ul className="stat-list">
            {STATS.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        <img className="split-img" src="/images/reference-ad.jpg" alt="A winning video ad" loading="lazy" />
      </div>
      <p className="lead center">and I can keep going all day...</p>
      <Panel tone="accent">
        <p>Now, you could throw up any generic AI clip and call it a day. <b>But will it captivate? Inspire? Convert?</b></p>
        <p>On every feed, every brand is visually loud. The ones whose ads hook in the first second, keep the pacing human and land the CTA — those are the true victors.</p>
        <p>That's not just a fact - it's a <u>visual revolution</u>.</p>
        <p>So, ask yourself: "Are my ads just filling the feed, or are they driving conversions and paying for themselves <b>a thousand times over?</b>"</p>
      </Panel>
    </Section>
  );
}
