import { DarkDecor } from '../components/Decor.jsx';

export default function WatchDemo() {
  return (
    <section className="watch-demo">
      <DarkDecor floor />
      <div className="container narrow center">
        <h2 className="on-dark">Watch The Freak In Action</h2>
        <p className="on-dark demo-sub">
          See Social Ads Freak clone, rebuild, and launch a real ad — step by step.
        </p>
        <div className="glow-frame glow-soft">
        <div className="demo-embed">
          <iframe
            src="https://player.vimeo.com/video/1178809437?h=4ce86e0558&badge=0&autopause=0&player_id=0&app_id=58479"
            title="Social Ads Freak demo"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>
      </div>
    </section>
  );
}
