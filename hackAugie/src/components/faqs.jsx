/*### **How it works**

There will be tracks depend on sponsors and companies, they will give us a problem and we will build a solution for it! For example:

- **Healthcare:** medication reminder app, a website to make healthcare more accessible for people in disadvantaged areas…
- **FinTech:** student budgeting dashboard, crypto app, block chain…
- **Gaming:** VR game, puzzle game…

Excited to see what you build!

### **✨ Why Join?**

HackAugie helps you:

- Build a real portfolio project
- Learn new tech fast
- Collaborate with cross-disciplinary teammates
- Pitch like a startup
- Meet industry mentors & sponsors  

# **Who is Augstana GDG?**

🌟Founded in 2019, **Google Developer Group (GDG)** at Augustana is one of the strongest student tech communities on campus.

- 300+ members and 40+ exec leaders over the years
- 20+ workshops/year in AI, Web Dev, Cloud, etc.
- Collaborations with CS and Math Department, EDGE Center and many other student clubs

Connect with us on social media platforms: [Instagram](https://www.instagram.com/ac_dsc/) might move this to the about later

*/
import Accordion from "react-bootstrap/Accordion";
import oldMain from "/src/assets/imgs/building.png";
import { InstagramIcon } from "../assets/instagram";
export default function FAQs() {
  return (
    <section className="faq-section">
      <div className="faq-grid">
        <div className="faq-accordion">
          <Accordion>
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
                        <li><strong>Date:</strong> 18 April 2026</li>
                        <li><strong>Duration:</strong> 24 hours</li>
                        <li><strong>Location:</strong> Hanson Hall of Science, Augustana College</li>
                        <li><strong>Attendees:</strong> 50–100+</li>
                        <li><strong>Communication:</strong> Discord</li>
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
                    Founded in 2019, Google Developer Group (GDG) at Augustana is one of the strongest student tech communities on campus
                    <ul>
                        <li><strong>300+ members and 40+ exec leaders over the years</strong></li>
                        <li><strong>20+ workshops/year in AI, Web Dev, Cloud, etc</strong></li>
                        <li><strong>Collaborations with CS and Math Department, EDGE Center and many other student clubs</strong></li>
                    </ul>
                  </p>
                  <p>Connect with us on social media platforms: <a href="https://www.instagram.com/ac_dsc/"><InstagramIcon /></a></p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="faq-image">
          <img src={oldMain} alt="Pixelated building" />
        </div>
      </div>
    </section>
  );
}
