import { useEffect, useState } from "react";

import Landing from "./page/landing.jsx";
import Home from "./page/home.jsx";
import Navbar from "./components/navbar.jsx";
import FAQs from "./components/faqs.jsx";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (entered) return;

    const onScroll = () => {
      if (window.scrollY > 80 && !transitioning) {
        setTransitioning(true);

        // Smooth fade out landing page
        setTimeout(() => {
          setEntered(true);
          window.scrollTo(0, 0);
        }, 400); // Match the CSS transition duration
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [entered, transitioning]);

  useEffect(() => {
    if (!entered) return;

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // Re-enable scroll after transition completes
    const timeout = setTimeout(() => {
      document.body.style.overflow = "";
    }, 600);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <div className="app-root">
      {!entered && (
        <div
          className={`landing-wrapper ${transitioning ? "fade-out" : ""}`}
          style={{
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "scale(0.95)" : "scale(1)",
          }}
        >
          <Landing />
        </div>
      )}

      {entered && (
        <div
          className="home-wrapper"
          style={{
            animation: "fadeInHome 0.6s ease-out",
          }}
        >
          <Navbar />
          <Home />
          <FAQs />
        </div>
      )}

      <style>{`
        @keyframes fadeInHome {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .landing-wrapper.fade-out {
          pointer-events: none;
        }

        .home-wrapper {
          will-change: opacity, transform;
        }
      `}</style>
    </div>
  );
}
