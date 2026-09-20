export default function SiteHeader() {
  return (
    <header className={"nav"}>
      <div className={"nav-inner container"}>
        <div className={"logo"}>
          <em>
            Social Ads
          </em>
          <span>
            FREAK
          </span>
        </div>
        <nav>
          <a href={"#how-it-works"}>
            How It Works
          </a>
          <a href={"#samples"}>
            Examples
          </a>
          <a href={"#founders"}>
            Founders
          </a>
          <a href={"#start"} className={"btn-small"}>
            Start Cloning
          </a>
        </nav>
      </div>
    </header>
  );
}
