import { CTAButton, MediaPlaceholder } from '../components/Shared.jsx';

export default function Introducing() {
  return (
    <section className="introducing" id="introducing">
      <div className="container narrow center">
        <p className="intro-kicker">Introducing</p>
        <h2 className="intro-name grad-text">AdsFreak</h2>
        <p className="intro-sub">
          Your Ultimate <strong>Artificial Intelligence</strong> Solution for High-Converting Ad Creatives
        </p>
        {/* PLACEHOLDER: product mockup bundle image */}
        <MediaPlaceholder label="Image — AdsFreak product mockup" ratio="16/9" />

        <h3 className="intro-steps-title">
          Generate AI-Powered Ad Creatives for <span className="grad-text">Any Business</span> With Just 3 Simple Steps:
        </h3>
        <ol className="intro-steps">
          <li><strong>STEP 1</strong> — Choose the ad format you need</li>
          <li><strong>STEP 2</strong> — Describe your product or offer</li>
          <li><strong>STEP 3</strong> — Generate, download &amp; launch</li>
        </ol>
        <CTAButton large />
        <p className="intro-nsn">
          <strong>No Prior Design Skills Necessary.</strong> Select, Describe, Generate — that's all it takes to create ads that sell.
        </p>
      </div>
    </section>
  );
}
