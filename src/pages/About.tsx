
import { Code, Shield, Cpu, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Full Stack Development', level: 95, icon: Code, color: 'neon-blue' },
    { name: 'Cybersecurity', level: 90, color: 'neon-red', icon: Shield },
    { name: 'System Architecture', level: 85, color: 'neon-blue', icon: Cpu },
    { name: 'Performance Optimization', level: 88, color: 'neon-red', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-cyber-black bg-cyber-grid">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-orbitron text-4xl glow-neon-blue mb-4">/about-me</h1>
          <p className="font-space text-gray-400 text-lg">
            Personal data file - Access Level: Public
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile */}
          <div className="bg-cyber-dark border-glow-blue rounded-lg p-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-4">Profile.exe</h2>
            <div className="space-y-4 font-space text-gray-300">
              <p>
                Welcome to my digital realm. I'm a cybersecurity specialist and full-stack 
                developer with a passion for building secure, scalable systems that push 
                the boundaries of what's possible.
              </p>
              <p>
                My journey began in the depths of network security, where I learned to think 
                like both the hunter and the hunted. This dual perspective has shaped my 
                approach to development - every line of code is written with security in mind.
              </p>
              <p>
                When I'm not securing the digital frontier, you'll find me experimenting with 
                cutting-edge technologies, contributing to open-source projects, or diving deep 
                into the latest cybersecurity research.
              </p>
            </div>
          </div>

          {/* Skills Radar */}
          <div className="bg-cyber-dark border-glow-blue rounded-lg p-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-6">Skill Matrix</h2>
            <div className="space-y-6">
              {skills.map(({ name, level, icon: Icon, color }) => (
                <div key={name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon className={`w-5 h-5 text-${color}`} />
                      <span className="font-space text-sm text-gray-300">{name}</span>
                    </div>
                    <span className={`font-space text-sm text-${color}`}>{level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`bg-${color} rounded-full h-2 transition-all duration-1000 glow-${color}`}
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-cyber-dark border-glow-blue rounded-lg p-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-4">Interests.log</h2>
            <div className="grid grid-cols-2 gap-4 font-space text-sm">
              <div className="space-y-2">
                <div className="text-neon-blue">• Quantum Computing</div>
                <div className="text-neon-blue">• AI/ML Security</div>
                <div className="text-neon-blue">• Blockchain Tech</div>
                <div className="text-neon-blue">• IoT Security</div>
              </div>
              <div className="space-y-2">
                <div className="text-neon-red">• Ethical Hacking</div>
                <div className="text-neon-red">• Bug Bounty Hunting</div>
                <div className="text-neon-red">• CTF Competitions</div>
                <div className="text-neon-red">• Open Source</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-cyber-dark border-glow-blue rounded-lg p-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-4">Contact.init()</h2>
            <div className="space-y-3 font-space text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="text-neon-blue">john.doe@cybernet.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">LinkedIn:</span>
                <span className="text-neon-blue">@johndoe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">GitHub:</span>
                <span className="text-neon-blue">@johndoe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400 animate-neon-pulse">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-cyber-dark border-glow-red rounded-lg p-6">
            <h2 className="font-orbitron text-2xl glow-neon-red mb-4">Philosophy.txt</h2>
            <blockquote className="font-space text-lg text-gray-300 italic border-l-4 border-neon-blue pl-4">
              "In the digital realm, security isn't just about building walls - it's about 
              understanding the landscape, anticipating threats, and creating systems that 
              are both resilient and adaptive. Every vulnerability is a lesson, every breach 
              is a chance to build something stronger."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
