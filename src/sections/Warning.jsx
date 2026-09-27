import { Section, Title } from '../ui.jsx';

export default function Warning() {
  return (
    <Section narrow className="warning">
      <Title><span className="red">WARNING!</span><br />The <b>Discount</b> For Social Ads Freak Is Only Available For <b>A VERY SHORT</b> Limited Time.</Title>
      <div className="split">
        <img className="split-img" src="/brand/png/saf-boxshot.png" alt="Social Ads Freak" loading="lazy" />
        <div>
          <p>The good news is that <b>Social Ads Freak is being discounted</b> so that it's in the reach of anyone that needs it to power their business to new heights.</p>
          <p>You won't find any other software that clones high-converting video ads specifically tailored for <b>all types of businesses</b>. And especially not for this price.</p>
          <p>But the bad news is that the discount that's being offered for Social Ads Freak is only <b>available for a limited time</b>. That means you only have mere moments to get access to all the amazing features in Social Ads Freak for a low one time investment.</p>
          <p>As a matter of fact, <b>the price returns to $197</b> once the launch is over. And once the special launch is over? You'll be forced to pay a higher amount or even a monthly recurring fee.</p>
          <p>Make <b>the smart decision</b> and get access today…while you still can.</p>
        </div>
      </div>
    </Section>
  );
}
