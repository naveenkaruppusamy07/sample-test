import React, { useState, useEffect } from 'react';

const TestPlayground = () => {
  const [logs, setLogs] = useState([
    { text: '> Initializing test environment...', type: 'command' },
  ]);

  useEffect(() => {
    const sequence = [
      { text: '> Running suite: Authentication', type: 'command', delay: 1000 },
      { text: '  ✓ User login successful (120ms)', type: 'success', delay: 1800 },
      { text: '  ✓ Token validation passed (45ms)', type: 'success', delay: 2200 },
      { text: '> Running suite: Data Synchronization', type: 'command', delay: 3000 },
      { text: '  ✓ Real-time updates active (200ms)', type: 'success', delay: 3800 },
      { text: '> All tests passed! (14 total)', type: 'success', delay: 4500 }
    ];

    const timeouts = sequence.map(item => {
      return setTimeout(() => {
        setLogs(prev => [...prev, item]);
      }, item.delay);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="playground fade-in delay-3">
      <div className="container playground-container">
        <div className="playground-content">
          <h2>Experience the speed.</h2>
          <p>Watch as your test suites execute in real-time. Our optimized runtime engine ensures that you get feedback the moment you hit save.</p>
          <button className="btn btn-secondary">Explore Features</button>
        </div>
        
        <div className="mock-terminal">
          <div className="terminal-header">
            <div className="terminal-dot dot-red"></div>
            <div className="terminal-dot dot-yellow"></div>
            <div className="terminal-dot dot-green"></div>
          </div>
          <div className="terminal-body">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className={`terminal-line ${log.type === 'command' ? 'terminal-command' : 'terminal-success'}`}
              >
                {log.text}
              </div>
            ))}
            <div className="terminal-line animate-pulse">_</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestPlayground;
