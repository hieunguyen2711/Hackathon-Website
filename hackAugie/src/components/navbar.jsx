export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <div className="brand">HackAugie</div>
        <nav className="nav-links" aria-label="Primary">
          <a href="#voyage">The Voyage</a>
          <a href="#timeline">Map (Timeline)</a>
          <a href="#sponsors">Allies (Sponsors)</a>
          <a href="#faq">Lore (FAQ)</a>
          <a href="#team">Crew</a>
          <a className="nav-cta" href="#register">
            Join the Raid
          </a>
        </nav>
      </div>
    </header>
  );
}
