
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({ title, description, tech, githubUrl, liveUrl, image }: ProjectCardProps) => {
  return (
    <div className="bg-cyber-dark border-glow-blue rounded-lg p-6 hover:border-glow-red transition-all duration-300 group">
      {image && (
        <div className="mb-4 overflow-hidden rounded border border-gray-800">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <h3 className="font-orbitron text-xl glow-neon-blue mb-2 group-hover:glow-neon-red transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 font-space text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs border border-neon-blue text-neon-blue rounded font-space
                     hover:border-neon-red hover:text-neon-red transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-neon-blue hover:text-neon-red transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            <span className="font-space text-sm">Code</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-neon-blue hover:text-neon-red transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="font-space text-sm">Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
