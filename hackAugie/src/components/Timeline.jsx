export default function Timeline() {
  return (
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
  );
}
