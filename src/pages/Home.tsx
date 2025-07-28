
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, FileText, User, Briefcase, Pen } from 'lucide-react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const welcomeText = "This is Adi's Personal Portfolio...";

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

  const sections = [
    { name: 'Projects', path: '/projects', desc: 'View my latest work and code repositories', icon: Code },
    { name: 'About Me', path: '/about-me', desc: 'Learn more about my background and skills', icon: User },
    { name: 'Experience', path: '/work-experience', desc: 'Explore my professional journey', icon: Briefcase },
    { name: 'Blackboard', path: '/Blackboard', desc: 'Draw on a blackboard I made', icon: Pen }
  ];

  return (
    <div className="min-h-screen bg-cyber-black bg-cyber-grid">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl glow-neon-blue mb-6">
            PORTFOLIO
          </h1>
          
          <div className="font-space text-lg md:text-xl mb-8">
            <span className="text-white">{typedText}</span>
            <span className="animate-blink text-neon-blue">|</span>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-2">Explore:</h2>

          </div>

          <div className="space-y-4">
            {sections.map(({ name, path, desc, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="block p-6 bg-cyber-dark border-glow-blue rounded-lg
                         hover:border-glow-red hover:bg-gray-900 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Icon className="w-6 h-6 text-neon-blue group-hover:text-neon-red transition-colors duration-300" />
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
              <div>Last Updated: 7/28/2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
