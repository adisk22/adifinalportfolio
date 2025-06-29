
import { Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Cybersecurity Engineer',
      company: 'CyberCorp Industries',
      location: 'Neo Tokyo, Cyber District',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading security architecture for distributed systems and implementing zero-trust networks.',
      achievements: [
        'Reduced security incidents by 95% through proactive threat hunting',
        'Implemented automated incident response system',
        'Led team of 8 security engineers',
        'Designed security framework adopted company-wide'
      ],
      technologies: ['Python', 'Kubernetes', 'AWS', 'Terraform', 'SIEM']
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'TechNova Solutions',
      location: 'Silicon Valley, CA',
      period: '2021 - 2023',
      type: 'Full-time',
      description: 'Developed scalable web applications and implemented microservices architecture.',
      achievements: [
        'Built payment processing system handling $2M+ monthly',
        'Optimized application performance by 60%',
        'Mentored 5 junior developers',
        'Architected migration to cloud infrastructure'
      ],
      technologies: ['React', 'Node.js', 'Docker', 'PostgreSQL', 'Redis']
    },
    {
      id: 3,
      role: 'Security Analyst',
      company: 'SecureNet Dynamics',
      location: 'Austin, TX',
      period: '2019 - 2021',
      type: 'Full-time',
      description: 'Conducted security assessments and vulnerability research for enterprise clients.',
      achievements: [
        'Discovered 12 critical vulnerabilities in major software',
        'Developed custom security testing tools',
        'Conducted 50+ penetration tests',
        'Published 3 security research papers'
      ],
      technologies: ['Burp Suite', 'Metasploit', 'Python', 'Nmap', 'Wireshark']
    },
    {
      id: 4,
      role: 'Junior Developer',
      company: 'StartupX',
      location: 'Remote',
      period: '2018 - 2019',
      type: 'Contract',
      description: 'Built MVP products for various startups and learned modern development practices.',
      achievements: [
        'Delivered 8 MVP products on time and budget',
        'Gained expertise in rapid prototyping',
        'Worked with international remote team',
        'Contributed to open-source projects'
      ],
      technologies: ['JavaScript', 'Vue.js', 'Firebase', 'MongoDB', 'Git']
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-black bg-cyber-grid">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-orbitron text-4xl glow-neon-blue mb-4">/work-experience</h1>
          <p className="font-space text-gray-400 text-lg">
            Professional journey through the digital frontier
          </p>
          <div className="mt-2 font-space text-sm text-neon-red">
            {experiences.length} positions • {new Date().getFullYear() - 2018} years experience
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-red to-neon-blue"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-neon-red rounded-full border-2 border-neon-blue animate-neon-pulse"></div>

                {/* Content card */}
                <div className="ml-12 md:ml-20">
                  <div className="bg-cyber-dark border-glow-blue rounded-lg p-6 hover:border-glow-red transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-orbitron text-xl glow-neon-blue group-hover:glow-neon-red transition-all duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2 font-space text-sm">
                          <span className="text-neon-red">{exp.company}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{exp.type}</span>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 font-space text-sm text-gray-400">
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-space text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-orbitron text-sm glow-neon-blue mb-2">Key Achievements:</h4>
                      <ul className="space-y-1 font-space text-sm">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ArrowRight className="w-3 h-3 text-neon-red mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-orbitron text-sm glow-neon-blue mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs border border-neon-blue text-neon-blue rounded font-space
                                     group-hover:border-neon-red group-hover:text-neon-red transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 bg-cyber-dark border-glow-red rounded-lg p-6">
            <h3 className="font-orbitron text-xl glow-neon-red mb-4">Experience Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-space text-sm">
              <div className="text-center">
                <div className="text-2xl glow-neon-blue font-orbitron mb-1">
                  {new Date().getFullYear() - 2018}+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl glow-neon-blue font-orbitron mb-1">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl glow-neon-blue font-orbitron mb-1">15+</div>
                <div className="text-gray-400">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
