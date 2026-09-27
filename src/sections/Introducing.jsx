import { CTAButton } from '../components/Shared.jsx';
import Doodles from '../components/Decor.jsx';

export default function Introducing() {
  return (
    <section className="introducing" id="introducing">
      <Doodles />
      <div className="container narrow center">
        <p className="intro-kicker">Introducing</p>
        <h2 className="intro-name grad-text">Social Ads Freak</h2>
        <p className="intro-sub">
          The only AI with a <em className="hl">Clone Engine</em>: it reverse-engineers video ads
          that already won and rebuilds them around <em className="hl">your product</em> —
          starring you, your cloned voice, or any of 100+ avatars.
        </p>
        <img className="intro-boxshot" src="/brand/png/saf-boxshot.png" alt="Social Ads Freak" />

        <h3 className="intro-dna-title">It Clones The DNA. You Swap The Details.</h3>
        <div className="dna-grid">
          <div className="dna-card">
            <h4>Gets Cloned</h4>
            <ul>
              <li>The hook that stops the scroll</li>
              <li>The structure, scene by scene</li>
              <li>The pacing &amp; shot flow</li>
              <li>The CTA that converts</li>
            </ul>
          </div>
          <span className="dna-swap" aria-hidden="true">⇄</span>
          <div className="dna-card">
            <h4>Gets Swapped</h4>
            <ul>
              <li>Your product</li>
              <li>The face — you, or 100+ avatars</li>
              <li>The voice — yours, cloned</li>
              <li>The language — any of 30+</li>
            </ul>
          </div>
        </div>
        <p className="dna-tagline">
          Proven skeleton. Brand-new skin. <strong>That's the clone.</strong>
        </p>

        <h3 className="intro-duo-title">
          Two Studios. One <span className="grad-text">Freak</span>.
        </h3>
        <div className="duo-grid">
          <div className="duo-card">
            <h4>⚡ Viral Ads</h4>
            <p className="duo-sub">Clone an ad in minutes</p>
            <p>274 proven templates. Drop in your product and face, hit generate — launch tonight.</p>
          </div>
          <div className="duo-card">
            <h4>🎬 Pro Studio <span className="duo-free">Included free</span></h4>
            <p className="duo-sub">Build full video stories</p>
            <p>AI writes the script and builds up to 20 scenes with voiceover and music, on a full timeline editor.</p>
          </div>
        </div>

        <CTAButton large>Start Cloning Winners — $47</CTAButton>
        <p className="intro-nsn">
          <strong>No camera. No crew. No editing. No monthly fees.</strong>
        </p>
      </div>
    </section>
  );
}
