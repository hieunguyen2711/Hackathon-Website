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

  useEffect(() => {
    const onScroll = () => {
      const shouldEnter = window.scrollY > 80;
      setEntered((prev) => (prev === shouldEnter ? prev : shouldEnter));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <Navbar />
      <div className={`landing-wrapper ${entered ? "fade-out" : ""}`}>
        <Landing />
      </div>
      <BackGround>
        <div className={`home-wrapper ${entered ? "entered" : ""}`}>
          <Home />
          <section className="tracks tracks-placeholder" id="tracks">
            <div className="section-header">
              <h1 className="section-headline">Tracks</h1>
              <p className="section-subtitle">Coming soon</p>
            </div>
          </section>
          <FAQs />
          <section className="sponsors" id="sponsors">
            <div className="section-header">
              <h1 className="section-headline">Our Allies</h1>
              <p className="section-subtitle">Coming soon</p>
            </div>
          </section>
          <section className="team-section" id="team">
            <div className="section-header">
              <h2 className="section-headline">The Crew</h2>
              <p className="section-subtitle">The brave souls steering this ship.</p>
            </div>
            <InfiniteMenu items={items} scale={1} />
          </section>
        </div>
      </BackGround>
    </div>
  );
}
