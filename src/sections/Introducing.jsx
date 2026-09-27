import { Section, Title, CTA } from '../ui.jsx';
import { STEPS } from './Steps.jsx';

export default function Introducing() {
  return (
    <Section tone="tint" narrow className="introducing" id="introducing">
      <Title><b>Introducing Social Ads Freak</b></Title>
      <p className="lead">Your Ultimate A<b>rtificial Intelligence</b> Solution for High-Converting Video Ads</p>
      <img className="boxshot" src="/brand/png/saf-boxshot.png" alt="Social Ads Freak" />

      <Title className="steps-title">
        Generate Artificial Intelligence Video Ads <b>for <span className="grad">Any Business</span> With Just 3 Simple Steps:</b>
      </Title>
      <ol className="timeline">
        {STEPS.map((s) => (
          <li key={s.n}>
            <span className="tl-dot" aria-hidden="true" />
            <div>
              <h3>STEP {s.n}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <CTA />

      <Title className="skills-title">No Prior Design Skills Necessary</Title>
      <p className="lead"><b>Select, Describe, Generate</b> And You've Got A Scroll-Stopping Ad Ready For The Masses.</p>
      <div className="split">
        <img className="split-img wide" src="/images/step-generated-poster.jpg" alt="A generated ad" loading="lazy" />
        <div>
          <p>Social Ads Freak was designed with even the most technically challenged person in mind.</p>
          <p>That means that even if you don't have a video-editing bone in your body, you can use Social Ads Freak <b>right out the gate</b>.</p>
          <p>No kidding.</p>
          <p>You really only need to pick the ad you want to clone, swap in your details, hit the generate button and you're good to go.</p>
        </div>
      </div>
    </Section>
  );
}
