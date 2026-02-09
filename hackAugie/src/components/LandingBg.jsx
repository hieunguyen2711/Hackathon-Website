import React, { useEffect, useState } from "react";

const LandscapeAnimation = () => {
  const targetTime = new Date("2026-04-12T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft("LIVE");
        clearInterval(interval);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after {
          font-family: 'Open Sans', sans-serif;
          user-select: none;
        }

        body {
          margin: 0;
        }

     
        @keyframes waves {
          to {
            transform: translateY(-50%) rotate(540deg);
          }
        }

       
        /* Ship */
        .ship {
          position: absolute;
          bottom: 42%;
          left: -25%;
          width: 360px;
          height: 70px;
          background: #3b2414;
          border-radius: 0 0 120px 120px;
          animation: sail 35s linear infinite, bob 4s ease-in-out infinite;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }

        .ship::before {
          content: "";
          position: absolute;
          top: -50px;
          left: 50%;
          width: 2px;
          height: 50px;
          background: #222;
        }

        .ship::after {
          content: "";
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 50px solid rgba(220,220,220,0.85);
        }

        @keyframes sail {
          from { left: -25%; }
          to { left: 110%; }
        }

   
      

        @keyframes bob {
          from {
            transform: rotate(var(--rotation)) translateY(1vh);
          }

          to {
            transform: rotate(calc(var(--rotation) + 10deg)) translateY(0);
          }
        }

        :root {
          --v0: #002f55;
          --v1: #00437c;
          --v2: #00437c;
          --v3: #ffaa00;
          --transparentv3: #5e30d900;
          --v4: #00437c;
          --s1: #00437c;
          --s2: #3c3738;
          --cloud: #ffe7a5;
        }

        .landscape:after,
        .landscape:before,
        .landscape *,
        .landscape *:after,
        .landscape *:before {
          position: absolute;
        }

        .front {
          z-index: 1;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .landscape {
          height: 100vh;
          background-image: linear-gradient(180deg, #002f55 0%, #00437c 100%);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .mountain {
          border-radius: 180% 80% 0% 0%/60vmin 60vmin 0% 0%;
          width: 40vmin;
          height: 30vmin;
          bottom: 50%;
          left: -10vmin;
          background: var(--s1);
          background-image: linear-gradient(var(--v0) 0%, var(--v1) 100%);
          box-shadow: inset -10px 0 10px -10px var(--s1);
        }
        
        .mountain:before {
          content: "";
          bottom: 0;
          width: inherit;
          height: inherit;
          background: inherit;
          border-radius: inherit;
          transform-origin: bottom center;
          transform: scaleX(1) scaleY(-0.6);
          filter: blur(3px);
        }

        .mountain-2 {
          left: 5vmin;
          height: 15vmin;
          width: 40vmin;
          box-shadow: inset -15px 0 10px -14px var(--s1);
          border-radius: 120% 50% 0% 0%/25vmin 25vmin 0% 0%;
          background-image: linear-gradient(var(--v0) 0%, var(--v4) 100%);
        }

        .mountain-3 {
          border-radius: 80% 0% 0 0/100% 100% 0 0;
          right: -85vmin;
          width: 100vmin;
          left: auto;
          height: 12vmin;
          color: var(--v3);
          background-image: linear-gradient(var(--v0) 0%, var(--v4) 100%);
          box-shadow: inset 15px 0 10px -10px var(--s1);
        }

        .mountain-3:after {
          content: "";
          border-radius: 60% 0 0 0/100% 0 0 0;
          background: inherit;
          width: 100%;
          height: 0;
          bottom: 0;
          right: 20%;
        }

        .lotus {
          width: 10vmin;
          height: 5vmin;
          background: conic-gradient(var(--v3) 0deg 40deg, var(--transparentv3) 50deg 70deg, var(--v3) 80deg);
          border-radius: 50%;
        }

        .lotus-1 {
          bottom: 10vmin;
          right: 5vmin;
          width: 20vmin;
        }

        .lotus-2 {
          bottom: 20vmin;
          right: 15vmin;
          height: 3vmin;
          transform: skew(-10deg);
          opacity: 0.5;
          mix-blend-mode: multiply;
        }

        .lotus-3 {
          bottom: 10vmin;
          right: 35vmin;
          transform: rotate(180deg) skew(-20deg);
          opacity: 0.8;
          width: 15vmin;
        }

        .cloud {
          width: 80vmin;
          height: 6vmin;
          background: currentcolor;
          color: var(--cloud);
          top: 24vmin;
          left: 20vmin;
          border-radius: 50%;
          box-shadow: 30vmin 0.5vmin 0 -1vmin currentcolor, -25vmin 0 0 -0.6vmin currentcolor;
          opacity: 0.3;
          transform: translate3d(-150vmin, 0, 0);
          animation: clouds 120s infinite;
          animation-delay: -10s;
        }

        @keyframes clouds {
          0% {
            transform: translate3d(-150vmin, 0, 0);
          }

          25% {
            transform: translate3d(-75vmin, 0, 0);
          }
          50% {
            transform: translate3d(0, 0, 0);
          }
          75% {
            transform: translate3d(75vmin, 0, 0);
          }
          100% {
            transform: translate3d(150vmin, 0, 0);
          }
        }
        
        .cloud-1 {
          left: 60vmin;
          top: 15vmin;
          opacity: 0.2;
          filter: blur(1px);
          animation-delay: 0;
          animation-duration: 100s;
        }

        .water {
          top: 50%;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(#fea79855, var(--v2));
          overflow: hidden;
          box-shadow: inset 0 1px 4px -3px white;
        }

        .stone {
          bottom: -5vh;
          left: 0;
          height: 20vmin;
          width: 40vmin;
          background: var(--v4);
          box-shadow: inset 0 0 20px -5px rgba(0, 0, 0, 0.2);
          border-radius: 0% 200% 0 0/0% 200%;
        }

        .stone:after {
          content: "";
          background: var(--v3);
          width: 100%;
          height: 100%;
          right: -15%;
          border-radius: inherit;
          z-index: -1;
          transform: scaleX(1.3) skew(10deg);
          box-shadow: inset 0 0 20px -5px rgba(0, 0, 0, 0.4);
        }

        .grass {
          height: 40vmin;
          width: 10vmin;
          border-radius: 0 60% 0 0/0 100% 0 0;
          bottom: 0;
          border-right: 5px solid var(--v4);
          box-shadow: 1px 0 0 var(--s1);
          filter: drop-shadow(-0.5vmin 6vmin 0 var(--s2)) drop-shadow(-4.5vmin 10vmin 0 var(--v3));
        }

        .grass-1 {
          left: 14vmin;
          bottom: -2vmin;
          transform: scaleX(-1);
          box-shadow: 2px 0 0 var(--v4);
          border-color: var(--v3);
          filter: drop-shadow(-1vmin 5vmin 0 var(--v3)) drop-shadow(-80vmin 5vmin 0 var(--v4));
        }

        .grass-2 {
          right: 0;
          left: auto;
          height: 20vmin;
          bottom: -2vmin;
          transform: scaleX(-1);
        }

        .sun {
          background: white;
          border-radius: 50%;
          width: 20vmin;
          height: 20vmin;
          left: calc(60% - 10vmin);
          top: 100%;
          transform: translate3d(0, 0, 0);
          animation: rise 20s infinite;
          box-shadow: 0 0 10px white;
        }

        .reed {
          height: 40vmin;
          width: 0.5vmin;
          bottom: 0;
          left: 10vmin;
          color: var(--v4);
          background: currentColor;
          transform-origin: bottom center;
          transform: rotate(4deg);
          box-shadow: inset -1px 0 0 var(--s2), -6vmin 3vmin 0 0, 80vmin 0 0 0;
          animation: verticalise 20s infinite;
        }

        .reed-1 {
          color: var(--s2);
          left: 15vmin;
          height: 50vmin;
          bottom: -5vmin;
          transform: rotate(-2deg);
          animation: verticalise-1 20s infinite;
          box-shadow: inset -1px 0 0 var(--s1), 6vmin 13vmin 0 0 var(--s1), 80vmin 10vmin 0 0 var(--v3);
        }

        .reed:after {
          content: "";
          width: 1.5vmin;
          height: 10vmin;
          background: currentcolor;
          border-radius: 0.75vmin;
          top: 0;
          left: -0.5vmin;
          box-shadow: inherit;
        }

        @keyframes verticalise {
          0%, 10% {
            transform: rotate(4deg);
          }
          30%, 70% {
            transform: rotate(0);
          }
        }
        
        @keyframes verticalise-1 {
          0%, 10% {
            transform: rotate(-2deg);
          }
          45%, 70% {
            transform: rotate(0) translateY(-6vmin);
          }
        }
        
        @keyframes rise {
          100% {
            transform: translate3d(0, -100vh, 20vmin);
          }
        }
        
        @keyframes rise-reflection {
          30% {
            opacity: 0;
            transform: translate3d(0, 5vmin, 0);
          }
          100% {
            opacity: 0;
            transform: translate3d(0, 80vmin, 0);
          }
        }
        
        .sun-container {
          overflow: hidden;
          width: 100%;
          height: 50%;
        }

        .sun-container-1:after {
          content: "";
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: radial-gradient(circle at 60% 100%, var(--s2), transparent);
          animation: fade 20s infinite;
          mix-blend-mode: color-burn;
        }

        @keyframes fade {
          10% {
            opacity: 1;
          }
          30%, 70% {
            opacity: 0;
          }
        }
        
        .sun-container-reflection {
          top: 50%;
          background: radial-gradient(circle at 60% 0%, var(--s2), transparent);
        }

        .sun-container-reflection .sun {
          background: linear-gradient(white, rgba(255, 255, 255, 0));
          box-shadow: none;
          filter: blur(5px);
          opacity: 1;
          top: 0;
          transform: translate3d(0, -20vmin, 0);
          animation-name: rise-reflection;
        }

        .light {
          height: 0.5vmin;
          width: 20vmin;
          background: white;
          left: 20%;
          right: 0;
          margin: auto;
          top: calc(50% + 1vmin);
          animation: light 20s infinite;
          opacity: 0;
          transform: scaleX(0.1) translate3d(0%, 0, 0);
          border-radius: 0.25vh;
          filter: blur(1px);
        }

        @keyframes light {
          5% {
            opacity: 1;
            transform: scaleX(1);
          }
          10% {
            opacity: 0.6;
            transform: scaleX(1) translate3d(5%, 0, 0);
          }
          15% {
            opacity: 0.6;
            transform: scaleX(1) translate3d(-5%, 0, 0);
          }
          20% {
            opacity: 0;
            transform: scaleX(0.1) translate3d(0, 0, 0);
          }
        }
        
        .light-1 {
          top: calc(50% + 2vmin);
          animation-delay: 0.5s;
        }

        .light-2 {
          top: calc(50% + 3vmin);
          width: 18vmin;
          animation-delay: 1s;
        }

        .light-3 {
          top: calc(50% + 4vmin);
          width: 18vmin;
          animation-delay: 1.5s;
        }

        .light-4 {
          top: calc(50% + 5vmin);
          width: 16vmin;
          animation-delay: 2s;
        }

        .light-5 {
          top: calc(50% + 8vmin);
          width: 14vmin;
          animation-delay: 2.5s;
        }

        .light-6 {
          top: calc(50% + 9vmin);
          width: 10vmin;
          animation-delay: 3s;
        }

        .light-7 {
          top: calc(50% + 7vmin);
          width: 12vmin;
          animation-delay: 3.5s;
        }

        .splash {
          width: 8vmin;
          height: 3vmin;
          border: 2px solid var(--s1);
          box-shadow: 0 0 2px var(--s1);
          border-radius: 50%;
          bottom: 5vmin;
          left: 70%;
          animation: splash 9s infinite;
          transform: scale(0);
        }

        .splash-stone {
          bottom: 15vh;
          left: -3vmin;
          height: 10vmin;
          width: 30vmin;
        }

        .splash-4 {
          bottom: 5vmin;
          left: auto;
          bottom: 15vmin;
          right: -2vmin;
        }

        @keyframes splash {
          50%, 100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        
        .delay-1 {
          animation-delay: 1s;
        }

        .delay-2 {
          animation-delay: 2s;
        }

        .delay-3 {
          animation-delay: 3s;
        }

        .delay-4 {
          animation-delay: 4s;
        }

        .delay-5 {
          animation-delay: 5s;
        }

        .delay-6 {
          animation-delay: 6s;
        }
        .overlay {
          position: absolute;
          inset: 0;
          top: -40%;
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          text-align: center;
          color: #ffffff;
          padding: 0 6vw;
        }

        .overlay-eyebrow {
          font-size: 0.85rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffaa00;
          margin-bottom: 1.2rem;
        }

        .hero-title,
        .hero-title * {
          font-size: clamp(3.4rem, 10vw, 6.4rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: "Norse", system-ui, -apple-system, sans-serif !important;
          text-shadow: 0 8px 30px rgba(0,0,0,0.7);
          margin: 0;
        }

        .title-light {
          color: #f5f7ff;
        }

        .title-gold {
          color: #ffaa00;
        }

        .hero-quote {
          margin-top: 1rem;
          font-size: 1.2rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .hero-actions {
          margin-top: 2.2rem;
          display: flex;
          gap: 20px;
          pointer-events: auto;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-btn {
          padding: 12px 26px;
          border-radius: 6px;
          font-size: 0.95rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 2px solid #ffaa00;
          font-weight: 700;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, color 160ms ease;
        }

        .hero-btn.primary {
          background: #ffaa00;
          color: #0b1222;
          box-shadow: 0 10px 24px rgba(255, 170, 0, 0.28);
        }

        .hero-btn.primary:hover {
          transform: translateY(-2px);
        }

        .hero-btn.outline {
          color: #ffaa00;
          background: transparent;
        }

        .hero-btn.outline:hover {
          background: rgba(255, 170, 0, 0.12);
          transform: translateY(-2px);
        }

        .hero-date {
          margin-top: 5.5rem;
          padding: 10px 24px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .scroll-indicator {
          margin-top: 28px;
          width: 18px;
          height: 18px;
          border-right: 2px solid #ffaa00;
          border-bottom: 2px solid #ffaa00;
          transform: rotate(45deg);
          animation: bounce 1.6s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: rotate(45deg) translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: rotate(45deg) translateY(6px);
            opacity: 1;
          }
        }
          .viking {
          position: absolute;
          bottom: 50%;
          left: 25%;
          width: 80px; /* keep it small */
          image-rendering: pixelated;
          filter: drop-shadow(0 6px 6px rgba(0,0,0,0.6));
          animation: idle 2.5s ease-in-out infinite;
        }

        @keyframes idle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .timer {
          margin-top: 2rem;
          font-size: 1.85rem;
          letter-spacing: 0.3em;
          opacity: 0.5;
          text-transform: uppercase;
        }


      `}</style>

      <div className="landscape">
        <div className="mountain"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
        <div className="sun-container sun-container-1"></div>
        <div className="sun-container">
          <div className="sun"></div>
        </div>
        <div className="cloud"></div>
        <div className="cloud cloud-1"></div>
        <div className="sun-container sun-container-reflection">
          <div className="sun"></div>
        </div>
        <div className="light"></div>
        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
        <div className="light light-4"></div>
        <div className="light light-5"></div>
        <div className="light light-6"></div>
        <div className="light light-7"></div>
        <div className="water"></div>
        <div className="splash"></div>
        <div className="splash delay-1"></div>
        <div className="splash delay-2"></div>
        <div className="splash splash-4 delay-2"></div>
        <div className="splash splash-4 delay-3"></div>
        <div className="splash splash-4 delay-4"></div>
        <div className="splash splash-stone delay-3"></div>
        <div className="splash splash-stone splash-4"></div>
        <div className="splash splash-stone splash-5"></div>
        <div className="lotus lotus-1"></div>
        <div className="lotus lotus-2"></div>
        <div className="lotus lotus-3"></div>

        <div className="ship" />
        <div className="front">
          <div className="stone">
            <img src="/pixel-viking.png" alt="Pixel Viking" className="viking" />
          </div>
        </div>
      </div>
      <div className="overlay">
        <div className="overlay-eyebrow"></div>
        <h1 className="hero-title">
          <span className="title-light">Hack</span>
          <span className="title-gold">Augie</span>
        </h1>
        <div className="hero-quote">"To new lands, new code, and glory."</div>
        <div className="hero-actions">
          <a className="hero-btn primary" href="#register">Register Now</a>
        </div>
        <div className="hero-date">{timeLeft}</div>
        <div className="hero-date">April 18-19, 2026, Augustana College</div>
        <div className="scroll-indicator" aria-hidden="true"></div>
      </div>
    </>
  );
};

export default LandscapeAnimation;
