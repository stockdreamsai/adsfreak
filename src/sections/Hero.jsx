import { Section, Title, SalesVideo, OfferBlock, TypedWords, Label } from '../ui.jsx';

export default function Hero() {
  return (
    <Section id="top" tone="dark" narrow className="hero">
      <Label>The Freak Is Back… Now With AI Superpowers</Label>
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
