import { useEffect, useState } from "react";

import Landing from "./components/LandingBg.jsx";
import Home from "./home.jsx";
import Navbar from "./components/navbar.jsx";
import FAQs from "./components/faqs.jsx";
import Tracks from "./components/tracks.jsx";
import BackGround from "./components/Background.jsx";
import Sponsor from "./components/sponsor.jsx";
import InfiniteMenu from "./components/InfiniteMenu";
import Quinxie from "./assets/members/QuinxieDoan.jpg";
import Austin from "./assets/members/AustinDwomoh.jpg";
import Imane from "./assets/members/QuinxieDoan.jpg";
import Robin from "./assets/members/MinhNguyen.jpeg";
import My from "./assets/members/HoànMỹ.png";
import Diego from "./assets/members/DiegoGomez.jpg";
import Hieu from "./assets/members/HieuNguyen.jpg";
import Reda from "./assets/members/RedaOubih.jpg";
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


  const teamMembers = [
    {
      name: "Quinxie Doan",
      role: "Event Lead",
      link: "https://www.linkedin.com/in/quyendoan51/",
      image: Quinxie,
    },
    {
      name: "Imane Mansouri",
      role: "Event Vice Lead",
      image: Imane,
      link: "https://www.linkedin.com/in/imane-mansouri-418135335/",
    },

    {
      name: "Minh (Robin) Nguyen",
      role: "Sponsorship chair",
      link: "https://www.linkedin.com/in/minhnbnguyen/",
      image: Robin,
    },
    {
      name: "Hoan My Ha",
      role: "Sponsorship chair",
      link: "https://www.linkedin.com/in/hoan-my-ha/",
      image: My,
    },
    {
      name: "Diego Gomez",
      role: "Logistic chair",
      link: "https://www.linkedin.com/in/diego-gomez29/",
      image: Diego,
    },
    {
      name: "Zekarias Asaminew",
      role: "Expertise Mentor",
      link: "https://www.linkedin.com/in/zekarias-asaminew/",
      image: "https://picsum.photos/600/600?grayscale",
    },
    {
      name: "Hieu Nguyen",
      role: "Expertise Member",
      link: "https://www.linkedin.com/in/hieuthenguyen/",
      image:Hieu
    },
    {
      name: "Huy Nguyen",
      role: "Expertise Member",
      link: "https://www.linkedin.com/in/huy05/",
      image: "https://picsum.photos/600/600?grayscale",
    },
    {
      name: "Austin Dwomoh",
      role: "Expertise Member",
      link: "https://www.linkedin.com/in/austin-dwomoh/",
      image: Austin,
    },
    {
      name: "Mutawakil Rabiu",
      role: "Design Chair",
      link: "https://www.linkedin.com/in/mutawakil-rabiu-b412772b0/",
      image: "https://picsum.photos/600/600?grayscale",
    },
    {
      name: "Parker Morrissey",
      role: "Logistic Member",
      link: "https://www.linkedin.com/in/parker-morrissey/",
      image: "https://picsum.photos/600/600?grayscale",
    },
    {
      name: "Reda Oubih",
      role: "Logistic Member",
      link: "https://www.linkedin.com/in/reda-oubih-765b89369/",
      image: Reda
    },
    {
      name: "Ismael Otmani",
      role: "Logistic Member",
      link: "https://www.linkedin.com/in/ismael-otmani/",
      image: "https://picsum.photos/600/600?grayscale",
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
            <FAQs />
            <Sponsor />
            <h2 style={{ textAlign: "center" }}>Our Team</h2>
            <section className="team-section" id="team">
              <InfiniteMenu items={teamMembers} scale={1} />
            </section>
          </div>
        )}

        <style>
          {`
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
