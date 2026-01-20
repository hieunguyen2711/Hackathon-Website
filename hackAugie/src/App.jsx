import Home from "./page/home.jsx";
import AnimatedContent from "./components/AnimatedContent.jsx";
import "./App.css";
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
    <>
      <div className={`index-page ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <AnimatedContent>
            <Home />
          </AnimatedContent>
        </div>
      </div>

      <div className={`main-content ${scrolled ? 'visible' : ''}`}>
        {/* Your regular page content goes here */}
        <section >
          <h2>Welcome to the main content</h2>
          <p>Scroll to see more...</p>
        </section>
      </div>
    </>
  );
}
