
import { Download, FileText, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    console.log('Downloading resume...');
  };

  return (
    <div className="min-h-screen bg-cyber-black bg-cyber-grid">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-orbitron text-4xl glow-neon-blue mb-4">resume</h1>
            
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-6 py-3 border-glow-blue rounded-lg
                     hover:border-glow-red hover:text-neon-red transition-all duration-300
                     font-space text-neon-blue">
          
            <Download className="w-5 h-5" />
            <span>download.pdf</span>
          </button>
        </div>

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-cyber-dark border-glow-blue rounded-lg p-8">
            {/* Personal Info */}
            <div className="border-b border-gray-800 pb-6 mb-6">
              <h2 className="font-orbitron text-3xl glow-neon-red mb-2">
                John Doe
              </h2>
              <div className="font-space text-lg text-neon-blue mb-4">
                Full Stack Developer & Cybersecurity Specialist
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-space">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Neo Tokyo, Cyber District</span>
                </div>
                <div>john.doe@cybernet.com</div>
                <div>+1 (555) CYBER-01</div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <h3 className="font-orbitron text-xl glow-neon-blue mb-4">
                {'>'} Technical Arsenal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-space">
                <div>
                  <h4 className="text-neon-red mb-2">Languages</h4>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div>JavaScript/TypeScript • Python • Rust</div>
                    <div>Go • C++ • Solidity • SQL</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-neon-red mb-2">Frameworks</h4>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div>React • Vue.js • Node.js • FastAPI</div>
                    <div>Docker • Kubernetes • Blockchain</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-neon-red mb-2">Security</h4>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div>Penetration Testing • Cryptography</div>
                    <div>Network Security • Incident Response</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-neon-red mb-2">Cloud & DevOps</h4>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div>AWS • Google Cloud • Azure</div>
                    <div>CI/CD • Terraform • Monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="font-orbitron text-xl glow-neon-blue mb-4">
                {'>'} Experience Log
              </h3>
              <div className="space-y-6 font-space">
                <div className="border-l-2 border-neon-blue pl-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-neon-red" />
                    <span className="text-sm text-gray-400">2023 - Present</span>
                  </div>
                  <h4 className="text-lg text-neon-red mb-1">Senior Cybersecurity Engineer</h4>
                  <div className="text-neon-blue mb-2">CyberCorp Industries</div>
                  <p className="text-gray-300 text-sm">
                    Lead security architecture for distributed systems, implementing zero-trust 
                    networks and conducting advanced threat hunting operations.
                  </p>
                </div>

                <div className="border-l-2 border-neon-blue pl-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-neon-red" />
                    <span className="text-sm text-gray-400">2021 - 2023</span>
                  </div>
                  <h4 className="text-lg text-neon-red mb-1">Full Stack Developer</h4>
                  <div className="text-neon-blue mb-2">TechNova Solutions</div>
                  <p className="text-gray-300 text-sm">
                    Developed scalable web applications using modern frameworks, 
                    optimized performance, and implemented microservices architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="font-orbitron text-xl glow-neon-blue mb-4">
                {'>'} Education & Certifications
              </h3>
              <div className="space-y-4 font-space">
                <div className="flex items-center space-x-4">
                  <FileText className="w-5 h-5 text-neon-red" />
                  <div>
                    <div className="text-neon-blue">M.S. Computer Science</div>
                    <div className="text-sm text-gray-400">Cyber University • 2021</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FileText className="w-5 h-5 text-neon-red" />
                  <div>
                    <div className="text-neon-blue">CISSP, CEH, OSCP</div>
                    <div className="text-sm text-gray-400">Cybersecurity Certifications</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-800 pt-6 text-center">
              <p className="font-space text-sm text-gray-500">
                Resume compiled on {new Date().toLocaleDateString()} • Version 2.1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
