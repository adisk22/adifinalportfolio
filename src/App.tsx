
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CyberCursor from "./components/CyberCursor";
import TerminalHeader from "./components/TerminalHeader";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import WorkExperience from "./pages/WorkExperience";
import NotFound from "./pages/NotFound";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  const getPagePath = () => {
    switch (location.pathname) {
      case '/': return '$ ls -la /root';
      case '/projects': return '$ cd /projects && ls';
      case '/resume': return '$ cat /resume/resume.pdf';
      case '/about-me': return '$ whoami';
      case '/work-experience': return '$ history | grep work';
      default: return '$ 404: command not found';
    }
  };

  return (
    <div className="min-h-screen bg-cyber-black text-neon-blue">
      <CyberCursor />
      <TerminalHeader currentPath={getPagePath()} />
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
