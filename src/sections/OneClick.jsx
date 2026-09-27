import { Section, Title, CTA } from '../ui.jsx';

export default function OneClick() {
  return (
    <Section tone="tint" narrow className="oneclick">
      <Title>You're Just <b>One Click Away</b> From Getting Unlimited High-Converting Video Ads for Any Business.</Title>
      <div className="split">
        <div>
          <p>When you consider the time and costs it takes to create video ads, getting access to Social Ads Freak...is...well... <b>just smart.</b></p>
          <p>Think about it for a moment.</p>
          <p>You need to <u>stand out in front of your competitors</u>, right?</p>
          <p>Considering the fact that there's <b>no monthly charge</b> for access to Social Ads Freak, signing up for your very own personal account is a <b>no brainer</b>!</p>
          <p>It'll be one of the <b>best investments</b> you'll ever make for your business.</p>
          <p>I guarantee it.</p>
          <p className="sign">— Ali G, Founder</p>
        </div>
        <img className="split-img" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Ali G" loading="lazy" />
      </div>
      <CTA />
    </Section>
  );
}
