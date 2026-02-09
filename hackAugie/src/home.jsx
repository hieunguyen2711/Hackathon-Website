import AnimatedContent from "./components/AnimatedContent";
import Circular from "./components/CircularGallery";
import Timeline from "./components/Timeline";
export default function Home() {
  return (
    <div className="home" id="voyage">
      <section className="welcome-section">
        <AnimatedContent delay={0}>
          <div className="welcome-eyebrow">✦</div>
          <h1 className="welcome-title section-headline">
            The Legend of <span>HackAugie</span>
          </h1>
          <p className="section-subtitle">A weekend-long voyage into code</p>
          <div className="welcome-divider" />
        </AnimatedContent>
        <AnimatedContent delay={0.2} distance={50}>
          <p className="welcome-copy">
            Gather your clan and prepare for a voyage into the unknown.
            HackAugie is a weekend-long saga of creation, innovation, and
            discovery. Like the Vikings of old who traversed treacherous seas
            to find new worlds, you will navigate through lines of code to
            build something legendary.
          </p>
        </AnimatedContent>
        <div className="welcome-cards">
          <div className="welcome-card">
            <div className="welcome-icon">🧭</div>
            <h3>Navigate</h3>
            <p>
              Explore new technologies and chart your own course. Mentors and
              workshops will guide you through the stormy seas of bugs and
              errors.
            </p>
          </div>
          <div className="welcome-card">
            <div className="welcome-icon">⚓</div>
            <h3>Build</h3>
            <p>
              Drop anchor and set up your development environment. Construct
              mighty projects that will stand the test of time and impress the
              gods (judges).
            </p>
          </div>
          <div className="welcome-card">
            <div className="welcome-icon">🗺️</div>
            <h3>Conquer</h3>
            <p>
              Present your treasure to the realm. Win glorious prizes, earn the
              respect of your peers, and etch your name into the history books.
            </p>
          </div>
        </div>
      </section>
      <section className="timeline" id="timeline">
        <div className="timeline-container">
          <div className="timeline-header">
            <h2 className="section-headline">Voyage Map</h2>
            <p className="section-subtitle">The Timeline</p>
          </div>
          <Timeline />
        </div>
      </section>
      {/* Tracks */}
    </div>
  );
}
