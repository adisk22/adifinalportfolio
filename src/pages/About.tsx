
import { Code, Shield, Cpu, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Full Stack Development', level: 95, icon: Code, color: 'neon-blue' },
    { name: 'Cybersecurity', level: 90, color: 'neon-red', icon: Shield },
    { name: 'System Architecture', level: 85, color: 'neon-red', icon: Cpu },
    { name: 'Performance Optimization', level: 88, color: 'neon-red', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-cyber-black bg-cyber-grid">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-orbitron text-4xl glow-neon-blue mb-4">About Me</h1>
          <p className="font-space text-gray-400 text-lg">
            Fundamentals
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Profile */}
          <div className="bg-cyber-dark border-glow-blue rounded-lg p-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-4">Profile</h2>
            <div className="space-y-4 font-space text-gray-300">
              <p>
                Hi. I'm a third-year student at the University of Waterloo studying Stats and Comp. Math.
              </p>
              <p>
                I have a lot of previous experience in Cybersecurity, 
                specifically work in Compliance, Risk Management, and Network Device Security.
                However, I'm still trying to figure out what field of tech I enjoy most, so 
                I'm open to working in a variety of positions, including AI, Development, and Research roles.
              </p>
              <p>
                Outside of work and school I enjoy going to the gym and playing sports like Soccer, Volleyball, and Basketball. I've also recently started doing Zetamac, with my highest score being 90.
              </p>
            </div>
          </div>

          

          {/* Interests */}
          <div className="bg-cyber-dark border-glow-blue rounded-lg p-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-4">Interests</h2>
            <div className="grid grid-cols-2 gap-4 font-space text-sm">
              <div className="space-y-2">
                
                <div className="text-neon-blue">• AI/ML Security</div>
                <div className="text-neon-blue">• System Design</div>
                <div className="text-neon-blue">• Algorithm Development</div>
              </div>
              
            </div>
          </div>

          {/* Contact */}
          <div className="bg-cyber-dark border-glow-blue rounded-lg p-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-4">Contact</h2>
            <div className="space-y-3 font-space text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="text-neon-blue">a2karker@uwaterloo.ca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/adi-karkera-231659291/" target="_blank">
                <span className="text-neon-blue">@adikarkera</span>
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">GitHub:</span>
                <a href="https://github.com/adisk22" target="_blank">
                <span className="text-neon-blue">@adisk22</span>
                </a>
              </div>
              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
