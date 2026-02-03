import { useEffect, useState } from "react";
import CircularCarousel from "./sponsorGallary";

export default function Sponsor() {
  const [index, setIndex] = useState(0);

  const sponsors = [
    {
      name: "Google",
      logo: "https://picsum.photos/500/500?grayscale",
      url: "https://google.com",
      desc: "Google is a global technology company specializing in Internet-related services and products.",
    },
    {
      name: "Amazon",
      logo: "https://picsum.photos/600/600?grayscale",
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
              <p style={{ marginTop: "1rem" }}>{sponsors[index].desc}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "4rem" }}></div>
        <CircularCarousel images={sponsors} />
      </div>
    </section>
  );
}
