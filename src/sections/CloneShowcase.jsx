import { SectionTitle, VideoFrame } from '../components/Shared.jsx';

// The Original → The Clone demo (moved out of the hero to make room for the VSL).
export default function CloneShowcase() {
  return (
    <section className="clone-showcase">
      <div className="container">
        <SectionTitle
          kicker="The Original → The Clone"
          title="Watch A Winning Ad Get"
          highlight="Cloned Around A New Product"
          sub="Same hook. Same pacing. Same structure that already converted — rebuilt with a new face and a new product."
        />
        <div className="hero-showcase">
          <div className="showcase-col tilt-left">
            <VideoFrame
              src="https://ddufpaulv1kgi.cloudfront.net/videos/rogan-onnit.mp4"
              label="The Original"
            />
          </div>
          <div className="showcase-middle">
            <div className="showcase-avatars">
              <img src="https://ddufpaulv1kgi.cloudfront.net/avatars/Freya.jpg" alt="" aria-hidden="true" />
              <img src="https://ddufpaulv1kgi.cloudfront.net/avatars/Marcus.jpg" alt="" aria-hidden="true" />
              <img className="showcase-avatar-main" src="https://ddufpaulv1kgi.cloudfront.net/avatars/ali.JPG" alt="Avatar" />
            </div>
            <p className="showcase-caption">your face — or 100+ others</p>
            <img className="showcase-product" src="https://ddufpaulv1kgi.cloudfront.net/thumbnails/focus-factor.jpg" alt="Product" />
            <span className="showcase-arrow" aria-hidden="true">⤳</span>
          </div>
          <div className="showcase-col tilt-right">
            <VideoFrame
              src="https://ddufpaulv1kgi.cloudfront.net/videos/ali-focus4.mp4"
              label="✓ The Clone"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
