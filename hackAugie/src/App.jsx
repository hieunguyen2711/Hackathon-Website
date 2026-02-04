import { useEffect, useState } from "react";

import Landing from "./components/LandingBg.jsx";
import Home from "./home.jsx";
import Navbar from "./components/navbar.jsx";
import FAQs from "./components/faqs.jsx";
import Tracks from "./components/tracks.jsx";
import BackGround from "./components/Background.jsx";
import Sponsor from "./components/sponsor.jsx";
 import InfiniteMenu from "./components/InfiniteMenu";
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
 

  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];

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
      <BackGround>
        {entered && (
          <div
            className="home-wrapper"
            style={{
              animation: "fadeInHome 0.6s ease-out",
            }}
          >
            <Navbar />
            <Home />
            <Tracks />
            <FAQs  />
            <Sponsor /> 
            <h2 style={{ textAlign: "center" }}>Our Team</h2>
            <section className="team-section" id="team">
              <InfiniteMenu items={items} scale={1} />
            </section>
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
          `}
        </style>
      </BackGround>
    </div>
  );
}
