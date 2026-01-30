import { useEffect, useRef } from "react";
import "./carousel.css";

const SLIDE_WIDTH = 420;
const SLIDE_GAP = 40;
const SPEED = 0.6; // px per frame

export default function CircularCarousel({ images }) {
  const baseImages = images ?? [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=1000&fit=crop",
  ];

  // duplicate once is enough for modulo scrolling
  const slides = [...baseImages, ...baseImages];

  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);

  const loopWidth = (SLIDE_WIDTH + SLIDE_GAP) * baseImages.length;

  useEffect(() => {
    const tick = () => {
      offsetRef.current =
        (offsetRef.current + SPEED) % loopWidth;

      if (trackRef.current) {
        trackRef.current.style.transform =
          `translateX(-${offsetRef.current}px)`;
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
          {slides.map((src, i) => (
            <div className="carousel-slide" key={i}>
              <img src={src} draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
