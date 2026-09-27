import { Section, Title, Panel } from '../ui.jsx';

export default function Guarantee() {
  return (
    <Section className="guarantee">
      <Title className="grad join"><b>JOIN THOUSANDS SATISFIED CUSTOMERS.</b></Title>
      <Panel tone="dark" className="guarantee-panel">
        <div>
          <p>We are <b>100% confident</b> in its ability to do what we're promising you, that we're gonna make this an Easy No-Brainer!</p>
          <p>If you use Social Ads Freak for a month and you don't like it, we will <u>refund all your money</u> and let you keep all the ads that you created, <b>no questions asked!</b></p>
          <p>We're going to make this a complete <b>RISK FREE DECISION</b> for you!</p>
        </div>
        <div className="seal" aria-hidden="true"><span>30</span>DAYS<br />MONEY BACK</div>
      </Panel>
    </Section>
  );
}
