export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="logo" href="#top">
          <span className="logo-mark">SA</span> Social Ads <em className="logo-freak">FREAK</em>
        </a>
        <nav className="navbar-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#samples">Examples</a>
          <a href="#buy" className="navbar-cta">Start Cloning</a>
        </nav>
      </div>
    </header>
  );
}
