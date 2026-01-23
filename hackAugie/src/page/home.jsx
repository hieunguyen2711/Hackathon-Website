import AnimatedContent from "../components/AnimatedContent";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import Tracks from "../components/tracks";
export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <AnimatedContent delay={0}>
          <h1>Welcome to HackAugie 2026!</h1>
        </AnimatedContent>
        <AnimatedContent delay={0.2} distance={50}>
          <p>Where innovation meets creativity in a 48-hour coding adventure</p>
        </AnimatedContent>
      </div>
      <div align="center">
        <ScrollStack>
          <ScrollStackItem>
            <h2>What is HackAugie?</h2>
            <p>
              HackAugie is Augustana College’s first large-scale 24-hour
              hackathon - a weekend of creativity, teamwork, and building real
              projects. Our goal is to bring together students from local
              Midwest universities and experts from local tech companies to
              collaborate, build, and connect.
            </p>
          </ScrollStackItem>
          <ScrollStackItem color="--halftone-blue">
            <h2>Who can join</h2>
            <p>
              At a hackathon, a teams of 2–4 students work together to solve a
              problem. You do not need to know how to code. Typical team roles:
            </p>
            <div className="no-list">
              <p>
                <ul>
                  <li>
                    <strong>Designers → UI/UX, visuals, branding</strong>
                  </li>
                  <li>
                    <strong>Developers → build the app/website/game</strong>
                  </li>
                  <li>
                    <strong>Business → data, marketing, storytelling</strong>
                  </li>
                </ul>
              </p>
            </div>
          </ScrollStackItem>
          <ScrollStackItem color="--halftone-green">
            <h2>How it works</h2>
            <p>
              There will be tracks depend on sponsors and companies, they will
              give us a problem and we will build a solution for it! For
              example:
            </p>
            <div className="no-list">
              <p>
                <ul>
                  <li>
                    <strong>Healthcare: medication reminder app, a website to make healthcare more accessible for people in disadvantaged areas…</strong>
                  </li>
                  <li>
                    <strong>FinTech: student budgeting dashboard, crypto app, block chain…</strong>
                  </li>
                  <li>
                    <strong>Gaming: VR game, puzzle game…</strong>
                  </li>
                </ul>
              </p>
            </div>
            <p>Excited to see what you build!</p>
          </ScrollStackItem>
          <ScrollStackItem color="--halftone-yellow">
            <h2>Why Join?</h2>
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
                    <strong>Collaborate with cross-disciplinary teammates</strong>
                  </li>
                  <li><strong>Pitch like a startup</strong></li>
                  <li><strong>Meet industry mentors & sponsors</strong></li>
                </ul>
              </p>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
      {/* Tracks */}
      <div>
        <Tracks />
      </div>
    </div>
  );
}
