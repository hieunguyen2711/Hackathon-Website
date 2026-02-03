import AnimatedContent from "./components/AnimatedContent";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import Tracks from "./components/tracks";
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
          <ScrollStackItem color="--tangerine">
            <h2>What is HackAugie?</h2>
            <p>
              HackAugie is Augustana College’s first large-scale 24-hour
              hackathon - a weekend of creativity, teamwork, and building real
              projects. Our goal is to bring together students from local
              Midwest universities and experts from local tech companies to
              collaborate, build, and connect.
            </p>
          </ScrollStackItem>
          <ScrollStackItem color="--viridian">
            <h2>Who can join</h2>
            <p>
              At a hackathon, a teams of 2–4 students work together to solve a
              problem. You do not need to know how to code. Typical team roles:
            </p>
            <div className="no-list">
              <div>
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
              </div>
            </div>
          </ScrollStackItem>
          <ScrollStackItem color="--night-forest">
            <h2>When and Where</h2>
            <p>
              HackAugie will take place on 18 April 2026 at Hanson Hall of Science, Augustana College. Comunications will be done via Discord.
            </p>
          </ScrollStackItem>
        </ScrollStack>
      </div>
      {/* Tracks */}
    </div>
  );
}
