import { MediaPlaceholder } from '../components/Shared.jsx';

export default function WatchDemo() {
  return (
    <section className="watch-demo">
      <div className="container narrow center">
        <h2 className="on-dark">Watch How We Generate</h2>
        <p className="on-dark demo-sub">High-converting AdsFreak creatives in less than 60 seconds.</p>
        {/* PLACEHOLDER: replace with your demo video embed */}
        <MediaPlaceholder label="▶ Demo video — replace with embed" dark />
      </div>
    </section>
  );
}
