export default function Navbar() {
  return (
    <div class="container nav-bar">
      <div class="brand">
        Hack<span>Augie</span>
      </div>
      <nav class="nav-links" aria-label="Primary">
        <a href="#sponsors">Sponsors</a>
        <a href="#faq">FAQ</a>
        <a href="#team">Team</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a class="btn ghost" href="#register">
          Register
        </a>
      </nav>
    </div>
  );
}
