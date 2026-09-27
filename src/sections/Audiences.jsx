import { Section, Title, Panel, Label } from '../ui.jsx';

const AUDIENCES = [
  { icon: '📢', title: 'Marketing Agencies', text: 'Scale your creative output 10x overnight — test every angle of every campaign without hiring videographers.' },
  { icon: '🛒', title: 'Ecom Brands', text: 'Test 50 ad variations in the time it takes to shoot one. Find your winning creative faster and scale profitably.' },
  { icon: '🏪', title: 'Local Businesses', text: 'Create professional video ads on a shoestring budget. No camera crew, no studio — just results.' },
  { icon: '📱', title: 'Social Media Influencers', text: 'Multiply your content output. Create sponsored content, promos, and engaging videos without burning out.' },
  { icon: '🎯', title: 'Lead Generation Companies', text: 'Drive conversions with high-performing video ads tailored to every niche and audience segment.' },
  { icon: '💼', title: 'Freelancers', text: 'Produce pro-quality video ads in minutes — no camera, no editing suite, no production budget.' },
];

export default function Audiences() {
  return (
    <Section tone="dark" className="audiences">
      <Panel tone="none">
        <Label>Who It's For</Label>
        <Title><b>Everyone can Benefit from Social Ads Freak</b></Title>
        <div className="audience-grid">
          {AUDIENCES.map((a) => (
            <div className="audience" key={a.title}>
              <span className="audience-icon" aria-hidden="true">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </Panel>
    </Section>
  );
}
