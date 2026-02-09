import { useEffect, useState } from "react";
import LogoLoop from "./LogoLoop";
import logo from "../assets/imgs/logo.png";
import "./sponsor.css";
export default function Sponsor() {
  const [index, setIndex] = useState(0);

  const imageLogos = [
    {
      src: logo,
      alt: "Company 1",
      href: "https://company1.com",
      desc: "Company 1 is a leading provider of innovative solutions in the tech industry, specializing in software development and cloud services.",
    },
    {
      src: logo,
      alt: "Company 2",
      href: "https://company2.com",
      desc: "Company 1 is a leading provider of innovative solutions in the tech industry, specializing in software development and cloud services.",
    },
    {
      src: logo,
      alt: "Company 3",
      href: "https://company3.com",
      desc: "Company 1 is a leading provider of innovative solutions in the tech industry, specializing in software development and cloud services.",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageLogos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [imageLogos.length]);

  return (
    <section id="sponsors">
      <div align="center">
        <div className="sponsor-section" style={{ textAlign: "center" }}>
          <h2 className="section-headline">Our Allies</h2>
          <p>
            The clans that provide the resources for our journey. Without them,
            our ships would not sail.
          </p>

          <div className="sponsor-section-grid">
            <div className="sponsor-logo">
              <div
                className="image-track"
                style={{ transform: `translateX(-${index * 400}px)` }}
              >
                {imageLogos.map((s) => (
                  <div key={s.alt} className="sponsor-item">
                    <a
                      key={s.alt}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={s.src} alt={s.alt} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ marginTop: "1rem", padding: "0 1rem" }}>
                {imageLogos[index].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={70}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="Transparent"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
