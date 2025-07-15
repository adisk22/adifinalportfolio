
import { Calendar, MapPin, ExternalLink, ArrowRight, Download } from 'lucide-react';

const WorkExperience = () => {

  const handleDownload = () => {
    const resumeUrl = '/adijsres.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Adi_Karkera_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      id: 1,
      role: 'Cybersecurity Intern',
      company: 'Royal Bank of Canada',
      location: 'Toronto, ON',
      period: 'May 2025 - Present',
      type: 'Internship',
      description: 'End User Services Team!',
      achievements: [
        'Redesigned and enhanced an internal risk dashboard using SQL and Tableau to improve risk visibility and support data-driven decision-making across the security team',
        'Developed scripts and automated tools to monitor application security, streamline compliance checks, and remadiate vulnerabilities across a wide application portfolio',
        'Collaborated with cross-functional teams to identify, document and remediate security risks in accordance with federal and industry security standards',
      ],
      technologies: ['Python', 'SQL', 'Azure', 'Tableau', 'SIEM']
    },
    {
      id: 2,
      role: 'Security Engineer Intern',
      company: 'Hatch',
      location: 'Mississauga, ON',
      period: 'Jan 2025 - Apr 2025',
      type: 'Internship',
      description: 'Blue team',
      achievements: [
        'Engineered a Python-based automation framework to standardize and accelerate the deployment and configuration of safety infrastructure across global Hatch environments, thereby reducing implementation times by 80%',
        'Conducted internal penetration tests and elveraged automated vulnerability scanners, to identify misconfigurations and CVEs, leading to a 12 reduction in attack surface exposure',
        'Monitored and analyzed security logs using SIEM tools to detect suspicious activity, resulting in the early identification and mitigation of a critical vulnerability',
      ],
      technologies: ['Python', 'SQL', 'Angular', 'SIEM', 'Azure']
    },
    {
      id: 3,
      role: 'Mobile App Developer',
      company: 'OurWaveHub',
      location: 'Toronto, ON',
      period: 'June 2022 - Aug 2022',
      type: 'Internship',
      description: 'Building iOS Apps',
      achievements: [
        'Architected a mobile application framework focused on health issue diagnosis using Swift and Xcode',
        'Led project planning and scheduling, coordinating tasks and timelines through workshops and team projects',
        'Risk management and problem-solving during development, ensuring successful delivery of app features',
      ],
      technologies: ['Swift','Xcode']
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-black bg-cyber-grid">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
          <h1 className="font-orbitron text-4xl glow-neon-blue mb-4">Work Experience</h1>
          <p className="font-space text-gray-400 text-lg">
            My Professional Journey
          </p>
          
          <div className="mt-2 font-space text-sm text-neon-red">
            {experiences.length} positions • {new Date().getFullYear() - 2021} years experience
          </div>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-6 py-3 border-glow-blue rounded-lg
                     hover:border-glow-red hover:text-neon-red transition-all duration-300
                     font-space text-neon-blue">
          
            <Download className="w-5 h-5" />
            <span>resume.pdf</span>
          </button>
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

          
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
