import React from 'react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Execute thousands of tests in milliseconds using our distributed cloud infrastructure.',
    icon: '⚡'
  },
  {
    title: 'Smart Analytics',
    description: 'AI-driven insights to identify flaky tests and performance bottlenecks automatically.',
    icon: '📊'
  },
  {
    title: 'Seamless Integration',
    description: 'Connects directly with GitHub, GitLab, and Bitbucket with zero configuration required.',
    icon: '🔗'
  }
];

const FeatureCards = () => {
  return (
    <section className="features fade-in delay-2">
      <div className="container">
        <div className="features-header">
          <h2>Everything you need. <span className="text-gradient">Nothing you don't.</span></h2>
          <p>Built from the ground up for modern developer workflows.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
