import { Section, Title, Label } from '../ui.jsx';

export default function Demo() {
  return (
    <Section tone="dark" className="demo">
      <div className="center">
        <Label>Demo</Label>
        <Title><b>Watch How We Generate</b></Title>
        <p className="lead">Freakishly Real Video Ads in <b>less than 60 seconds.</b></p>
        <div className="embed">
          <iframe
            src="https://player.vimeo.com/video/1178809437?h=4ce86e0558&badge=0&autopause=0&player_id=0&app_id=58479"
            title="Social Ads Freak demo"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
