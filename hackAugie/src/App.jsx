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

  useEffect(() => {
    const onScroll = () => {
      const shouldEnter = window.scrollY > 80;
      setEntered((prev) => (prev === shouldEnter ? prev : shouldEnter));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      image: Hieu,
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
      image: Reda,
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
               {/* <Tracks /> */}
            </div>
          </section>
          <FAQs />
          <section className="sponsors" id="sponsors">
            <div className="section-header">
              <h1 className="section-headline">Our Allies</h1>
              <p className="section-subtitle">Coming soon</p>
              {/* <Sponsor /> */} 
            </div>
          </section>
          <section style={{marginTop:'30px'
          }}>
            <div className="section-header">
              <h2 className="section-headline">The Crew</h2>
              <p className="section-subtitle">
                The brave souls steering this ship.
              </p>
            </div>
            <div className="team-section" id="team">
              <InfiniteMenu items={teamMembers} scale={1} />
            </div>
          </section>
        </div>
      </BackGround>
    </div>
  );
}
