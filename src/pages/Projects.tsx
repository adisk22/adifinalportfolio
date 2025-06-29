
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Cyberpunk Portfolio',
      description: 'A futuristic portfolio website built with React and Tailwind CSS, featuring neon aesthetics and smooth animations.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive web application for visualizing neural network architectures and training processes in real-time.',
      tech: ['JavaScript', 'D3.js', 'Node.js', 'WebGL'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Blockchain Explorer',
      description: 'A comprehensive blockchain explorer with real-time transaction monitoring and advanced analytics dashboard.',
      tech: ['Vue.js', 'Web3.js', 'Express', 'MongoDB'],
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'AI Code Assistant',
      description: 'VS Code extension that provides intelligent code suggestions and automated refactoring using machine learning.',
      tech: ['TypeScript', 'Python', 'TensorFlow', 'VS Code API'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Quantum Simulator',
      description: 'Web-based quantum computing simulator with visual circuit builder and quantum algorithm implementations.',
      tech: ['React', 'WebAssembly', 'Rust', 'Three.js'],
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Distributed Chat System',
      description: 'Real-time messaging platform with end-to-end encryption and decentralized architecture.',
      tech: ['Socket.io', 'Redis', 'Docker', 'Kubernetes'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                href="#" 
                className="text-neon-blue hover:text-neon-red transition-colors duration-300"
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
