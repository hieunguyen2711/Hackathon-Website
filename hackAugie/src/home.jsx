import AnimatedContent from "./components/AnimatedContent";
import Circular from "./components/CircularGallery";
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
        <div style={{ height: "700px", position: "relative" }}>
          <Circular
            bend={1}
            textColor="#ffffff"
            scrollSpeed={2}
            scrollEase={0.05}
            useTextMode={true}
            items={[
              {
                text: "What is HackAugie?",
                cardText:
                  "Augustana College’s first large-scale 24-hour hackathon",
                bgColor: "#3b82f6",
                textColor: "#fff",
              },
              {
                text: "Who can join",
                cardText: "You do not need to know how to code.",
                bgColor: "#10b981",
                textColor: "#fff",
              },
              {
                text: "When and Where",
                cardText:
                  "18 April 2026",
                bgColor: "#f59e0b",
                textColor: "#fff",
              },
            ]}
          />
        </div>

      </div>
      {/* Tracks */}
    </div>
  );
}
