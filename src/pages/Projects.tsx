
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'FootyStock',
      description: 'An interactive web application simulating a real-time stock market for 500+ soccer players',
      tech: ['Next.js', 'Typescript', 'PostgreSQL'],
      githubUrl: 'https://github.com/adisk22/footystock',
      liveUrl: '#',
      image: '/footystock.png'
    },
    {
      title: 'Pokedex',
      description: 'A Pokemon identifier using an AI model to classify and retrieve Pokemon information from images',
      tech: ['Python', 'TensorFlow,', 'OpenCV', 'Pandas', 'Numpy'],
      githubUrl: 'https://github.com/adisk22/Pokedex',
      liveUrl: '#',
      image: 'pikachumeme.jpg'
    },
    {
      title: 'AIStudio',
      description: 'An AI based web application to support university students with everyday and school-related tasks',
      tech: ['TypeScript', 'Next.js', 'PostgreSQL'],
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-black bg-cyber-grid">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-orbitron text-4xl glow-neon-blue mb-4">Projects</h1>
          <p className="font-space text-gray-400 text-lg">
            Explore my latest projects and contributions to the digital realm
          </p>
          <div className="mt-2 font-space text-sm text-neon-red">
            {projects.length} projects found
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-4 border border-gray-800 rounded-lg bg-cyber-dark">
            <p className="font-space text-sm text-gray-400">
              More projects available on{' '}
              <a 
                href="https://github.com/adisk22" 
                className="text-neon-blue hover:text-neon-red transition-colors duration-300"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
