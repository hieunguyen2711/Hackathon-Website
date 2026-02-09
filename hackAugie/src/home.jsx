import AnimatedContent from "./components/AnimatedContent";
import Circular from "./components/CircularGallery";
export default function Home() {
  return (
    <div className="home" id="voyage">
      <section className="welcome-section">
        <AnimatedContent delay={0}>
          <div className="welcome-eyebrow">✦</div>
          <h1 className="welcome-title">
            The Legend of <span>HackAugie</span>
          </h1>
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
            <h2>Voyage Map</h2>
            <p className="timeline-subtitle">The Timeline</p>
          </div>
          <div className="timeline-grid">
            <div className="timeline-day">
              <h3>Day 1: Saturday</h3>
              <div className="timeline-items">
                <div className="timeline-item">
                  <span className="timeline-time">09:00 AM</span>
                  <div className="timeline-content">
                    <h4>Gates of Valhalla Open</h4>
                    <p>Check-in & Breakfast</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">10:30 AM</span>
                  <div className="timeline-content">
                    <h4>The Call to Adventure</h4>
                    <p>Opening Ceremony</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">11:00 AM</span>
                  <div className="timeline-content">
                    <h4>Set Sail</h4>
                    <p>Hacking Begins & Team Formation</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">01:00 PM</span>
                  <div className="timeline-content">
                    <h4>Feast of Thor</h4>
                    <p>Lunch Break</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">06:00 PM</span>
                  <div className="timeline-content">
                    <h4>Odin's Wisdom</h4>
                    <p>Workshop: Intro to React</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-day">
              <h3>Day 2: Sunday</h3>
              <div className="timeline-items">
                <div className="timeline-item">
                  <span className="timeline-time">09:00 AM</span>
                  <div className="timeline-content">
                    <h4>Sunrise Ration</h4>
                    <p>Breakfast</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">11:00 AM</span>
                  <div className="timeline-content">
                    <h4>Land Ho!</h4>
                    <p>Submission Deadline</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">12:00 PM</span>
                  <div className="timeline-content">
                    <h4>The Great Hall</h4>
                    <p>Project Expo & Judging</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">02:00 PM</span>
                  <div className="timeline-content">
                    <h4>Spoils of War</h4>
                    <p>Closing Ceremony & Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tracks */}
    </div>
  );
}
