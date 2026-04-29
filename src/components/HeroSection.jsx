import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-content fade-in delay-1">
        <div className="hero-tag">🚀 v2.0 is now live</div>
        <h1>Ship code with <span className="text-gradient">absolute confidence.</span></h1>
        <p>
          The next-generation testing platform designed for high-velocity teams.
          Automate, scale, and analyze your tests in a beautifully crafted environment.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Start Testing For Free</button>
          <button className="btn btn-secondary">View Documentation</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
