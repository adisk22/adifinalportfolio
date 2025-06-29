
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Folder, ArrowRight } from 'lucide-react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const welcomeText = 'Welcome to the Portfolio Terminal...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < welcomeText.length) {
        setTypedText(welcomeText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const directories = [
    { name: 'projects/', path: '/projects', desc: 'View my latest work and code repositories' },
    { name: 'resume/', path: '/resume', desc: 'Download and view my professional resume' },
    { name: 'about-me/', path: '/about-me', desc: 'Learn more about my background and skills' },
    { name: 'work-experience/', path: '/work-experience', desc: 'Explore my professional journey' },
  ];

  return (
    <div className="min-h-screen bg-cyber-black bg-cyber-grid">
      <div className="container mx-auto px-4 py-12">
        {/* Terminal Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Terminal className="w-8 h-8 text-neon-blue animate-neon-pulse" />
            <h1 className="font-orbitron text-4xl md:text-6xl glow-neon-blue">
              PORTFOLIO
            </h1>
            <Terminal className="w-8 h-8 text-neon-red animate-neon-pulse" />
          </div>
          
          <div className="font-space text-lg md:text-xl mb-8">
            <span className="text-neon-blue">root@portfolio:~$ </span>
            <span className="text-white">{typedText}</span>
            <span className="animate-blink text-neon-blue">|</span>
          </div>
        </div>

        {/* Directory Listing */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-2">Directory Listing:</h2>
            <div className="font-space text-sm text-gray-400">
              Total 4 directories available for navigation
            </div>
          </div>

          <div className="space-y-4">
            {directories.map(({ name, path, desc }) => (
              <Link
                key={path}
                to={path}
                className="block p-6 bg-cyber-dark border-glow-blue rounded-lg
                         hover:border-glow-red hover:bg-gray-900 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Folder className="w-6 h-6 text-neon-blue group-hover:text-neon-red transition-colors duration-300" />
                    <div>
                      <div className="font-orbitron text-xl text-neon-blue group-hover:text-neon-red transition-colors duration-300">
                        {name}
                      </div>
                      <div className="font-space text-sm text-gray-400 mt-1">
                        {desc}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-neon-red transition-colors duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* System Info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 border border-gray-800 rounded-lg bg-cyber-dark">
            <div className="font-space text-xs text-gray-500 space-y-1">
              <div>System: Portfolio Terminal v2.1</div>
              <div>Status: Online and Ready</div>
              <div>Last Updated: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
