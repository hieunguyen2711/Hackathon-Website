import Accordion from "react-bootstrap/Accordion";
import { InstagramIcon } from "../assets/instagram";
export default function FAQs() {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2>Lore & Wisdom</h2>
        <p className="faq-subtitle">Frequently Asked Questions</p>
      </div>
      <div className="faq-panel">
        <Accordion className="faq-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How it works</Accordion.Header>
              <Accordion.Body>
                <p>
                  There will be tracks depend on sponsors and companies, they
                  will give us a problem and we will build a solution for it!
                  For example:
                </p>
                <div className="no-list">
                  <p>
                    <ul>
                      <li>
                        <strong>
                          Healthcare: medication reminder app, a website to make
                          healthcare more accessible for people in disadvantaged
                          areas…
                        </strong>
                      </li>
                      <li>
                        <strong>
                          FinTech: student budgeting dashboard, crypto app,
                          block chain…
                        </strong>
                      </li>
                      <li>
                        <strong>Gaming: VR game, puzzle game…</strong>
                      </li>
                    </ul>
                  </p>
                </div>
                <p>Excited to see what you build!</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Why Join?</Accordion.Header>
              <Accordion.Body>
                <div className="no-list">
                  <p>
                    HackAugie helps you:
                    <ul>
                      <li>
                        <strong>Build a real portfolio project</strong>
                      </li>
                      <li>
                        <strong>Learn new tech fast</strong>
                      </li>
                      <li>
                        <strong>
                          Collaborate with cross-disciplinary teammates
                        </strong>
                      </li>
                      <li>
                        <strong>Pitch like a startup</strong>
                      </li>
                      <li>
                        <strong>Meet industry mentors & sponsors</strong>
                      </li>
                    </ul>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Event Details</Accordion.Header>
              <Accordion.Body>
                <div className="no-list">
                  <p>
                    <ul>
                      <li>
                        <strong>Date:</strong> 18 April 2026
                      </li>
                      <li>
                        <strong>Duration:</strong> 24 hours
                      </li>
                      <li>
                        <strong>Location:</strong> Hanson Hall of Science,
                        Augustana College
                      </li>
                      <li>
                        <strong>Attendees:</strong> 50–100+
                      </li>
                      <li>
                        <strong>Communication:</strong> Discord
                      </li>
                    </ul>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Who is Augstana GDG?</Accordion.Header>
              <Accordion.Body>
                <div className="no-list">
                  <p>
                    Founded in 2019, Google Developer Group (GDG) at Augustana
                    is one of the strongest student tech communities on campus
                    <ul>
                      <li>
                        <strong>
                          300+ members and 40+ exec leaders over the years
                        </strong>
                      </li>
                      <li>
                        <strong>
                          20+ workshops/year in AI, Web Dev, Cloud, etc
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Collaborations with CS and Math Department, EDGE
                          Center and many other student clubs
                        </strong>
                      </li>
                    </ul>
                  </p>
                  <p>
                    Connect with us on social media platforms:{" "}
                    <a href="https://www.instagram.com/ac_dsc/">
                      <InstagramIcon />
                    </a>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Tracks & Categories</Accordion.Header>
              <Accordion.Body>
                <div className="no-list">
                  <ul>
                    <li>Best Overall Hack</li>
                    <li>Most creative solution</li>
                    <li>Best Use of AI</li>
                    <li>Vibe Code Track</li>
                    <li>Track prizes: Best FinTech Project, Healthcare Solution, Best Game (TBD)</li>
                  </ul>
                  <p>
                   Prize pool: $1,000+ depending on sponsorship.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Will there be food?</Accordion.Header>
              <Accordion.Body>
                <div className="no-list">
                  <p>Don't worry, there will be plenty of free food provided throughout the event </p>
                  <ul>
                    <li>Saturday Breakfast</li>
                    <li>Saturday Lunch</li>
                    <li>Saturday Dinner</li>
                    <li>Sunday Breakfast</li>
                    <li>Sunday Lunch</li>
                  </ul>
                  <p>Snacks, drinks, caffeine, chips, and midnight cookies will be available all night.</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Workshops</Accordion.Header>
              <Accordion.Body>
                <div className="no-list">
                  
                  <p>Workshops may include:</p>
                  <ul>
                    <li>Intro to Backend / APIs</li>
                    <li>AI & LLM building</li>
                    <li>UI/UX & Prototyping</li>
                    <li>Cloud & DevOps (Docker, AWS, GCP)</li>
                    <li>Game Development</li>
                    <li>Git/GitHub</li>
                  </ul>
                  <p>Mentors will be available in person and on Discord for real-time help.</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Need a Team?</Accordion.Header>
              <Accordion.Body>
                <div className="no-list">
                  <p>You can find teamates through:</p>
                  <ul>
                    <li>#team-formation channel on Discord</li>
                    <li>Speed team-matching event</li>
                    <li>Solo participants will be matched</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Travel Reinbursment</Accordion.Header>
              <Accordion.Body>
                <div className="no-list">
                  <p>We want HackAugie to be accessible to students from across the Midwest. To support this, we offer limited travel reimbursement for eligible participants</p>

                  <h2>What We Cover</h2>
                  <ul>
                    <li>Bus tickets</li>
                    <li>Gas reimbursement(for carpooling)</li>
                    <li>Local transportation expenses</li>
                  </ul>
                  <h2>What we don't cover</h2>
                  <ul>
                    <li>Flights</li>
                    <li>Luxury Transportation</li>
                  </ul>
                  <h2>How to Apply</h2>
                  <p>During the registration process, there will be an option to request travel reimbursement. Please provide details about your travel plans and estimated costs.</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </div>
    </section>
  );
}
