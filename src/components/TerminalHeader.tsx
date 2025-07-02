
import { useState, useEffect } from 'react';

const TerminalHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-cyber-dark border-b border-glow-blue p-4">
      <div className="flex items-center justify-between font-space text-sm">
        <div className="flex items-center space-x-4">
          <span className="text-neon-red">●</span>
          <span className="text-yellow-400">●</span>
          <span className="text-green-400">●</span>
          <span className="glow-neon-blue ml-4">PORTFOLIO</span>
        </div>
        <div className="glow-neon-red">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
