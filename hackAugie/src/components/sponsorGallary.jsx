import { useEffect, useRef } from "react";
import "./carousel.css";

const SLIDE_WIDTH = 420;
const SLIDE_GAP = 40;
const SPEED = 0.6; // px per frame

export default function CircularCarousel({ images }) {
  const baseImages = images ?? [
    {
      name: "Mountain Dawn",
      logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop",
    },
    {
      name: "Forest Path",
      logo: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=1000&fit=crop",
    },
  ];

  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);

  const loopWidth = (SLIDE_WIDTH + SLIDE_GAP) * baseImages.length;

  // Generate enough slides to fill viewport + buffer
  const visibleSlides =
    Math.ceil(window.innerWidth / (SLIDE_WIDTH + SLIDE_GAP)) + 2;
  const totalSlides = Math.max(visibleSlides, baseImages.length * 2);

  useEffect(() => {
    const tick = () => {
      offsetRef.current += SPEED;

      // Reset seamlessly when scrolled one loop
      if (offsetRef.current >= loopWidth) {
        offsetRef.current %= loopWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    if (loopWidth <= 0) return;
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [loopWidth]);

  return (
    <div className="carousel-container">
      <div className="carousel-window">
        <div ref={trackRef} className="carousel-track">
          {Array.from({ length: totalSlides }, (_, i) => {
            const imgIndex = i % baseImages.length;
            return (
              <div className="carousel-slide" key={i}>
                <img
                  src={baseImages[imgIndex].logo}
                  alt={baseImages[imgIndex].name}
                  draggable="false"
                />

                <div className="slide-label">{baseImages[imgIndex].name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
