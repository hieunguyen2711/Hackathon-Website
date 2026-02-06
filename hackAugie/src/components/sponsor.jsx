import { useEffect, useState } from "react";
import LogoLoop from "./LogoLoop";
import logo from "../assets/imgs/logo.png";

export default function Sponsor() {
  const [index, setIndex] = useState(0);

  const sponsors = [
    {
      name: "Google",
      logo: logo,
      url: "https://google.com",
      desc: "Google is a global technology company specializing in Internet-related services and products.",
    },
    {
      name: "Amazon",
      logo: logo,
      url: "https://amazon.com",
      desc: "Amazon is a multinational technology company focusing on e-commerce, cloud computing, and artificial intelligence.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sponsors.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [sponsors.length]);
const imageLogos = [
  { src: logo, alt: "Company 1", href: "https://company1.com" },
  { src: logo, alt: "Company 2", href: "https://company2.com" },
  { src: logo, alt: "Company 3", href: "https://company3.com" },
];
  return (
    <section id="sponsors">
      <div align="center">
        <div className="sponsor-section" style={{ textAlign: "center" }}>
          <h2>Our Sponsors</h2>

          <div className="sponsor-section-grid">
            <div className="sponsor-logo">
              <div
                className="image-track"
                style={{ transform: `translateX(-${index * 400}px)` }}
              >
                {sponsors.map((s) => (
                  <div key={s.name} className="sponsor-item">
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={s.logo} alt={s.name} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ marginTop: "1rem", padding: "0 1rem" }}>{sponsors[index].desc}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "4rem" }}></div>
        <CircularCarousel images={sponsors} />
      </div>
       <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOut
  useCustomRender={false}
/>
    </div>
    </section>
  );
}
