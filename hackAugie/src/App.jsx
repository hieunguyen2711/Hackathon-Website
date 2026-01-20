import Landing from "./page/landing.jsx";
import Home from "./page/home.jsx";

import AnimatedContent from "./components/AnimatedContent.jsx";
import Navbar from "./components/navbar.jsx";
import { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } 
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className={`index-page ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <AnimatedContent>
            <Landing />
          </AnimatedContent>
        </div>
      </div>

      <div className={`main-content ${scrolled ? 'visible' : ''}`}>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
