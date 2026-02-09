export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <div className="brand">HackAugie</div>
        <nav className="nav-links" aria-label="Primary">
          <a href="#voyage">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#faq">FAQ</a>
          <a href="#team">Our Team</a>
        </nav>
      </div>
    </header>
  );
}
