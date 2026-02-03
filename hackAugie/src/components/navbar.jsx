export default function Navbar() {
  return (
    <div className="container nav-bar">
      <div className="brand">
        Hack<span>Augie</span>
      </div>
      <nav className="nav-links" aria-label="Primary">
        <a href="#sponsors">Sponsors</a>
        <a href="#faq" scroll="smooth">FAQ</a>
        <a href="#team">Team</a>
        <a className="btn ghost" href="#register">
          Register
        </a>
      </nav>
    </div>
  );
}
