
import { Link, useLocation } from 'react-router-dom';
import { Folder, FileText, User, Briefcase, Code, Pen } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Folder },
    { path: '/projects', label: 'Projects', icon: Code },
    
    { path: '/about-me', label: 'About', icon: User },
    { path: '/work-experience', label: 'Experience', icon: Briefcase },
    { path: '/blackboard', label: 'Blackboard', icon: Pen }
  ];

  return (
    <nav className="bg-cyber-dark border-b border-glow-blue">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto justify-center">
          {navItems.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`
                  flex items-center space-x-2 px-4 py-3 font-space text-sm
                  border-r border-gray-800 transition-all duration-300
                  hover:bg-gray-900 hover:border-glow-blue
                  ${isActive 
                    ? 'bg-gray-900 text-neon-red glow-neon-red border-glow-red' 
                    : 'text-neon-blue hover:glow-neon-blue'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
