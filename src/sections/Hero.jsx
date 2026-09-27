import { Section, Title, SalesVideo, OfferBlock, TypedWords } from '../ui.jsx';

export default function Hero() {
  return (
    <Section id="top" narrow className="hero">
      <Title as="h1">
        Skyrocket Your Conversions, Traffic and Customer Engagement With{' '}
        <b className="grad">AI Custom Made Video Ads</b> Starring <b className="grad"><TypedWords /></b>
      </Title>
      <p className="hero-sub">Outpace Your Competition.</p>
      <p className="hero-mini">Implement AI in your Marketing</p>
      <p className="hero-play">↓ Play Now to Discover What You've Been Missing! ↓</p>
      <SalesVideo />
      <OfferBlock />
    </Section>
  );
}
