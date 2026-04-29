import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import TestPlayground from './components/TestPlayground';
import './index.css';

function App() {
  // Global hover effect logic for glassmorphism cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.feature-card');
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <header className="header fade-in">
        <div className="container header-content">
          <div className="logo">
            {import.meta.env.VITE_LOGO_URL ? (
              <img src={import.meta.env.VITE_LOGO_URL} alt="Logo" style={{width: '28px', height: '28px'}} />
            ) : (
              <div className="logo-icon"></div>
            )}
            {import.meta.env.VITE_PRODUCT_NAME || 'TestFlow'}
          </div>
          <nav>
            <button className="btn btn-secondary">Sign In</button>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <FeatureCards />
        <TestPlayground />
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 {import.meta.env.VITE_PRODUCT_NAME || 'TestFlow'} Inc. Designed for modern engineering teams.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
