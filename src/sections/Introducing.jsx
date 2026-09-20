import { CTAButton } from '../components/Shared.jsx';

export default function Introducing() {
  return (
    <section className="introducing" id="introducing">
      <div className="container narrow center">
        <p className="intro-kicker">Introducing</p>
        <h2 className="intro-name grad-text">Social Ads Freak</h2>
        <p className="intro-sub">
          The AI built to <strong>clone winning video ads</strong> — and rebuild them around your
          product. Starring you, your cloned voice, or any of 100+ avatars.
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
        <p className="dna-tagline">Proven skeleton. Brand-new skin. <strong>That's the clone.</strong></p>

        <h3 className="intro-duo-title">Two Studios. One <span className="grad-text">Freak</span>.</h3>
        <div className="duo-grid">
          <div className="duo-card">
            <h4>⚡ Viral Ads</h4>
            <p className="duo-sub">Clone An Ad In Minutes</p>
            <p>
              Pick from 274 proven templates, drop in your product and face, hit generate.
              Scroll-stopping vertical ads ready to launch tonight.
            </p>
            <div className="duo-pills">
              <span>274 templates</span><span>Ready in minutes</span><span>Built for TikTok &amp; Reels</span>
            </div>
          </div>
          <div className="duo-card">
            <h4>🎬 Pro Studio <span className="duo-free">Included free</span></h4>
            <p className="duo-sub">Build Full Video Stories</p>
            <p>
              When one clip isn't enough: AI writes the script, then builds your video scene by
              scene — up to 20 scenes with multi-shot cuts, voiceover, and music — on a full
              timeline editor.
            </p>
            <div className="duo-pills">
              <span>Up to 20 scenes</span><span>Multi-shot cuts</span><span>Voiceover + music</span>
            </div>
          </div>
        </div>
        <p className="duo-tagline">Same clone DNA. Two ways to deploy it.</p>

        <ol className="intro-steps">
          <li><strong>STEP 1</strong> — Pick an ad to clone (or a proven template)</li>
          <li><strong>STEP 2</strong> — Swap in your product, face &amp; voice</li>
          <li><strong>STEP 3</strong> — Generate, download &amp; launch</li>
        </ol>
        <CTAButton large />
        <p className="intro-nsn">
          <strong>No camera. No crew. No editing.</strong> Select, describe, generate — that's all
          it takes to create video ads that sell.
        </p>
      </div>
    </section>
  );
}
